const C = require('../fixtures/constants');
const S = require('../fixtures/settings');
const D = require('../fixtures/data');
const ui = require('../pages/ui-spec');

context('Order Product', () => {

    it('Verify that user can add product to the cart, checkout and complete the order', function () {
        ui.app.navigate_to(S.baseUrls.portal)
            .click('Teac Cabasse CineOle Digital Home Cinema Audio System (Glossy Black)')
        ui.productDetailsIlhana.click_add_to_cart_button()
            .click_go_to_cart_button()
        ui.cartIlhana.click_Checkout()

    })
});
