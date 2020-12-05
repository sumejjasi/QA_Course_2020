const C = require('../fixtures/constants');
const S = require('../fixtures/settings');
const D = require('../fixtures/data');
const ui = require('../pages/ui-spec');

context('Order Product', () => {

    it('Verify that user can add product to cart, checkout and complete the order', function () {



        ui.app.navigate_to(S.baseUrls.portal + '/cell-phones')
            .click('ASUS ZenFone 2 ZE551ML 16GB Smartphone')
        ui.productDetails.click_Add_To_Cart_button()
            .click_Go_To_Cart_button()
        ui.cart.click_Checkout()
        ui.checkoutPage.enter_email(D.newUser.email)
            .enter_Shipping_data(D.shippingData)
            .click_on_next_step_button()
            .choose_shipping_method()
            .click_on_next_step_button() //payment method - nothing to choose on this site, so we proceed
            .click_on_next_step_button() //button for create order
            .verify_text_is_visible('ASUS ZenFone 2 ZE551ML 16GB Smartphone')
            .verify_subtext(C.labels.successfulOrder.order)
           // .verify_subtext_is_visible(ui.chec koutPage.get_title(), C.labels.successfulOrder.order)

    })
});
