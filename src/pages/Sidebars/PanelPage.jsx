import React from 'react';

import Panel from 'gsg-panel';

import SubHeader from '../../components/SubHeader';
import Installation from '../../components/Installation';
import PropsGrid from '../../components/PropsGrid';
import EventsGrid from '../../components/EventsGrid';
import CodeBlocks from '../../components/CodeBlocks';

export default class PanelPage extends React.Component {
  render() {
    const _panelDefaultEg = `<Panel header="Hello World!">My name is Ashwin</Panel>`;
    const _panelPrimaryEg = `<Panel bStyle="primary" header="Hello World!">My name is Ashwin</Panel>`;
    const _panelSuccessEg = `<Panel bStyle="success" header="Hello World!">My name is Ashwin</Panel>`;
    const _panelInfoEg = `<Panel bStyle="info" header="Hello World!">My name is Ashwin</Panel>`;
    const _panelWarningEg = `<Panel bStyle="warning" header="Hello World!">My name is Ashwin</Panel>`;
    const _panelDangerEg = `<Panel bStyle="danger" header="Hello World!">My name is Ashwin</Panel>`;
    const _panelWithFooterEg = `<Panel bStyle="danger" header="Hello World!" footer="Thank you for supporting Get-Set-Go project">My name is Ashwin</Panel>`;

    const _header = "Hello World!";
    const _footer = "Thank you for supporting Get-Set-Go project";

    return (
      <div className="component-page">

        <SubHeader 
          componentName="Panel"
          componentRepoUrl="https://github.com/get-set-go/gsg-panel"
          componentPackageName="gsg-panel" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-panel.git" />

        <div className="component-box component-example">
          <h3>Styles</h3>

          <CodeBlocks title="Default panel example" code={_panelDefaultEg}>
            <Panel header={_header}>My name is Ashwin</Panel>
          </CodeBlocks>
          <CodeBlocks title="Primary panel example" code={_panelPrimaryEg}>
            <Panel bStyle="primary" header={_header}>My name is Ashwin</Panel>
          </CodeBlocks>
          <CodeBlocks title="Success panel example" code={_panelSuccessEg}>
            <Panel bStyle="success" header={_header}>My name is Ashwin</Panel>
          </CodeBlocks>
          <CodeBlocks title="Info panel example" code={_panelInfoEg}>
            <Panel bStyle="info" header={_header}>My name is Ashwin</Panel>
          </CodeBlocks>
          <CodeBlocks title="Warning panel example" code={_panelWarningEg}>
            <Panel bStyle="warning" header={_header}>My name is Ashwin</Panel>
          </CodeBlocks>
          <CodeBlocks title="Danger panel example" code={_panelDangerEg}>
            <Panel bStyle="danger" header={_header}>My name is Ashwin</Panel>
          </CodeBlocks>
        </div>

        <div className="component-box component-example">
          <h3>Styles</h3>

          <CodeBlocks title="Panel example with header and footer" code={_panelWithFooterEg}>
            <Panel header={_header} footer={_footer}>My name is Ashwin</Panel>
          </CodeBlocks>
        </div>
        
        <PropsGrid />

        <EventsGrid />

      </div>
    );
  }
}
