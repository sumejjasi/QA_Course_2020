import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usernameInput = e => cy.get('#SpecificElementId'),
    passwordInput = e => cy.get('.specificElementClass'),
    emailInput = e => cy.get('#Email'),
    firstNameInput = e => cy.get('#FirstName'),
    lastNameInput = e => cy.get('#LastName'),
    companyInput = e => cy.get('#Organization'),
    addressInput = e => cy.get('#Line1'),
    cityInput = e => cy.get('#City'),
    zipInput = e => cy.get('#PostalCode'),
    phoneInput = e => cy.get('#Phone'),
    shippingMethodButton = e => cy.get('[ng-click="$ctrl.nextStep()"]'),
    radioButton = e => cy.get('[type="radio"]'),
    paymentMethodButton = e => cy.get('[ng-click="$ctrl.nextStep()"]'),
    createOrderButton = e => cy.get('[ng-if="$ctrl.currentStep.nextStep"]')


 // add comma on the previous line before adding new element selectors

export default class CheckoutPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    verify_labels_upon_succesful_customer_information(dataObject) {
        //this.verify_text_is_visible('Electronics')
        this.verify_text_is_visible('Customer information')

        // used only for verifying 'typed text' into 'input' fields
        // make sure to skip () after the element sector that you pass
        //this.verify_value(emailInput, dataObject.email)
        //this.verify_value(firstNameInput, dataObject.firstName)
        //this.verify_value(lastNameInput, dataObject.lastName)
        //this.verify_value(companyInput, dataObject.company)
        //this.verify_value(addressInput, dataObject.address)
       // this.verify_value(cityInput, dataObject.city)
       // this.verify_value(zipInput, dataObject.zip)
        //this.verify_value(phoneInput, dataObject.phone)

        //return this;
    //}
    }

    enter_values_to_all_input_fields (dataObject) {
        emailInput().type(dataObject.email)
        firstNameInput().type(dataObject.firstName)
        lastNameInput().type(dataObject.lastName)
        companyInput().type(dataObject.company)
        addressInput().type(dataObject.address)
        cityInput().type(dataObject.city)
        zipInput().type(dataObject.zip)
        phoneInput().type(dataObject.phone)
        return this;
    }

    click_on_shipping_button () {
        shippingMethodButton().click()
        return this;
    }

    choose_shipping_method () {
    radioButton().first().check()
    return this;
    }

    click_payment_method_button () {
    paymentMethodButton().click()
    return this;
    }

    click_create_order_button () {
    this.wait_element_to_be_enabled(createOrderButton)
        createOrderButton().click()
    return this;
    }


}


