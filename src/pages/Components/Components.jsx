import React from 'react';

import Sidebar from '../../components/Sidebar';

export default class Components extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          {this.props.children}
        </div>
      </div>
    );
  }
}
