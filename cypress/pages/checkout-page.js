import BasePage from "./base-page";
const D = require('../fixtures/data');

// *************************** ELEMENTS ***************************
let
    emailInput = e => cy.get('#Email'),
    firstNameInput = e => cy.get('#FirstName'),
    lastNameInput = e => cy.get('#LastName'),
    addressInput = e => cy.get('#Line1'),
    cityInput = e => cy.get('#City'),
    //countryDropdown = e => cy.get('select'), - check with Sumejja why it doesn't work when use it as defined element
    zipCodeInput = e => cy.get('#PostalCode'),
    checkoutNextStepButton = e => cy.get('[ng-click="$ctrl.nextStep()"]'),
    shippingMethodRadioButton = e => cy.get('.input-radio'),
    successfulOrder = e => cy.get('.main-content').find('h4'),
    paymentMethodCheckoutBox = e => cy.get('.input-checkbox')

export default class CheckoutPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    enter_customer_info() {
        emailInput().type(D.newUser.email);
        firstNameInput().type(D.newUser.firstName);
        lastNameInput().type(D.newUser.lastName);
        addressInput().type(D.newUser.address);
        cityInput().type(D.newUser.city);
        //cy.get(countryDropdown).click();
        cy.get('select').select('string:BIH');
        zipCodeInput().type(D.newUser.zipCode);
        checkoutNextStepButton().click();
        return this;
    }

    choose_shipping_method() {
        shippingMethodRadioButton().first().check();
        this.wait_element_to_be_enabled(checkoutNextStepButton);
        checkoutNextStepButton().click();
        return this;
    }

    choose_payment_method() {
        paymentMethodCheckoutBox().check();
        paymentMethodCheckoutBox().check();
        this.wait_element_to_be_enabled(checkoutNextStepButton);
        checkoutNextStepButton().click();
        return this;
    }

    verify_the_order_is_successful(element, value) {
        this.verify_text(successfulOrder, 'Order');
        return this;
    }


    /*verify_the_order_is_successful() {
        expect(successfulOrder).to.contain('Order');
        return this;
    }*/
}
