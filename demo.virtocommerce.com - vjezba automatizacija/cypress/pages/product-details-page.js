import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usernameInput = e => cy.get('#SpecificElementId'),
    passwordInput = e => cy.get('.specificElementClass'),
    addToCart = e => cy.get('#addToCart'),
    goToCart = e => cy.get('[ng-click="redirect(\'/en-US/cart\')"]')
 // add comma on the previous line before adding new element selectors

export default class ProductDetailsPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_add_to_cart_button () {
        this.wait_element_to_be_enabled(addToCart)
        addToCart().click();
        return this;
    }

verify_labels_upon_successful_add_to_cart () {
    this.verify_text_is_visible ('Product is added to cart')

}




    click_go_to_cart_button () {
        this.wait_element_to_be_enabled(goToCart)
        goToCart().click();
        return this;
    }
}
