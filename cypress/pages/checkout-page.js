import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usernameInput = e => cy.get('#SpecificElementId'),
    passwordInput = e => cy.get('.specificElementClass'),
    testField = e => cy.get('[attributeName="attributeValue"]'),
    emailInput = e => cy.get('[id="Email"]'),
    firstNameInput = e => cy.get('[id="FirstName"]'),
    lastNameInput = e => cy.get('[id="LastName"]'),
    cityNameInput = e => cy.get('[id="City"]'),
    countryNameInput = e => cy.get('[ng-model="$ctrl.address.countryCode"]'),
    postalCodeInput = e => cy.get('[id="PostalCode"]'),
    shippingMethodButton = e => cy.get('[class="step__footer__continue-btn btn ng-scope"]'),
    fixedRateGroundButton = e => cy.get('[id="FixedRate:Ground"]'),
    paymentMethodButton = e => cy.get('[class="step__footer__continue-btn btn ng-scope"]')
 // add comma on the previous line before adding new element selectors

export default class CheckoutPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    enter_email(email) {
        emailInput().type(email);

        return this;
    }
    enter_valid_customer_information() {

        firstNameInput().type(D.customerInformation.firstName)
        lastNameInput().type(D.customerInformation.lastName)
        cityNameInput().type(D.customerInformation.cityName)
        postalCodeInput().type(D.customerInformation.postalCode)

        return this;
    }

    click_country_from_dropdown_list() {
        this.select_country_from_dropdown_list()
        countryNameInput().select('"string:BIH"')


        return this;
    }

    click_shipping_method_button() {
       shippingMethodButton().click()
        return this;
    }

    click_fixed_rate_button() {
        fixedRateGroundButton().click();
        return this;
    }
    click_payment_method_button() {
        paymentMethodButton().click();
        return this;
    }
    get_title() {
        return successufulOrderTitle();
    }
    verify_heading(text) {
        this.verify_text(successfulOrderTitle, text);
    }
}
