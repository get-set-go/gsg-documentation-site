import './Header.less';

import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a className="navbar-brand" href="#">
              Get-Set-Go <sup>v0.0.1</sup>
            </a>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="#"><i className="fa fa-lg fa-home"/></Link></li>
              <li><Link to="components"><i className="fa fa-lg fa-cogs"></i> Components</Link></li>
              <li><Link to="customize"><i className="fa fa-lg fa-sliders"></i> Customize</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="expo"><i className="fa fa-lg fa-television"></i> Show Cases</Link></li>
              <li><Link to="about"><i className="fa fa-lg fa-connectdevelop"></i> Developers</Link></li>
              <li><Link to="help"><i className="fa fa-lg fa-life-ring"></i> Help</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
