const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');


    test('login steps', async ({ page }) => {
        const loginpage = new LoginPage(page);
        await loginpage.goto();
        await loginpage.checkComponents();
        await loginpage.loginUser();
    });

    test('login Fail', async ({ page }) => {
        const loginpage = new LoginPage(page);
        await loginpage.goto();
        await loginpage.checkComponents();
        await loginpage.loginFail();
        await page.getByText('Ha ocurrido un errorPor favor', { state: 'visible' });
    });

    test('login validations', async ({ page }) => {
        const loginpage = new LoginPage(page);
        await loginpage.goto();
        await loginpage.checkComponents();
        await loginpage.LoginValidations();
    });
    

    