
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');
const { RegisterPage } = require('../pages/registerpage');
const { MailSlurp } = require('mailslurp-client');


const apiKey = process.env.API_KEY;
const mailslurp = new MailSlurp({ apiKey });

function generateRut() {
    let rut = '';
    for (let i = 0; i < 8; i++) {
        rut += Math.floor(Math.random() * 10); // Generar un número de 8 dígitos
    }
    return rut + '-' + calculateDV(rut);
}

function calculateDV(T) {
    let M = 0, S = 1;
    for (; T; T = Math.floor(T / 10))
        S = (S + T % 10 * (9 - M++ % 6)) % 11;
    return S ? S - 1 : 'K';
}


test('test de registro con correo electrónico aleatorio y confirmación', async ({ page }) => {
    // Crear un buzón y obtener la dirección de correo electrónico
    const { emailAddress, id } = await mailslurp.createInbox();
    console.log(`Correo generado: ${emailAddress}`);  // Muestra el correo generado
    const loginpage = new LoginPage(page);
    // Navegación y llenado del formulario
    await loginpage.goto();
    await expect(page.getByRole('link', { name: 'Crea una cuenta' })).toBeVisible();
    await page.getByRole('link', { name: 'Crea una cuenta' }).click();
    await expect(page.getByPlaceholder('Nombre')).toBeVisible();
    await page.getByPlaceholder('Nombre').click();
    await page.getByPlaceholder('Nombre').fill('Prueba');
    await page.getByPlaceholder('Nombre').press('Tab');
    await page.getByPlaceholder('Contreras').fill('Automatizada');
    await page.getByPlaceholder('tucorreo@mail.com').click();
    await page.getByPlaceholder('tucorreo@mail.com').fill(emailAddress);

    const validRut = generateRut();
    console.log(`RUT generado: ${validRut}`);
    await page.getByPlaceholder('11111111-1 o').click();
    await page.getByPlaceholder('11111111-1 o').fill(validRut);
    await page.locator('input[name="sPassword"]').click();
    await page.locator('input[name="sPassword"]').fill('123456Ee#');
    await page.locator('input[name="rePassword"]').click();
    await page.locator('input[name="rePassword"]').fill('123456Ee#');
    await page.getByRole('button', { name: 'Registrarse' }).click();
    await page.getByRole('button', { name: 'Registrarse' }).click();

    // Esperar por un correo de confirmación
    const email = await mailslurp.waitForLatestEmail(id);

    // Extraer el enlace de confirmación
    const linkMatch = email.body.match(/href="(https:\/\/dev\.firmavirtual\.com\/validation-mail\/[a-zA-Z0-9]+)/);
    if (linkMatch) {
        const confirmationLink = linkMatch[1];
        console.log(`Enlace de confirmación: ${confirmationLink}`);

        // Navegar al enlace de confirmación usando Playwright
        await page.goto(confirmationLink);
        console.log('Navegación al enlace de confirmación realizada correctamente.');
        // Aquí puedes agregar más lógica para verificar la página resultante o cualquier mensaje de confirmación
    } else {
        console.error('No se encontró el enlace de confirmación en el correo.');
    }
});

test('Verificar todas las validaciones', async ({ page }) => {
    const loginpage = new LoginPage(page);
    const registerpage = new RegisterPage(page);
    await loginpage.goto();
    await registerpage.CreateUserValidations();
});


