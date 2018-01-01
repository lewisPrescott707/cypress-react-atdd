import React, { Component } from 'react';
import NewMessageForm from './NewMessageForm';
import MessageList from './MessageList';

class App extends Component {
  state = { messages: [] };

  handleSave = (newMessage) => {
    const { messages } = this.state;
    this.setState({ messages: [newMessage, ...messages] });
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <NewMessageForm onSave={this.handleSave} />
        <MessageList data={messages} />
      </div>
    );
  }
}

export default App;
