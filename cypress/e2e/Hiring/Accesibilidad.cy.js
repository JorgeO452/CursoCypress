/// <reference types="cypress" />
import 'cypress-axe'

describe('Pruebas de accesibilidad en el sitio Free Range Testers', () => {
    it('Debería cumplir con los estándares de accesibilidad', () => {
        cy.visit('https://management-flow-devbranch.vercel.app/flow/4e52566e-eefe-41e4-8123-5d51910c9402')
        cy.injectAxe()
        cy.checkA11y()
        //cy.checkA11y('#page_section_55718157 > [data-react-component="creator_ui/section_adapters/Bio"] > .sc-dlfmHC > [data-testid="container"] > .sc-iBaPNL > .sc-eggLLm > .sc-bZSSAB > .sc-cxFKTC > .sc-gKsecS')
    })
})