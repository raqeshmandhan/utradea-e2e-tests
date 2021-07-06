export class Homepage {
    loginButtonPath = '.filled > button > span';
    registerButtonPath = '.gradient > button > span';

    navigate() {
        cy.visit('/');
    }

    registerButtonAvailable(){
        cy.get(this.registerButtonPath)
            .should('have.text' , 'Register');
    }

    LoginButtonAvailable() {
        cy.get(this.loginButtonPath)
            .should('have.text', 'Login');
    }

    clickLogin() {
        cy.get(this.loginButtonPath).click();
    }

    clickRegister(){
        cy.get(this.registerButtonPath).click();
    }
}

// const homepage= {
//     buttonsAvailable(){
//         cy.get('@registerButton').should('have.text' , 'Register');
//     },

//     naviagethome(){
//         cy.visit('/');
//     }
// };

// module.exports= {
//     url(){
//         return `${this.api.baseUrl}/`;
//     },
//     commands:[homepage],
//     elements:{
//         registerButton:'.gradient > button > span',
//     }
// }