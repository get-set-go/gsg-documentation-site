import React from 'react';

import Label from 'gsg-label';

import GithubStatus from '../../components/GithubStatus';
import Installation from '../../components/Installation';
import PropsGrid from '../../components/PropsGrid';
import EventsGrid from '../../components/EventsGrid';
import CodeBlocks from '../../components/CodeBlocks';

export default class LabelPage extends React.Component {
  render() {
    const _labelDefaultEg = `<Label>Default Label</Label>`;
    const _labelPrimaryEg = `<Label bStyle="primary">Primary Label</Label>`;
    const _labelSuccessEg = `<Label bStyle="success">Success Label</Label>`;
    const _labelInfoEg = `<Label bStyle="info">Info Label</Label>`;
    const _labelWarningEg = `<Label bStyle="warning">Warning Label</Label>`;
    const _labelDangerEg = `<Label bStyle="danger">Danger Label</Label>`;

    return (
      <div className="component-page">

        <GithubStatus 
          componentName="Label"
          componentRepoUrl="https://github.com/get-set-go/gsg-label"
          componentPackageName="gsg-label" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-label.git" />

        <div className="component-box component-example">
          <h3>Styles</h3>

          <CodeBlocks title="Default label example" code={_labelDefaultEg}>
            <Label>Default Label</Label>
          </CodeBlocks>
          <CodeBlocks title="Primary label example" code={_labelPrimaryEg}>
            <Label bStyle="primary">Primary Label</Label>
          </CodeBlocks>
          <CodeBlocks title="Success label example" code={_labelSuccessEg}>
            <Label bStyle="success">Success Label</Label>
          </CodeBlocks>
          <CodeBlocks title="Info label example" code={_labelInfoEg}>
            <Label bStyle="info">Info Label</Label>
          </CodeBlocks>
          <CodeBlocks title="Warning label example" code={_labelWarningEg}>
            <Label bStyle="warning">Warning Label</Label>
          </CodeBlocks>
          <CodeBlocks title="Danger label example" code={_labelDangerEg}>
            <Label bStyle="danger">Danger Label</Label>
          </CodeBlocks>
        </div>

        <PropsGrid />

        <EventsGrid />

      </div>
    );
  }
}
