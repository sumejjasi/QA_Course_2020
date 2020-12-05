import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    addToCartButtonAyman = e => cy.get('[ng-click="addProductToCart(selectedVariation, 1)"]'),
    goToCartButtonAyman = e => cy.get('[ng-click="redirect(\'/en-US/cart\')"]')



export default class ProductDetailsPageAyman extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_add_to_cart_button_Ayman() {
        this.wait_element_to_be_enabled(addToCartButtonAyman)
        addToCartButtonAyman().click()

        return this;
    }

    click_go_to_cart_button_Ayman() {
        this.wait_element_to_be_enabled(goToCartButtonAyman)
        goToCartButtonAyman().click()

        return this;
    }

}
