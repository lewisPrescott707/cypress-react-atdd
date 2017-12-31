import React, { Component } from 'react';

export default class NewMessageForm extends Component {
  state = { inputText: '' }

  handleTextChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  handleSave = () => {
    this.setState({ inputText: '' });
  }

  render() {
    const { inputText } = this.state;
    return (
      <div>
        <input
          type="text"
          data-test="messageText"
          value={inputText}
          onChange={this.handleTextChange}
        />
        <button
          data-test="saveButton"
          onClick={this.handleSave}
        >
          Save
        </button>
      </div>
    );
  }
}
