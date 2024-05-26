const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');
const { FormPagetwo } = require('../pages/formtwo');
const {FormFunctions} = require('../pages/formfunctions');


test('test de formulario', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.formpageVerify();
});

test.describe('test carta de Contra Oferta', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.cartadeContraOferta();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.cartadeContraOferta();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.cartadeContraOferta();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.cartadeContraOferta();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.cartadeContraOferta();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.cartadeContraOferta();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('FirmaElectronicaSimple - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.cartadeContraOferta();
    await formPagetwo.FirmaElectronicaSimple();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test carta de Renuncia', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.cartadeRenuncia();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.cartadeRenuncia();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.cartadeRenuncia();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.cartadeRenuncia();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.cartadeRenuncia();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.cartadeRenuncia();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('FirmaElectronicaSimple - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.cartadeRenuncia();
    await formPagetwo.FirmaElectronicaSimple();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});


});

test.describe('test Carta Oferta', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CartaOferta();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CartaOferta();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CartaOferta();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CartaOferta();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CartaOferta();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CartaOferta();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('FirmaElectronicaSimple - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CartaOferta();
    await formPagetwo.FirmaElectronicaSimple();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Certificacion Domicilio', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificacionDomicilio();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificacionDomicilio();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificacionDomicilio();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificacionDomicilio();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificacionDomicilio();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Certificado de Estado Civil', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadodeEstadoCivil();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadodeEstadoCivil();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadodeEstadoCivil();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadodeEstadoCivil();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadodeEstadoCivil();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadodeEstadoCivil();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('FirmaElectronicaSimple - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadodeEstadoCivil();
    await formPagetwo.FirmaElectronicaSimple();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Certificado Laboral con Chileno', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadoLaboralconChileno();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadoLaboralconChileno();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadoLaboralconChileno();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadoLaboralconChileno();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadoLaboralconChileno();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadoLaboralconChileno();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('FirmaElectronicaSimple - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadoLaboralconChileno();
    await formPagetwo.FirmaElectronicaSimple();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Certificado Laboral con Extranjero', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadoLaboralconExtranjero();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadoLaboralconExtranjero();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadoLaboralconExtranjero();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadoLaboralconExtranjero();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CertificadoLaboralconExtranjero();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Cesion de Contrato', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CesiondeContrato();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CesiondeContrato();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CesiondeContrato();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CesiondeContrato();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.CesiondeContrato();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Comercial', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.Comercial();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.Comercial();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.Comercial();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.Comercial();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.Comercial();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.Comercial();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('FirmaElectronicaSimple - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.Comercial();
    await formPagetwo.FirmaElectronicaSimple();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Contrato de Arriendo', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ContratodeArriendo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ContratodeArriendo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ContratodeArriendo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ContratodeArriendo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ContratodeArriendo();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ContratodeArriendo();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('FirmaElectronicaSimple - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ContratodeArriendo();
    await formPagetwo.FirmaElectronicaSimple();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Contrato de Trabajo', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ContratodeTrabajo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ContratodeTrabajo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ContratodeTrabajo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ContratodeTrabajo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ContratodeTrabajo();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ContratodeTrabajo();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('FirmaElectronicaSimple - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ContratodeTrabajo();
    await formPagetwo.FirmaElectronicaSimple();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Declaracion Jurada', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.DeclaracionJurada();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.DeclaracionJurada();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.DeclaracionJurada();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.DeclaracionJurada();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.DeclaracionJurada();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Finiquito Empresarial', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.FiniquitoEmpresarial();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.FiniquitoEmpresarial();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.FiniquitoEmpresarial();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.FiniquitoEmpresarial();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.FiniquitoEmpresarial();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Legalizacion Copia de Cedula', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.LegalizacionCopiadeCedula();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.LegalizacionCopiadeCedula();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.LegalizacionCopiadeCedula();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.LegalizacionCopiadeCedula();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.LegalizacionCopiadeCedula();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});
});

test.describe('test Mandato de Administracion', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.MandatodeAdministracion();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.MandatodeAdministracion();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.MandatodeAdministracion();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.MandatodeAdministracion();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.MandatodeAdministracion();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.MandatodeAdministracion();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('FirmaElectronicaSimple - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.MandatodeAdministracion();
    await formPagetwo.FirmaElectronicaSimple();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Oferta Laboral', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OfertaLaboral();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OfertaLaboral();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OfertaLaboral();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OfertaLaboral();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OfertaLaboral();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OfertaLaboral();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('FirmaElectronicaSimple - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OfertaLaboral();
    await formPagetwo.FirmaElectronicaSimple();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Orden de Arriendo', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeArriendo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeArriendo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeArriendo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeArriendo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeArriendo();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeArriendo();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('FirmaElectronicaSimple - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeArriendo();
    await formPagetwo.FirmaElectronicaSimple();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Orden de Venta', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeVenta();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeVenta();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeVenta();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeVenta();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeVenta();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeVenta();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('FirmaElectronicaSimple - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeVenta();
    await formPagetwo.FirmaElectronicaSimple();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Orden de Visita', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeVisita();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeVisita();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeVisita();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeVisita();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeVisita();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeVisita();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('FirmaElectronicaSimple - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.OrdendeVisita();
    await formPagetwo.FirmaElectronicaSimple();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Permiso de Mudanza', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PermisodeMudanza();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PermisodeMudanza();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PermisodeMudanza();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PermisodeMudanza();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PermisodeMudanza();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});
});

test.describe('test Poder Simple', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PoderSimple();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PoderSimple();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PoderSimple();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PoderSimple();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PoderSimple();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PoderSimple();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('FirmaElectronicaSimple - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PoderSimple();
    await formPagetwo.FirmaElectronicaSimple();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Promesa de Compraventa', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PromesadeCompraventa();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PromesadeCompraventa();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PromesadeCompraventa();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PromesadeCompraventa();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PromesadeCompraventa();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PromesadeCompraventa();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});
});

test.describe('test Promesa de Compraventa de Vehiculo', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PromesadeCompraventadeVehiculo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PromesadeCompraventadeVehiculo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PromesadeCompraventadeVehiculo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PromesadeCompraventadeVehiculo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.PromesadeCompraventadeVehiculo();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});
});

