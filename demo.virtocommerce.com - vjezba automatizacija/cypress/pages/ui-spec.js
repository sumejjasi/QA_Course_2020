import BasePage from "./base-page";
import PageTemplate from "./page-template";
import CreatePage from "./create-page";
import AccountProfilePage from "./account-profile-page";
import ProductDetailsPage from "./product-details-page";
import CartPage from "./cart-page";
import CheckoutPage from "./checkout-page";
import SuccesfullyOrderedProduct from "./succesfully-ordered-product";

let app = new BasePage();
let pageTemplate = new PageTemplate();
let createPage = new CreatePage();
let accountprofilepage = new AccountProfilePage ();
let productdetailspage = new ProductDetailsPage ();
let cartpage = new CartPage ();
let checkout = new CheckoutPage()
let succesfullyorderedproduct = new SuccesfullyOrderedProduct()

module.exports = {
    app : app,
    pageTemplate : pageTemplate,
    createPage : createPage,
    accountprofilepage : accountprofilepage,
    productdetailspage : productdetailspage,
    cartpage : cartpage,
    checkout :checkout,
    succesfullyorderedproduct : succesfullyorderedproduct
}
