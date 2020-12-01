import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    addToCardButton = e => cy.get('#addToCart'),
    goToCardButton = e => cy.get('[ng-click="redirect(\'/en-US/cart\')"]')
 // add comma on the previous line before adding new element selectors

export default class ProductDetailsPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Add_To_Cart_button() {
        addToCardButton().click({force: true});
        return this;
    }

    click_Go_To_Cart_button() {
        goToCardButton().click();
        return this;
    }
}
