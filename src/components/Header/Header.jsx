import './Header.less';

import React from 'react';
import { Link } from 'react-router';

import logo from '../../assets/get-set-go_logo.png';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a className="navbar-brand" href="#">
              <img src={logo}/> Get-Set-Go <sup>v0.0.1</sup>
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="#"><i className="fa fa-lg fa-home"/></Link></li>
              <li><Link to="started">Getting Started</Link></li>
              <li><Link to="components">Components</Link></li>
              <li><Link to="expo">Expo</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
