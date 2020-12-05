const C = require('../fixtures/constants');
const S = require('../fixtures/settings');
const D = require('../fixtures/data');
const ui = require('../pages/ui-spec');

context('Account Registration', () => {

    it.only('Verify that user can register a new account with valid data', function () {

        cy.visit('https://demo.virtocommerce.com');
        cy.wait(5000);
        ui.createPage.click_on_create_account()
            .enter_values_to_all_input_fields(D.newUser)
            .click_on_create_button()
        ui.accountprofilepage.verify_labels_upon_successful_registration(D.newUser)
            .enter_phononumber()

    })


    it('Verify validation message for short password', function () {

        D.newUser.password = 'Test1'
        cy.visit('https://demo.virtocommerce.com/en-US/account/register');
        cy.wait(5000);
        ui.createPage.enter_values_to_all_input_fields(D.newUser)
            .click_on_create_button()
            .verify_validation_message ('Passwords are too short.')

    })


    //it.only('Verify validation message for uppercase letter', function () {

    //D.newUser.password = 'test12345'
    //cy.visit('https://demo.virtocommerce.com/en-US/account/register');
    //cy.wait(5000);
    //ui.createPage.enter_values_to_all_input_fields(D.newUser)
    //.click_on_create_button()
    //.verify_validation_message ('Passwords must have at least one uppercase ('A'-'Z').')

    //})
})

