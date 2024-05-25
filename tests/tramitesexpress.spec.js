const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');
const { MailSlurp } = require('mailslurp-client');
const { TramitesExpressPage } = require('../pages/tramitesexpresspage');
const axios = require('axios');
const globalVars = require('../pages/globalvariables');

const apiKey = process.env.API_KEY;
const mailslurp = new MailSlurp({ apiKey });



async function extraerIdDelContrato(page) {
    try {
        // Asegúrate de que el texto está presente en el elemento que abarca todo el contenido de la página
        await expect(page.locator('#root')).toContainText('https://apifv.s3.us-west-2.amazonaws.com/fvl_');

        // Obtiene todo el texto del elemento #root (o ajusta según sea necesario para ser más específico)
        const textoCompleto = await page.locator('#root').textContent();

        // Utiliza una expresión regular para buscar la URL y extraer el ID del documento
        const regex = /fvl_([a-f0-9\-]+)_document\.pdf/;
        const match = regex.exec(textoCompleto);
        
        if (match && match[1]) {
            console.log(`ID del contrato extraído: ${match[1]}`);
            return match[1]; // Retorna el ID extraído
        } else {
            throw new Error("No se pudo extraer el ID del contrato del texto.");
        }
    } catch (error) {
        console.error(`Error al extraer el ID del contrato: ${error}`);
        return null; // Retorna null en caso de error
    }
}

async function realizarLogin() {
    const url = 'https://dev.firmavirtual.com/logindata';
    const body = {
        login: "pruebaqa3@yopmail.com",
        password: "123456Ee#"
    };

    try {
        const response = await axios.post(url, body);
        if (response.data && response.data.message && response.data.message.Authorization) {
            console.log('Token Bearer obtenido:', response.data.message.Authorization);
            return response.data.message.Authorization;  // Retorna solo el token Bearer
        } else {
            throw new Error("No se pudo obtener el token Bearer de la respuesta.");
        }
    } catch (error) {
        console.error('Error en la solicitud POST:', error.response ? error.response.data : error.message);
        return null;
    }
}


async function obtenerDetalleDelContrato(contractId, token) {
    const baseUrl = process.env.URLapi; // URL base como "https://firmavirtualdev.netlify.app/"
    const url = `https://dev.firmavirtual.com/api/v1/contract/detail/${contractId}`;

    console.log(url);

    try {
        const response = await axios.get(url, {
            headers: { 'Authorization': token }
        });
        return response.data;
    } catch (error) {
        console.error("Error al obtener detalles del contrato:", error);
        return null;
    }
}

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

    test.describe('Agregar todos los roles', () => {

    test('Verificar Pagador', async ({ page }) => {
        const loginpage = new LoginPage(page);
        const tramitesexpress = new TramitesExpressPage(page);

        await loginpage.goto();
        await loginpage.checkComponents(); // Esperar que se complete este método
        // Realizar el login utilizando los datos del ambiente correcto.
        await loginpage.loginUser(); // Los datos se manejan internamente en la clase   
        const { id: pagadorId } = await tramitesexpress.Agregarparticipantepagador();
        await tramitesexpress.Agregarparticipantefirmante(1);
    //    await tramitesexpress.Agregarparticipantefirmante(2)
        await tramitesexpress.AgregarparticipanteCopia();
        // busca un elemento input y lo adjunta
        await page.waitForSelector('input[type="file"]', { state: 'attached' });
        // Sube el archivo usando el input de archivo real
        await page.setInputFiles('input[type="file"]', 'tests/documents/export.pdf');
        await page.waitForTimeout(3000);
        
        await page.locator('#pdf_renderer').click({
            position: {
              x: 57,
              y: 553
            }
          });   

          
        await page.check('input.PrivateSwitchBase-input[name="selectedSign"]');

        await page.getByRole('button', { name: 'Agregar' }).click();

        // await page.locator('#pdf_renderer').click({
        //     position: {
        //       x: 57,
        //       y: 556
        //     }
        //   });   

        // const selector = 'input.PrivateSwitchBase-input[name="selectedSign"]';
        // await page.locator(selector).nth(1).click(); // nth(1) selecciona el segundo elemento

        // await page.getByRole('button', { name: 'Agregar' }).click()
        await page.getByRole('button', { name: 'Guardar' }).click();
  //      await expect(page.locator('div').filter({ hasText: /^Creando Trámite, por favor espere$/ })).toBeVisible();
  //      await tramitesexpress.VerificarContrato(pagadorId);
        const result = await tramitesexpress.VerificarContrato(pagadorId);

    if (result && result.paymentLink) {
        const paymentCheckResult = await tramitesexpress.verificarCorreoConPago(pagadorId, result.paymentLink);
        if (paymentCheckResult === 'found') {
            console.log('Test passed: El enlace de pago fue encontrado en el correo.');
            return; // Termina el test con éxito
        }
    }

    throw new Error('Test failed: No se encontró el enlace de pago en el correo.');
    
            
    });


    test('tiempo de espera', async ({ page }) => {
        const loginpage = new LoginPage(page);

        await loginpage.goto();
        await page.waitForTimeout(20000)
});


    test('Verificar Firmante', async ({ page }) => {
        const loginpage = new LoginPage(page);
        const tramitesexpress = new TramitesExpressPage(page);

        await loginpage.goto();
        await page.waitForTimeout(10000)
        await loginpage.checkComponents();
        await loginpage.loginUser();

       
            // Obtener el último correo e ID
    //        const { email, id: mailboxId } = await tramitesexpress.getLastMailboxInfo();
        const { email, idfirmante: mailboxId } = await tramitesexpress.getMailboxInfobynumfirmante(1);
            console.log('Mailbox ID:', mailboxId);
            console.log('Email Address:', email);
    
            const details = await tramitesexpress.VerificarFirmanteStatus();
            if (email && mailboxId) {
                console.log('status details:', details);
                
                // Esperar por el último correo recibido
                const latestEmail = await mailslurp.waitForLatestEmail(mailboxId, 30000, true);
                if (latestEmail) {
                    console.log('Último correo recibido:', latestEmail.subject); // Puedes cambiar a .body si necesitas verificar el contenido
                } else {
                    throw new Error('No se recibió ningún correo nuevo.');
                }
            } else {
                throw new Error('Información necesaria para la verificación no disponible.');
            }
    });

    // test('tiempo de espera', async ({ page }) => {
    //     const loginpage = new LoginPage(page);

    //     await loginpage.goto();
    //     await page.waitForTimeout(20000)
    // });
});