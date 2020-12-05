import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usernameInput = e => cy.get('#SpecificElementId'),
    passwordInput = e => cy.get('.specificElementClass'),
    testField = e => cy.get ('[attributeName="attributeValue"]'),
    emailInput = e => cy.get('[name="login"]')
 // add comma on the previous line before adding new element selectors

export default class LoginPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************
    enter_email () {
        emailInput().type('sumejja.s.i@gmail.com');
        return this;
    }

}
