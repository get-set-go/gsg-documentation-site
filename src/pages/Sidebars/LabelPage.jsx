import React from 'react';

import Label from 'gsg-label';

import SubHeader from '../../components/SubHeader';
import Installation from '../../components/Installation';
import PropsGrid from '../../components/PropsGrid';
import EventsGrid from '../../components/EventsGrid';
import CodeBlocks from '../../components/CodeBlocks';

export default class LabelPage extends React.Component {
  render() {
    const _labelDefaultEg = `<Label>Default Label</Label>`;

    return (
      <div className="component-page">

        <SubHeader 
          componentName="Label"
          componentRepoUrl="https://github.com/get-set-go/gsg-label"
          componentPackageName="gsg-label" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-label.git" />

        <div className="component-box component-example">
          <h3>Styles</h3>

          <CodeBlocks title="Label example" code={_labelDefaultEg}>
            <Label>Default Label</Label>
          </CodeBlocks>
        </div>
        
        <PropsGrid />

        <EventsGrid />

      </div>
    );
  }
}
