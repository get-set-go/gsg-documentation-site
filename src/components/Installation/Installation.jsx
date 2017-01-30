import './Installation.less';

import React from 'react';

export default class Installation extends React.Component {
  render() {
    return (
      <div className="component-installation">
        <h3>Installation</h3>

        <h4 className="pull-left">Using Yarn: </h4>
        <pre>yarn add {this.props.hostedAt}</pre>

        <h4 className="pull-left">Using npm: </h4>
        <pre>npm install {this.props.hostedAt}</pre>
      </div>
    );
  }
}
