import React, { useState } from 'react';
import NewListItemForm from './NewListItemForm';
import List from './List';

const App = () => {
  const [listItem, setListItem] = useState('');
  const [listItems, setListItems] = useState([]);
  return (
    <div>
      <NewListItemForm 
        item={listItem} 
        onItemChange={setListItem}
        items={listItems}
        onItemsChange={setListItems} />
    </div>
  );
};

export default App;
