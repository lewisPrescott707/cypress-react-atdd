import React from 'react';

const MessageList = ({ data }) => (
  <ul>
    { data.map(message => <li>{message}</li>) }
  </ul>
);

export default MessageList;
