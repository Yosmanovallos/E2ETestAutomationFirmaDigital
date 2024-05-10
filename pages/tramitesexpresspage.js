// Inlcude playwright module
const { test, expect } = require('@playwright/test')
const qaTestData = require('../test-data/qa/qa.json');
const prodTestData = require('../test-data/prod/prod.json');
const { MailSlurp } = require('mailslurp-client');
const axios = require('axios');

const apiKey = process.env.API_KEY;
const mailslurp = new MailSlurp({ apiKey });
// create class
exports.TramitesExpressPage = class TramitesExpressPage {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        // Init page object
        this.page = page;
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

////////////////////////////// FUNCIONES IMPORTANTES ////////////////////////////////////////////


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
    async verificarCorreoConPago(id, paymentLink) {
        // Verificar el último correo recibido en el buzón especificado
        const latestEmail = await mailslurp.waitForLatestEmail(id, 20000, true);
        if (latestEmail.body.includes(paymentLink)) {
            console.log('El enlace de pago fue encontrado en el correo.');
            return 'found';  // Retorna 'found' si el enlace es encontrado
        } else {
            throw new Error('El enlace de pago no fue encontrado en el correo.');
        }
    }


////////////////////////////// METODOS DEL TEST ////////////////////////////////////////////


    async OpenTramiteExpress() {

        await this.closebuttonhome.click();
        await this.tramitesexpress.click();
    }

    async OpenGestiondeDocumentos() {

    //    await this.closebuttonhome.click();
        await this.tramitesexpress.click();
        await this.tramitesexpress.click();
        await this.gestiondedocumentos.click();
    }

    async Agregarparticipantepagador() {

        const { emailAddress, id } = await mailslurp.createInbox();
        console.log(`Correo generado: ${emailAddress}, ID del buzón: ${id}`);  // Muestra el correo generado
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
        await this.correoelectronicoplaceholder.fill(emailAddress)

        const mobileNumber = this.generateChileanMobileNumber();
        console.log(`Número móvil generado: ${mobileNumber}`);

        await this.whatsAppnumberplaceholder.click();
        await this.whatsAppnumberplaceholder.fill(mobileNumber);

        await this.rolpagador.click();
        await this.cienporcientocheck.check();
        await this.agregarparticipantebutton.click();
        await this.agregarparticipantebutton.click();
        await this.page.waitForTimeout(2000)

        return { emailAddress, id };
    }
    
    async Agregarparticipantefirmante() {

        const { emailAddress, id } = await mailslurp.createInbox();
        console.log(`Correo generado: ${emailAddress}`);  // Muestra el correo generado
        await this.agregarparticipantebutton.click();
        await this.nombrecompletoplaceholder.click();
        await this.nombrecompletoplaceholder.fill('Firmante Automatizado');
        await this.rutleabel.check();

        const validRutPartipante = this.generateRut();
        console.log(`RUT generado: ${validRutPartipante}`);

        await this.rutdocument.click();
        await this.rutdocument.fill(validRutPartipante);
        await this.correoelectronicoplaceholder.click();
        await this.correoelectronicoplaceholder.fill(emailAddress)

        const mobileNumber = this.generateChileanMobileNumber();
        console.log(`Número móvil generado: ${mobileNumber}`);

        await this.whatsAppnumberplaceholder.click();
        await this.whatsAppnumberplaceholder.fill(mobileNumber);

        await this.rolfirmante.click();
        await this.agregarparticipantebutton.click();
        await this.agregarparticipantebutton.click();
        await this.page.waitForTimeout(2000)

    }

    async AgregarparticipanteCopia() {

        const { emailAddress, id } = await mailslurp.createInbox();
        console.log(`Correo generado: ${emailAddress}`);  // Muestra el correo generado
        await this.agregarparticipantebutton.click();
        await this.nombrecompletoplaceholder.click();
        await this.nombrecompletoplaceholder.fill('Copia Automatizada');
        await this.rutleabel.check();

        const validRutPartipante = this.generateRut();
        console.log(`RUT generado: ${validRutPartipante}`);

        await this.rutdocument.click();
        await this.rutdocument.fill(validRutPartipante);
        await this.correoelectronicoplaceholder.click();
        await this.correoelectronicoplaceholder.fill(emailAddress)

        const mobileNumber = this.generateChileanMobileNumber();
        console.log(`Número móvil generado: ${mobileNumber}`);

        await this.whatsAppnumberplaceholder.click();
        await this.whatsAppnumberplaceholder.fill(mobileNumber);

        await this.rolcopia.click();
        await this.agregarparticipantebutton.click();
        await this.agregarparticipantebutton.click();
        await this.page.waitForTimeout(2000)

    }


    async EscogerDocumento() {
        await this.creartramitesexpress.click();
        await expect(this.muigrid).toBeVisible();
        await expect(this.bienvenidoafirmavirtual).toBeVisible();
        await expect(this.certificaciontext).toBeVisible();
        await expect(this.protocolizacion).toBeVisible();
        await expect(this.firmaelectronicasinnotaria).toBeVisible();
        await expect(this.agregarparticipantebutton).toBeVisible();
        await expect(this.agregarparticipantelabel).toBeVisible();
        await expect(this.adjuntardocumentosheading).toBeVisible();
        await expect(this.subirarchivobutton).toBeVisible();
        await expect(this.unirarchivosbutton).toBeVisible();
        await expect(this.Limpiarbutton).toBeVisible();
        await expect(this.guardarbutton).toBeVisible();
        await this.AgregarParticipanteVerify();
    } 

    

    async VerificarContrato(pagadorId) {
        await this.OpenGestiondeDocumentos();
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
    

        // Abre la URL y espera el redireccionamiento
        // await this.page.goto(paymentLink);
        // await this.page.waitForURL('https://webpay3gint.transbank.cl/webpayserver/init_transaction.cgi', { timeout: 60000 });
        // await this.page.waitForURL('https://webpay3gint.transbank.cl/webpayserver/dist/index.html', { timeout: 60000 });
        // await this.page.waitForURL('https://webpay3gint.transbank.cl/webpayserver/dist/#/', { timeout: 60000 });
        // console.log('Redireccionado a la URL final con éxito.');


        // if (pagadorId && paymentLink) {
        //     await this.verificarCorreoConPago(pagadorId, paymentLink);
        // } else {
        //     console.error("No se proporcionó un ID de buzón válido o el enlace de pago no está definido.");
        // }

        return {paymentLink};

    }


    async automatizarPagoDeWebpay(paymentLink) {
        console.log(`Accediendo al enlace de pago: ${paymentLink}`);
        await page1.goto(paymentLink);

        await page1.waitForTimeout(10000);
    
   //   Espera hasta que el botón 'Crédito' sea visible
        await page1.waitForSelector('#credito', { state: 'visible' });
        await page1.click('#credito');
    
        // Rellenar información de la tarjeta de crédito utilizando IDs específicos
        await page1.fill('#card-number', '4051885600446623'); // Número de tarjeta Visa
        await page1.fill('#card-exp', '12/30'); // Fecha de expiración futura
        await page1.fill('#card-cvv', '123'); // CVV
      
        // Enviar el formulario de pago
        await page1.getByRole('button', { name: 'Pagar' }).click();
    
        // Espera a que la transacción sea procesada y verifica el resultado
        await page1.waitForResponse(response => {
            return response.url().includes('paymentResult') && response.status() === 200;
        });
    
        console.log('Pago procesado, verificando el estado del pago...');
        // Aquí agregarías cualquier verificación adicional para confirmar que el pago fue exitoso
    }












    async crearTramitesVerify() {
        await this.creartramitesexpress.click();
        await expect(this.muigrid).toBeVisible();
        await expect(this.bienvenidoafirmavirtual).toBeVisible();
        await expect(this.certificaciontext).toBeVisible();
        await expect(this.protocolizacion).toBeVisible();
        await expect(this.firmaelectronicasinnotaria).toBeVisible();
        await expect(this.agregarparticipantebutton).toBeVisible();
        await expect(this.agregarparticipantelabel).toBeVisible();
        await expect(this.adjuntardocumentosheading).toBeVisible();
        await expect(this.subirarchivobutton).toBeVisible();
        await expect(this.unirarchivosbutton).toBeVisible();
        await expect(this.Limpiarbutton).toBeVisible();
        await expect(this.guardarbutton).toBeVisible();
        await this.AgregarParticipanteVerify();
    }    

    
    async gestionarDocumentosVerify() {
        await this.gestiondedocumentos.click();
        await expect(this.tramitesenrevisión).toBeVisible();
        await expect(this.tramitesporfirmar).toBeVisible();
        await expect(this.notaria).toBeVisible();
        await expect(this.entrega).toBeVisible();
        await expect(this.titletramitesexpress).toBeVisible();
        await expect(this.aquipodrasvisualizartodos).toBeVisible();
        await expect(this.filtrosbutton).toBeVisible();
        await expect(this.actualizarButton).toBeVisible();
        await expect(this.creartramitebutton).toBeVisible();
        await expect(this.accionescolumn).toBeVisible();
        await expect(this.idcolumn).toBeVisible();
        await expect(this.tramitecolumn).toBeVisible();
        await expect(this.fechacolumn).toBeVisible();
    }

    async tramitesExressVerify() {

        await this.closebuttonhome.click();
        await this.tramitesexpress.click();
        await this.crearTramitesVerify();
        await this.gestionarDocumentosVerify();

    }

    async AgregarParticipanteVerify() {

        await this.agregarparticipantebutton.click();
        await expect(this.dialog).toBeVisible();
        await expect(this.nombrecompletoheading).toBeVisible();
        await expect(this.nombrecompletoplaceholder).toBeVisible();
        await expect(this.tipodeidentificacionlabel).toBeVisible();
        await expect(this.rutleabel).toBeVisible();
        await expect(this.rutheading).toBeVisible();
        await expect(this.rutdocument).toBeVisible();
        await this.pasaportelabel.check();
        await expect(this.pasaportelabel).toBeVisible();
        await expect(this.pasaportedocument).toBeVisible();
        await expect(this.correoelectronicoheader).toBeVisible();
        await expect(this.correoelectronicoplaceholder).toBeVisible();
        await expect(this.whatsAppnumberheading).toBeVisible();
        await expect(this.whatsAppnumberplaceholder).toBeVisible();
        await expect(this.rolpagador).toBeVisible();
        await expect(this.rolfirmante).toBeVisible();
        await expect(this.rolpagadorfirmante).toBeVisible();
        await expect(this.rolcopia).toBeVisible();
        await expect(this.agregarparticipantemodal).toBeVisible();
        await expect(this.closemodalpartipantes).toBeVisible();
        await this.closemodalpartipantes.click();      
    }


    async CreateCertificationTramite() {

        await this.creartramitesexpress.click();
        await this.certificaciontext.click();
        await this.agregarparticipantebutton.click();

    }

}