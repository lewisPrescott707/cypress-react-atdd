describe('List item', () => {
    it('should create new item in the list', () => {
      cy.visit('/');
  
      cy.get('[data-cy="messageText"]').type('New');
  
      cy.get('[data-cy="addBtn"]').click();
      
      cy.contains('New').should('be.visible');
    });
});
  