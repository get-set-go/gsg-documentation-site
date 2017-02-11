import React from 'react';

import {
  AudioBox,
  Source
} from 'gsg-audiobox';

import GithubStatus from '../../components/GithubStatus';
import Installation from '../../components/Installation';
import CodeBlocks from '../../components/CodeBlocks';

export default class BadgePage extends React.Component {
  render() {
    const _audioboxEg = `<AudioBox>
  <Source
    bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.mp3"
    bType="audio/ogg" />
  <Source
    bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.ogg"
    bType="audio/mpeg" />
</AudioBox>`;

  const _audioboxMutedEg = `<AudioBox muted={true}>
  <Source
    bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.mp3"
    bType="audio/ogg" />
  <Source
    bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.ogg"
    bType="audio/mpeg" />
</AudioBox>`;

  const _audioboxAutoplayEg = `<AudioBox autoplay={true}>
  <Source
    bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.mp3"
    bType="audio/ogg" />
  <Source
    bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.ogg"
    bType="audio/mpeg" />
</AudioBox>`;

  const _audioboxLoopEg = `<AudioBox loop={true}>
  <Source
    bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.mp3"
    bType="audio/ogg" />
  <Source
    bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.ogg"
    bType="audio/mpeg" />
</AudioBox>`;

  const _audioboxPreloadEg = `<AudioBox preload='auto'>
  <Source
    bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.mp3"
    bType="audio/ogg" />
  <Source
    bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.ogg"
    bType="audio/mpeg" />
</AudioBox>`;

  const _muted = true;
  const _autoplay = true;
  const _loop = true;
  const _preload = 'auto';

    return (
      <div className="component-page">

        <GithubStatus
          componentName="AudioBox"
          componentRepoUrl="https://github.com/get-set-go/gsg-audiobox"
          componentPackageName="gsg-audiobox" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-audiobox.git" />

        <div className="component-box component-example">
          <CodeBlocks title="Example - AudioBox" code={_audioboxEg}>
            <AudioBox>
              <Source
                bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.mp3"
                bType="audio/ogg" />
              <Source
                bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.ogg"
                bType="audio/mpeg" />
            </AudioBox>
          </CodeBlocks>

          <CodeBlocks title="Example - Muted AudioBox" code={_audioboxMutedEg}>
            <AudioBox muted={_muted}>
              <Source
                bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.mp3"
                bType="audio/ogg" />
              <Source
                bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.ogg"
                bType="audio/mpeg" />
            </AudioBox>
          </CodeBlocks>

          <CodeBlocks title="Example - Autoplay AudioBox" code={_audioboxAutoplayEg}>
            <AudioBox autoplay={_autoplay}>
              <Source
                bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.mp3"
                bType="audio/ogg" />
              <Source
                bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.ogg"
                bType="audio/mpeg" />
            </AudioBox>
          </CodeBlocks>

          <CodeBlocks title="Example - Loop AudioBox" code={_audioboxLoopEg}>
            <AudioBox loop={_loop}>
              <Source
                bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.mp3"
                bType="audio/ogg" />
              <Source
                bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.ogg"
                bType="audio/mpeg" />
            </AudioBox>
          </CodeBlocks>

          <CodeBlocks title="Example - Auto Preload AudioBox" code={_audioboxPreloadEg}>
            <AudioBox preload={_preload}>
              <Source
                bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.mp3"
                bType="audio/ogg" />
              <Source
                bUrl="https://github.com/get-set-go/gsg-documentation-site/raw/master/src/assets/Elton_John_Rocket_Man.ogg"
                bType="audio/mpeg" />
            </AudioBox>
          </CodeBlocks>
        </div>

      </div>
    );
  }
}
