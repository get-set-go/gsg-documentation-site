import './PropsGrid.less';

import React from 'react';

export default class PropsGrid extends React.Component {
  render() {

    const _propertyGrid = this.props.options.map((property) => {
      return (
        <tr>
          <td>{property.name}</td>
          <td>{property.type}</td>
          <td>{property.possibleval}</td>
          <td>{property.default}</td>
          <td>{property.description}</td>
        </tr>
      );
    });

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
              {_propertyGrid}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
