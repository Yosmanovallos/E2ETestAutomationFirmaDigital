const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');


    test('login_steps', async ({ page }) => {
        const loginpage = new LoginPage(page);
        await loginpage.goto();
        await loginpage.checkComponents(); // Esperar que se complete este método

        // Realizar el login utilizando los datos del ambiente correcto.
        await loginpage.loginUser(); // Los datos se manejan internamente en la clase
        await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    });

    test('loginFail_steps', async ({ page }) => {
        const loginpage = new LoginPage(page);
        await loginpage.goto();
        await loginpage.checkComponents(); // Esperar que se complete este método

        // Realizar el login utilizando los datos del ambiente correcto.
        await loginpage.loginFail(); // Los datos se manejan internamente en la clase
        await page.getByText('Ha ocurrido un errorPor favor', { state: 'visible' });
    });

    