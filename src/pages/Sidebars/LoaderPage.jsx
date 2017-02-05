import React from 'react';

import Loader from 'gsg-loader';

import GithubStatus from '../../components/GithubStatus';
import Installation from '../../components/Installation';
import PropsGrid from '../../components/PropsGrid';
import EventsGrid from '../../components/EventsGrid';
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
          <h3>Styles</h3>

          <CodeBlocks title="Default label example" code={_loaderEg}>
            <Loader/>
          </CodeBlocks>
        </div>

        <PropsGrid />

        <EventsGrid />

      </div>
    );
  }
}
