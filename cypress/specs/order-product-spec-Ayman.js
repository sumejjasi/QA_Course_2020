const C = require('../fixtures/constants');
const S = require('../fixtures/settings');
const D = require('../fixtures/data');
const ui = require('../pages/ui-spec');

context('Order product Ayman', () => {

    it('Verify adding a product to cart, checkout, filling shipment info then completing the order', function () {

    ui.app.navigate_to(S.baseUrls.portal)
       // .click('Teac Cabasse CineOle Digital Home Cinema Audio System (Glossy Black)')
        .click('LG 55" (139 cm) 8K HDR Smart NanoCell TV')
    ui.productDetailsPAyman.click_add_to_cart_button_Ayman()
        .click_go_to_cart_button_Ayman()
    ui.cartPage.click_checkout_button()
        .enter_quantity_of_product()
    ui.checkoutPage.navigate_to('https://demo.virtocommerce.com/en-US/cart/checkout')
        .enter_information()
        .clicking_shipping_button()
        .checking_radio_button()
        .clicking_payment_method_button()
        .clicking_create_order_button()
        .confirmOrder('ORDER CO201208-00009')
    })
});
