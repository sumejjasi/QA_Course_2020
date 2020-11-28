import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usernameInput = e => cy.get('#SpecificElementId'),
    passwordInput = e => cy.get('.specificElementClass'),
    testField = e => cy.get('[attributeName="attributeValue"]'),
    firstNameInput = e => cy.get('#first_name'),
    lastNameInput = e => cy.get('#last_name'),
    emailInput = e => cy.get('#email')
 // add comma on the previous line before adding new element selectors

export default class AccountProfilePage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************


    // DOM - HTML Structure  - referring to the elements shown in the developer console

    verify_labels_upon_succesful_registration(dataObject) {
        this.verify_text_is_visible('My Account')
        this.verify_text_is_visible('Edit Profile')

        // used only for verifying 'typed text' into 'input' fields
        // make sure to skip () after the element sector that you pass
        this.verify_value(firstNameInput, dataObject.firstName)
        //firstNameInput().invoke('val').should('contain', value);

        this.verify_value(emailInput, dataObject.email)

        return this;
    }
}
