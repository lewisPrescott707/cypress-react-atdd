import NewMessageForm from '../../src/NewMessageForm';
import React from 'react';
import { mount } from 'cypress-react-unit-test';

describe('<NewMessageForm />', () => {
  describe('clicking the save button', () => {
    let spy;

    beforeEach(() => {
      spy = cy.spy();
      mount(<NewMessageForm onSave={spy} />);

      cy.get("[data-test='messageText']")
        .type('New message');

      cy.get("[data-test='saveButton']")
        .click();
    });

    it('clears the text field', () => {
      cy.get("[data-test='messageText']")
        .should('have.value', '');
    });

    it('emits the "save" event', () => {
      expect(spy).to.have.been.calledWith('New message');
    });
  });
});
