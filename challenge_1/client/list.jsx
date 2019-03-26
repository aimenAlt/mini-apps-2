import React from 'react';
import Listing from './listing.jsx';

const List = (props) => {
  console.log(props);
  return (
    <div>
      <table id='list'>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Granularity</th>
            <th>Description</th>
          </tr>
          {
            props.items.map(element => 
              <Listing element={element} />
            )
          }

          {console.log('whats wrong?')}

        </tbody>
      </table>
    </div>
  );
};

export default List;