// Inlcude playwright module
const { test, expect } = require('@playwright/test')
const qaTestData = require('../test-data/qa/qa.json');
const prodTestData = require('../test-data/prod/prod.json');
const { MailSlurp } = require('mailslurp-client');
const { log } = require('console');

// create class

exports.RegisterPage = class RegisterPage {

    

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        // Init page object
        this.page = page;

        const apiKey = process.env.API_KEY;
        this.mailslurp = new MailSlurp({ apiKey });


        // Elements
        // validaciones

        this.creaunacuentabutton = page.getByRole('link', { name: 'Crea una cuenta' });
        this.Registrarsebutton = page.getByRole('button', { name: 'Registrarse' });
        this.camporequeridoname = page.locator('.input--error').first();
        this.camporequeridolastname = page.locator('div:nth-child(2) > .input-container > .input--error');
        this.camporequeridocorreoelectrnico = page.locator('div:nth-child(3) > .input-container > .input--error');
        this.camporequeridorut = page.locator('span:nth-child(4)');
        this.camporequeridopassword = page.locator('.input-container > .input-container > .input--error').first();
        this.camporequeridorepeatpassword = page.locator('div:nth-child(6) > div > .input-container > .input--error');     
        this.ingresarrutvalido = page.getByText('Ingresa un RUT o Pasaporte vá');
        this.correonovalido = page.locator('form div').filter({ hasText: 'Nuestro sistema detectó un' }).nth(3);
        this.modalcorreorepetido = page.locator('div').filter({ hasText: '¡Ups!, Algo ha pasadoEl' }).nth(1);
        this.modalrutrepetido = page.locator('div').filter({ hasText: '¡Ups!, Algo ha pasadoEl RUT' }).nth(1);
        this.modalvalidadorderepetidos = page.locator('body') ;
        this.closebuttonmodal = page.getByTestId('CloseIcon');
        // validaciones password
        this.validaciocaracteres = page.locator('form');
        // placeholders
        this.nameplaceholder = page.getByPlaceholder('Nombre');
        this.lastnameplaceholder = page.getByPlaceholder('Contreras');
        this.tucorreoplaceholder = page.getByPlaceholder('tucorreo@mail.com');
        this.rutplaceholder = page.getByPlaceholder('11111111-1 o');
        this.passwordplaceholder = page.locator('input[name="sPassword"]');
        this.repeatpasswordplaceholder = page.locator('input[name="rePassword"]');
        this.testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;
    }

    generateRut() {
        let rut = '';
        for (let i = 0; i < 8; i++) {
            rut += Math.floor(Math.random() * 10);
        }
        return rut + '-' + this.calculateDV(rut);
    }

    calculateDV(T) {
        let M = 0, S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'K';
    }
    

    async CreateUserValidations() {

        await this.creaunacuentabutton.click();
        await expect(this.Registrarsebutton).toBeVisible();
        await this.Registrarsebutton.click();
        await expect(this.camporequeridoname).toBeVisible();
        await expect(this.camporequeridolastname).toBeVisible();
        await expect(this.camporequeridocorreoelectrnico).toBeVisible();
        await expect(this.camporequeridorut).toBeVisible();
        await expect(this.camporequeridopassword).toBeVisible();
        await expect(this.camporequeridorepeatpassword).toBeVisible();
        await this.nameplaceholder.click();
        await this.nameplaceholder.fill('Probar');
        await this.lastnameplaceholder.click();
        await this.lastnameplaceholder.fill('Validaciones');
        await this.tucorreoplaceholder.click();
        await this.tucorreoplaceholder.fill('dfsfsfd@ss');
        await this.rutplaceholder.click();
        await this.rutplaceholder.fill('4324234324');
        await expect(this.validaciocaracteres).toContainText('Ingresa un RUT o Pasaporte válido');
        await this.passwordplaceholder.click();
        await this.passwordplaceholder.fill('1');
        await expect(this.validaciocaracteres).toContainText('Por tu seguridad, debes ingresar una contraseña de más de 8 caracteres.');
        await this.passwordplaceholder.click();
        await this.passwordplaceholder.fill('12345678');
        await expect(this.validaciocaracteres).toContainText('Debe contener al menos una letra mayúscula');
        await this.passwordplaceholder.click();
        await this.passwordplaceholder.fill('12345678E');
        await expect(this.validaciocaracteres).toContainText('Debe contener al menos una letra minúscula');
        await this.passwordplaceholder.click();
        await this.passwordplaceholder.fill('12345678Ee#');
        await this.repeatpasswordplaceholder.click();
        await this.repeatpasswordplaceholder.fill('1');
        await this.repeatpasswordplaceholder.click();
        await this.repeatpasswordplaceholder.fill('12345678');
        await expect(this.validaciocaracteres).toContainText('Las contraseñas no coinciden');
        await this.Registrarsebutton.click();
        await expect(this.validaciocaracteres).toContainText('Ingresa un correo electrónico válido');
        await this.tucorreoplaceholder.click();
        await this.tucorreoplaceholder.fill(this.testData.User1);
        await this.rutplaceholder.click();
        await this.rutplaceholder.fill('40.139.742-6');
        await this.repeatpasswordplaceholder.click();
        await this.repeatpasswordplaceholder.fill('12345678Ee#');
        await this.Registrarsebutton.click();
        await expect(this.correonovalido).toBeVisible();
        await expect(this.validaciocaracteres).toContainText('Nuestro sistema detectó un problema con este correo.');
        await this.Registrarsebutton.click();
        await expect(this.modalcorreorepetido).toBeVisible();
        await expect(this.modalvalidadorderepetidos).toContainText('El correo electrónico ya existe. Por favor, utiliza un correo electrónico diferente.');
        await expect(this.closebuttonmodal).toBeVisible();
        await this.closebuttonmodal.click();
        await this.rutplaceholder.click();
        await this.rutplaceholder.clear();
        await this.rutplaceholder.fill('02291040-K');
        await this.tucorreoplaceholder.click();
        await this.tucorreoplaceholder.clear();
        await this.tucorreoplaceholder.fill('pruebaautomatizadavalidaciones@yopmail.com');
        await this.Registrarsebutton.click();
        await expect(this.modalrutrepetido).toBeVisible();
        await expect(this.modalvalidadorderepetidos).toContainText('El RUT ya existe. Por favor, utiliza un RUT diferente.');
        await expect(this.closebuttonmodal).toBeVisible();
        await this.closebuttonmodal.click();
    }



    async registerWithRandomEmail() {
        // Crear un buzón y obtener la dirección de correo electrónico
        const { emailAddress, id } = await this.mailslurp.createInbox();
        console.log(`Correo generado: ${emailAddress}`);

        await this.creaunacuentabutton.click();
        await this.nameplaceholder.fill('Prueba');
        await this.lastnameplaceholder.fill('Automatizada');
        await this.tucorreoplaceholder.fill(emailAddress);

        const validRut = this.generateRut();
        console.log(`RUT generado: ${validRut}`);
        await this.rutplaceholder.fill(validRut);
        await this.passwordplaceholder.fill('123456Ee#');
        console.log(`Password: ${'123456Ee#'}`)
        await this.repeatpasswordplaceholder.fill('123456Ee#');
        await this.Registrarsebutton.click();
        await this.Registrarsebutton.click();

          // Esperar por un correo de confirmación
          const email = await this.mailslurp.waitForLatestEmail(id);

          // Extraer el enlace de confirmación
          const linkMatch = email.body.match(/href="(https:\/\/dev\.firmavirtual\.com\/validation-mail\/[a-zA-Z0-9]+)/);
          if (linkMatch) {
              const confirmationLink = linkMatch[1];
              console.log(`Enlace de confirmación: ${confirmationLink}`);
  
              // Navegar al enlace de confirmación usando Playwright
              await this.page.goto(confirmationLink);
              console.log('Navegación al enlace de confirmación realizada correctamente.');
          } else {
              throw new Error('No se encontró el enlace de confirmación en el correo.');
          }
    }

}

