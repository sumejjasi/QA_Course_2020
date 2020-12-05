import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usernameInput = e => cy.get('#SpecificElementId'),
    passwordInput = e => cy.get('.specificElementClass'),
    testField = e => cy.get('[attributeName="attributeValue"]'),
    createAccount = e => cy.get('[id="customer_register_link"]'),
    firstName = e => cy.get('[id="first_name"]'),
    lastName = e => cy.get('[id="last_name"]'),
    email = e => cy.get('[id="email"]'),
    userName = e => cy.get('[id="user_name"]'),
    password = e => cy.get('[id="create_password"]'),
    createButton = e => cy.get('[value="Create"]'),
    validationMessageContainer = e => cy.get('.form-error')

// add comma on the previous line before adding new element selectors

export default class CreatePage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************


    click_on_create_account() {
        createAccount().click();
        return this;
    }

    enter_values_to_all_input_fields (dataObject) {
        firstName().type(dataObject.firstName)
        lastName().type(dataObject.lastName)
        email().type(dataObject.email)
        userName().type(dataObject.userName)
        password().type(dataObject.password)
        return this;

    }

    click_on_create_button() {
        createButton().click();
        return this;
    }


    verify_validation_message (message) {
        this.verify_text(validationMessageContainer, message)
        return this;
    }
}
