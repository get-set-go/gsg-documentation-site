import './EventsGrid.less';

import React from 'react';

export default class EventsGrid extends React.Component {
  render() {
    return (
      <div className="component-eventsgrid">
        <h3>Events</h3>
        
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bStyle</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
