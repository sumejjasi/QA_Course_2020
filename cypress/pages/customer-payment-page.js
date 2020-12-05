import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usernameInput = e => cy.get('#SpecificElementId'),
    passwordInput = e => cy.get('.specificElementClass'),
    fixedRate = e => cy.get('[id="FixedRate:Ground"]'),
    paymentBtn = e => cy.get('[name="button"]')

 // add comma on the previous line before adding new element selectors

export default class CustomerPaymentPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    enter_credentials(username, pass) {
        usernameInput().type(username);
        passwordInput().type(pass);
        return this;
    }

    select_payment_method() {
        cy.wait(8000)
        //this.wait_element_to_be_visible(fixedRate);
        fixedRate().click();
        return this;
    }


    submit_payment_method() {
        paymentBtn().click();
        return this;
    }
}
