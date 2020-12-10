import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let

    addToCartButton = e => cy.get('[id="addToCart"]'),
    goToCartButton = e => cy.get('[ng-click="redirect(\'/en-US/cart\')"]'),
    containerLocator = e => cy.get('[class="wrapper main-content"]')
 // add comma on the previous line before adding new element selectors

export default class ProductDetailsPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Add_To_Cart_Button() {
        //addToCartButton().click({force:true});
        this.wait_element_to_be_visible(containerLocator)
        this.wait_element_to_be_enabled(addToCartButton)
        addToCartButton().click()
        return this;
    }
    click_Go_To_Cart_Button() {

        this.wait_element_to_be_enabled(goToCartButton)
        goToCartButton().click();
        return this;
    }
}
