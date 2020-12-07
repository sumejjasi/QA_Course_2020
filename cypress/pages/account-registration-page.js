import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let

    firstNameInput = e => cy.get('[id="first_name"]'),
    lastNameInput = e => cy.get('[placeholder="Last Name"]'),
    emailNameInput = e => cy.get('[placeholder="Email"]'),
    usernameInput = e => cy.get('#user_name'),
    passwordInput = e => cy.get('#create_password'),
    createButton = e => cy.get('[value="Create"]'),
    validationMessageContainer = e => cy.get('.form-error'),
    firstNameInput2 = e => cy.get('#first_name')
 // add comma on the previous line before adding new element selectors
//dodan komentar
export default class AccountRegistrationPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    enter_first_name() {
        firstNameInput().type('FirstName123')
        return this;
    }
    //
    // enter_values_to_all_input_fields(emailValue, usernameValue) {
    //     firstNameInput().type('FirstName123')
    //     lastNameInput().type('fdsfgdgdf')
    //     emailNameInput().type(emailValue)
    //     usernameInput().type(usernameValue)
    //     passwordInput().type('Test1234.')
    //
    //     return this;
    // }

    enter_values_to_all_input_fields(dataObject) {
        firstNameInput().type(dataObject.firstName)
        lastNameInput().type( dataObject.lastName)
        emailNameInput().type(dataObject.email)
        usernameInput().type(dataObject.username)
        passwordInput().type(dataObject.password)

        return this;
    }

    click_Create_button() {
       createButton().click()
        return this;
    }

    verify_validation_message(message) {
     this.verify_text(validationMessageContainer, message)
        return this;
    }


}
