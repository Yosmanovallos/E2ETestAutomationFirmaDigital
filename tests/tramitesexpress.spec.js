const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');
const { MailSlurp } = require('mailslurp-client');
const { TramitesExpressPage } = require('../pages/tramitesexpresspage');
const { TramitesExpressFunctions } = require('../pages/tramiteexpressfunctions');

const apiKey = process.env.API_KEY;
const mailslurp = new MailSlurp({ apiKey });

    // test('Tramite Express verify', async ({ page }) => {
    //     const loginpage = new LoginPage(page);
    //     const tramitesexpress = new TramitesExpressPage(page);
    //     await loginpage.goto();
    //     await loginpage.checkComponents(); // Esperar que se complete este método
    //     // Realizar el login utilizando los datos del ambiente correcto.
    //     await loginpage.loginUser(); // Los datos se manejan internamente en la clase
    //     await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    //     await tramitesexpress.tramitesExressVerify();
    // });

    // test.describe('Agregar todos los roles', () => {

    //     test('Verificar Pagador', async ({ page }) => {
    //         const loginpage = new LoginPage(page);
    //         const tramitesexpress = new TramitesExpressPage(page);
    
    //         await loginpage.goto();
    //         await loginpage.checkComponents();
    //         await loginpage.loginUser();
    //         const { id: pagadorId } = await tramitesexpress.Agregarparticipantepagador();
    //         await tramitesexpress.Agregarparticipantefirmante(1);
    //         // await tramitesexpress.Agregarparticipantefirmante(2);
    //         await tramitesexpress.AgregarparticipanteCopia();
            
    //         // Busca un elemento input y lo adjunta
    //         await page.waitForSelector('input[type="file"]', { state: 'attached' });
    //         // Sube el archivo usando el input de archivo real
    //         await page.setInputFiles('input[type="file"]', 'tests/documents/export.pdf');
    //         await page.waitForTimeout(3000);
    
    //         await page.locator('#pdf_renderer').click({
    //             position: {
    //                 x: 57,
    //                 y: 553
    //             }
    //         });
    
    //         await page.check('input.PrivateSwitchBase-input[name="selectedSign"]');
    //         await page.getByRole('button', { name: 'Agregar' }).click();
    //         await page.getByRole('button', { name: 'Guardar' }).click();
    
    //         const result = await tramitesexpress.VerificarContrato(pagadorId);
    
    //         if (result && result.paymentLink) {
    //             const paymentCheckResult = await tramitesexpress.verificarCorreoConPago(pagadorId, result.paymentLink);
    //             if (paymentCheckResult === 'found') {
    //                 console.log('Test passed: El enlace de pago fue encontrado en el correo.');
    //                 return; // Termina el test con éxito
    //             }
    //         }
    
    //         throw new Error('Test failed: No se encontró el enlace de pago en el correo.');
    //     });
    
    //     test('Tiempo de espera', async ({ page }) => {
    //         const loginpage = new LoginPage(page);
    
    //         await loginpage.goto();
    //         await page.waitForTimeout(20000);
    //     });
    
    //     test('Verificar Firmante', async ({ page }) => {
    //         const loginpage = new LoginPage(page);
    //         const tramitesexpress = new TramitesExpressPage(page);
    
    //         await loginpage.goto();
    //         await page.waitForTimeout(10000);
    //         await loginpage.checkComponents();
    //         await loginpage.loginUser();
    
    //         // Obtener el último correo e ID
    //         const { email, idfirmante: mailboxId } = await tramitesexpress.getMailboxInfobynumfirmante(1);
    //         console.log('Mailbox ID:', mailboxId);
    //         console.log('Email Address:', email);
    
    //         const details = await tramitesexpress.VerificarFirmanteStatus();
    //         if (email && mailboxId) {
    //             console.log('status details:', details);
    
    //             // Esperar por el último correo recibido
    //             const latestEmail = await mailslurp.waitForLatestEmail(mailboxId, 30000, true);
    //             if (latestEmail) {
    //                 console.log('Último correo recibido:', latestEmail.subject);
    //             } else {
    //                 throw new Error('No se recibió ningún correo nuevo.');
    //             }
    //         } else {
    //             throw new Error('Información necesaria para la verificación no disponible.');
    //         }
    //     });
        
    
    // });
    
    test('Crear y mostrar correos electrónicos aleatorios', async ({ page }) => {
        // Crear una instancia de MailSlurp
        const mailslurp = new MailSlurp({ apiKey: process.env.API_KEY });
    
        // Definir la función para crear correos electrónicos aleatorios
        async function createRandomEmailsForRoles() {
            const emails = {
                firmante: [],
                pagador: [],
                copia: []
            };
    
            for (let i = 0; i < 5; i++) {
                const [firmanteInbox, pagadorInbox, copiaInbox] = await Promise.all([
                    mailslurp.createInbox(),
                    mailslurp.createInbox(),
                    mailslurp.createInbox()
                ]);
    
                emails.firmante.push({ email: firmanteInbox.emailAddress, id: firmanteInbox.id });
                emails.pagador.push({ email: pagadorInbox.emailAddress, id: pagadorInbox.id });
                emails.copia.push({ email: copiaInbox.emailAddress, id: copiaInbox.id });
            }
    
            console.log('Firmante Emails:', emails.firmante);
            console.log('Pagador Emails:', emails.pagador);
            console.log('Copia Emails:', emails.copia);
    
            return emails;
        }
    
        // Crear una instancia de la página de login y navegar a ella
        const loginpage = new LoginPage(page);
        await loginpage.goto();
    
        // Llamar a la función para crear correos electrónicos aleatorios
        const emails = await createRandomEmailsForRoles();
    
        // Verificar que se crearon los correos electrónicos
        console.log('Correos generados:', emails);
        expect(emails.firmante.length).toBe(5);
        expect(emails.pagador.length).toBe(5);
        expect(emails.copia.length).toBe(5);
    });

    test.describe('Tramite express - Orden de arriendo', () => {

        test('Tramites express sin aprovacion - Todos los participantes', async ({ page }) => {
            const loginpage = new LoginPage(page);
            const tramitesexpressfunctions = new TramitesExpressFunctions(page);    
            await loginpage.goto();
            await loginpage.checkComponents();
            await loginpage.loginUser();
            const { id: pagadorId } = await tramitesexpressfunctions.Agregarparticipantepagador();
            await tramitesexpressfunctions.Agregarparticipantefirmante();
            await tramitesexpressfunctions.AgregarparticipanteCopia();
            await tramitesexpressfunctions.SubirDocumento();
            await tramitesexpressfunctions.FirmarDocumento();
            const result = await tramitesexpressfunctions.VerificarContrato(pagadorId);
            if (result && result.paymentLink) {
                const paymentCheckResult = await tramitesexpressfunctions.verificarCorreoConPago(result.paymentLink);
                if (paymentCheckResult === 'found') {
                    console.log('Test passed: El enlace de pago fue encontrado en el correo.');
                    await page.goto(result.paymentLink);
                    await tramitesexpressfunctions.PagoAutomatizado();
                    await loginpage.goto();
                    await tramitesexpressfunctions.OpenTramiteExpress();
                    await tramitesexpressfunctions.OpenGestiondeDocumentos();
                    await tramitesexpressfunctions.VerificarFirmante();
                }
            }
        });

        test('Tramites Express Protocolizacion notarial - Todos los participantes', async ({ page }) => {
            const loginpage = new LoginPage(page);
            const tramitesexpressfunctions = new TramitesExpressFunctions(page);    
            await loginpage.goto();
            await loginpage.checkComponents();
            await loginpage.loginUser();
            await page.locator('#mui-10').click();
            const { id: pagadorId } = await tramitesexpressfunctions.Agregarparticipantepagadortwo();
            await tramitesexpressfunctions.Agregarparticipantefirmante();
            await tramitesexpressfunctions.AgregarparticipanteCopia();
            await tramitesexpressfunctions.SubirDocumento();
            await tramitesexpressfunctions.FirmarDocumento();
            const result = await tramitesexpressfunctions.VerificarContratotwo(pagadorId);
            if (result && result.paymentLink) {
                const paymentCheckResult = await tramitesexpressfunctions.verificarCorreoConPago(result.paymentLink);
                if (paymentCheckResult === 'found') {
                    console.log('Test passed: El enlace de pago fue encontrado en el correo.');
                    await page.goto(result.paymentLink);
                    await tramitesexpressfunctions.PagoAutomatizado();
                    await loginpage.goto();
                    await tramitesexpressfunctions.OpenTramiteExpress();
                    await tramitesexpressfunctions.OpenGestiondeDocumentos();
                    await tramitesexpressfunctions.VerificarFirmante();
                }
            }
        });

        test('Tramites Express Certificacion notarial - Todos los participantes', async ({ page }) => {
            const loginpage = new LoginPage(page);
            const tramitesexpressfunctions = new TramitesExpressFunctions(page);    
            await loginpage.goto();
            await loginpage.checkComponents();
            await loginpage.loginUser();
            await page.locator('#mui-11').click();
            const { id: pagadorId } = await tramitesexpressfunctions.Agregarparticipantepagadortwo();
            await tramitesexpressfunctions.Agregarparticipantefirmante();
            await tramitesexpressfunctions.AgregarparticipanteCopia();
            await tramitesexpressfunctions.SubirDocumento();
            await tramitesexpressfunctions.FirmarDocumento();
            const result = await tramitesexpressfunctions.VerificarContratotwo(pagadorId);
            if (result && result.paymentLink) {
                const paymentCheckResult = await tramitesexpressfunctions.verificarCorreoConPago(result.paymentLink);
                if (paymentCheckResult === 'found') {
                    console.log('Test passed: El enlace de pago fue encontrado en el correo.');
                    await page.goto(result.paymentLink);
                    await tramitesexpressfunctions.PagoAutomatizado();
                    await loginpage.goto();
                    await tramitesexpressfunctions.OpenTramiteExpress();
                    await tramitesexpressfunctions.OpenGestiondeDocumentos();
                    await tramitesexpressfunctions.VerificarFirmante();
                }
            }
        });

        test('Tramites Express Buena Seguridad - Todos los participantes', async ({ page }) => {
            const loginpage = new LoginPage(page);
            const tramitesexpressfunctions = new TramitesExpressFunctions(page);    
            await loginpage.goto();
            await loginpage.checkComponents();
            await loginpage.loginUser();
            await page.locator('#mui-12').click();
            const { id: pagadorId } = await tramitesexpressfunctions.Agregarparticipantepagadortwo();
            await tramitesexpressfunctions.Agregarparticipantefirmante();
            await tramitesexpressfunctions.AgregarparticipanteCopia();
            await tramitesexpressfunctions.SubirDocumento();
            await tramitesexpressfunctions.FirmarDocumento();
            const result = await tramitesexpressfunctions.VerificarContratotwo(pagadorId);
            if (result && result.paymentLink) {
                const paymentCheckResult = await tramitesexpressfunctions.verificarCorreoConPago(result.paymentLink);
                if (paymentCheckResult === 'found') {
                    console.log('Test passed: El enlace de pago fue encontrado en el correo.');
                    await page.goto(result.paymentLink);
                    await tramitesexpressfunctions.PagoAutomatizado();
                    await loginpage.goto();
                    await tramitesexpressfunctions.OpenTramiteExpress();
                    await tramitesexpressfunctions.OpenGestiondeDocumentos();
                    await tramitesexpressfunctions.VerificarFirmante();
                }
            }
        });
    });