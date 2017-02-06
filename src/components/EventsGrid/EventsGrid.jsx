import './EventsGrid.less';

import React from 'react';

export default class EventsGrid extends React.Component {
  render() {
    const _eventsGrid = this.props.events.map((property) => {
      return (
        <tr>
          <td>{property.name}</td>
          <td>{property.description}</td>
        </tr>
      );
    });

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
              {_eventsGrid}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
