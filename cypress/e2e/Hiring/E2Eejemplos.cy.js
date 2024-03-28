describe('Loguear - Basic Auth y Auth con Forms', function() {
/*
    beforeEach(() => {
        cy.task('db:teardown')
        cy.task('db:seeding')
    })*/

    it('Sin loguear', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text','Congratulations')
    })

    //Ideal porque no muestra las credenciales
    it('Loguear usando auth de Cypress', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })
        cy.get('p').should('include.text','Congratulations')
    })

    //No es bueno aplicarlo porque en el informe deja al descubierto las credenciales
    it('Loguear con credenciales en la URL del Visit', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text','Congratulations')
    })

    it('Hago login en un form, usando un reuqest del tipo POST', () => {
        cy.visit('https://the-internet.herokuapp.com')
        cy.request({
            method: 'POST',
            url: '/authenticate',
            form: true,
            body: {
                username: 'tomsmith',
                password: 'SuperSecretPassword!'
            }
        })
        cy.getCookies('rack.session').should('exist')
        cy.visit('https://the-internet.herokuapp.com/secure')
        cy.get('.subheader').should('include.text','Welcome to the Secure Area')
    })

    it('Mismo test de arriba pero con el login como comando personalizado', () => {
        cy.login()
        cy.get('.subheader').should('include.text','Welcome to the Secure Area')
    })
})