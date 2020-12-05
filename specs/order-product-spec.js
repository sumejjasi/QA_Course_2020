const C = require('../fixtures/constants');
const S = require('../fixtures/settings');
const D = require('../fixtures/data');
const ui = require('../pages/ui-spec');

context('Order Product', () => {

    it('Verify that user can add product to cart,checkout and complete the order', function () {

        ui.app.navigate_to(S.baseUrls.portal)
            .click(D.product.name)
        ui.productDetails.click_Add_To_Cart_button()
            .click_Go_To_Cart_button()
        ui.cart.click_Checkout()

    })
});



