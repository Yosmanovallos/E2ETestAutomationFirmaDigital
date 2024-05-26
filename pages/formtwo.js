const { test, expect } = require('@playwright/test');
const qaTestData = require('../test-data/qa/qa.json');
const prodTestData = require('../test-data/prod/prod.json');

exports.FormPagetwo = class FormPagetwo {
    /**
     * Constructor de la página de formulario.
     * @param {import('@playwright/test').Page} page - Instancia de la página principal.
     */
    constructor(page) {
        this.page = page;
        this.comenzarButton = this.page.getByRole('button', { name: 'Comenzar' });
        // Locators form

        this.tbv1 = page.locator('div', { hasText: /^¿Qué tipo de trámite deseas hacer\?$/ });
        this.tramiteButton = page.getByPlaceholder('¿Qué trámite necesitas');
        this.tramiteName = page.getByPlaceholder('Ingresa el nombre de tramite');
        this.tbv4 = page.getByRole('heading', { name: '¿Qué tipo de trámite deseas' });
        this.siguienteButton = page.getByRole('button', { name: 'Siguiente' });
        this.formpagesecurity = page.getByText('Elegir trámite2Opciones firma3Participantes Nivel de seguridad de firma');

        // lista de tramites

        this.cartadecontraoferta = page.getByRole('option', { name: 'Carta de contra oferta' });
        this.cartaderenuncia = page.getByRole('option', { name: 'Carta de renuncia' });
        this.cartaoferta = page.getByRole('option', { name: 'Carta oferta' });
        this.certificaciondomicilio = page.getByRole('option', { name: 'Certificacion domicilio' });
        this.certificadodeestadocivil = page.getByRole('option', { name: 'Certificado de estado civil' });
        this.certificadolaboralconchileno = page.getByRole('option', { name: 'Certificado laboral con chileno' });
        this.certificadolaboralconextranjero = page.getByRole('option', { name: 'Certificado laboral con extranjero' });
        this.cesiondecontrato = page.getByRole('option', { name: 'Cesion de contrato' });
        this.comercial = page.getByRole('option', { name: 'Comercial' });
        this.contratodearriendo = page.getByRole('option', { name: 'Contrato de arriendo', exact: true });
        this.contratodetrabajo = page.getByRole('option', { name: 'Contrato de trabajo' });
        this.declaracionjurada = page.getByRole('option', { name: 'Declaracion jurada' });
        this.finiquitoempresarial = page.getByRole('option', { name: 'Finiquito empresarial' });
        this.legalizacioncopiadecedula = page.getByRole('option', { name: 'Legalizacion copia de cedula' });
        this.mandatodeadministracion = page.getByRole('option', { name: 'Mandato de administracion' });
        this.ofertalaboral = page.getByRole('option', { name: 'Oferta laboral' });
        this.ordendearriendo = page.getByRole('option', { name: 'Orden de arriendo' });
        this.ordendeventa = page.getByRole('option', { name: 'Orden de venta' });
        this.ordendevisita = page.getByRole('option', { name: 'Orden de visita' });
        this.permisodemudanza = page.getByRole('option', { name: 'Permiso de mudanza' });
        this.podersimple = page.getByRole('option', { name: 'Poder simple' });
        this.promesadecompraventa = page.getByRole('option', { name: 'Promesa de compraventa', exact: true });
        this.promesadecompraventadevehiculo = page.getByRole('option', { name: 'Promesa de compraventa de' });
        this.prorrogadepromesadecompraventa = page.getByRole('option', { name: 'Prorroga de promesa de' });
        this.resciliaciondecontratode = page.getByRole('option', { name: 'Resciliacion de contrato de' });
        this.resciliaciondepromesadearriendo = page.getByRole('option', { name: 'Resciliacion de promesa de' });
        this.salvoconducto = page.getByRole('option', { name: 'Salvo conducto' });
        this.usodedomicilio = page.getByRole('option', { name: 'Uso de domicilio' });
        this.testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;

        // security form

        this.muysegurosecurity = page.getByText('Muy SeguroAutorización');
        this.segurosecurity = page.getByText('SeguroSugeridoCertificación');
        this.autorizacionnotarialdefirmas = page.locator('div.signature:has-text("Autorización notarial de firmas")');
        this.protocolizacionnotarial = page.locator('div.signature:has-text("Protocolización notarial")');
        this.sugeridocertificacionnotarial = page.locator('div.signature:has-text("Certificación notarial")');
        this.firmaelectronicasimple = page.locator('div.signature:has-text("Firma electrónica simple")');
        this.volverbutton = page.getByRole('button', { name: 'Volver' });
        
        // modales de precios de seguridad

        this.unfirmanteAutorizaciónnotarialdefirmas = page.getByText('$24990 (valor un firmante) *$');
        this.unfirmanteProtocolizaciónnotarial = page.getByText('$20490 (valor un firmante) *$');
        this.unfirmanteCertificaciónnotarial = page.getByText('$14490 (valor un firmante) *$');
        this.unfirmanteFirmaelectrónicasimple = page.getByText('$4490 (valor un firmante) *$');
        this.closebuttonmodal = page.locator('.closeButtom > .MuiSvgIcon-root > path');
        this.seleccionarbuttonmodal = page.getByRole('button', { name: 'Seleccionar' });
    }

    async SiguienteButtonNavegation() {
        await this.siguienteButton.click();
    }

    async verifyAndClickSecurityOptions() {
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

    async formpageVerify() {
        await expect(this.tbv1).toBeVisible();
        await expect(this.tramiteButton).toBeVisible();
        await expect(this.tramiteName).toBeVisible();
        await this.tramiteButton.click();
        await expect(this.cartadecontraoferta).toBeVisible();
        await this.cartadecontraoferta.click();
        await this.siguienteButton.click();
        await this.verifyAndClickSecurityOptions();
    }

    async AutorizacionNotarial() {
        await expect(this.formpagesecurity).toBeVisible();
        await this.autorizacionnotarialdefirmas.click();
        await this.seleccionarbuttonmodal.click();
        await this.siguienteButton.click();
    }

    async ProtocolizacionNotarial() {
        await expect(this.formpagesecurity).toBeVisible();
        await this.protocolizacionnotarial.click();
        await this.seleccionarbuttonmodal.click();
        await this.siguienteButton.click();
    }

    async SugeridoCertificacionNotarial() {
        await expect(this.formpagesecurity).toBeVisible();
        await this.sugeridocertificacionnotarial.click();
        await this.seleccionarbuttonmodal.click();
        await this.siguienteButton.click();
    }

    async FirmaElectronicaSimple() {
        await expect(this.formpagesecurity).toBeVisible();
        await this.firmaelectronicasimple.click();
        await this.seleccionarbuttonmodal.click();
        await this.siguienteButton.click();
    }

    async cartadeContraOferta() {
        await this.tramiteButton.click();
        await expect(this.cartadecontraoferta).toBeVisible();
        await this.cartadecontraoferta.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async cartadeRenuncia() {
        await this.tramiteButton.click();
        await expect(this.cartaderenuncia).toBeVisible();
        await this.cartaderenuncia.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async CartaOferta() {
        await this.tramiteButton.click();
        await expect(this.cartaoferta).toBeVisible();
        await this.cartaoferta.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async CertificacionDomicilio() {
        await this.tramiteButton.click();
        await expect(this.certificaciondomicilio).toBeVisible();
        await this.certificaciondomicilio.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async CertificadodeEstadoCivil() {
        await this.tramiteButton.click();
        await expect(this.certificadodeestadocivil).toBeVisible();
        await this.certificadodeestadocivil.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async CertificadoLaboralconChileno() {
        await this.tramiteButton.click();
        await expect(this.certificadolaboralconchileno).toBeVisible();
        await this.certificadolaboralconchileno.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async CertificadoLaboralconExtranjero() {
        await this.tramiteButton.click();
        await expect(this.certificadolaboralconextranjero).toBeVisible();
        await this.certificadolaboralconextranjero.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async CesiondeContrato() {
        await this.tramiteButton.click();
        await expect(this.cesiondecontrato).toBeVisible();
        await this.cesiondecontrato.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async Comercial() {
        await this.tramiteButton.click();
        await expect(this.comercial).toBeVisible();
        await this.comercial.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async ContratodeArriendo() {
        await this.tramiteButton.click();
        await expect(this.contratodearriendo).toBeVisible();
        await this.contratodearriendo.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async ContratodeTrabajo() {
        await this.tramiteButton.click();
        await expect(this.contratodetrabajo).toBeVisible();
        await this.contratodetrabajo.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async DeclaracionJurada() {
        await this.tramiteButton.click();
        await expect(this.declaracionjurada).toBeVisible();
        await this.declaracionjurada.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async FiniquitoEmpresarial() {
        await this.tramiteButton.click();
        await expect(this.finiquitoempresarial).toBeVisible();
        await this.finiquitoempresarial.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async LegalizacionCopiadeCedula() {
        await this.tramiteButton.click();
        await expect(this.legalizacioncopiadecedula).toBeVisible();
        await this.legalizacioncopiadecedula.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async MandatodeAdministracion() {
        await this.tramiteButton.click();
        await expect(this.mandatodeadministracion).toBeVisible();
        await this.mandatodeadministracion.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async OfertaLaboral() {
        await this.tramiteButton.click();
        await expect(this.ofertalaboral).toBeVisible();
        await this.ofertalaboral.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async OrdendeArriendo() {
        await this.tramiteButton.click();
        await expect(this.ordendearriendo).toBeVisible();
        await this.ordendearriendo.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async OrdendeVenta() {
        await this.tramiteButton.click();
        await expect(this.ordendeventa).toBeVisible();
        await this.ordendeventa.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async OrdendeVisita() {
        await this.tramiteButton.click();
        await expect(this.ordendevisita).toBeVisible();
        await this.ordendevisita.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async PermisodeMudanza() {
        await this.tramiteButton.click();
        await expect(this.permisodemudanza).toBeVisible();
        await this.permisodemudanza.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async PoderSimple() {
        await this.tramiteButton.click();
        await expect(this.podersimple).toBeVisible();
        await this.podersimple.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async PromesadeCompraventa() {
        await this.tramiteButton.click();
        await expect(this.promesadecompraventa).toBeVisible();
        await this.promesadecompraventa.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async PromesadeCompraventadeVehiculo() {
        await this.tramiteButton.click();
        await expect(this.promesadecompraventadevehiculo).toBeVisible();
        await this.promesadecompraventadevehiculo.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async ProrrogadePromesadeCompraventa() {
        await this.tramiteButton.click();
        await expect(this.prorrogadepromesadecompraventa).toBeVisible();
        await this.prorrogadepromesadecompraventa.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async ResciliaciondeContratodeArriendo() {
        await this.tramiteButton.click();
        await expect(this.resciliaciondecontratode).toBeVisible();
        await this.resciliaciondecontratode.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async ResciliaciondePromesadeArriendo() {
        await this.tramiteButton.click();
        await expect(this.resciliaciondepromesadearriendo).toBeVisible();
        await this.resciliaciondepromesadearriendo.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async SalvoConducto() {
        await this.tramiteButton.click();
        await expect(this.salvoconducto).toBeVisible();
        await this.salvoconducto.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }

    async UsodeDomicilio() {
        await this.tramiteButton.click();
        await expect(this.usodedomicilio).toBeVisible();
        await this.usodedomicilio.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
    }
}