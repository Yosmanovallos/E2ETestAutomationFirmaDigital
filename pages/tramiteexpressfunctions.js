const { expect } = require('@playwright/test')
const qaTestData = require('../test-data/qa/qa.json');
const prodTestData = require('../test-data/prod/prod.json');
const { MailSlurp } = require('mailslurp-client');
const axios = require('axios');
const sqlite3 = require('sqlite3').verbose();

const apiKey = process.env.API_KEY;
const mailslurp = new MailSlurp({ apiKey });

const predefinedEmails = {
    firmante: [
        { email: 'de208aca-8a46-4c72-9d99-1c74d932ef77@mailslurp.net', id: 'de208aca-8a46-4c72-9d99-1c74d932ef77' }
    ],
    pagador: [
        { email: 'b58e0732-936c-44ee-b71e-459e150f7ca8@mailslurp.net', id: 'b58e0732-936c-44ee-b71e-459e150f7ca8' }
    ],
    copia: [
        { email: 'baa5341f-4e95-41a9-8374-6e6605f7aa98@mailslurp.net', id: 'baa5341f-4e95-41a9-8374-6e6605f7aa98' }
    ]
};

// create class
exports.TramitesExpressFunctions = class TramitesExpressFunctions {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        // Init page object
        this.page = page;
        this.mailslurp = new MailSlurp({ apiKey: process.env.API_KEY });
        // Elements
        this.closebuttonhome = page.getByRole('dialog').getByTestId('CloseIcon')
        this.tramitesexpress = page.locator('button').filter({ hasText: 'Trámites express' });

        //  crear tramite locators
        this.creartramitesexpress = page.getByRole('link', { name: 'Crear trámite express' });
        this.muigrid = page.locator('.MuiGrid-root > div > div').first();
        this.bienvenidoafirmavirtual = page.getByText('Bienvenido a FirmaVirtual expressElige qué tipo de firma necesitasAgrega');
        this.certificaciontext = page.getByText('Certificación');
        this.protocolizacion = page.getByText('Protocolización');
        this.firmaelectronicasinnotaria = page.getByText('Firma electrónica - Sin Notar');
        this.agregarparticipantebutton = page.getByRole('button', { name: 'Agregar participante' }).first();
        this.agregarparticipantelabel = page.getByLabel('Agregar participante');
        this.adjuntardocumentosheading = page.getByRole('heading', { name: 'Adjuntar documentos' });
        this.subirarchivobutton = page.getByRole('button', { name: 'Subir archivo' });
        this.unirarchivosbutton = page.getByRole('button', { name: 'Unir archivos' });
        this.Limpiarbutton = page.getByRole('button', { name: 'Limpiar' });
        this.guardarbutton = page.getByRole('button', { name: 'Guardar' });
        this.quetramitenecesitas = page.getByPlaceholder('¿Qué trámite necesitas');
        this.ordendearriendooption = page.getByRole('option', { name: 'Orden de arriendo' })

        // Gestionar documentos locators
        this.gestiondedocumentos = page.getByRole('link', { name: 'Gestión de documentos' });
        this.tramitesenrevisión = page.locator('div').filter({ hasText: /^Trámites en revisión$/ }).first();
        this.tramitesporfirmar = page.locator('div').filter({ hasText: /^Trámites por firmar$/ }).first();
        this.notaria = page.locator('div').filter({ hasText: /^Notaría$/ }).first();
        this.entrega = page.locator('div').filter({ hasText: /^Entrega$/ }).first();
        this.titletramitesexpress = page.locator('p').filter({ hasText: 'Trámites express' });
        this.aquipodrasvisualizartodos = page.getByText('Aqui podrás visualizar todos');
        this.filtrosbutton = page.getByRole('button', { name: 'Filtros' });
        this.actualizarButton = page.getByRole('button', { name: 'Actualizar' });
        this.creartramitebutton = page.getByRole('button', { name: 'Crear trámite' });
        this.accionescolumn= page.getByRole('columnheader', { name: 'Acciones' });
        this.idcolumn =page.getByRole('columnheader', { name: 'ID' });
        this.tramitecolumn = page.getByRole('columnheader', { name: 'Trámite' });
        this.fechacolumn = page.getByRole('columnheader', { name: 'Fecha' });

        // partipantes modal locators
        this.dialog = page.getByRole('dialog');
        this.nombrecompletoheading = page.getByRole('heading', { name: 'Nombre completo' });
        this.nombrecompletoplaceholder = page.getByPlaceholder('Nombre completo');
        this.tipodeidentificacionlabel = page.getByRole('heading', { name: 'Selecciona el tipo de' });

        // si se escoge RUT
        this.rutleabel = page.getByLabel('Rut');
        this.rutheading = page.getByRole('heading', { name: 'RUT' });
        this.rutdocument = page.getByPlaceholder('Ejemplo: 11111111-');

        // si se escoge pasaporte
        this.pasaportelabel = page.getByLabel('Pasaporte');
        this.pasaporteheading = page.getByRole('heading', { name: 'Pasaporte' });
        this.pasaportedocument = page.getByPlaceholder('Ejemplo: AA123456');

        // normal process
        this.correoelectronicoheader = page.getByRole('heading', { name: 'Correo electrónico' });
        this.correoelectronicoplaceholder = page.getByPlaceholder('tucorreo@mail.com');
        this.whatsAppnumberheading = page.getByRole('heading', { name: 'Número de teléfono (WhatsApp)' });
        this.whatsAppnumberplaceholder = page.getByPlaceholder('+');
        this.rolpagador = page.getByLabel('', { exact: true }).first();
        this.rolfirmante = page.getByLabel('', { exact: true }).nth(1);
        this.rolpagadorfirmante = page.getByLabel('', { exact: true }).nth(2);
        this.rolcopia = page.getByLabel('', { exact: true }).nth(3);
        this.ordendefirma = page.locator('#mui-66');
        this.agregarparticipantemodal = page.getByRole('button', { name: 'Agregar participante' })
        this.closemodalpartipantes = page.getByRole('dialog').getByTestId('CloseIcon')
        this.cienporcientocheck = page.getByLabel('100%')
        this.cincuentaporcientocheck = page.getByLabel('50%')
        this.testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;

    }

    async OpenTramiteExpress() {
        await this.tramitesexpress.click();
    }

    async OpenGestiondeDocumentos() {
        await this.gestiondedocumentos.click();
    }

    
    generateRut() {
        let rut = '';
        for (let i = 0; i < 8; i++) {
            rut += Math.floor(Math.random() * 10); // Generar un número de 8 dígitos
        }
        return rut + '-' + this.calculateDV(rut);
    }

    calculateDV(T) {
        let M = 0, S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'K';
    }

    generateChileanMobileNumber() {
        const prefix = '9';  // Prefix for mobile phones in Chile
        let number = '56' + prefix;  // Start with the country code '56' for Chile and the mobile prefix '9'
        for (let i = 0; i < 8; i++) {
            number += Math.floor(Math.random() * 10);
        }
        return '+' + number;  // Retorna el número con el código de país y todo pegado
    }

    async  extraerIdDelContrato(page) {
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

    async realizarLogin() {
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

    async  obtenerDetalleDelContrato(contractId, token) {
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

        // Función modificada verificarCorreoConPago
        async verificarCorreoConPago(paymentLink) {
            const { id } = predefinedEmails.pagador[0];
            const latestEmail = await this.mailslurp.waitForLatestEmail(id, 20000, true);
            if (latestEmail.body.includes(paymentLink)) {
                console.log('El enlace de pago fue encontrado en el correo.');
                return 'found';
            } else {
                throw new Error('El enlace de pago no fue encontrado en el correo.');
            }
        }

    async getMailboxInfobynumfirmante(numfirmante) {

        return new Promise((resolve, reject) => {
            const query = "SELECT email, idfirmante FROM mailbox WHERE id = ?";
        
            this.sqlitedb.get(query, [numfirmante], (err, row) => {
                if (err) {
                    console.error(err.message);
                    reject(err);
                } else if (row) {
                    resolve(row);
                } else {
                    reject(new Error("No records found."));
                }
            });
        });

    }


    async Agregarparticipantepagador() {
        const { email, id } = predefinedEmails.pagador[0];
        console.log(`Usando correo predefinido: ${email}, ID del buzón: ${id}`);
        
        await this.OpenTramiteExpress();
        await this.creartramitesexpress.click();
        await this.quetramitenecesitas.click();
        await this.ordendearriendooption.click();
        await this.certificaciontext.check();
        await this.agregarparticipantebutton.click();
        await this.nombrecompletoplaceholder.click();
        await this.nombrecompletoplaceholder.fill('Pagador Automatizado');
        await this.rutleabel.check();

        const validRutPartipante = this.generateRut();
        console.log(`RUT generado: ${validRutPartipante}`);

        await this.rutdocument.click();
        await this.rutdocument.fill(validRutPartipante);
        await this.correoelectronicoplaceholder.click();
        await this.correoelectronicoplaceholder.fill(email);

        const mobileNumber = this.generateChileanMobileNumber();
        console.log(`Número móvil generado: ${mobileNumber}`);

        await this.whatsAppnumberplaceholder.click();
        await this.whatsAppnumberplaceholder.fill(mobileNumber);

        await this.rolpagador.click();
        await this.cienporcientocheck.check();
        await this.agregarparticipantebutton.click();
        await this.agregarparticipantebutton.click();
        await this.page.waitForTimeout(2000);

        return { email, id };
    }
    
    async Agregarparticipantefirmante() {
        const { email, id } = predefinedEmails.firmante[0];
        console.log(`Usando correo predefinido: ${email}, ID del buzón: ${id}`);

        await this.agregarparticipantebutton.click();
        await this.nombrecompletoplaceholder.click();
        await this.nombrecompletoplaceholder.fill('Firmante Automatizado');
        await this.rutleabel.check();

        const validRutPartipante = this.generateRut();
        console.log(`RUT generado: ${validRutPartipante}`);

        await this.rutdocument.click();
        await this.rutdocument.fill(validRutPartipante);
        await this.correoelectronicoplaceholder.click();
        await this.correoelectronicoplaceholder.fill(email);

        const mobileNumber = this.generateChileanMobileNumber();
        console.log(`Número móvil generado: ${mobileNumber}`);

        await this.whatsAppnumberplaceholder.click();
        await this.whatsAppnumberplaceholder.fill(mobileNumber);

        await this.rolfirmante.click();
        await this.agregarparticipantebutton.click();
        await this.agregarparticipantebutton.click();
        await this.page.waitForTimeout(2000);

        return { email, id };
    }

    async AgregarparticipanteCopia() {
        const { email, id } = predefinedEmails.copia[0];
        console.log(`Usando correo predefinido: ${email}, ID del buzón: ${id}`);

        await this.agregarparticipantebutton.click();
        await this.nombrecompletoplaceholder.click();
        await this.nombrecompletoplaceholder.fill('Copia Automatizada');
        await this.rutleabel.check();

        const validRutPartipante = this.generateRut();
        console.log(`RUT generado: ${validRutPartipante}`);

        await this.rutdocument.click();
        await this.rutdocument.fill(validRutPartipante);
        await this.correoelectronicoplaceholder.click();
        await this.correoelectronicoplaceholder.fill(email);

        const mobileNumber = this.generateChileanMobileNumber();
        console.log(`Número móvil generado: ${mobileNumber}`);

        await this.whatsAppnumberplaceholder.click();
        await this.whatsAppnumberplaceholder.fill(mobileNumber);

        await this.rolcopia.click();
        await this.agregarparticipantebutton.click();
        await this.agregarparticipantebutton.click();
        await this.page.waitForTimeout(2000);

        return { email, id };
    }


    async createRandomEmailsForRoles() {
        const emails = {
            firmante: [],
            pagador: [],
            copia: []
        };

        for (let i = 0; i < 5; i++) {
            const firmanteInbox = await this.mailslurp.createInbox();
            const pagadorInbox = await this.mailslurp.createInbox();
            const copiaInbox = await this.mailslurp.createInbox();

            emails.firmante.push({ email: firmanteInbox.emailAddress, id: firmanteInbox.id });
            emails.pagador.push({ email: pagadorInbox.emailAddress, id: pagadorInbox.id });
            emails.copia.push({ email: copiaInbox.emailAddress, id: copiaInbox.id });
        }

        console.log('Firmante Emails:', emails.firmante);
        console.log('Pagador Emails:', emails.pagador);
        console.log('Copia Emails:', emails.copia);

        return emails;
    }


    async VerificarContrato(pagadorId) {
        await this.OpenGestiondeDocumentos();
        await this.page.waitForSelector('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.css-1j7qk7u', { state: 'visible' });

        await this.page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.css-1j7qk7u').first().click();

        const bearerToken = await this.realizarLogin();
        if (!bearerToken) {
            console.log('Login fallido, token Bearer no recibido.');
            return;
        }
        console.log('Login exitoso, token Bearer recibido.');

        const contractId = await this.extraerIdDelContrato(this.page);
        if (!contractId) {
            console.log("No se pudo extraer el ID del contrato.");
            return;
        }
        console.log(`ID del contrato extraído: ${contractId}`);

        const detallesDelContrato = await this.obtenerDetalleDelContrato(contractId, bearerToken);
        let paymentLink;
        if (detallesDelContrato && detallesDelContrato.message && detallesDelContrato.message.firmantes) {
            console.log('Detalles del contrato:', JSON.stringify(detallesDelContrato, null, 2));
            detallesDelContrato.message.firmantes.forEach(firmante => {
                if (parseFloat(firmante.portion) > 0 && firmante.token_payment) {
                    console.log(`Validación exitosa para el rol: ${firmante.full_name}`);
                    if (firmante.full_name === "Pagador Automatizado") {
                        paymentLink = `https://dev.firmavirtual.com/api/v2/webpay/cl/express/${firmante.token_payment}/${contractId}`;
                        console.log(`Enlace de pago para ${firmante.full_name}: ${paymentLink}`);
                    }
                } else {
                    console.error(`Falla en la validación para el rol: ${firmante.full_name}, Portion: ${firmante.portion}, Token Payment: ${firmante.token_payment}`);
                }
            });
        } else {
            console.log('Error al obtener detalles del contrato o no hay firmantes disponibles.');
        }
        return { paymentLink };
    }

    async SubirDocumento() {
        // Busca un elemento input y lo adjunta
        await this.page.waitForSelector('input[type="file"]', { state: 'attached' });
        // Sube el archivo usando el input de archivo real
        await this.page.setInputFiles('input[type="file"]', 'tests/documents/export.pdf');
        await this.page.waitForTimeout(2000);
    }

    async FirmarDocumento() {

        await this.page.locator('#pdf_renderer').click({
            position: {
                x: 57,
                y: 553
            }
        });

        await this.page.check('input.PrivateSwitchBase-input[name="selectedSign"]');
        await this.page.getByRole('button', { name: 'Agregar' }).click();
        await this.page.getByRole('button', { name: 'Guardar' }).click();
    }


    async PagoAutomatizado() {

        await this.page.getByRole('button', { name: 'Débito' }).click();
        await this.page.getByRole('button', { name: 'Banco Selecciona tu banco' }).click();
        await this.page.getByRole('button', { name: 'TEST COMMERCE BANK' }).click();
        await this.page.getByPlaceholder('XXXX XXXX XXXX XXXX').click();
        await this.page.getByPlaceholder('XXXX XXXX XXXX XXXX').fill('4000001520000001');
        await this.page.getByRole('button', { name: 'Pagar $' }).click();
        await this.page.locator('#rutClient').click();
        await this.page.locator('#rutClient').fill('11111111-1');
        await this.page.locator('#passwordClient').click();
        await this.page.locator('#passwordClient').fill('123');
        await this.page.getByRole('button', { name: 'Aceptar' }).click();
        await this.page.getByRole('button', { name: 'Continuar' }).click();
        // Esperar a que el elemento con el texto "Pago aprobado" sea visible
        await this.page.waitForSelector('h1 span', { state: 'visible' });
        const isPagoAprobadoVisible = await this.page.isVisible('h1 span:text("Pago aprobado")');
        expect(isPagoAprobadoVisible).toBe(true);
        return; // Termina el test con éxito
    }

    async VerificarFirmante() {
        const predefinedFirmador = predefinedEmails.firmante[0];
        const email = predefinedFirmador.email;
        const mailboxId = predefinedFirmador.id;
        console.log('Firmador Mailbox ID:', mailboxId);
        console.log('Firmador Email Address:', email);
        const details = await this.VerificarFirmanteStatus();
        console.log('Status details:', details);
        if (email && mailboxId) {
            const latestEmail = await this.mailslurp.waitForLatestEmail(mailboxId, 30000, true);
            if (latestEmail) {
                console.log('Último correo recibido:', latestEmail.subject);
            } else {
                throw new Error('No se recibió ningún correo nuevo.');
            }
        } else {
            throw new Error('Información necesaria para la verificación no disponible.');
        }
    }


    async VerificarFirmanteStatus() {
        // Esperar a que el primer botón que coincida con el selector sea visible
        await this.page.waitForSelector('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.css-1j7qk7u', { state: 'visible' });
    
        // Hacer clic en el primer botón de la lista de elementos que coinciden con el selector
        await this.page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.css-1j7qk7u').first().click();
    
        // Solo llama a realizarLogin una vez para obtener el token Bearer
        const bearerToken = await this.realizarLogin();
        if (!bearerToken) {
            console.log('Login fallido, token Bearer no recibido.');
            return;
        }
        console.log('Login exitoso, token Bearer recibido.');
        
        // Extrae el ID del contrato
        const contractId = await this.extraerIdDelContrato(this.page);
        if (!contractId) {
            console.log("No se pudo extraer el ID del contrato.");
            return;
        }
        console.log(`ID del contrato extraído: ${contractId}`);
    
        // Usa el token Bearer obtenido y el ID del contrato para obtener detalles
        const contractDetails = await this.obtenerDetalleDelContrato(contractId, bearerToken);
        if (contractDetails && contractDetails.message && contractDetails.message.firmantes) {
            console.log('Detalles del contrato:', JSON.stringify(contractDetails, null, 2));
            const firmante = contractDetails.message.firmantes.find(f => f.payment === "PAYOUT");
            if (firmante) {
                console.log('Pago verificado correctamente como PAYOUT.');
                return firmante;
            } else {
                console.error('Test failed: El estado de pago no es PAYOUT.');
                return null;
            }
        } else {
            console.error("No se encontraron firmantes o no se pudieron obtener los detalles.");
            return null;
        }
    }


}