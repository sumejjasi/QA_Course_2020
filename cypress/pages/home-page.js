import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    GridSoldOut = e => cy.get('.large--one-fifth medium--one-third small--one-half'),
    BadgeSoldOut = e => cy.get('.badge--sold-out'),
    AddToCartButtonHome = e => cy.get('.AddShopCart').first(),
    passwordInput = e => cy.get('.specificElementClass'),
    testField = e => cy.get('[attributeName="attributeValue"]')
 // add comma on the previous line before adding new element selectors

export default class HomePage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    clickFirstElement(element) {
        cy.get(AddToCartButtonHome);
        AddToCartButtonHome().click();
        return this;
    };

}
