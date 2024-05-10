const { test, expect } = require('@playwright/test');
const qaTestData = require('../test-data/qa/qa.json');
const prodTestData = require('../test-data/prod/prod.json');

exports.FormPage = class FormPage {
    /**
     * Constructor de la página de formulario.
     * @param {import('@playwright/test').Page} page - Instancia de la página principal.
     */
    constructor(page) {
        this.page = page;
        this.comenzarButton = this.page.getByRole('button', { name: 'Comenzar' });
    }

    /**
     * Preparar localizadores de elementos en la nueva página (popup).
     * @param {import('@playwright/test').Page} page1 - Instancia de la página popup.
     */
    prepareLocators(page1) {

        // Locators form

        this.tbv1 = page1.locator('div', { hasText: /^¿Qué tipo de trámite deseas hacer\?$/ });
        this.tramiteButton = page1.getByPlaceholder('¿Qué trámite necesitas');
        this.tramiteName = page1.getByPlaceholder('Ingresa el nombre de tramite');
        this.tbv4 = page1.getByRole('heading', { name: '¿Qué tipo de trámite deseas' })
        this.siguienteButton = page1.getByRole('button', { name: 'Siguiente' })
        this.formpagesecurity = page1.getByText('Elegir trámite2Opciones firma3Participantes Nivel de seguridad de firma')

        // lista de tramites

        this.cartadecontraoferta = page1.getByRole('option', { name: 'Carta de contra oferta' })
        this.cartaderenuncia = page1.getByRole('option', { name: 'Carta de renuncia' })
        this.cartaoferta = page1.getByRole('option', { name: 'Carta oferta' })
        this.certificaciondomicilio = page1.getByRole('option', { name: 'Certificacion domicilio' })
        this.certificadodeestadocivil = page1.getByRole('option', { name: 'Certificado de estado civil' })
        this.certificadolaboralconchileno = page1.getByRole('option', { name: 'Certificado laboral con chileno' })
        this.certificadolaboralconextranjero = page1.getByRole('option', { name: 'Certificado laboral con extranjero' })
        this.cesiondecontrato = page1.getByRole('option', { name: 'Cesion de contrato' })
        this.comercial = page1.getByRole('option', { name: 'Comercial' })
        this.contratodearriendo = page1.getByRole('option', { name: 'Contrato de arriendo', exact: true })
        this.contratodetrabajo = page1.getByRole('option', { name: 'Contrato de trabajo' })
        this.declaracionjurada = page1.getByRole('option', { name: 'Declaracion jurada' })
        this.finiquitoempresarial = page1.getByRole('option', { name: 'Finiquito empresarial' })
        this.legalizacioncopiadecedula = page1.getByRole('option', { name: 'Legalizacion copia de cedula' })
        this.mandatodeadministracion = page1.getByRole('option', { name: 'Mandato de administracion' })
        this.ofertalaboral = page1.getByRole('option', { name: 'Oferta laboral' })
        this.ordendearriendo = page1.getByRole('option', { name: 'Orden de arriendo' })
        this.ordendeventa = page1.getByRole('option', { name: 'Orden de venta' })
        this.ordendevisita = page1.getByRole('option', { name: 'Orden de visita' })
        this.permisodemudanza = page1.getByRole('option', { name: 'Permiso de mudanza' })
        this.podersimple = page1.getByRole('option', { name: 'Poder simple' })
        this.promesadecompraventa = page1.getByRole('option', { name: 'Promesa de compraventa', exact: true })
        this.promesadecompraventadevehiculo = page1.getByRole('option', { name: 'Promesa de compraventa de' })
        this.prorrogadepromesadecompraventa = page1.getByRole('option', { name: 'Prorroga de promesa de' })
        this.resciliaciondecontratode = page1.getByRole('option', { name: 'Resciliacion de contrato de' })
        this.resciliaciondepromesadearriendo = page1.getByRole('option', { name: 'Resciliacion de promesa de' })
        this.salvoconducto = page1.getByRole('option', { name: 'Salvo conducto' })
        this.usodedomicilio = page1.getByRole('option', { name: 'Uso de domicilio' })
        this.testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;

        // security form

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
    }




    // open the form create  tramite
    async openForm() {
        const page1Promise = this.page.waitForEvent('popup');
        await this.comenzarButton.click();
        const page1 = await page1Promise;
        this.prepareLocators(page1);
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

    /**
     * Método para verificar la visibilidad de los elementos en la página popup(Formulario).
     */
    async formpage1Verify() {
        await expect(this.tbv1).toBeVisible();
        await expect(this.tramiteButton).toBeVisible();
        await expect(this.tramiteName).toBeVisible();
        await this.tramiteButton.click();
        await expect(this.cartadecontraoferta).toBeVisible();
        await this.cartadecontraoferta.click();
        await this.siguienteButton.click();
        await this.verifyAndClickSecurityOptions();
    }

    async cartadeContraOferta() {
        await this.tramiteButton.click();
        await expect(this.cartadecontraoferta).toBeVisible();
        await this.cartadecontraoferta.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
        await this.verifyAndClickSecurityOptions();
    }

    async cartadeRenuncia() {
        await this.tramiteButton.click();
        await expect(this.cartaderenuncia).toBeVisible();
        await this.cartaderenuncia.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await this.page.waitForTimeout(3000) 
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
        await this.verifyAndClickSecurityOptions();
    }

    async CartaOferta() {
        await this.tramiteButton.click();
        await expect(this.cartaoferta).toBeVisible();
        await this.cartaoferta.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await this.page.waitForTimeout(3000) 
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }


    async CertificacionDomicilio() {
        await this.tramiteButton.click();
        await expect(this.certificaciondomicilio).toBeVisible();
        await this.certificaciondomicilio.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async CertificadodeEstadoCivil() {
        await this.tramiteButton.click();
        await expect(this.certificadodeestadocivil).toBeVisible();
        await this.certificadodeestadocivil.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }


    async CertificadoLaboralconChileno() {
        await this.tramiteButton.click();
        await expect(this.certificadolaboralconchileno).toBeVisible();
        await this.certificadolaboralconchileno.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async CertificadoLaboralconExtranjero() {
        await this.tramiteButton.click();
        await expect(this.certificadolaboralconextranjero).toBeVisible();
        await this.certificadolaboralconextranjero.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async CesiondeContrato() {
        await this.tramiteButton.click();
        await expect(this.cesiondecontrato).toBeVisible();
        await this.cesiondecontrato.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async Comercial() {
        await this.tramiteButton.click();
        await expect(this.comercial).toBeVisible();
        await this.comercial.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async ContratodeArriendo() {
        await this.tramiteButton.click();
        await expect(this.contratodearriendo).toBeVisible();
        await this.contratodearriendo.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async ContratodeTrabajo() {
        await this.tramiteButton.click();
        await expect(this.contratodetrabajo).toBeVisible();
        await this.contratodetrabajo.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async DeclaracionJurada() {
        await this.tramiteButton.click();
        await expect(this.declaracionjurada).toBeVisible();
        await this.declaracionjurada.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }


    async FiniquitoEmpresarial() {
        await this.tramiteButton.click();
        await expect(this.finiquitoempresarial).toBeVisible();
        await this.finiquitoempresarial.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }


    async LegalizacionCopiadeCedula() {
        await this.tramiteButton.click();
        await expect(this.legalizacioncopiadecedula).toBeVisible();
        await this.legalizacioncopiadecedula.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async MandatodeAdministracion() {
        await this.tramiteButton.click();
        await expect(this.mandatodeadministracion).toBeVisible();
        await this.mandatodeadministracion.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async OfertaLaboral() {
        await this.tramiteButton.click();
        await expect(this.ofertalaboral).toBeVisible();
        await this.ofertalaboral.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async OrdendeArriendo() {
        await this.tramiteButton.click();
        await expect(this.ordendearriendo).toBeVisible();
        await this.ordendearriendo.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async OrdendeVenta() {
        await this.tramiteButton.click();
        await expect(this.ordendeventa).toBeVisible();
        await this.ordendeventa.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async OrdendeVisita() {
        await this.tramiteButton.click();
        await expect(this.ordendevisita).toBeVisible();
        await this.ordendevisita.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async PermisodeMudanza() {
        await this.tramiteButton.click();
        await expect(this.permisodemudanza).toBeVisible();
        await this.permisodemudanza.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async PoderSimple() {
        await this.tramiteButton.click();
        await expect(this.podersimple).toBeVisible();
        await this.podersimple.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async PromesadeCompraventa() {
        await this.tramiteButton.click();
        await expect(this.promesadecompraventa).toBeVisible();
        await this.promesadecompraventa.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async PromesadeCompraventadeVehiculo() {
        await this.tramiteButton.click();
        await expect(this.promesadecompraventadevehiculo).toBeVisible();
        await this.promesadecompraventadevehiculo.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async ProrrogadePromesadeCompraventa() {
        await this.tramiteButton.click();
        await expect(this.prorrogadepromesadecompraventa).toBeVisible();
        await this.prorrogadepromesadecompraventa.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async ResciliaciondeContratodeArriendo() {
        await this.tramiteButton.click();
        await expect(this.resciliaciondecontratode).toBeVisible();
        await this.resciliaciondecontratode.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async ResciliaciondePromesadeArriendo() {
        await this.tramiteButton.click();
        await expect(this.resciliaciondepromesadearriendo).toBeVisible();
        await this.resciliaciondepromesadearriendo.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async SalvoConducto() {
        await this.tramiteButton.click();
        await expect(this.salvoconducto).toBeVisible();
        await this.salvoconducto.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    async UsodeDomicilio() {
        await this.tramiteButton.click();
        await expect(this.usodedomicilio).toBeVisible();
        await this.usodedomicilio.click();
        await this.tramiteName.click();
        await this.tramiteName.fill(this.testData.TramiteName);
        await expect(this.siguienteButton).toBeVisible();
        await this.siguienteButton.click();
        await expect(this.formpagesecurity).toBeVisible();
    }

    
}