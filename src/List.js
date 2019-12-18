import React from 'react';

const List = ({ data }) => (
  <ul>
    {data.map(item => (
      <li key={item} data-cy={item}>{item}</li>
    ))}
  </ul>
);

export default List;
