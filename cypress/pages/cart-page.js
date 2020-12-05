import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    checkoutButton = e => cy.get('[ng-class="{ \'btn\': !cartIsUpdating, \'btn-secondary\': cartIsUpdating || errorOccured || !cart.isValid }"]')

export default class CartPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Checkout() {
        this.wait_element_to_be_enabled(checkoutButton);
        checkoutButton().click();
        return this;
    }
}
