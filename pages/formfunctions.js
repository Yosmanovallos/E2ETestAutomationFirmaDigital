const { test, expect } = require('@playwright/test');
const qaTestData = require('../test-data/qa/qa.json');
const prodTestData = require('../test-data/prod/prod.json');
const { MailSlurp } = require('mailslurp-client');

const apiKey = process.env.API_KEY;
const mailslurp = new MailSlurp({ apiKey });

exports.FormFunctions = class FormFunctions {
    /**
     * Constructor de la página de formulario.
     * @param {import('@playwright/test').Page} page - Instancia de la página principal.
     */
    constructor(page) {
        this.page = page;
        this.agregarparticipanteform = page.getByRole('button', { name: 'Agregar participante' }).first();
        this.nombrecompletoplaceform =  page.getByPlaceholder('Ingresa nombre');
        this.correoelectronicoform = page.getByPlaceholder('Ingresa correo electrónico');
        this.numerodecelularform = page.getByPlaceholder('Ingresa celular. Ej:9 1234');
        this.pagadorcheckform = page.getByLabel('Pagador (*)');
        this.cienporcientoform =  page.getByLabel('100%');
        this.guardarparticipanteform = page.getByRole('button', { name: 'Guardar participante' });
        this.rutgenerate = page.getByPlaceholder('Ingresa rut');
        this.firmadorcheckform = page.getByLabel('Firmante (*)');
        this.aprobadorcheckform = page.getByLabel('Aprobador', { exact: true });
        this.eresparticpanteform = page.locator('div').filter({ hasText: /^¿Este participante tendrá orden de firma\?NoSi$/ }).getByLabel('Si');
        this.copiacheckform = page.getByLabel('Copia');
    }

    GenerateRutForm() {
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
        let number = '' + prefix;  // Start with the country code '56' for Chile and the mobile prefix '9'
        for (let i = 0; i < 8; i++) {
            number += Math.floor(Math.random() * 10);
        }
        return '' + number;  // Retorna el número con el código de país y todo pegado
    }



    async Agregarpartipantepagadorform() {

        const { emailAddress, id } = await mailslurp.createInbox();
        console.log(`Correo generado: ${emailAddress}, ID del buzón: ${id}`);  // Muestra el correo generado

        await this.agregarparticipanteform.click();
        const validRutPartipante = this.GenerateRutForm();
        console.log(`RUT generado: ${validRutPartipante}`);
        await this.rutgenerate.click();
        await this.rutgenerate.fill(validRutPartipante);
        await this.nombrecompletoplaceform.click();
        await this.nombrecompletoplaceform.fill('Pagador Automatizado');
        await this.numerodecelularform.click();
        const validnumberPartipante = this.generateChileanMobileNumber();
        console.log(`Numero generado: ${validnumberPartipante}`);
        await this.numerodecelularform.fill(validnumberPartipante);
        await this.correoelectronicoform.click();
        await this.correoelectronicoform.fill(emailAddress);
        await this.pagadorcheckform.check();
        await this.cienporcientoform.check();
        await this.guardarparticipanteform.click();
        await this.guardarparticipanteform.click();
    }

    async AgregarPartipanteFirmanteForm() {

        const { emailAddress, id } = await mailslurp.createInbox();
        console.log(`Correo generado: ${emailAddress}, ID del buzón: ${id}`);  // Muestra el correo generado

        await this.agregarparticipanteform.click();
        const validRutPartipante = this.GenerateRutForm();
        console.log(`RUT generado: ${validRutPartipante}`);
        await this.rutgenerate.click();
        await this.rutgenerate.fill(validRutPartipante);
        await this.nombrecompletoplaceform.click();
        await this.nombrecompletoplaceform.fill('Firmador Automatizado');
        await this.numerodecelularform.click();
        const validnumberPartipante = this.generateChileanMobileNumber();
        console.log(`Numero generado: ${validnumberPartipante}`);
        await this.numerodecelularform.fill(validnumberPartipante);
        await this.correoelectronicoform.click();
        await this.correoelectronicoform.fill(emailAddress);
        await this.firmadorcheckform.check();
        await this.eresparticpanteform.check();
        await this.guardarparticipanteform.click();
        await this.guardarparticipanteform.click();
    }

    async AgregarPartipanteAporbadorForm() {

        const { emailAddress, id } = await mailslurp.createInbox();
        console.log(`Correo generado: ${emailAddress}, ID del buzón: ${id}`);  // Muestra el correo generado

        await this.agregarparticipanteform.click();
        const validRutPartipante = this.GenerateRutForm();
        console.log(`RUT generado: ${validRutPartipante}`);
        await this.rutgenerate.click();
        await this.rutgenerate.fill(validRutPartipante);
        await this.nombrecompletoplaceform.click();
        await this.nombrecompletoplaceform.fill('Firmador Automatizado');
        await this.numerodecelularform.click();
        const validnumberPartipante = this.generateChileanMobileNumber();
        console.log(`Numero generado: ${validnumberPartipante}`);
        await this.numerodecelularform.fill(validnumberPartipante);
        await this.correoelectronicoform.click();
        await this.correoelectronicoform.fill(emailAddress);
        await this.aprobadorcheckform.check();
        await this.guardarparticipanteform.click();
        await this.guardarparticipanteform.click();
    }

    async AgregarPartipanteCopiaForm() {

        const { emailAddress, id } = await mailslurp.createInbox();
        console.log(`Correo generado: ${emailAddress}, ID del buzón: ${id}`);  // Muestra el correo generado

        await this.agregarparticipanteform.click();
        const validRutPartipante = this.GenerateRutForm();
        console.log(`RUT generado: ${validRutPartipante}`);
        await this.rutgenerate.click();
        await this.rutgenerate.fill(validRutPartipante);
        await this.nombrecompletoplaceform.click();
        await this.nombrecompletoplaceform.fill('Firmador Automatizado');
        await this.numerodecelularform.click();
        const validnumberPartipante = this.generateChileanMobileNumber();
        console.log(`Numero generado: ${validnumberPartipante}`);
        await this.numerodecelularform.fill(validnumberPartipante);
        await this.correoelectronicoform.click();
        await this.correoelectronicoform.fill(emailAddress);
        await this.copiacheckform.check();
        await this.guardarparticipanteform.click();
        await this.guardarparticipanteform.click();
    }


    async subirArchivoYAñadirFirmas() {
        // Obtener todos los labels
        const labels = await this.page.$$('label.MuiButtonBase-root.MuiButton-root');

        // Seleccionar el segundo label y su input
        const secondLabelInput = await labels[1].$('input[type="file"]');

        // Subir el archivo al segundo input file
        await secondLabelInput.setInputFiles('tests/documents/export.pdf');

        await this.page.waitForTimeout(3000);

        // Click en el botón 'Añadir firmas al documento'
        await this.page.getByRole('button', { name: 'Añadir firmas al documento' }).click();

        // Obtener todos los checkboxes y hacer clic en cada uno
        let checkboxes;
        let i = 0;
        do {
            // Reobtener los checkboxes en cada iteración
            checkboxes = await this.page.$$('.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.css-1mrahcc');

            if (i < checkboxes.length) {
                // Click en el checkbox
                await checkboxes[i].click();

                // Click en el botón 'Asignar firmas'
                await this.page.getByRole('button', { name: 'Asignar firmas' }).click();
                await this.page.waitForTimeout(1000);

                // Esperar a que el botón 'Añadir firmas al documento' sea visible y clickeable nuevamente
                await this.page.waitForSelector('button:has-text("Añadir firmas al documento")', { state: 'visible' });

                // Click en el botón 'Añadir firmas al documento' para la siguiente iteración
                await this.page.getByRole('button', { name: 'Añadir firmas al documento' }).click();
                await this.page.waitForTimeout(1000);
            }

            i++;
        } while (i < checkboxes.length);
        await this.page.locator('svg.close-icon').click();
        await this.page.getByRole('button', { name: 'Siguiente' }).click();
//      await expect(this.page.getByRole('button', { name: 'Siguiente' })).toBeVisible();
        await this.page.getByRole('button', { name: 'Siguiente' }).click();
        await expect(this.page.locator('.MuiCircularProgress-svg')).toBeVisible();
    }
}