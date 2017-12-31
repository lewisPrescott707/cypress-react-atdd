import React from 'react';
import { mount } from 'enzyme';
import NewMessageForm from '../NewMessageForm';

describe('<NewMessageForm />', () => {
  it('calls onSave with the entered message', () => {
    const saveCallback = jest.fn();
    const wrapper = mount(<NewMessageForm onSave={saveCallback} />);

    wrapper
      .find("[data-test='messageText']")
      .simulate('change', { target: { value: 'New message' } });
    wrapper
      .find("[data-test='saveButton']")
      .simulate('click');

    expect(saveCallback).toHaveBeenCalledTimes(1);
    expect(saveCallback).toHaveBeenCalledWith('New message');
  });
});
