import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let

    addToCartButton = e => cy.get('[class="btn btn-clearfix AddShopCart"]'),
    goToCartButton = e => cy.get('[ng-class="{ \'btn-secondary\': !dialogData.updated }"]')
 // add comma on the previous line before adding new element selectors

export default class ProductDetailsPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Add_To_Cart_Button() {
        addToCartButton().click();
        return this;
    }
    click_Go_To_Cart_Button() {
        goToCartButton().click();
        return this;
    }
}
