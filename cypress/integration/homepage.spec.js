const { Homepage } = require("../pages/Homepage");

describe('Home Page Testing' , () => {
    const homepage = new Homepage();
    
    before(() => { 
        homepage.navigate();
    });

    it('should have Register button' , () => {
        homepage.registerButtonAvailable();
    });

    it('should have Login button' , () => {
        homepage.LoginButtonAvailable();
    });

    it('Should Login to the system', () => {
        homepage.clickLogin();
        cy.login('rachelgreen', 'Password.1234');
    });

});