import React from 'react';

const Listing = (props) => {
  console.log(props);
  return(
    <tr>
      <td>{props.element.date}</td>
      <td>{props.element.granularity}</td>
      <td>{props.element.description}</td>
    </tr>
  );
};

export default Listing;