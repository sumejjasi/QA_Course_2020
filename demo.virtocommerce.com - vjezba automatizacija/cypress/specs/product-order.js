const C = require('../fixtures/constants');
const S = require('../fixtures/settings');
const D = require('../fixtures/data');
const ui = require('../pages/ui-spec');

context('Order product', () => {

    it('Verify thah user can add product to cart, checkout and complete the order', function () {

        cy.visit('https://demo.virtocommerce.com');
        cy.wait(5000);
        ui.app.click(D.product.name)
        ui.productdetailspage.click_add_to_cart_button()
            .verify_labels_upon_successful_add_to_cart()
        ui.productdetailspage.click_go_to_cart_button()
        ui.cartpage.verify_labels_upon_successful_clicking_on_cart_button()
        ui.cartpage.click_on_checkout_button()
        ui.checkout.enter_values_to_all_input_fields(D.customerInformation)
        cy.get ('[ng-model="$ctrl.address.countryCode"]')
            .select('Albania');
        ui.checkout.click_on_shipping_button()
        cy.get('[type="radio"]').first().check()
        ui.checkout.click_payment_method_button()
            cy.wait(5000);
         ui.checkout.click_create_order_button()
        ui.succesfullyorderedproduct.verify_labels_upon_succesfully_ordered_product()

    })
});
