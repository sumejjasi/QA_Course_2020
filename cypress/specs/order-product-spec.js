const C = require('../fixtures/constants');
const S = require('../fixtures/settings');
const D = require('../fixtures/data');
const ui = require('../pages/ui-spec');

context('Order Product', () => {

    it('Verify that user can add product to cart, checkout and complete the order', function () {

        ui.app.navigate_to(S.baseUrls.portal)
          //  .click(D.product.name)
        ui.homePage.clickFirstElement()
        ui.productDetails.click_Add_To_Cart_Button()
        ui.productDetails.click_Go_To_Cart_Button()
        ui.cart.click_Checkout()
        ui.checkoutPage.enter_customer_info(D.newUser)
            .choose_shipping_method()
            .choose_payment_method()

        ui.checkoutPage.verify_the_order_is_successful()
    })
});
