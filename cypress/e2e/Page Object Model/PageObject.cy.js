import FreeRangeHome from "../../pages/FreeRangeHome"

const home = new FreeRangeHome

describe('Ejemplo de POM en la web', () => {

    it('Prueba con POM', () => {
        home.navigateToHome()
        home.empezarButton().should('exist')
        home.clickABotónEmpezar()
    })
})