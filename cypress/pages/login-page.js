import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usernameInput = e => cy.get('#SpecificElementId'),
    //passwordInput = e => cy.get('.specificElementClass'),
    testField = e => cy.get('[attributeName="attributeValue"]'),
    emailInput = e => cy.get('[ng-model="user.email"]'),
    passwordInput = e => cy.get('[type="password"]'),
    loginButton = e => cy.get('[type="submit"]')


 // add comma on the previous line before adding new element selectors

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

    enter_email () {
        emailInput().type('selma+1@gmail.com')
        return this;
    }

    enter_password () {
        passwordInput().type('Test123')
        return this;
    }

    click_login () {
        loginButton().click();
        return this;
    }
}
