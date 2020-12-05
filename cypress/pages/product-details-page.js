import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    addToCardButton = e => cy.get('#addToCart'),
    goToCardButton = e => cy.get('[ng-click="redirect(\'/en-US/cart\')"]'),
    productPhoto = e => cy.get('#productPhotoImg')
 // add comma on the previous line before adding new element selectors

export default class ProductDetailsPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Add_To_Cart_button() {
        this.wait_element_to_be_visible(productPhoto)
        this.wait_element_to_be_enabled(addToCardButton)
        addToCardButton().click()
        return this;
    }

    click_Go_To_Cart_button() {
        this.wait_element_to_be_enabled(goToCardButton)
        goToCardButton().click();
        return this;
    }
}
