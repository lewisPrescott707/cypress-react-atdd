import React from 'react';
import { configure, render, fireEvent, cleanup } from '@testing-library/react';
import List from '../List';

describe('<List />', () => {
  let getByTestId;
  let onItemChange;

  beforeEach(() => {
    configure({testIdAttribute: 'data-cy'});
  });

  afterEach(cleanup);

  describe('render list', () => {

    beforeEach(() => {
      ({ getByTestId } = render(<List data={["one"]} />));
    });

    it('list contains item', () => {
      expect(getByTestId('one').textContent).toEqual('one');
    });
  });
});
