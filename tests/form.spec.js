const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');
const { FormPage } = require('../pages/formpage');
const { FormTwoPage } = require('../pages/formtwopage');

test('test de formulario', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);
    
    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.formpage1Verify();
});

test('test carta de Contra Oferta', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.cartadeContraOferta();
});

test('test carta de Renuncia', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.cartadeRenuncia();
});

test('test Carta Oferta', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.CartaOferta();
});

test('test Certificacion Domicilio', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.CertificacionDomicilio();
});

test('test Certificado de Estado Civil', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.CertificadodeEstadoCivil();
});

test('test Certificado Laboral con Chileno', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.CertificadoLaboralconChileno();
});

test('test Certificado Laboral con Extranjero', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.CertificadoLaboralconExtranjero();
});

test('test Cesion de Contrato', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.CesiondeContrato();
});

test('test Comercial', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.Comercial();
});

test('test Contrato de Arriendo', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.ContratodeArriendo();
});

test('test Contrato de Trabajo', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.ContratodeTrabajo();
});

test('test Declaracion Jurada', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.DeclaracionJurada();
});

test('test Finiquito Empresarial', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.FiniquitoEmpresarial();
});

test('test Legalizacion Copia de Cedula', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.LegalizacionCopiadeCedula();
});

test('test Mandato de Administracion', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.MandatodeAdministracion();
});

test('test Oferta Laboral', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.OfertaLaboral();
});

test('test Orden de Arriendo', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.OrdendeArriendo();
});

test('test Orden de Venta', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.OrdendeVenta();
});

test('test Orden de Visita', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.OrdendeVisita();
});

test('test Permiso de Mudanza', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.PermisodeMudanza();
});

test('test Poder Simple', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.PoderSimple();
});


test('test Promesa de Compraventa', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.PromesadeCompraventa();
});


test('test Promesa de Compraventa de Vehiculo', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.PromesadeCompraventadeVehiculo();
});

test('test Prorroga de Promesa de Compraventa', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.ProrrogadePromesadeCompraventa();
});

test('test Resciliacion de Contrato de Arriendo', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.ResciliaciondeContratodeArriendo();
});

test('test Resciliacion de Promesa de Arriendo', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.ResciliaciondePromesadeArriendo();
});

test('test Salvo Conducto', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.SalvoConducto();
});

test('test Usode Domicilio', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.loginUser();
    await page.waitForSelector('div:has-text("¡Mejora tu experiencia de")', { state: 'visible' });
    await formPage.openForm();
    await formPage.UsodeDomicilio();
});
