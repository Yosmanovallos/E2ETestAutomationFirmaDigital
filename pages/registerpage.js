// Inlcude playwright module
const { test, expect } = require('@playwright/test')
const qaTestData = require('../test-data/qa/qa.json');
const prodTestData = require('../test-data/prod/prod.json');
// create class
exports.RegisterPage = class RegisterPage {

    

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        // Init page object
        this.page = page;
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
        await expect(this.validaciocaracteres).toContainText('Nuestro sistema detectó un problema con este correo. Te sugerimos corregirlo. Para continuar, haz clic en \'Agregar Participante\'.');
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
}

