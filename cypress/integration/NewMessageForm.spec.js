import NewMessageForm from '../../src/NewMessageForm';
import React from 'react';
import { mount } from 'cypress-react-unit-test';

describe('<NewMessageForm />', () => {
  describe('clicking the save button', () => {
    beforeEach(() => {
      mount(<NewMessageForm />);

      cy.get("[data-test='messageText']")
        .type('New message');

      cy.get("[data-test='saveButton']")
        .click();
    });

    it('clears the text field', () => {
      cy.get("[data-test='messageText']")
        .should('have.value', '');
    });
  });
});
