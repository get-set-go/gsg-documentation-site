import React from 'react';

import Blockquote from 'gsg-blockquote';

import GithubStatus from '../../components/GithubStatus';
import Installation from '../../components/Installation';
import PropsGrid from '../../components/PropsGrid';
import EventsGrid from '../../components/EventsGrid';
import CodeBlocks from '../../components/CodeBlocks';

export default class BlockquotePage extends React.Component {
  render() {
    const _blockquoteEg = `<Blockquote>
  <p>WWF has been protecting the future of nature.</p>
  <footer><cite>World Wild Life</cite></footer>
</Blockquote>`;

    const _content = (
      <div>
        <p>WWF has been protecting the future of nature.</p>
        <footer><cite>World Wild Life</cite></footer>
      </div>
    );

    return (
      <div className="component-page">

        <GithubStatus 
          componentName="Blockquote"
          componentRepoUrl="https://github.com/get-set-go/gsg-blockquote"
          componentPackageName="gsg-blockquote" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-blockquote.git" />

        <div className="component-box component-example">
          <h3>Styles</h3>

          <CodeBlocks title="Blockquote example" code={_blockquoteEg}>
            <Blockquote>{_content}</Blockquote>
          </CodeBlocks>

          <CodeBlocks title="Blockquote in reverse example" code={_blockquoteEg}>
            <Blockquote isReverse>{_content}</Blockquote>
          </CodeBlocks>
        </div>

        <PropsGrid />

        <EventsGrid />

      </div>
    );
  }
}
