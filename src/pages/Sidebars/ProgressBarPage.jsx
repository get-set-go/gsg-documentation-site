import React from 'react';

import ProgressBar from 'gsg-progress-bar';

import GithubStatus from '../../components/GithubStatus';
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

    const _componentProps = [{
      "name": "bStyle",
      "type": "String",
      "possibleval": "primary | success | info | warning | danger",
      "default": "primary",
      "description": ""
    }, {
      "name": "bProgress",
      "type": "Number",
      "possibleval": "0 to 100",
      "default": "0",
      "description": ""
    }, {
      "name": "isOutside",
      "type": "Boolean",
      "possibleval": "true | false",
      "default": "false",
      "description": ""
    }, {
      "name": "isStriped",
      "type": "Boolean",
      "possibleval": "true | false",
      "default": "false",
      "description": ""
    }, {
      "name": "isActive",
      "type": "Boolean",
      "possibleval": "true | false",
      "default": "false",
      "description": ""
    }];
    
    return (
      <div className="component-page">

        <GithubStatus
          componentName="ProgressBar"
          componentRepoUrl="https://github.com/get-set-go/gsg-progress-bar"
          componentPackageName="gsg-progress-bar" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-progress-bar.git" />

        <div className="component-box component-example">
          <CodeBlocks title="Example - Primary ProgressBar" code={_progressBarDefaultEg}>
            <ProgressBar bProgress="10">10% scanning</ProgressBar>
          </CodeBlocks>
          <CodeBlocks title="Example - Success ProgressBar" code={_progressBarSuccessEg}>
            <ProgressBar bStyle="success" bProgress="30">30% scanning</ProgressBar>
          </CodeBlocks>
          <CodeBlocks title="Example - Info ProgressBar" code={_progressBarInfoEg}>
            <ProgressBar bStyle="info" bProgress="50">50% scanning</ProgressBar>
          </CodeBlocks>
          <CodeBlocks title="Example - Warning ProgressBar" code={_progressBarWarningEg}>
            <ProgressBar bStyle="warning" bProgress="70">70% scanning</ProgressBar>
          </CodeBlocks>
          <CodeBlocks title="Example - Danger ProgressBar" code={_progressBarDangerEg}>
            <ProgressBar bStyle="danger" bProgress="90">90% scanning</ProgressBar>
          </CodeBlocks>
          <CodeBlocks title="Example - ProgressBar with text outside" code={_progressBarIsOutSideEg}>
            <ProgressBar bProgress="10" isOutside="true">10% scanning</ProgressBar>
          </CodeBlocks>
        </div>

        <div className="component-box component-example">
          <CodeBlocks title="Example - Default left aligned text" code={_progressBarLAlignEg}>
            <ProgressBar bProgress="10" isOutside="true">Text Aligned to left by default</ProgressBar>
          </CodeBlocks>
          <CodeBlocks title="Example - Center aligned text" code={_progressBarCAlignEg}>
            <ProgressBar bProgress="10" isOutside="true" bAlign="center">Text Aligned to center</ProgressBar>
          </CodeBlocks>
          <CodeBlocks title="Example - Right aligned text" code={_progressBarRAlignEg}>
            <ProgressBar bProgress="10" isOutside="true" bAlign="right">Text Aligned to right</ProgressBar>
          </CodeBlocks>
        </div>

        <div className="component-box component-example">
          <CodeBlocks title="Example - ProgressBar striped with non-active state" code={_progressBarStripedEg}>
            <ProgressBar isStriped="true" bProgress="40"></ProgressBar>
          </CodeBlocks>
          <CodeBlocks title="Example - ProgressBar active state" code={_progressBarActiveEg}>
            <ProgressBar isStriped="true" isActive="true" bProgress="40"></ProgressBar>
          </CodeBlocks>
        </div>

        <PropsGrid options={_componentProps}/>
      </div>
    );
  }
}
