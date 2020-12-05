const C = require('../fixtures/constants');
const S = require('../fixtures/settings');
const D = require('../fixtures/data');
const ui = require('../pages/ui-spec');

context('Order Product', () => {

    it('Verify that user can add product to cart, checkout and complete the order', function () {

        ui.app.navigate_to(S.baseUrls.portal)
            .click(D.product.name)
        ui.productDetails.click_Add_To_Cart_button()
            .click_Go_To_Cart_button()
        ui.cart.click_Checkout()
        ui.customerShippingPage.enter_shipping_address(D.shippingInfo).submit_shipping_address()
        ui.customerPaymentPage.select_payment_method().submit_payment_method().verify_text_is_visible("All transactions are secure and encrypted. Credit card information is never stored.")
    })
});