test.describe('test Prorroga de Promesa de Compraventa', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ProrrogadePromesadeCompraventa();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ProrrogadePromesadeCompraventa();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ProrrogadePromesadeCompraventa();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ProrrogadePromesadeCompraventa();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ProrrogadePromesadeCompraventa();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ProrrogadePromesadeCompraventa();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});
});

test.describe('test Resciliacion de Contrato de Arriendo', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ResciliaciondeContratodeArriendo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ResciliaciondeContratodeArriendo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ResciliaciondeContratodeArriendo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ResciliaciondeContratodeArriendo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ResciliaciondeContratodeArriendo();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Sugerido Certificacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ResciliaciondeContratodeArriendo();
    await formPagetwo.SugeridoCertificacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('FirmaElectronicaSimple - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ResciliaciondeContratodeArriendo();
    await formPagetwo.FirmaElectronicaSimple();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

});

test.describe('test Resciliacion de Promesa de Arriendo', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ResciliaciondePromesadeArriendo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ResciliaciondePromesadeArriendo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ResciliaciondePromesadeArriendo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ResciliaciondePromesadeArriendo();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.ResciliaciondePromesadeArriendo();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});
});

test.describe('test Salvo Conducto', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.SalvoConducto();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.SalvoConducto();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.SalvoConducto();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.SalvoConducto();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.SalvoConducto();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});
});

test.describe('test Uso de Domicilio', () => {

    test.beforeEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();
      });

test('Autenticacion Notarial - todos los roles', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.UsodeDomicilio();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formfunctions.AgregarPartipanteCopiaForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.UsodeDomicilio();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.UsodeDomicilio();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Autenticacion Notarial - pagador, aprobador y dos firmantes', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.UsodeDomicilio();
    await formPagetwo.AutorizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formfunctions.AgregarPartipanteAporbadorForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});

test('Protocolizacion Notarial - pagador y firmante', async ({ page }) => {
    const formPagetwo = new FormPagetwo(page);
    const loginpage = new LoginPage(page);
    const formfunctions = new FormFunctions(page);
    await loginpage.gotoform();
    await loginpage.loginUseForm();
    await formPagetwo.UsodeDomicilio();
    await formPagetwo.ProtocolizacionNotarial();
    await formfunctions.Agregarpartipantepagadorform();
    await formfunctions.AgregarPartipanteFirmanteForm();
    await formPagetwo.SiguienteButtonNavegation();
    await formfunctions.subirArchivoYAñadirFirmas();
});
});

