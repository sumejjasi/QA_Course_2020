import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    quantityOfProduct = e => cy.get ('[ng-model="lineItem.quantity"]'),
    checkOutButtonAyman = e => cy.get ('[ng-click="submitCart()"]')

export default class cartPageAyman extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    enter_quantity_of_product() {
        quantityOfProduct().type('1');

        return this;
    }

    click_checkout_button() {
        checkOutButtonAyman().click();

        return this;
    }
}
