import React from 'react';

import Button from 'gsg-button';

export default class ButtonPage extends React.Component {
  render() {
    return (
      <div className="component-page">

        <div className="page-header">
          <h2>Button component</h2>
        </div>

        <div className="component-box component-installation">
          <h3>Installation</h3>

          <h4 className="pull-left">Using Yarn: </h4>
          <pre>yarn add https://github.com/get-set-go/gsg-button.git</pre>

          <h4 className="pull-left">Using npm: </h4>
          <pre>npm install https://github.com/get-set-go/gsg-button.git</pre>
        </div>

        <div className="component-box component-example">
          <h3>Syles</h3>

          <Button>Button</Button>
          <Button bStyle="success">Button</Button>
          <Button bStyle="info">Button</Button>
          <Button bStyle="warning">Button</Button>
          <Button bStyle="danger">Button</Button>
        </div>

        <div className="component-box component-example">
          <h3>Dismissible</h3>

          <Button>Button</Button>
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
