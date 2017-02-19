import './Sidebar.less';

import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <div className="list-group">
        <Link to="components/jumbotron" className="list-group-item">Jumbotron</Link>
        <Link to="components/button" className="list-group-item">Button</Link>
        <Link to="components/blockquote" className="list-group-item">Blockquote</Link>
        <Link to="components/label" className="list-group-item">Label</Link>
        <Link to="components/badge" className="list-group-item">Badge</Link>
        <Link to="components/alert" className="list-group-item">Alert</Link>
        <Link to="components/panel" className="list-group-item">Panel</Link>
        <Link to="components/navbar" className="list-group-item">Navbar</Link>
        <Link to="components/progressbar" className="list-group-item">Progress Bar</Link>
        <Link to="components/loader" className="list-group-item">Loader</Link>
        <Link to="components/callout" className="list-group-item">Callout</Link>
        <Link to="components/headers" className="list-group-item">Headers</Link>
        <Link to="components/thumbnail" className="list-group-item">Thumbnail</Link>
        <Link to="components/fullscreen" className="list-group-item">Full Screen <span className="pull-right label label-primary">HTML5</span></Link>
        <Link to="components/network" className="list-group-item">Network <span className="pull-right label label-primary">HTML5</span></Link>
        <Link to="components/clipboard" className="list-group-item">Clipboard <span className="pull-right label label-primary">HTML5</span></Link>
        <Link to="components/audiobox" className="list-group-item">Audio Box <span className="pull-right label label-primary">HTML5</span></Link>
        <Link to="components/videobox" className="list-group-item">Video Box <span className="pull-right label label-primary">HTML5</span></Link>
        <Link to="components/gravatar" className="list-group-item">Gravatar Preview<span className="pull-right label label-primary">API</span></Link>
      </div>
    );
  }
}
