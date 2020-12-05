import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    emailInput = e => cy.get('[name="Email"]'),
    firstnameInput = e => cy.get('[name="FirstName"]'),
    lastnameInput = e => cy.get('[name="LastName"]'),
    companyInput = e => cy.get('[name="Organization"]'),
    addressInput = e => cy.get('[name="Line1"]'),
    accommodationInput = e => cy.get('[name="Line2"]'),
    cityInput = e => cy.get('[name="City"]')


export default class checkoutPageAyman extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    enter_information() {
        emailInput().type('aymanhsherif@gmail.com');
        firstnameInput().type('Ayman');
        lastnameInput().type('Ali');
        companyInput().type('QA Course');
        addressInput().type('Every where');
        accommodationInput().type('Villa');
        cityInput().type('Visoko');

        return this;
    }
}
