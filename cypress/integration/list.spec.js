describe('List item', () => {
    it('should create new item in the list', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[data-cy="messageText"]').type('New');
  
      cy.get('[data-cy="submitBtn"]').click();
      
      cy.contains('New');
    });
});
  