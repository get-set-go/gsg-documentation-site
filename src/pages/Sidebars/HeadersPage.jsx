import React from 'react';

import Headers from 'gsg-headers';

import GithubStatus from '../../components/GithubStatus';
import Installation from '../../components/Installation';
import CodeBlocks from '../../components/CodeBlocks';

export default class HeadersPage extends React.Component {
  render() {
    const _headersEg = `<Headers>
  <h1>Albert Einstein <small>The true sign of intelligence is not knowledge but imagination.</small></h1>
</Headers>`;

    const _content = (
      <h1>Albert Einstein <small>The true sign of intelligence is not knowledge but imagination.</small></h1>
    );

    return (
      <div className="component-page">

        <GithubStatus
          componentName="Headers"
          componentRepoUrl="https://github.com/get-set-go/gsg-headers"
          componentPackageName="gsg-headers" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-headers.git" />

        <div className="component-box component-example">
          <CodeBlocks title="Example - Headers" code={_headersEg}>
            <Headers>
              {_content}
            </Headers>
          </CodeBlocks>
        </div>

      </div>
    );
  }
}
