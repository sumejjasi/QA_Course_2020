import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let

    checkoutButton = e => cy.get('[ng-click="submitCart()"]')
 // add comma on the previous line before adding new element selectors

export default class CartPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Checkout_button() {
        checkoutButton().click();
        return this;
    }
}
