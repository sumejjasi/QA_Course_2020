import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    checkoutButton = e => cy.get('[ng-click="submitCart()"]')


export default class CartIlhanaPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Checkout(){
        checkoutButton().click()
        return this;
    }
}
