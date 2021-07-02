export class Homepage {
    navigate() {
        cy.visit('/');
    }

    buttonsAvailable(){
        cy.get('.gradient > button > span')
            .should('have.text' , 'Register');
    }
}