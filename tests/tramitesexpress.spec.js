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
        await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    //    const { emailAddress: pagadorEmail, id: pagadorId } = 
        
        const { id: pagadorId } = await tramitesexpress.Agregarparticipantepagador();
        await tramitesexpress.Agregarparticipantefirmante();
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
        await page.getByRole('button', { name: 'Guardar' }).click();
        await expect(page.locator('div').filter({ hasText: /^Creando Trámite, por favor espere$/ })).toBeVisible();
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

});
        // globalVars.paymentLink = paymentLink; // Guardar el enlace en la variable global
        
        // const newPage = await page.context().newPage();
        // await newPage.goto(globalVars.paymentLink);

    //     console.log(`Accediendo al enlace de pago: ${paymentLink}`);
    //     await page.goto(paymentLink, { waitUntil: 'networkidle', timeout: 60000 });

    // // Esperar a que el botón 'Crédito' sea visible y proceder con la interacción
    //     console.log('Esperando el botón de crédito...');
    //     await page.waitForSelector('#credito', { state: 'visible' });
        //    await tramitesexpress.automatizarPagoDeWebpay(paymentLink)



    // test('Pagar contrato', async ({page}) => {
    //     const tramitesexpress = new TramitesExpressPage(page);
        
        
    //     await page.goto(globalVars.paymentLink);
    //     await page.waitForTimeout(10000);
    // });


    test('prueba pago', async ({ page }) => {
        const loginpage = new LoginPage(page);
        const tramitesexpress = new TramitesExpressPage(page);

        await page.goto('https://dev.firmavirtual.com/api/v2/webpay/cl/express/00111C000031000034EF308129/53966eef-7a88-4f17-82fb-15231a77de6c');
        await page.waitForTimeout(10000)
        
        
    });









    //     test('Pagar contrato', async ({ page }) => {
    //         const loginpage = new LoginPage(page);
    //         const tramitesexpress = new TramitesExpressPage(page);
    //         const loginResponse = await realizarLogin();

    //         await loginpage.goto();
    //         await loginpage.checkComponents(); // Esperar que se complete este método
    //         // Realizar el login utilizando los datos del ambiente correcto.
    //         await loginpage.loginUser(); // Los datos se manejan internamente en la clase
    //         await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    //         await tramitesexpress.OpenGestiondeDocumentos();
    //         // Esperar a que el primer botón que coincida con el selector sea visible
    //         await page.waitForSelector('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.css-1j7qk7u', { state: 'visible' });

    //         // Hacer clic en el primer botón de la lista de elementos que coinciden con el selector
    //         await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.css-1j7qk7u').first().click();

    // // Solo llama a realizarLogin una vez para obtener el token Bearer
    // const bearerToken = await realizarLogin();
    // if (!bearerToken) {
    //     console.log('Login fallido, token Bearer no recibido.');
    //     return;
    // }
    // console.log('Login exitoso, token Bearer recibido.');
    //         // Extrae el ID del contrato
    // const contractId = await extraerIdDelContrato(page);
    // if (!contractId) {
    //     console.log("No se pudo extraer el ID del contrato.");
    //     return;
    // }
    // console.log(`ID del contrato extraído: ${contractId}`);

    // // Usa el token Bearer obtenido y el ID del contrato para obtener detalles
    // const detallesDelContrato = await obtenerDetalleDelContrato(contractId, bearerToken);
    // if (detallesDelContrato && detallesDelContrato.message && detallesDelContrato.message.firmantes) {
    //     console.log('Detalles del contrato:', JSON.stringify(detallesDelContrato, null, 2));

    //     let paymentLink;

    //     detallesDelContrato.message.firmantes.forEach(firmante => {
    //         if (parseFloat(firmante.portion) > 0 && firmante.token_payment) {
    //             console.log(`Validación exitosa para el rol: ${firmante.full_name}`);
    //             if (firmante.full_name === "Pagador Automatizado") {
    //                 const paymentLink = `https://dev.firmavirtual.com/api/v2/webpay/cl/express/${firmante.token_payment}/${contractId}`;
    //                 console.log(`Enlace de pago para ${firmante.full_name}: ${paymentLink}`);
    //             }
    //         } else {
    //             console.error(`Falla en la validación para el rol: ${firmante.full_name}, Portion: ${firmante.portion}, Token Payment: ${firmante.token_payment}`);
    //         }
    //     });

    // } else {
    //     console.log('Error al obtener detalles del contrato o no hay firmantes disponibles.');
    // }
    // });
    
 //   if (contractId) {
  //      console.log(`Utilizando el ID del contrato: ${contractId}`);
        // Continúa con las operaciones que necesitas realizar con el ID del contrato
 //   } else {
  //      console.log("El ID del contrato no pudo ser obtenido.");
//    }



