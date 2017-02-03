import React from 'react';

import Badge from 'gsg-badge';

import SubHeader from '../../components/SubHeader';
import Installation from '../../components/Installation';
import PropsGrid from '../../components/PropsGrid';
import EventsGrid from '../../components/EventsGrid';
import CodeBlocks from '../../components/CodeBlocks';

export default class BadgePage extends React.Component {
  render() {
    const _badgeEg = `<Badge>45</Badge>`;

    return (
      <div className="component-page">

        <SubHeader 
          componentName="Badge"
          componentRepoUrl="https://github.com/get-set-go/gsg-badge"
          componentPackageName="gsg-badge" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-badge.git" />

        <div className="component-box component-example">
          <h3>Styles</h3>

          <CodeBlocks title="Badge example" code={_badgeEg}>
            <Badge>45</Badge>
          </CodeBlocks>
        </div>
        
        <PropsGrid />

        <EventsGrid />

      </div>
    );
  }
}
