import productSelectors from "./product.selectors"; 
require('cypress-xpath');

class ProductPage {
    
    getProductCount() {
        return cy.get(productSelectors.productItems).its('length');
    }

    Filtervalidate(option) {
        cy.get(productSelectors.Filter_Btn).select(option); 
    }

    getAllProductNames() {
        return cy.get('.inventory_item_name');
    }

      getAllProductprice() {
        return cy.get('.inventory_item_price');
    }
}

export default new ProductPage();
