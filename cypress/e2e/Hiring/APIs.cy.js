describe('Pruebas en API con Cypress', () => {
/*
    it('El endpoint "posts" responde con status 200', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((respuesta) => {
            expect(respuesta.status).to.eq(200)
        })
    })

    it('El endpoint "posts" tiene 100 entradras', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.request('/posts').its('body').should('have.length',100)
    })

    it('El post número 1, tiene por título "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.request('/posts/1')
        .its('body')
        .should('have.property','title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })
    

    it('El POST request correctamente para el endpoint', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts',{
            userId: 1,
            id: 1,
            title: 'Cypress',
            body: 'Cypress es una herramienta de prueba'
        }).then((respuesta) => {
            expect(respuesta.body).to.have.property('title','Cypress')
        })
    })

    it('El PUT request funciona correctamente para el endpoint', () => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1',{
            userId: 1,
            id: 1,
            title: 'Cypress',
            body: 'Cypress es una herramienta de prueba'
        }).then((respuesta) => {
            expect(respuesta.body).to.have.property('title','Cypress')
        })
    })

    it('El DELETE request funciona correctamente para el endpoint', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
    })*/

    it.only('Simula una solicitud GET a /posts con Stub', () => {
        //Datos de ejemplo para simular la respuesta del servidor
        const samplePosts = [
            {
                userId: 1,
                id: 1,
                title: 'Cypress 1',
                body: 'Cypress es una herramienta de prueba 1'
            },
            {
                userId: 2,
                id: 2,
                title: 'Cypress 2',
                body: 'Cypress es una herramienta de prueba 2'
            },
            {
                userId: 3,
                id: 3,
                title: 'Cypress 3',
                body: 'Cypress es una herramienta de prueba 3'
            }
        ];

        //Creacion del Stub para simular la respuesta del servidor
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', samplePosts).as('getPosts');

        //Visita la página de la aplicación donde se realiza la solicitud a la API
        cy.visit('https://jsonplaceholder.typicode.com/')
        //cy.get('body > div > main > table:nth-child(9) > tbody > tr:nth-child(1) > td:nth-child(2) > a').click();
        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click();
        
        //Espera a que se complete la solicitud interceptada
        cy.wait('@getPosts');

        //Realiza las verificaciones necesarias en la interfaz de usuario utilizando los datos de ejemplo
        cy.get('.post-title').eq(0).should('contain', 'Cypress 1');
    })
})