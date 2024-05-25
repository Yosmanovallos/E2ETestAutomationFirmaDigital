
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');
const { RegisterPage } = require('../pages/registerpage');
const { MailSlurp } = require('mailslurp-client');

test('Verificar todas las validaciones', async ({ page }) => {
    const loginpage = new LoginPage(page);
    const registerpage = new RegisterPage(page);
    await loginpage.goto();
    await registerpage.CreateUserValidations();
});

test('Registro completo', async ({ page }) => {
    const loginpage = new LoginPage(page);
    const registerpage = new RegisterPage(page);
    
    await loginpage.goto();
    await registerpage.registerWithRandomEmail();
});


