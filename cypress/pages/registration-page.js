import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    createAccountButton = e => cy.get('[id="customer_register_link"]'),
    firstNameInput = e => cy.get('[id="first_name"]'),
    lastNameInput = e => cy.get('[id="last_name"]'),
    emailNameInput = e => cy.get('[id="email"]'),
    usernameInput = e => cy.get('[id="user_name"]'),
    passwordInput = e => cy.get('[id="create_password"]'),
    createButton = e => cy.get('[value="Create"]'),
    validationMessage = e => cy.get ('.form-error')



export default class RegistrationPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

   /* enter_values_to_all_input_fields(emailValue, usernameValue) {
        firstNameInput().type('FirstName123')
        lastNameInput().type('fdsfgdgdf')
        emailNameInput().type(emailValue)
        usernameInput().type(usernameValue)
        passwordInput().type('Test1234.')

        return this;
    }*/

    enter_values_to_all_input_fields(dataObject) {
        firstNameInput().type (dataObject.firstName)
        lastNameInput().type(dataObject.lastName)
        emailNameInput().type(dataObject.email)
        usernameInput().type(dataObject.username)
        passwordInput().type(dataObject.password)

        return this;
    }

    click_create_Button () {
        createButton().click();

        return this;
    }

    verify_validation_message (message) {
        this.verify_text(validationMessage, message)

        return this;
    }

    /*enter_firstName () {
        firstNameInput().type('Selma1')
        return this;
    }

    enter_lastName () {
        lastNameInput().type('Sendo1')
        return this;
    }

    enter_email () {
        emailInput().type('selma+1@gmail.com')
        return this;
    }

    enter_username () {
        usernameInput().type('selmasendo1')
        return this;
    }

    enter_password () {
        passwordInput().type('Test12345')
        return this;
    }*/
}
