const C = require('../fixtures/constants');
const S = require('../fixtures/settings');
const D = require('../fixtures/data');
const ui = require('../pages/ui-spec');

/*context('Account Registration', () => {

    it('Verify user can register a new account with valid data', function () {
        cy.visit('https://demo.virtocommerce.com/en-US/account/register')
        ui.registrationPage.enter_firstName()
            .enter_lastName()
            .enter_username()
            .enter_email()
            .enter_password()
            .click_createAccount()

    })
});*/

context('Account Registration', () => {

    it('Verify that user can register a new account with valid data', function () {

        ui.registrationPage.navigate_to('https://demo.virtocommerce.com/en-US/account/register')
            .enter_values_to_all_input_fields(D.newUser)
            .click_create_Button()
        ui.accountProfilePage.verify_labels_upon_succesful_registration(D.newUser)
    })

    it.only('Verify validation message for short password', function () {

        D.newUser.password = 'Test1'

        ui.registrationPage.navigate_to('https://demo.virtocommerce.com/en-US/account/register')
            .enter_values_to_all_input_fields(D.newUser)
            .click_create_Button()
            .verify_validation_message('Passwords are too short.')
    })
});








