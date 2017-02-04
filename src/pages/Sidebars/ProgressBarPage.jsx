import React from 'react';

import ProgressBar from 'gsg-progress-bar';

import SubHeader from '../../components/SubHeader';
import Installation from '../../components/Installation';
import PropsGrid from '../../components/PropsGrid';
import EventsGrid from '../../components/EventsGrid';
import CodeBlocks from '../../components/CodeBlocks';

export default class ProgressBarPage extends React.Component {
  render() {
    const _progressBarDefaultEg = `<ProgressBar bProgress="10">10% scanning</ProgressBar>`;
    const _progressBarSuccessEg = `<ProgressBar bStyle="success" bProgress="30">30% scanning</ProgressBar>`;
    const _progressBarInfoEg = `<ProgressBar bStyle="info" bProgress="50">50% scanning</ProgressBar>`;
    const _progressBarWarningEg = `<ProgressBar bStyle="warning" bProgress="70">70% scanning</ProgressBar>`;
    const _progressBarDangerEg = `<ProgressBar bStyle="danger" bProgress="90">90% scanning</ProgressBar>`;

    const _progressBarIsOutSideEg = `<ProgressBar bProgress="10" isOutside="true">10% scanning</ProgressBar>`;

    const _progressBarLAlignEg = `<ProgressBar bProgress="10" isOutside="true">Text Aligned to left by default</ProgressBar>`;
    const _progressBarCAlignEg = `<ProgressBar bProgress="10" isOutside="true" bAlign="center">Text Aligned to center</ProgressBar>`;
    const _progressBarRAlignEg = `<ProgressBar bProgress="10" isOutside="true" bAlign="right">Text Aligned to right</ProgressBar>`;

    const _progressBarStripedEg = `<ProgressBar isStriped="true" bProgress="40"></ProgressBar>`;

    const _progressBarActiveEg = `<ProgressBar isStriped="true" isActive="true" bProgress="40"></ProgressBar>`;

    return (
      <div className="component-page">

        <SubHeader 
          componentName="ProgressBar"
          componentRepoUrl="https://github.com/get-set-go/gsg-progress-bar"
          componentPackageName="gsg-progress-bar" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-progress-bar.git" />

        <div className="component-box component-example">
          <h3>Styles</h3>

          <CodeBlocks title="Default/Primary progress-bar example" code={_progressBarDefaultEg}>
            <ProgressBar bProgress="10">10% scanning</ProgressBar>
          </CodeBlocks>
          <CodeBlocks title="Success progress-bar example" code={_progressBarSuccessEg}>
            <ProgressBar bStyle="success" bProgress="30">30% scanning</ProgressBar>
          </CodeBlocks>
          <CodeBlocks title="Info progress-bar example" code={_progressBarInfoEg}>
            <ProgressBar bStyle="info" bProgress="50">50% scanning</ProgressBar>
          </CodeBlocks>
          <CodeBlocks title="Warning progress-bar example" code={_progressBarWarningEg}>
            <ProgressBar bStyle="warning" bProgress="70">70% scanning</ProgressBar>
          </CodeBlocks>
          <CodeBlocks title="Danger progress-bar example" code={_progressBarDangerEg}>
            <ProgressBar bStyle="danger" bProgress="90">90% scanning</ProgressBar>
          </CodeBlocks>
          <CodeBlocks title="Progress-bar example with text outside" code={_progressBarIsOutSideEg}>
            <ProgressBar bProgress="10" isOutside="true">10% scanning</ProgressBar>
          </CodeBlocks>
        </div>

        <div className="component-box component-example">
          <h3>Alignment</h3>

          <CodeBlocks title="Default left aligned text example" code={_progressBarLAlignEg}>
            <ProgressBar bProgress="10" isOutside="true">Text Aligned to left by default</ProgressBar>
          </CodeBlocks>
          <CodeBlocks title="Center aligned text example" code={_progressBarCAlignEg}>
            <ProgressBar bProgress="10" isOutside="true" bAlign="center">Text Aligned to center</ProgressBar>
          </CodeBlocks>
          <CodeBlocks title="Right aligned text example" code={_progressBarRAlignEg}>
            <ProgressBar bProgress="10" isOutside="true" bAlign="right">Text Aligned to right</ProgressBar>
          </CodeBlocks>
        </div>

        <div className="component-box component-example">
          <h3>State</h3>
          
          <CodeBlocks title="Progress-bar striped with non-active state example" code={_progressBarStripedEg}>
            <ProgressBar isStriped="true" bProgress="40"></ProgressBar>
          </CodeBlocks>          
          <CodeBlocks title="Progress-bar active state example" code={_progressBarActiveEg}>
            <ProgressBar isStriped="true" isActive="true" bProgress="40"></ProgressBar>
          </CodeBlocks>
        </div>
        
        <PropsGrid />

        <EventsGrid />

      </div>
    );
  }
}
