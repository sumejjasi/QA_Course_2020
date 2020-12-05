import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    addToCartButton = e => cy.get('#addToCart'),
    goToCartButton = e => cy.get('[ng-click="redirect(\'/en-US/cart\')"')

 // add comma on the previous line before adding new element selectors

export default class ProductDetailsPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Add_To_Cart_button() {
       addToCartButton().click();
        return this;

    }

    click_Go_To_Cart_button() {
       goToCartButton().click()
        return this;

    }

}



