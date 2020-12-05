import BasePage from "./base-page";
import PageTemplate from "./page-template";
import LoginPage from "./login-page";
import AccountProfilePage from "./account-profile-page";
import AccountRegistrationPage from "./account-registration-page";
import ProductDetailsPage from "./product-details-page";
import CartPage from "./cart-page";

let app = new BasePage();
let pageTemplate = new PageTemplate();
let loginPage = new LoginPage();
let accountProfile = new AccountProfilePage();
let accountRegistrationPage = new AccountRegistrationPage();
let productDetails = new ProductDetailsPage();
let cart = new CartPage();


module.exports = {
    app : app,
    pageTemplate : pageTemplate,
    loginPage : loginPage,
    accountRegistrationPage : accountRegistrationPage,
    accountProfile : accountProfile,
    productDetails : productDetails,
    cart: cart,
}
