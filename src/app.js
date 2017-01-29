import './styles/common.less';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import React from 'react';

import Header from './components/Header';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
