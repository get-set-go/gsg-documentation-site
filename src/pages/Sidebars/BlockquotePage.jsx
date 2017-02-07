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
  <p>The true sign of intelligence is not knowledge but imagination.</p>
  <footer><cite>Albert Einstein</cite></footer>
</Blockquote>`;

    const _blockquoteReverseEg = `<Blockquote isReverse>
  <p>The true sign of intelligence is not knowledge but imagination.</p>
  <footer><cite>Albert Einstein</cite></footer>
</Blockquote>`;

    const _content = (
      <div>
        <p>The true sign of intelligence is not knowledge but imagination.</p>
        <footer><cite>Albert Einstein</cite></footer>
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
          <CodeBlocks title="Example - Blockquote" code={_blockquoteEg}>
            <Blockquote>{_content}</Blockquote>
          </CodeBlocks>

          <CodeBlocks title="Example - Reverse Blockquote" code={_blockquoteReverseEg}>
            <Blockquote isReverse>{_content}</Blockquote>
          </CodeBlocks>
        </div>

      </div>
    );
  }
}
