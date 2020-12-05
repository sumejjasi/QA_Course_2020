import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    emailInput = e => cy.get('[name="Email"]'),
    firstnameInput = e => cy.get('[id="FirstName"]'),
    lastnameInput = e => cy.get('[id="LastName"]'),
    companyInput = e => cy.get('[id="Organization"]'),
    addressInput = e => cy.get('[id="Line1"]'),
    accommodationInput = e => cy.get('[id="Line2"]'),
    cityInput = e => cy.get('[id="City"]'),
    countryInput = e => cy.get('[name="Country"]'),
    postalInput = e => cy.get('[id="PostalCode"]'),
    phoneInput = e => cy.get('[id="Phone"]'),
    shippingButton = e => cy.get('[name="button"]')



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
        countryInput().select("string:BIH");
        postalInput().type('71300');
        phoneInput().type('062464112');

        return this;
    }
    clicking_shipping_button() {
        shippingButton().click()
        return this;
    }

}
