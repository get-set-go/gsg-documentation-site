import React from 'react';

import Loader from 'gsg-loader';

import GithubStatus from '../../components/GithubStatus';
import Installation from '../../components/Installation';
import CodeBlocks from '../../components/CodeBlocks';

export default class LoaderPage extends React.Component {
  render() {
    const _loaderEg = `<Loader/>`;

    return (
      <div className="component-page">

        <GithubStatus
          componentName="Loader"
          componentRepoUrl="https://github.com/get-set-go/gsg-loader"
          componentPackageName="gsg-loader" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-loader.git" />

        <div className="component-box component-example">
          <CodeBlocks title="Example - Loader" code={_loaderEg}>
            <Loader/>
          </CodeBlocks>
        </div>

      </div>
    );
  }
}
