import React from 'react';

import logo from '../../assets/get-set-go_logo.png';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="jumbotron text-center">
          <div className="container">
            <p><img src={logo} /></p>
            <p>Get-Set-Go is React.js + Twitter Bootstrap based components collection for developing responsive, mobile first projects on the web.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="lead">Get-Set-Go is open source project. It's hosted, developed, and maintained on GitHub.</p>
          <p><a className="btn btn-primary btn-lg" href="//github.com/get-set-go" target="_blank">Visit us on Github</a></p>
        </div>
      </div>
    );
  }
}
