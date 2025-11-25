import loginPage from "../../pages/Login/login.page";
import users from "../../fixtures/users.json";
import cartPage from "../../pages/Cart/cart.page";

describe('Cart Module', { tags: ['functional'] }, () => {

    beforeEach(() => {
        loginPage.visit();
        loginPage.login(users.valid.username, users.valid.password);
        cy.get(".title").should("have.text", "Products");
    });

    // Reusable function
    const validateCartPositive = () => {
        cartPage.addProductToCart();
        cartPage.openCart();
        cartPage.verifyCartBadge(1);
        cartPage.verifyCartHeader();
        cartPage.verifyProductName("Sauce Labs Backpack");
        cartPage.verifyProductPrice("$29.99");
        cartPage.verifyCartItemCount(1);
    };

    it("Validate cart positive", () => {
        validateCartPositive();
    });

    it("Remove product from cart", () => {
        validateCartPositive();
        cartPage.removeProduct();
        cartPage.verifyCartBadge(0);
        cartPage.verifyCartItemCount(0);
        cartPage.continueShopping();
        cy.get(".title").should("have.text", "Products");
        cy.url().should("include", "/inventory.html");
    });

    it("Checkout negative", () => {
        validateCartPositive();
        cartPage.clickCheckout();
        cartPage.verifyCheckoutHeader();
        cartPage.submitCheckoutWithoutData();
        cartPage.verifyErrorMessage("Error: First Name is required");
        cartPage.cancelCheckout();
        cartPage.verifyCartHeader();
    });

    it("Checkout positive", () => {
        validateCartPositive();
        cartPage.clickCheckout();
        cartPage.verifyCheckoutHeader();
        cartPage.fillCheckoutInformation();

        //verify overviwe
        cartPage.overViewValidation();
        cartPage.finishCheckout();
        cartPage.completedBageValidation();
        cartPage.goBackBtn();
        //verify completed page

    });

    afterEach(() => {
        // CLEANUP in a safe way
        cy.get("body").then(($body) => {
            if ($body.find("[data-test='remove-sauce-labs-backpack']").length) {
                cartPage.removeProduct();
            }
        });
    });

});
