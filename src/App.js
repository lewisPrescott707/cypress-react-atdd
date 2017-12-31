import React, { Component } from 'react';
import NewMessageForm from './NewMessageForm';

class App extends Component {
  handleSave = (newMessage) => {
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
