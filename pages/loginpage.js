// Inlcude playwright module
const { expect } = require('@playwright/test')
const qaTestData = require('../test-data/qa/qa.json');
const prodTestData = require('../test-data/prod/prod.json');
// create class
exports.LoginPage = class LoginPage {
    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        // Init page object
        this.page = page;
        // Elements
        this.imgfirmavirtual = page.getByRole('link').first();
        this.headingFirmavirtual = page.getByRole('heading', { name: 'Iniciar sesión' });
        this.usernameTextBox = page.getByPlaceholder('tucorreo@mail.com');
        this.usernameform = page.getByPlaceholder('Ingresa correo electrónico');
        this.passwordform = page.getByPlaceholder('Ingresa contraseña');
        this.passwordTextBox = page.locator('input[name="password"]');
        this.forgetpassworrd = page.getByRole('link', { name: '¿Has olvidado tu contraseña?' });
        this.ingresarButton = page.getByRole('button', { name: 'Ingresar' });
        this.registerButton = page.getByRole('link', { name: 'Crea una cuenta' });
        this.testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;
        this.failLogin = page.getByText('Ha ocurrido un errorPor favor');

        // Login Validations
        this.estecampoesrequeridocorreo = page.getByText('Este campo es obligatorio').first();
        this.estecampoesrequeridopassword = page.locator('div').filter({ hasText: /^Este campo es obligatorio$/ }).locator('span');
        this.correovalido = page.getByText('Ingresa un correo electrónico');
        

        // Homepage verify
        this.bienvenidoafirmavirtual = page.getByRole('heading', { name: 'Bienvenido a FirmaVirtual' });
        this.textvisible = page.locator('#root');
        this.maximaseguridadautorizacion = page.getByText('Máxima seguridadAutorización');
        this.seguridadprotocolizacion = page.getByText('Alta seguridadProtocolización');
        this.seguridadcertificacion = page.getByText('Buena seguridadFirma electró');
        this.seguridadsimple = page.getByText('Buena seguridadFirma electró');
    }

    async goto(){
        await this.page.setViewportSize({width:1366, height:728})
        await this.page.goto(process.env.URL);
    }

    async gotoform(){

        await this.page.goto(process.env.URL_FORM);

    }

    async checkComponents(){
        await expect(this.usernameTextBox).toBeVisible();
        await expect(this.passwordTextBox).toBeVisible();
        await expect(this.imgfirmavirtual).toBeVisible();
        await expect(this.headingFirmavirtual).toBeVisible();
        await expect(this.forgetpassworrd).toBeVisible();
        await expect(this.ingresarButton).toBeVisible();
        await expect(this.registerButton).toBeVisible();
    }

    async loginUser (){

        await this.usernameTextBox.click();
        await this.usernameTextBox.fill(this.testData.User1);
        await this.passwordTextBox.click();
        await this.passwordTextBox.fill(this.testData.Password);
        await this.ingresarButton.click();
        await expect(this.bienvenidoafirmavirtual).toBeVisible();
        await expect(this.textvisible).toContainText('Prueba tres, ya puedes firmar electrónicamente tus documentos de manera 100% online. Simplemente ingresa a la opción que más te acomode y gestiona tus contratos.');
        await expect(this.maximaseguridadautorizacion).toBeVisible();
        await expect(this.seguridadprotocolizacion).toBeVisible();
        await expect(this.seguridadcertificacion).toBeVisible();
        await expect(this.seguridadsimple).toBeVisible();
    }

    async loginUseForm (){
        await this.usernameform.click();
        await this.usernameform.fill(this.testData.User1);
        await this.passwordform.click();
        await this.passwordform.fill(this.testData.Password);
        await this.ingresarButton.click();
    }

    async loginFail (){
        await this.usernameTextBox.click();
        await this.usernameTextBox.fill(this.testData.User1);
        await this.passwordTextBox.click();
        await this.passwordTextBox.fill('badPassword');
        await this.ingresarButton.click();
    }

    async LoginValidations() {

        await this.ingresarButton.click();
        await expect(this.estecampoesrequeridocorreo).toBeVisible();
        await expect(this.estecampoesrequeridopassword).toBeVisible();
        await this.usernameTextBox.click();
        await this.usernameTextBox.fill('1');
        await expect(this.correovalido).toBeVisible();
    }

    async AprobacionAltaSeguridad() {
        await this.seguridadprotocolizacion.click();
    }

}    