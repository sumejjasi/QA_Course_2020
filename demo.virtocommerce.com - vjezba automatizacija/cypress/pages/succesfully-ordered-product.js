import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usernameInput = e => cy.get('#SpecificElementId'),
    passwordInput = e => cy.get('.specificElementClass'),
    testField = e => cy.get('[attributeName="attributeValue"]')

 // add comma on the previous line before adding new element selectors

export default class SuccesfullyOrderedProduct extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    verify_labels_upon_succesfully_ordered_product(dataObject) {
        this.verify_text_is_visible('Product')
        this.verify_text_is_visible('E-flite Carbon-Z Cub BNF Basic')
        this.verify_text_is_visible('SKU')
        this.verify_text_is_visible('EFL10450')
        this.verify_text_is_visible('Price')
        this.verify_text_is_visible('Quantity')
        this.verify_text_is_visible('Total')
}
}
