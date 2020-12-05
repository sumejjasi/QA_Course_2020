import BasePage from "./base-page";
import PageTemplate from "./page-template";
import LoginPage from "./login-page";
import AccountRegistrationPage from "./account-registration-page";
import AccountProfilePage from "./account-profile-page";
import ProductDetailsPage from "./product-details-page";
import CartPage from "./cart-page";
import ProductDetailsPageAyman from "./product-details-page-Ayman";
import cartPageAyman from "./cart-page-Ayman";
import checkoutPageAyman from "./checkout-page-Ayman";

let app = new BasePage();
let pageTemplate = new PageTemplate();
let loginPage = new LoginPage()
let accountRegistrationPage = new AccountRegistrationPage()
let accountProfile = new AccountProfilePage()
let productDetails = new ProductDetailsPage()
let cart = new CartPage()
let productDetailsAyman = new ProductDetailsPageAyman()
let cartPage = new cartPageAyman()
let checkoutPage = new checkoutPageAyman()


module.exports = {
    app : app,
    pageTemplate : pageTemplate,
    loginPage : loginPage,
    accountRegistrationPage : accountRegistrationPage,
    accountProfile : accountProfile,
    productDetails : productDetails,
    cart : cart,
    productDetailsPAyman : productDetailsAyman,
    cartPage : cartPage,
    checkoutPage : checkoutPage,
}
