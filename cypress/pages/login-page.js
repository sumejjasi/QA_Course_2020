import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usernameInput = e => cy.get('#SpecificElementId'),
    passwordInput = e => cy.get('.specificElementClass'),
    testField = e => cy.get('[attributeName="attributeValue"]'),
    emailInput = e => cy.get('[name="login"]')

export default class LoginPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    enter_credentials(username, pass) {
        usernameInput().type(username);
        passwordInput().type(pass);
        return this;
    }

    enter_email() {
        emailInput().type('sumejja.s.i@gmail.com');
        return this;
    }
}
