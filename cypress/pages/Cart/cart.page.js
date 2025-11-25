import cartSelector from "./cart.selector";
import selectors from "./cart.selector";

class CartPage {

    addProductToCart() {
        cy.get(selectors.addToCartBtn).first().click();
    }

    openCart() {
        cy.get(selectors.cartIcon).click();
    }

    verifyCartBadge(count) {

        if (count === 0) {
            // When count = 0 → badge should NOT exist
            cy.get(selectors.cartBadge).should("not.exist");
        }
        else {
            // When count > 0 → badge must exist and show correct count
            cy.get(selectors.cartBadge)
                .should("be.visible")
                .and("have.text", count.toString());
        }
    }

    verifyCartItemCount(count) {
        if (count === 0) {
            // When count = 0 → badge should NOT exist
            cy.get(selectors.cartBadge).should("not.exist");
        }
        else {
            // When count > 0 → badge must exist and show correct count
            cy.get(selectors.cartBadge)
                .should("be.visible")
                .and("have.text", count.toString());
        }
    }

    verifyCartHeader() {
        cy.get(selectors.cartpageTitle).should("have.text", "Your Cart");
    }


    verifyProductName(name) {
        cy.get(selectors.productName).should("contain.text", name);
    }

    verifyProductPrice(price) {
        cy.get(selectors.productPrice).should("contain.text", price);
    }

    removeProduct() {
        cy.get(selectors.removeBtn).click();
    }

    continueShopping() {
        cy.get(selectors.continueShoppingBtn).click();
    }

    clickCheckout() {
        cy.get(selectors.checkoutBtn).click();
    }

    verifyCheckoutHeader() {
        cy.get(selectors.pageTitle).should("have.text", "Checkout: Your Information");
    }

    submitCheckoutWithoutData() {
        cy.get(selectors.continueBtn).click();
    }

    verifyErrorMessage(msg) {
        cy.get(selectors.errorMsg).should("have.contain", msg);
    }

    cancelCheckout() {
        cy.get(selectors.cancelBtn).click();
    }


    fillCheckoutInformation() {
        cy.get(selectors.firstName).type("Abisha");
        cy.get(selectors.lastName).type("Murugesan");
        cy.get(selectors.postalCode).type("627106");
        cy.get(selectors.continueBtn).click();
    }

    finishCheckout() {
        cy.get(selectors.finishBtn).click();
    }
    overViewValidation() {
        cy.get(cartSelector.overViewPageHeader).should("have.text", "Checkout: Overview");
        cy.get(cartSelector.paymentInformation).should("have.text", "Payment Information:");
        cy.get(cartSelector.ShippingInformation).should("have.text", "Shipping Information:");


    }
    completedBageValidation() {
        cy.get(cartSelector.completedPageTitle).should("have.text", "Checkout: Complete!");
        cy.get(cartSelector.completedTqxtext).should("have.text", "Thank you for your order!");
    }
    goBackBtn() {
        cy.get(cartSelector.goBackBtn).click();
        cy.url().should("include", "/inventory.html");
        cy.get('.title').should('have.text', 'Products');
    }
}

export default new CartPage();
