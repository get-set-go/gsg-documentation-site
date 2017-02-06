import React from 'react';

import Alert from 'gsg-alert';

import GithubStatus from '../../components/GithubStatus';
import Installation from '../../components/Installation';
import PropsGrid from '../../components/PropsGrid';
import EventsGrid from '../../components/EventsGrid';
import CodeBlocks from '../../components/CodeBlocks';

export default class AlertPage extends React.Component {
  render() {
    const _alertDefaultEg = `<Alert><strong>Well done!</strong> You successfully read this important alert message.</Alert>`;
    const _alertInfoEg = `<Alert bStyle="info"><strong>Heads up!</strong> This alert needs your attention, but it's not super important.</Alert>`;
    const _alertWarningEg = `<Alert bStyle="warning"><strong>Warning!</strong> Better check yourself, you're not looking too good.</Alert>`;
    const _alertDangerEg = `<Alert bStyle="danger"><strong>Oh snap!</strong> Change a few things up and try submitting again.</Alert>`;
    const _alertDismissEg = `<Alert isDismissible><strong>Well done!</strong> You successfully read this important alert message (Dismissible Alert).</Alert>`;

    return (
      <div className="component-page">

        <GithubStatus
          componentName="Alert"
          componentRepoUrl="https://github.com/get-set-go/gsg-alert"
          componentPackageName="gsg-alert" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-alert.git" />

        <div className="component-box component-example">
          <CodeBlocks title="Example - Success Alert" code={_alertDefaultEg}>
            <Alert><strong>Well done!</strong> You successfully read this important alert message.</Alert>
          </CodeBlocks>
          <CodeBlocks title="Example - Info Alert" code={_alertInfoEg}>
            <Alert bStyle="info"><strong>Heads up!</strong> This alert needs your attention, but it's not super important.</Alert>
          </CodeBlocks>
          <CodeBlocks title="Example - Warning Alert" code={_alertWarningEg}>
            <Alert bStyle="warning"><strong>Warning!</strong> Better check yourself, you're not looking too good.</Alert>
          </CodeBlocks>
          <CodeBlocks title="Example - Danger Alert" code={_alertDangerEg}>
            <Alert bStyle="danger"><strong>Oh snap!</strong> Change a few things up and try submitting again.</Alert>
          </CodeBlocks>
        </div>

        <div className="component-box component-example">
          <CodeBlocks title="Example - Dismissible Alert" code={_alertDismissEg}>
            <Alert isDismissible><strong>Well done!</strong> You successfully read this important alert message (Dismissible Alert).</Alert>
          </CodeBlocks>
        </div>

        <PropsGrid />

        <EventsGrid />

      </div>
    );
  }
}
