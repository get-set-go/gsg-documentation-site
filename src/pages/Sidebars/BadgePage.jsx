import React from 'react';

import Badge from 'gsg-badge';

import GithubStatus from '../../components/GithubStatus';
import Installation from '../../components/Installation';
import CodeBlocks from '../../components/CodeBlocks';

export default class BadgePage extends React.Component {
  render() {
    const _badgeEg = `<Badge>45</Badge>`;

    return (
      <div className="component-page">

        <GithubStatus
          componentName="Badge"
          componentRepoUrl="https://github.com/get-set-go/gsg-badge"
          componentPackageName="gsg-badge" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-badge.git" />

        <div className="component-box component-example">
          <CodeBlocks title="Example - Badge" code={_badgeEg}>
            <Badge>45</Badge>
          </CodeBlocks>
        </div>

      </div>
    );
  }
}
