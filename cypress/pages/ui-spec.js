import BasePage from "./base-page";
import PageTemplate from "./page-template";
import LoginPage from "./login-page";
import RegistrationPage from "./registration-page";
import AccountProfilePage from "./account-profile-page";
import ProductDetailsPage from "./product-details-page";
import CartPage from "./cart-page";
import HomePage from "./home-page";
import CheckoutPage from "./checkout-page";

let app = new BasePage();
let pageTemplate = new PageTemplate();
let loginPage = new LoginPage();
let registrationPage = new RegistrationPage()
let accountProfilePage =  new AccountProfilePage()
let productDetails = new ProductDetailsPage()
let cart = new CartPage()
let homePage = new HomePage()
let checkoutPage = new CheckoutPage()

module.exports = {
    app : app,
    pageTemplate : pageTemplate,
    loginPage : loginPage,
    registrationPage : registrationPage,
    accountProfilePage : accountProfilePage,
    productDetails : productDetails,
    cart : cart,
    homePage : homePage,
    checkoutPage : checkoutPage


}
