import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    createAccountButton = e => cy.get('[id="customer_register_link"]'),
    firstNameInput = e => cy.get('[id="first_name"]'),
    lastNameInput = e => cy.get('[id="last_name"]'),
    emailInput = e => cy.get('[id="email"]'),
    usernameInput = e => cy.get('[id="user_name"]'),
    passwordInput = e => cy.get('[id="create_password"]'),
    createButton = e => cy.get('[value="Create"]')


export default class AccountProfilePage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

 verify_labels_upon_succesful_registration(dataObject) {
    this.verify_text_is_visible('My Account')
    this.verify_text_is_visible('Edit Profile')

    this.verify_value(firstNameInput, dataObject.firstName)
    //firstNameInput().invoke('val').should('contain', value);

    this.verify_value(emailInput, dataObject.email)


    return this;
}
}
