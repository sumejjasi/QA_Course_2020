import BasePage from "./base-page";
import PageTemplate from "./page-template";
import LoginPage from "./login-page";
import AccountRegistrationPage from "./account-registration-page";
import AccountProfilePage from "./account-profile-page";
import ProductDetailsPage from "./product-details-page";
import CartPage from "./cart-page";
import CartIlhanaPage from "./cart-ilhana-page";
import ProductDetailsIlhanaPage from "./product-details-ilhana-page";

let app = new BasePage();
let pageTemplate = new PageTemplate();
let loginPage = new LoginPage()
let accountRegistrationPage = new AccountRegistrationPage()
let accountProfile = new AccountProfilePage()
let productDetails = new ProductDetailsPage()
let cart = new CartPage()
let cartIlhana = new CartIlhanaPage()
let productDetailsIlhana = new ProductDetailsIlhanaPage()

module.exports = {
    app : app,
    pageTemplate : pageTemplate,
    loginPage : loginPage,
    accountRegistrationPage : accountRegistrationPage,
    accountProfile : accountProfile,
    productDetails : productDetails,
    cart : cart,
    cartIlhana: cartIlhana,
    productDetailsIlhana : productDetailsIlhana
}
