import selectors from "./login.selectors";
class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    enterUsername(username) {
        cy.get(selectors.usernameField).clear().type(username);
    }

    enterPassword(password) {
        cy.get(selectors.passwordField).clear().type(password);
    }

    clickLoginBtn() {
        cy.get(selectors.loginBtn).click();
    }

    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginBtn();
    }

    verifyErrorMessage(message) {
        cy.get(selectors.errorMsg).should('contain', message);
    }
}

export default new LoginPage();
