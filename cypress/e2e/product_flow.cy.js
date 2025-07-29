describe('Product Search and Add to Cart', () => {
  it('should search for T-shirt and add to cart', () => {
    // Visit the main page of the AutomationExercise website
    cy.visit('https://automationexercise.com/');

    // Click on the "Products" menu link (second item in the nav list)
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();

    // Type "T-shirt" into the product search input field
    cy.get('#search_product').type('T-shirt');

    // Click the "Search" button
    cy.get('#submit_search').click();

    // Check if any of the product listings contain the text "T-Shirt"
    cy.get('.productinfo').should('contain.text', 'T-Shirt');

    // Show the overlay of the first visible product (so the "Add to cart" button appears)
    cy.get('.product-overlay').first().invoke('show');

    // Click the "Add to cart" button on the first product
    cy.contains('Add to cart').click();

    // Click the "View Cart" button from the modal that appears
    cy.contains('View Cart').click();

    // Verify that the cart description contains the text "T-Shirt"
    cy.get('.cart_description').should('contain.text', 'T-Shirt');
  });
});
