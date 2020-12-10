const C = require('../fixtures/constants');
const S = require('../fixtures/settings');
const D = require('../fixtures/data');
const ui = require('../pages/ui-spec');

context('Order product', () => {

    it('Verify that user can add product to the cart, checkout and complete the order', function () {

        ui.app.navigate_to(S.baseUrls.portal + '/en-US/camcorders')
            .click(D.product.name)

        ui.productDetailsPage.click_Add_To_Cart_Button()
            .click_Go_To_Cart_Button()

        ui.cartPage.click_Checkout_button()

        ui.checkoutPage.enter_email(D.newUser.email)

            .enter_valid_customer_information(D.customerInformation)
           //.select_from_dropdown_list()
            .click_shipping_method_button()
            .click_fixed_rate_button()
            .click_payment_method_button()
            .verify_text_is_visible(D.product.name)
            .verify_subtext_(C.labels.successfulOrder.order)
            //.verify_heading(C.labels.successfulOrder.order)






    })
});
