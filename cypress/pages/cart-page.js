import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    checkoutButton = e => cy.get('[ng-click="submitCart()"]')

 export default class CartPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Checkout() {
        this.wait_element_to_be_visible(checkoutButton)
        checkoutButton().click()
        return this;
    }
}
