describe("Tablas estáticas y dinámicas", function() {

    it('Validamos texto en una tabla estática', function() {
        //Navegando a la web con tabla estát
        cy.visit("https://demo.seleniumeasy.com/table-pagination-demo.html")
        //Ubicamos la primer columna
        cy.get('#myTable > tr > td:nth-child(1)').each(($elm, index, $list) => {
            //Agarramos el texto de cada elemento en la columna 1
            const t = $elm.text();
            //Le ponemos que estamos buscando que incluya
            if(t.includes('5')) {
                //De acá vamos al elemeto que le sigue en el DOM
                cy.get('#myTable > tr > td:nth-child(1)').eq(index).next().then(function(p) {
                    //Y tomamos el texto del elemento próximo
                    const r = p.text()
                    //Hacemos una validación de texto sobre este elemento
                    expect(r).to.contains('Table cell');
                })
            }
        })
    })

    it('Validamos una tabla dinámica', function() {
        cy.visit('https://chercher.tech/practice/dynamic-table')
        cy.contains('td', 'facebook.com').prev().find('input').check()
    })

    it('Validamos una tabla estatica 2', function() {
        cy.visit('https://demo.seleniumeasy.com/table-pagination-demo.html')
        cy.contains('td', '5').next().should('have.text', 'Table cell')
    })
})