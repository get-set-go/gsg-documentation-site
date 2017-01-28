import React from 'react';

import Header from './components/Header';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <section className="section-container">
            <div className="row">
              <div className="col-md-12">
                {this.props.children}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
