import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usernameInput = e => cy.get('#SpecificElementId'),
    passwordInput = e => cy.get('.specificElementClass'),
    emailField = e => cy.get('#Email'),
    firstName = e => cy.get('#FirstName'),
    lastName = e => cy.get('#LastName'),
    companyField = e => cy.get('#Organization'),
    addressField = e => cy.get('#Line1'),
    appartmantField = e => cy.get('#Line2'),
    cityField = e => cy.get('#City'),
    countrySelect = e => cy.get('[name="Country"]'),
    postalCodeField = e => cy.get('#PostalCode'),
    phoneField = e => cy.get('#Phone'),
     shippingBtn = e => cy.get('[name="button"]')



 // add comma on the previous line before adding new element selectors

export default class CustomerShippingPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    enter_credentials(username, pass) {
        usernameInput().type(username);
        passwordInput().type(pass);
        return this;
    }


    enter_shipping_address(dataObject) {
         emailField().type(dataObject.email);
         firstName().type(dataObject.firstName);
         lastName().type(dataObject.lastName);
         companyField().type(dataObject.company);
         addressField().type(dataObject.address);
         appartmantField().type(dataObject.appartman);
         cityField().type(dataObject.city);
         countrySelect().select(dataObject.country);
         postalCodeField().type(dataObject.postal);
         phoneField().type(dataObject.phone);
        return this;
    }

    submit_shipping_address() {
        shippingBtn().click();
        return this;
    }

}
