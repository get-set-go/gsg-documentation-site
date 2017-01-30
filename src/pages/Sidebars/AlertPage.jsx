import React from 'react';

import Alert from 'gsg-alert';

import SubHeader from '../../components/SubHeader';
import Installation from '../../components/Installation';
import PropsGrid from '../../components/PropsGrid';
import EventsGrid from '../../components/EventsGrid';
import CodeBlocks from '../../components/CodeBlocks';

export default class AlertPage extends React.Component {
  render() {
    return (
      <div className="component-page">

        <SubHeader 
          componentName="Alert"
          componentRepoUrl="https://github.com/get-set-go/gsg-alert"
          componentPackageName="gsg-alert" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-alert.git" />

        <div className="component-box component-example">
          <h3>Styles</h3>

          <Alert><strong>Well done!</strong> You successfully read this important alert message.</Alert>
          <Alert bStyle="info"><strong>Heads up!</strong> This alert needs your attention, but it's not super important.</Alert>
          <Alert bStyle="warning"><strong>Warning!</strong> Better check yourself, you're not looking too good.</Alert>
          <Alert bStyle="danger"><strong>Oh snap!</strong> Change a few things up and try submitting again.</Alert>
        </div>

        <CodeBlocks />

        <div className="component-box component-example">
          <h3>Dismissible</h3>

          <Alert isDismissible><strong>Well done!</strong> You successfully read this important alert message (Dismissible Alert).</Alert>
        </div>
        
        <CodeBlocks />
        
        <PropsGrid />

        <EventsGrid />

      </div>
    );
  }
}
