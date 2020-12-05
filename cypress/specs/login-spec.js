const C = require('../fixtures/constants');
const S = require('../fixtures/settings');
const D = require('../fixtures/data');
const ui = require('./pages/ui-spec');

context('Login page functionalities', () => {

    it('Verify user can log in with valid credentials', function () {
        cy.visit('https://admin-demo.virtocommerce.com/#/login')
        ui.loginPage.enter_email()
            .enter_password()
            .click_login()

    })

    it('Verify user can log in with invalid credentials', function () {

    })
});
