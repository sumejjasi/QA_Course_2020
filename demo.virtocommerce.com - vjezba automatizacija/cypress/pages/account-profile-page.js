import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usernameInput = e => cy.get('#SpecificElementId'),
    passwordInput = e => cy.get('.specificElementClass'),
    firstNameInput = e => cy.get('#first_name'),
    lastNameInput = e => cy.get('#last_name'),
    emailInput = e => cy.get('#email'),
    phoneNumberInput = e => cy.get('#PhoneNumber')

 // add comma on the previous line before adding new element selectors

export default class AccountProfilePage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    verify_labels_upon_successful_registration(dataObject) {
        this.verify_text_is_visible('My Account')
        this.verify_text_is_visible('Edit Profile')
        this.verify_text_is_visible('Two Factor Authentication: Disabled')
        this.verify_text_is_visible('Orders')
        this.verify_text_is_visible('Profile')
        this.verify_text_is_visible('Addresses')
        this.verify_text_is_visible('Change password')
        this.verify_text_is_visible('Lists')


        this.verify_value(firstNameInput, dataObject.firstName)
        this.verify_value(lastNameInput, dataObject.lastName)
        this.verify_value(emailInput, dataObject.email)

        return this;
    }

    enter_phononumber () {
        phoneNumberInput().type('000000');
        return this;
    }
}
