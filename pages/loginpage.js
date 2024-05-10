// Inlcude playwright module
const { test, expect } = require('@playwright/test')
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
        this.passwordTextBox = page.locator('input[name="password"]');
        this.forgetpassworrd = page.getByRole('link', { name: '¿Has olvidado tu contraseña?' });
        this.ingresarButton = page.getByRole('button', { name: 'Ingresar' });
        this.registerButton = page.getByRole('link', { name: 'Crea una cuenta' });
        this.testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;
        this.failLogin = page.getByText('Ha ocurrido un errorPor favor');
    }

    async goto(){
        await this.page.setViewportSize({width:1366, height:728})
        await this.page.goto(process.env.URL);
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
        
    }


    async loginFail (){

        await this.usernameTextBox.click();
        await this.usernameTextBox.fill(this.testData.User1);
        await this.passwordTextBox.click();
        await this.passwordTextBox.fill('badPassword');
        await this.ingresarButton.click();
    }


}    