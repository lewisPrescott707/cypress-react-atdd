describe('New Item form', () => {
  it('should remove text from input when submitted', () => {
    cy.visit('/');

    cy.get('[data-cy="messageText"]').type('New');

    cy.get('[data-cy="addBtn"]').click();

    cy.get('[data-cy="messageText"]').should('have.value', '');
  });
});
