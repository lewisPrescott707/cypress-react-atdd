describe('New Item form', () => {
  it('should remove text from input when submitted', () => {
    cy.visit('http://localhost:3000');
    
    cy.get('[data-cy="messageText"]').type('New');

    cy.get('[data-cy="submitBtn"]').click();

    cy.get('[data-cy="messageText"]').should('have.value', '');
  });
});
