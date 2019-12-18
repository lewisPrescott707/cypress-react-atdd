import React from 'react';

const NewListItemForm = (props) => {

  return (
    <div>
      <form onSubmit={event => {
        console.log("event " + event);
        props.onItemsChange([props.item, ...props.items]);
        console.log('props ' + props);
        props.onItemChange('');
        console.log('onItemChange');
        event.preventDefault();
        console.log('preventDefault');
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
