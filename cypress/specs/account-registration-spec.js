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

        // comment to be pushed to remote repository -
        // comment to be pushed to remote repository - Amra Požegija Kičin
        // comment to be pushed to remote repository - Ayman Ali
        // comment to be pushed to remote repository - Ilhana Halilovic
        // comment to be pushed to remote repository - Muhamed Kljajić
        // comment to be pushed to remote repository - Elmedina Sunje
        // comment to be pushed to remote repository - Amina Senderovic - Kanlic
        // comment to be pushed to remote repository - Hadis Suvalija
        // comment to be pushed to remote repository - Maida Detlic
        // comment to be pushed to remote repository - Vildana Panjeta
        // comment to be pushed to remote repository - Melisa Žigonja-Peljto
        // comment to be pushed to remote repository - Dzejlana Colic
        // comment to be pushed to remote repository - Mariam Felicity Kyebure
        // comment to be pushed to remote repository - Manal Elmasry Bratic
    })


    it.only('Verify message for password that is not containing uppercase letters', function () {

        D.newUser.password = 'test1234.'
        ui.accountRegistrationPage.navigate_to('https://demo.virtocommerce.com/en-US/account/register')
            .enter_values_to_all_input_fields(D.newUser)
            .click_Create_button()
            .verify_validation_message(C.validationMsgs.missingUppercaseInPassword);
    })

    // comment to be pushed to remote repository - branch example-branch

});
