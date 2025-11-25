import logoutSelectors from "./logout.selectors";
import loginPage from "../Login/login.page";
import users from "../../fixtures/users.json";

class LogoutPage {

    logout() {
        cy.get(logoutSelectors.menuButton).click();
        cy.get(logoutSelectors.logoutBtn).click();
    }

    loginValidCredential() {
        loginPage.login(users.valid.username, users.valid.password);
        cy.url().should("include", "inventory.html");
        cy.get('.title').should('have.text', 'Products');
    }
}




export default new LogoutPage();
