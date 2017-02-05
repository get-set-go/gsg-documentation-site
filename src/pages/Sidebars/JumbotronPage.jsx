import React from 'react';

import Jumbotron from 'gsg-jumbotron';

import SubHeader from '../../components/SubHeader';
import Installation from '../../components/Installation';
import CodeBlocks from '../../components/CodeBlocks';

export default class JumbotronPage extends React.Component {
  render() {
    const _jumbotronEg = `<Jumbotron>
  <h1>World Wild Life</h1>
  <p>WWF has been protecting the future of nature.</p>
</Jumbotron>`;

    const _content = (
      <div>
        <h1>World Wild Life</h1>
        <p>WWF has been protecting the future of nature.</p>
      </div>
    );

    return (
      <div className="component-page">

        <SubHeader
          componentName="Jumbotron"
          componentRepoUrl="https://github.com/get-set-go/gsg-jumbotron"
          componentPackageName="gsg-jumbotron" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-jumbotron.git" />

        <div className="component-box component-example">
          <CodeBlocks title="Example - Jumbotron" code={_jumbotronEg}>
            <Jumbotron>{_content}</Jumbotron>
          </CodeBlocks>
        </div>

      </div>
    );
  }
}
