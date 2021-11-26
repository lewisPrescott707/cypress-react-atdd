import React from 'react';

const NewListItemForm = (props) => {

  return (
    <div>
      <form onSubmit={event => {
        props.onItemsChange([props.item, ...props.items]);
        //props.onItemChange('');
        event.preventDefault();
      }}>
        <label>
          New Item:
          <input type="text" 
                 name="item" 
                 data-cy="messageText" 
                 value={props.item}
                 onChange={event => props.onItemChange(event.target.value)} 
          />
        </label>
        <input type="submit" value="Add" data-cy="submitBtn" />
      </form>
    </div>
  );
};

export default NewListItemForm;
