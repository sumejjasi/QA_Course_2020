const C = require('../fixtures/constants');
const S = require('../fixtures/settings');
const D = require('../fixtures/data');
const ui = require('../pages/ui-spec');

context('Account Registration....', () => {

    it('Verify that user can register a new account with valid data', function () {

        ui.accountRegistrationPage.navigate_to('https://demo.virtocommerce.com/en-US/account/register')
            .enter_values_to_all_input_fields(D.newUser)
            .click_Create_button()
        ui.accountProfile.verify_labels_upon_succesful_registration(D.newUser)
    })

    it('Verify validation message for short password', function () {

        D.newUser.password = 'Test1'
        ui.accountRegistrationPage.navigate_to('https://demo.virtocommerce.com/en-US/account/register')
            .enter_values_to_all_input_fields(D.newUser)
            .click_Create_button()
            .verify_validation_message('Passwords are too short.')

        // comment to be pushed to remote repository
    })

});
