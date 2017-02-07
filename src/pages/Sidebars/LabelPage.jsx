import React from 'react';

import Label from 'gsg-label';

import GithubStatus from '../../components/GithubStatus';
import Installation from '../../components/Installation';
import PropsGrid from '../../components/PropsGrid';
import CodeBlocks from '../../components/CodeBlocks';

export default class LabelPage extends React.Component {
  render() {
    const _labelDefaultEg = `<Label>Default Label</Label>`;
    const _labelPrimaryEg = `<Label bStyle="primary">Primary Label</Label>`;
    const _labelSuccessEg = `<Label bStyle="success">Success Label</Label>`;
    const _labelInfoEg = `<Label bStyle="info">Info Label</Label>`;
    const _labelWarningEg = `<Label bStyle="warning">Warning Label</Label>`;
    const _labelDangerEg = `<Label bStyle="danger">Danger Label</Label>`;

    const _componentProps = [{
      "name": "bStyle",
      "type": "String",
      "possibleval": "default | primary | success | info | warning | danger",
      "default": "default",
      "description": ""
    }];

    return (
      <div className="component-page">

        <GithubStatus
          componentName="Label"
          componentRepoUrl="https://github.com/get-set-go/gsg-label"
          componentPackageName="gsg-label" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-label.git" />

        <div className="component-box component-example">
          <CodeBlocks title="Example - Default Label" code={_labelDefaultEg}>
            <Label>Default</Label>
          </CodeBlocks>
          <CodeBlocks title="Example - Primary Label" code={_labelPrimaryEg}>
            <Label bStyle="primary">Primary</Label>
          </CodeBlocks>
          <CodeBlocks title="Example - Success Label" code={_labelSuccessEg}>
            <Label bStyle="success">Success</Label>
          </CodeBlocks>
          <CodeBlocks title="Example - Info Label" code={_labelInfoEg}>
            <Label bStyle="info">Info</Label>
          </CodeBlocks>
          <CodeBlocks title="Example - Warning Label" code={_labelWarningEg}>
            <Label bStyle="warning">Warning</Label>
          </CodeBlocks>
          <CodeBlocks title="Example - Danger Label" code={_labelDangerEg}>
            <Label bStyle="danger">Danger</Label>
          </CodeBlocks>
        </div>

        <PropsGrid options={_componentProps}/>

      </div>
    );
  }
}
