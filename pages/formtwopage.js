const { test, expect } = require('@playwright/test');
const qaTestData = require('../test-data/qa/qa.json');
const prodTestData = require('../test-data/prod/prod.json');

exports.FormTwoPage = class FormTwoPage {

       /**
     * Constructor de la página de formulario.
     * @param {import('@playwright/test').Page} page - Instancia de la página principal.
     */
       constructor(page1) {
        this.page1 = page1;  // Usa page1 como la página de este objeto\\
    }

    /**
     * Preparar localizadores de elementos en la nueva página (popup).
     * @param {import('@playwright/test').Page} page1 - Instancia de la página popup.
     */
    prepareLocators(page1) {

    // Todos los tipos de seguridad (Autorización notarial de firmas, Protocolización notarial, SugeridoCertificación notarial, Firma electrónica simple)
        
        this.muysegurosecurity = page1.getByText('Muy SeguroAutorización');
        this.segurosecurity = page1.getByText('SeguroSugeridoCertificación');
        this.autorizacionnotarialdefirmas = page1.locator('div').filter({ hasText: /^Autorización notarial de firmas \(ANF\)$/ });
        this.protocolizacionnotarial = page1.locator('div').filter({ hasText: /^Protocolización notarial$/ });
        this.sugeridocertificacionnotarial = page1.getByText('SugeridoCertificación notarial');
        this.firmaelectrónicasimple = page1.locator('div').filter({ hasText: /^Firma electrónica simple \(FES\)$/ });
        this.volverbutton = page1.getByRole('button', { name: 'Volver' });
        
        // modales de precios de seguridad

        this.unfirmanteAutorizaciónnotarialdefirmas = page1.getByText('$24990 (valor un firmante) *$');
        this.unfirmanteProtocolizaciónnotarial = page1.getByText('$20490 (valor un firmante) *$');
        this.unfirmanteCertificaciónnotarial = page1.getByText('$14490 (valor un firmante) *$');
        this.unfirmanteFirmaelectrónicasimple = page1.getByText('$4490 (valor un firmante) *$');
        this.closebuttonmodal = page1.locator('.closeButtom > .MuiSvgIcon-root > path');
        this.seleccionarbuttonmodal = page1.getByRole('button', { name: 'Seleccionar' });


    // dos tipos de seguridad 

    } 


    async foursecurityVerify() {
        
        await expect(this.muysegurosecurity).toBeVisible();
        await expect(this.segurosecurity).toBeVisible();
        await expect(this.autorizacionnotarialdefirmas).toBeVisible();
        await expect(this.protocolizacionnotarial).toBeVisible();
        await expect(this.sugeridocertificacionnotarial).toBeVisible();
        await expect(this.firmaelectrónicasimple).toBeVisible();
        await expect(this.volverbutton).toBeVisible();
        await this.autorizacionnotarialdefirmas.click();
        await expect(this.unfirmanteAutorizaciónnotarialdefirmas).toBeVisible();
        await expect(this.closebuttonmodal).toBeVisible();
        await expect(this.seleccionarbuttonmodal).toBeVisible();
        await this.closebuttonmodal.click();
        await this.protocolizacionnotarial.click();
        await expect(this.unfirmanteProtocolizaciónnotarial).toBeVisible();
        await expect(this.closebuttonmodal).toBeVisible();
        await expect(this.seleccionarbuttonmodal).toBeVisible();
        await this.closebuttonmodal.click();
        await this.sugeridocertificacionnotarial.click();
        await expect(this.unfirmanteCertificaciónnotarial).toBeVisible();
        await expect(this.closebuttonmodal).toBeVisible();
        await expect(this.seleccionarbuttonmodal).toBeVisible();
        await this.closebuttonmodal.click();
        await this.firmaelectrónicasimple.click();
        await expect(this.unfirmanteFirmaelectrónicasimple).toBeVisible();
        await expect(this.closebuttonmodal).toBeVisible();
        await expect(this.seleccionarbuttonmodal).toBeVisible();
        await this.closebuttonmodal.click();
    }

    async twosecurityVerify() {
        await expect(this.muysegurosecurity).toBeVisible();
        await expect(this.autorizacionnotarialdefirmas).toBeVisible();
        await expect(this.protocolizacionnotarial).toBeVisible();
        await expect(this.volverbutton).toBeVisible();
    }

    async threesecurityVerify() {
        await expect(this.muysegurosecurity).toBeVisible();
        await expect(this.segurosecurity).toBeVisible();
        await expect(this.autorizacionnotarialdefirmas).toBeVisible();
        await expect(this.protocolizacionnotarial).toBeVisible();
        await expect(this.sugeridocertificacionnotarial).toBeVisible();
        await expect(this.volverbutton).toBeVisible();
    }



}
