describe('Check rahulshettyacademy.com', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
  });

  it('Check buying functionality', () => {
    cy.get('.product:nth-child(1)>.stepper-input>.increment').click();
    cy.get('.product:nth-child(1)>.stepper-input>input').should('have.value', 2);
    cy.get('.product:nth-child(1)>.product-action>button').click();
    cy.get('.cart-icon').click();
    cy.get('.cart-preview.active').should('be.visible');
    cy.get('li.cart-item>.product-info >.product-name').first().should('have.text', 'Brocolli - 1 Kg');
    cy.get('li.cart-item>.product-info >.product-price').first().should('have.text', '120')
    cy.get('li.cart-item>.product-total>.quantity').first().should('have.text', '2 Nos. ');
    cy.get('li.cart-item>.product-total>.amount').first().should('have.text', '240');
    cy.get('.cart-preview.active>.action-block>button').click();
    cy.get('td > .product-name').should('have.text', 'Brocolli - 1 Kg');
    cy.get('.promoCode').click().type('test').should('have.value', 'test');
    cy.contains('Apply').click();
    cy.wait(4000);
    cy.get('.promoInfo').should('have.text', 'Invalid code ..!');
    cy.contains('Place Order').click();
    cy.get('.wrapperTwo > div > select').select('Armenia').should('have.value', 'Armenia');
    cy.get('.chkAgree').click().should('be.checked');
    cy.contains('Proceed').click();
  });
});