import BasePage from "./base-page";
import PageTemplate from "./page-template";
import LoginPage from "./login-page";
import AccountRegistrationPage from "./account-registration-page";
import AccountProfilePage from "./account-profile-page";
import ProductDetailsPage from "./product-details-page";
import CartPage from "./cart-page";
import CheckoutPage from "./checkout-page";

let app = new BasePage();
let pageTemplate = new PageTemplate();
let loginPage = new LoginPage()
let accountRegistrationPage = new AccountRegistrationPage()
let accountProfile = new AccountProfilePage()
let productDetailsPage = new ProductDetailsPage()
let cartPage = new CartPage()
let checkoutPage = new CheckoutPage()

module.exports = {
    app : app,
    pageTemplate : pageTemplate,
    loginPage : loginPage,
    accountRegistrationPage : accountRegistrationPage,
    accountProfile : accountProfile,
    productDetailsPage : productDetailsPage,
    cartPage : cartPage,
    checkoutPage : checkoutPage,

}
