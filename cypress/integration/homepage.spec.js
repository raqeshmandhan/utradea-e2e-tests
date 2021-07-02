const { Homepage } = require("../pages/Homepage");

describe('Home Page Testing' , () => {
    const homepage = new Homepage();
    
    beforeEach(() => { 
        homepage.navigate();
    });

    it('should have register button' , () => {
        homepage.buttonsAvailable();
    });

});