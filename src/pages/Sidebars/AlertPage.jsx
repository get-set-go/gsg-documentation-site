import React from 'react';

import Alert from 'gsg-alert';

export default class AlertPage extends React.Component {
  render() {
    return (
      <div className="component-page">

        <div className="page-header">
          <h2>Alert component</h2>
        </div>

        <div className="component-box component-installation">
          <h3>Installation</h3>

          <h4 className="pull-left">Using Yarn: </h4>
          <pre>yarn add https://github.com/get-set-go/gsg-alert.git</pre>

          <h4 className="pull-left">Using npm: </h4>
          <pre>npm install https://github.com/get-set-go/gsg-alert.git</pre>
        </div>

        <div className="component-box component-example">
          <h3>Syles</h3>

          <Alert><strong>Well done!</strong> You successfully read this important alert message.</Alert>
          <Alert bStyle="info"><strong>Heads up!</strong> This alert needs your attention, but it's not super important.</Alert>
          <Alert bStyle="warning"><strong>Warning!</strong> Better check yourself, you're not looking too good.</Alert>
          <Alert bStyle="danger"><strong>Oh snap!</strong> Change a few things up and try submitting again.</Alert>
        </div>

        <div className="component-box component-example">
          <h3>Dismissible</h3>

          <Alert isDismissible><strong>Well done!</strong> You successfully read this important alert message (Dismissible Alert).</Alert>
        </div>       
        
        <div className="component-box component-options-table">
          <h3>Options</h3>
          
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
                <tr>
                  <td>bStyle</td>
                  <td>String</td>
                  <td>success | info | warning | danger</td>
                  <td>success</td>
                  <td></td>
                </tr>
                <tr>
                  <td>isDismissible</td>
                  <td>Boolean</td>
                  <td>true | false</td>
                  <td>false</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    );
  }
}
