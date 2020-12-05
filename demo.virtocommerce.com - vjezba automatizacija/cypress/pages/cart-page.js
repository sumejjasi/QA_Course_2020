import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usernameInput = e => cy.get('#SpecificElementId'),
    passwordInput = e => cy.get('.specificElementClass'),
    checkoutButton= e => cy.get('[ng-click="submitCart()"]')
 // add comma on the previous line before adding new element selectors

export default class CartPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    verify_labels_upon_successful_clicking_on_cart_button () {
        this.verify_text_is_visible ('Shopping Cart')
        this.verify_text_is_visible ('You can quickly add a product to cart by entering its SKU or name in the field below')
    }

    click_on_checkout_button () {
        checkoutButton().click();
        return this;
    }
}
