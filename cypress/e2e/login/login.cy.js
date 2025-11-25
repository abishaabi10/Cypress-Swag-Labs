import LoginPage from "../../pages/Login/login.page";
import users from "../../fixtures/users.json";
describe('Login Module', { tags: ['smoke'] }, () => {

  it("Invalid Login", () => {
    LoginPage.visit();
    LoginPage.login(users.invalid.username, users.invalid.password);

    LoginPage.verifyErrorMessage("Username and password do not match");
  });

  it("Valid Login", () => {
    LoginPage.visit();
    LoginPage.login(users.valid.username, users.valid.password);
    cy.url().should("include", "inventory.html");
  });
  //  it('Validate successful Logout', function () {
  //           cy.logout()
  //       })
});
