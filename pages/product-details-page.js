import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    addToCardButton = e => cy.get('#addToCart'),
    goToCardButton = e => cy.get('[ng-disabled="!dialogData.updated"]')

 // add comma on the previous line before adding new element selectors

export default class ProductDetailsPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Add_To_Cart_button() {
        addToCardButton().click({force:true});
     this.wait_element_to_be_enabled(addToCardButton)
        addToCardButton().click()
        return this;
    }

    click_Go_To_Cart_button() {
        this.wait_element_to_be_enabled(goToCardButton)
        goToCardButton().click();

        return this;
    }




    wait_element_to_be_enabled() {

    }

}
