import users from "../../fixtures/users.json";
import loginPage from "../../pages/Login/login.page";
import LoginPage from "../../pages/Login/login.page";
import productPage from "../../pages/Product/product.page";
import productSelectors from "../../pages/Product/product.selectors";

describe("To test product page", () => {

    beforeEach(() => {
        // preconditions
        loginPage.visit();
        LoginPage.login(users.valid.username, users.valid.password);

        cy.url().should("include", "/inventory.html");
        cy.get('.title').should('have.text', 'Products');
    });

    it("Filter validation A to Z", () => {
        productPage.Filtervalidate(productSelectors.Choose_AtoZ_option);

        productPage.getAllProductNames().then(($names) => {
            const uiNames = [...$names].map(el => el.innerText.trim());
            const sortedNames = [...uiNames].sort();
            expect(uiNames).to.deep.equal(sortedNames);
        });
    });

    it("Filter validation Z to A", () => {
        productPage.Filtervalidate(productSelectors.Choose_ZtoA_option);

        productPage.getAllProductNames().then(($names) => {
            const uiNames = [...$names].map(el => el.innerText.trim());
            const sortedNames = [...uiNames].sort().reverse();
            expect(uiNames).to.deep.equal(sortedNames);
        });
    });

    it("Filter validation low to high price", () => {
        productPage.Filtervalidate(productSelectors.Choose_LowToHigh_option);

        productPage.getAllProductprice().then(($prices) => {
            const uiPrices = [...$prices].map(el => Number(el.innerText.replace('$', '')));
            const sortedPrices = [...uiPrices].sort((a, b) => a - b);
            expect(uiPrices).to.deep.equal(sortedPrices);
            //el.innerText → "29.99"
            //.replace('$', '') → removes $
            // Number("29.99") → converts to number → 29.99
        });
    });


    it("Filter validation high to low price", () => {
        productPage.Filtervalidate(productSelectors.Choose_HighToLow_option);

        productPage.getAllProductprice().then(($prices) => {
            const uiPrices = [...$prices].map(el => Number(el.innerText.replace('$', '')));
            const sortedPrices = [...uiPrices].sort((a, b) => b - a);

            expect(uiPrices).to.deep.equal(sortedPrices);
        });
    });

});

