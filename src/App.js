import React, { Component } from 'react';
import NewMessageForm from './NewMessageForm';

class App extends Component {
  state = { messages: [] };

  handleSave = (newMessage) => {
    const { messages } = this.state;
    this.setState({ messages: [newMessage, ...messages] });
  }

  render() {
    return (
      <div>
        <NewMessageForm onSave={this.handleSave} />
      </div>
    );
  }
}

export default App;
