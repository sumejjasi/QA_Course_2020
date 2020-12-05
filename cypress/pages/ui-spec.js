import BasePage from "./base-page";
import PageTemplate from "./page-template";
import LoginPage from "./login-page";
import AccountRegistrationPage from "./account-registration-page";
import AccountProfilePage from "./account-profile-page";
import CartPage from "./cart-page";
import ProductDetailsPage from "./product-details-page";

let app = new BasePage();
let pageTemplate = new PageTemplate();
let loginPage = new LoginPage()
let accountRegistrationPage = new AccountRegistrationPage()
let productDetails = new ProductDetailsPage()
let cart = new CartPage()

module.exports = {
    app : app,
    pageTemplate : pageTemplate,
    loginPage : loginPage,
    accountRegistrationPage : accountRegistrationPage,
    productDetails : productDetails,
    cart : cart,
}
