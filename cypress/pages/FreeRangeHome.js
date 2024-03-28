class FreeRangeHome {
    //locators
    empezarButton(){
        return cy.get('#content > ul:nth-child(4) > li:nth-child(1) > a:nth-child(1)')
    }

    //Acciones sobre los elementos
    clickABotónEmpezar(){
        this.empezarButton().click()
    }

    //Navegación
    navigateToHome(){
        cy.visit('https://the-internet.herokuapp.com/')
    }
}

export default FreeRangeHome