require('../fixtures/constants');
require('../fixtures/settings');
require('../fixtures/data');
const ui = require('../pages/ui-spec');

context('Test suite title', () => {

    it('Test case title', function () {

        cy.visit('https://admin-demo.virtocommerce.com/#/login')
        ui.loginPage.enter_email();

    })
});
