import React from 'react';

import Panel from 'gsg-panel';

import GithubStatus from '../../components/GithubStatus';
import Installation from '../../components/Installation';
import PropsGrid from '../../components/PropsGrid';
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

    const _componentProps = [{
      "name": "bStyle",
      "type": "String",
      "possibleval": "default | primary | success | info | warning | danger",
      "default": "default",
      "description": ""
    }, {
      "name": "header",
      "type": "String",
      "possibleval": "",
      "default": "",
      "description": ""
    }, {
      "name": "footer",
      "type": "String",
      "possibleval": "",
      "default": "",
      "description": ""
    }];

    return (
      <div className="component-page">

        <GithubStatus
          componentName="Panel"
          componentRepoUrl="https://github.com/get-set-go/gsg-panel"
          componentPackageName="gsg-panel" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-panel.git" />

        <div className="component-box component-example">
          <CodeBlocks title="Example - Default Panel" code={_panelDefaultEg}>
            <Panel header={_header}>My name is Ashwin</Panel>
          </CodeBlocks>
          <CodeBlocks title="Example - Primary Panel" code={_panelPrimaryEg}>
            <Panel bStyle="primary" header={_header}>My name is Ashwin</Panel>
          </CodeBlocks>
          <CodeBlocks title="Example - Success Panel" code={_panelSuccessEg}>
            <Panel bStyle="success" header={_header}>My name is Ashwin</Panel>
          </CodeBlocks>
          <CodeBlocks title="Example - Info Panel" code={_panelInfoEg}>
            <Panel bStyle="info" header={_header}>My name is Ashwin</Panel>
          </CodeBlocks>
          <CodeBlocks title="Example - Warning Panel" code={_panelWarningEg}>
            <Panel bStyle="warning" header={_header}>My name is Ashwin</Panel>
          </CodeBlocks>
          <CodeBlocks title="Example - Danger Panel" code={_panelDangerEg}>
            <Panel bStyle="danger" header={_header}>My name is Ashwin</Panel>
          </CodeBlocks>
        </div>

        <div className="component-box component-example">
          <CodeBlocks title="Example - Panel with header and footer" code={_panelWithFooterEg}>
            <Panel header={_header} footer={_footer}>My name is Ashwin</Panel>
          </CodeBlocks>
        </div>

        <PropsGrid options={_componentProps}/>
      </div>
    );
  }
}
