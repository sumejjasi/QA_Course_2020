import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    emailInput = e => cy.get('#Email'),
    firstNameInput = e => cy.get('#FirstName'),
    lastNameInput = e => cy.get('#LastName'),
    companyInput = e => cy.get('#Organization'),   // OPTIONAL FIELD
    addressInput = e => cy.get('#Line1'),
    aptInput = e => cy.get('#Line2'),     // OPTIONAL FILED
    cityInput = e => cy.get('#City'),
    countryDropdown = e => cy.get('[ng-model="$ctrl.address.countryCode"]'),
    zipInput = e => cy.get('#PostalCode'),
    phoneInput = e => cy.get('#Phone'),    // OPTIONAL FILED
    nextStepButton = e => cy.get('[class="step__footer__continue-btn btn ng-scope"]'),
    radioButton = e => cy.get('[type="radio"]'),
    successfulOrderTitle = e => cy.get('body > main > div > h4')


export default class CheckoutPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    enter_email(email) {
        emailInput().type(email);
        return this;
    }

    select_country_from_dropdown() {
        countryDropdown().select("string:BIH");
        return this;
    }

    enter_Shipping_data(shippingData) {
        firstNameInput().type(shippingData.firstName);
        lastNameInput().type(shippingData.lastName);
        //company - optional, I will not enter it
        addressInput().type(shippingData.address);
        //apt - optional, I will not enter it
        cityInput().type(shippingData.city);
        this.select_country_from_dropdown();
        zipInput().type(shippingData.zipCode);
        //phone - optional, I will not enter it
        return this;
    }

    click_on_next_step_button() {
        nextStepButton().click();
        return this;
    }

    choose_shipping_method(){

        radioButton().first().check();
        return this;
    }


    get_title() {
        return successfulOrderTitle();
    }
}
