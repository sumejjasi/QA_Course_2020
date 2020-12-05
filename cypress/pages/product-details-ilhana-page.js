import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let

    addToCartButton = e => cy.get('[id="addToCart"]'),
    goToCartButton = e => cy.get('[ng-click="redirect(\'/en-US/cart\')"]'),
    productPhoto = e => cy.get('[id="productPhotoImg"]')
 // add comma on the previous line before adding new element selectors

export default class ProductDetailsIlhanaPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************
    click_add_to_cart_button() {
        this.wait_element_to_be_visible(productPhoto)
        this.wait_element_to_be_enabled(addToCartButton)
        addToCartButton().click();
        return this;
    }
    click_go_to_cart_button() {
        this.wait_element_to_be_enabled(goToCartButton)
        goToCartButton().click();
        return this;

    }

}
