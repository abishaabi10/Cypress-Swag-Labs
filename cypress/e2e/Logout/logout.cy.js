import loginPage from "../../pages/Login/login.page";
import logoutPage from "../../pages/Logout/logout.page";

describe("Logout", () => {
    it("Logout functionality", () => {
        loginPage.visit();
        logoutPage.loginValidCredential();
        logoutPage.logout();
    });
});
