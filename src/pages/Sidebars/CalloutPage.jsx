import React from 'react';

import Callout from 'gsg-callout';

import GithubStatus from '../../components/GithubStatus';
import Installation from '../../components/Installation';
import PropsGrid from '../../components/PropsGrid';
import CodeBlocks from '../../components/CodeBlocks';

export default class CalloutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const _calloutPrimaryEg = `<Callout bStyle="primary">Primary Callout</Callout>`;
    const _calloutSuccessEg = `<Callout bStyle="success">Success Callout</Callout>`;
    const _calloutInfoEg = `<Callout bStyle="info">Info Callout</Callout>`;
    const _calloutWarningEg = `<Callout bStyle="warning">Warning Callout</Callout>`;
    const _calloutDangerEg = `<Callout bStyle="danger">Danger Callout</Callout>`;

    const _componentProps = [{
      "name": "bStyle",
      "type": "String",
      "possibleval": "primary | success | info | warning | danger",
      "default": "primary",
      "description": ""
    }];

    return (
      <div className="component-page">

        <GithubStatus
          componentName="Callout"
          componentRepoUrl="https://github.com/get-set-go/gsg-callout"
          componentPackageName="gsg-callout" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-callout.git" />

        <div className="component-box component-example">
          <CodeBlocks  title="Example - Primary Callout" code={_calloutPrimaryEg}>
            <Callout bStyle="primary">Primary</Callout>
          </CodeBlocks>
          <CodeBlocks  title="Example - Success Callout" code={_calloutSuccessEg}>
            <Callout bStyle="success">Success</Callout>
          </CodeBlocks>
          <CodeBlocks  title="Example - Info Callout" code={_calloutInfoEg}>
            <Callout bStyle="info">Info</Callout>
          </CodeBlocks>
          <CodeBlocks  title="Example - Warning Callout" code={_calloutWarningEg}>
            <Callout bStyle="warning">Warning</Callout>
          </CodeBlocks>
          <CodeBlocks  title="Example - Danger Callout" code={_calloutDangerEg}>
            <Callout bStyle="danger">Danger</Callout>
          </CodeBlocks>
        </div>

        <PropsGrid options={_componentProps}/>
      </div>
    );
  }
}
