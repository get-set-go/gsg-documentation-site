import React from 'react';

import GravatarPreview from 'gsg-gravatar-preview';

import GithubStatus from '../../components/GithubStatus';
import Installation from '../../components/Installation';
import CodeBlocks from '../../components/CodeBlocks';
import PropsGrid from '../../components/PropsGrid';

export default class GravatarPreviewPage extends React.Component {
  render() {
    const _size100 = 100;
    const _size140 = 140;
    const _size200 = 200;

    const _gravatorPreviewSizeDefaultEg = `<GravatarPreview hash="7c190b42a43ed6e4a901fdc20dcc5749"/>`;
    const _gravatorPreviewSize100Eg = `<GravatarPreview hash="7c190b42a43ed6e4a901fdc20dcc5749" bSize=${_size100}/>`;
    const _gravatorPreviewSize140Eg = `<GravatarPreview hash="7c190b42a43ed6e4a901fdc20dcc5749" bSize=${_size140}/>`;
    const _gravatorPreviewSize200Eg = `<GravatarPreview hash="7c190b42a43ed6e4a901fdc20dcc5749" bSize=${_size200}/>`;

    const _componentProps = [{
      "name": "hash",
      "type": "String",
      "possibleval": "",
      "default": "",
      "description": ""
    }, {
      "name": "bSize",
      "type": "Number",
      "possibleval": "",
      "default": 80,
      "description": ""
    }];

    return (
      <div className="component-page">

        <GithubStatus
          componentName="GravatarPreview"
          componentRepoUrl="https://github.com/get-set-go/gsg-gravatar-preview"
          componentPackageName="gsg-gravatar-preview" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-gravatar-preview.git" />

        <div className="component-box component-example">
          <CodeBlocks title="Example - Gravatar Preview Default Size" code={_gravatorPreviewSizeDefaultEg}>
            <GravatarPreview hash="7c190b42a43ed6e4a901fdc20dcc5749"/>
          </CodeBlocks>
          <CodeBlocks title="Example - Gravatar Preview Size 100" code={_gravatorPreviewSize100Eg}>
            <GravatarPreview hash="7c190b42a43ed6e4a901fdc20dcc5749" bSize={_size100}/>
          </CodeBlocks>
          <CodeBlocks title="Example - Gravatar Preview Size 140" code={_gravatorPreviewSize140Eg}>
            <GravatarPreview hash="7c190b42a43ed6e4a901fdc20dcc5749" bSize={_size140}/>
          </CodeBlocks>
          <CodeBlocks title="Example - Gravatar Preview Size 200" code={_gravatorPreviewSize200Eg}>
            <GravatarPreview hash="7c190b42a43ed6e4a901fdc20dcc5749" bSize={_size200}/>
          </CodeBlocks>
        </div>

        <PropsGrid options={_componentProps}/>
      </div>
    );
  }
}
