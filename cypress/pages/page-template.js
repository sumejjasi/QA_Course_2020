import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usernameInput = e => cy.get('#SpecificElementId'),
    passwordInput = e => cy.get('.specificElementClass'),
    testField = e => cy.get('[attributeName="attributeValue"]');

export default class TemplatePage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    enter_credentials(username, pass) {
        usernameInput().type(username);
        passwordInput().type(pass);
        return this;
    }
}