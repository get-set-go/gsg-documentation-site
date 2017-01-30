import './PropsGrid.less';

import React from 'react';

export default class PropsGrid extends React.Component {
  render() {
    return (
      <div className="component-propsgrid">
        <h3>Properties</h3>
        
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Possible Values</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bStyle</td>
                <td>String</td>
                <td>success | info | warning | danger</td>
                <td>success</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
