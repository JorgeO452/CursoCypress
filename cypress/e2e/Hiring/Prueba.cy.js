describe("Pruebas sobre UI", () => {
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/")
    })
    
    it("Ejemplo de click", () => {
        cy.contains("Add/Remove Elements").click()
        cy.get('button').click()
    })
	
    it('Ejemplo de escritura', () => { 
        cy.contains('Form Authentication').click()
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
    })
	
    it('Ejemplo de checkboxes', () => {
        cy.get(':nth-child(6) > a').click()
        cy.get('#checkboxes > :nth-child(1)').check()
        cy.get('#checkboxes > :nth-child(3)').uncheck()
    })

    it('Elegir de un dropdown', () => {
        cy.contains('Dropdown').click()
        cy.get('#dropdown').select('Option 2')
        cy.get('#dropdown').select(1)
    })

    it('Hover sobre elemento', () => {
        cy.contains('Hover').click()
        cy.get('#content > div > div:nth-child(4) > div > a').click({force: true})
        cy.get('#content > div > div:nth-child(4) > div > a').invoke('show').should(be.visible)
    })

    it('Click derecho', () => {
        cy.contains('Context Menu').click()
        //cy.get('#hot-spot').rightclick()
        cy.get('#hot-spot').invoke('trigger','contextmenu')
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('You selected a context menu')
        })
    })

    //Assertions Validaciones implicitas y explicitas
    it('Validaciones implicitas', () => {
        cy.contains('Inputs').click()
        cy.get('h3').should('have.text','Inputs')
        cy.get('.example').should('have.class','example').and('be.visible')
    })

    it('Validaciones explicitas', () => {
        cy.contains('Inputs').click()
        cy.get('h3')
        expect('Inputs').to.equals('Inputs')
    })

    it('Espera que las promesas se resuelvan', () => {
        let waited = false
        
        function waitOneSecond() {
        //Devuelve una promesa que se da por resultado al  pasar 1 segundo
        return new Cypress.Promise((resolve, reject) => {
            setTimeout(() => {
                //Pnemos el waited en true
                waited = true
                //Resuelve con el string 'foo'
                resolve('foo')
            }, 1000)
        })
        }
        cy.wrap(null).then(() => {
            //Devuelve una promesa a cy.then que
            // es esperada (waited) hasta que resuelve.
            return waitOneSecond().then((str) => {
                expect(str).to.equal('foo')
                expect(waited).to.be.true
            })
        })
    })

})