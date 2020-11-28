import BasePage from "./base-page";
import PageTemplate from "./page-template";
import LoginPage from "./login-page";
import AccountRegistrationPage from "./account-registration-page";
import AccountProfilePage from "./account-profile-page";

let app = new BasePage();
let pageTemplate = new PageTemplate();
let loginPage = new LoginPage()
let accountRegistrationPage = new AccountRegistrationPage()
let accountProfile = new AccountProfilePage()

module.exports = {
    app : app,
    pageTemplate : pageTemplate,
    loginPage : loginPage,
    accountRegistrationPage : accountRegistrationPage,
    accountProfile : accountProfile,
}
