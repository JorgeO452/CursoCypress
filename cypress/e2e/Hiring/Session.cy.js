describe('Sessiones y cookies', () => {
/*
    it('Sin sesión guardada', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
    })

    it('Con sesión guardada', () => {
        cy.session('Tom',() => {
            cy.visit('https://the-internet.herokuapp.com/login')
            cy.get('#username').type('tomsmith')
            cy.get('#password').type('SuperSecretPassword!')
            cy.getCookies().should('have.length',5).then((cookies)=>{
                expect(cookies[0]).to.have.property('name','optimizelyPendingLogEvents')
            })
        })
    })

    it('Ejemplo getCookies', () => {
        cy.session('Tom',() => {
            cy.visit('https://the-internet.herokuapp.com/login')
            cy.get('#username').type('tomsmith')
            cy.get('#password').type('SuperSecretPassword!')
            cy.getCookies().should('have.length',5).then((cookies)=>{
                expect(cookies[0]).to.have.property('name','optimizelyPendingLogEvents')
            })
        })
        cy.clearCookies()
        cy.getCookies().should('have.length',5)
    })


    it('Ejemplo getCookie', () => {
        cy.session('Tom',() => {
            cy.visit('https://the-internet.herokuapp.com/login')
            cy.get('#username').type('tomsmith')
            cy.get('#password').type('SuperSecretPassword!')
            cy.getCookie('optimizelyPendingLogEvents').should('exist')
            cy.getCookie('optimizelyPendingLogEvents').should('not.have.property','value','%5B%22n%3Dengagement%26g%3D298283957%26u%3Doeu1711538061688r0.813517633382494%26wxhr%3Dtrue%26t%3D1711538061846%26f%3D298349752%2C318188263%22%2C%22n%3Dhttps%253A%252F%252Fthe-internet.herokuapp.com%252Flogin%26u%3Doeu1711538061688r0.813517633382494%26wxhr%3Dtrue%26t%3D1711538061690%26f%3D298349752%2C318188263%22%5D')
            cy.clearCookie('optimizelyPendingLogEvents')
            cy.getCookie('optimizelyPendingLogEvents').should('not.exist')
        })
    })*/

    it('Setear Cookie', () => {
        cy.session('Tom',() => {
            cy.visit('https://the-internet.herokuapp.com/login')
            cy.get('#username').type('tomsmith')
            cy.get('#password').type('SuperSecretPassword!')
            cy.getCookie('CookieLoca').should('not.exist')
            cy.setCookie('CookieLoca', 'Oreo')
            cy.getCookie('CookieLoca').should('have.property','value','Oreo')
        })
    })
})