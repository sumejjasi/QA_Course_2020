import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usernameInput = e => cy.get('#SpecificElementId'),
    passwordInput = e => cy.get('.specificElementClass'),
    testField = e => cy.get('[attributeName="attributeValue"]'),
    emailInput = e => cy.get('[id="Email"]'),
    firstNameInput = e => cy.get('[id="FirstName"]'),
    lastNameInput = e => cy.get('[id="LastName"]'),
    addressInput = e => cy.get('[id="Line1"]'),
    cityNameInput = e => cy.get('[id="City"]'),
    countryNameInput = e => cy.get('[ng-model="$ctrl.address.countryCode"]'),
    postalCodeInput = e => cy.get('[id="PostalCode"]'),
    shippingMethodButton = e => cy.get('[class="step__footer__continue-btn btn ng-scope"]'),
    fixedRateGroundButton = e => cy.get('[id="FixedRate:Ground"]'),
    paymentMethodButton = e => cy.get('[class="step__footer__continue-btn btn ng-scope"]'),
    successufullOrderTitle = e => cy.get('[ng-controller="orderController"]')
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
    enter_valid_customer_information(customerInformation) {

        firstNameInput().type(customerInformation.firstName);
        lastNameInput().type(customerInformation.lastName);
        cityNameInput().type(customerInformation.cityName);
        addressInput().type(customerInformation.address);
        countryNameInput().select('string:BIH');
        postalCodeInput().type(customerInformation.postalCode);

        return this;

   // }
    //select_from_dropdown_list() {
        //cy.get('select')
           // .select('Select country').should('have.value', '"string:BIH"');

       // return this;

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
        return successufullOrderTitle();
    }
    verify_subtext_(text) {
        this.verify_text(successufullOrderTitle, text);
    }
}
