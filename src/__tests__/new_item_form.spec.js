import React from 'react';
import { configure, render, fireEvent, cleanup } from '@testing-library/react';
import NewListItemForm from '../NewListItemForm';

describe('<NewListItemForm />', () => {
  let onItemChange;
  let onItemsChange;

  beforeEach(() => {
    configure({testIdAttribute: 'data-cy'});
  });

  afterEach(cleanup);

  describe('submit form', () => {

    beforeEach(() => {
      onItemChange = jest.fn();
      onItemsChange = jest.fn();
      const { getByTestId } = render(<NewListItemForm item={'New message'} onItemChange={onItemChange} items={[]} onItemsChange={onItemsChange} />);
      fireEvent.submit(getByTestId('submitBtn'));
    });

    it('clear input field', () => {
      expect(onItemChange).toHaveBeenCalledWith('');
    });
  });
});
