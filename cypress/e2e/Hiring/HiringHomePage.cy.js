describe('Home de www.freerangetesters.com', () => {
    beforeEach(() => {
        cy.visit('https://management-flow-devbranch.vercel.app/flow/4e52566e-eefe-41e4-8123-5d51910c9402')
    })

    it('should have a title', () => {
        cy.title().should('include', 'Contratación Immiland')
        cy.wait(2000)
        cy.contains('Cotice al instante').should('be.visible')
        cy.get('[style="display: flex; justify-content: end;"] > .flex').should('be.enabled').click()
        cy.get('.ant-checkbox-input').click()
        cy.get('.startbutton-disc2').click()
        cy.contains('Estoy fuera de Canadá').click()
        cy.contains('Visita o tránsito').click()
        cy.get('.startbutton-disc2').click()
    })
})