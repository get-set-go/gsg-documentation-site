import React from 'react';

import Button from 'gsg-button';

import GithubStatus from '../../components/GithubStatus';
import Installation from '../../components/Installation';
import PropsGrid from '../../components/PropsGrid';
import EventsGrid from '../../components/EventsGrid';
import CodeBlocks from '../../components/CodeBlocks';

export default class ButtonPage extends React.Component {
  constructor(props) {
    super(props);

    this.message = this.message.bind(this);
  }

  message() {
    alert('Hello World! Thank you for using Get-Set-Go components.');
  }

  render() {
    const _buttonDefaultEg = `<Button>Default Button</Button>`;
    const _buttonPrimaryEg = `<Button bStyle="primary">Primary Button</Button>`;
    const _buttonSuccessEg = `<Button bStyle="success">Success Button</Button>`;
    const _buttonInfoEg = `<Button bStyle="info">Info Button</Button>`;
    const _buttonWarningEg = `<Button bStyle="warning">Warning Button</Button>`;
    const _buttonDangerEg = `<Button bStyle="danger">Danger Button</Button>`;
    const _buttonEg = `<Button bType="button">Button</Button>`;
    const _buttonSubmitEg = `<Button bType="submit">Submit</Button>`;
    const _buttonResetEg = `<Button bType="reset">Reset</Button>`;
    const _buttonEnabledEg = `<Button isActive>Enabled Button</Button>`;
    const _buttonDisabledEg = `<Button isDisabled>Disabled Button</Button>`;
    const _buttonClickEg = `<Button onClick={this.message}>Click Button</Button>`;
    const _buttonNormalEg = `<Button>Normal Button</Button>`;
    const _buttonLargeEg = `<Button bSize="lg">Large Button</Button>`;
    const _buttonSmallEg = `<Button bSize="sm">Small Button</Button>`;
    const _buttonExtraSmallEg = `<Button bSize="xs">Extra Small Button</Button>`;
    const _buttonBlockEg = `<Button isBlock>Block Button</Button>`;

    return (
      <div className="component-page">

        <GithubStatus
          componentName="Button"
          componentRepoUrl="https://github.com/get-set-go/gsg-button"
          componentPackageName="gsg-button" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-button.git" />

        <div className="component-box component-example">
          <CodeBlocks  title="Example - Default Button" code={_buttonDefaultEg}>
            <Button>Default</Button>
          </CodeBlocks>
          <CodeBlocks  title="Example - Primary Button" code={_buttonPrimaryEg}>
            <Button bStyle="primary">Primary</Button>
          </CodeBlocks>
          <CodeBlocks  title="Example - Success Button" code={_buttonSuccessEg}>
            <Button bStyle="success">Success</Button>
          </CodeBlocks>
          <CodeBlocks  title="Example - Info Button" code={_buttonInfoEg}>
            <Button bStyle="info">Info</Button>
          </CodeBlocks>
          <CodeBlocks  title="Example - Warning Button" code={_buttonWarningEg}>
            <Button bStyle="warning">Warning</Button>
          </CodeBlocks>
          <CodeBlocks  title="Example - Danger Button" code={_buttonDangerEg}>
            <Button bStyle="danger">Danger</Button>
          </CodeBlocks>
        </div>

        <div className="component-box component-example">
          <CodeBlocks title="Example - Button" code={_buttonEg}>
            <Button bType="button">Button</Button>
          </CodeBlocks>
          <CodeBlocks title="Example - Submit" code={_buttonSubmitEg}>
            <Button bType="submit">Submit</Button>
          </CodeBlocks>
          <CodeBlocks title="Example - Reset" code={_buttonResetEg}>
            <Button bType="reset">Reset</Button>
          </CodeBlocks>
        </div>

        <div className="component-box component-example">
          <CodeBlocks title="Example - Enabled Button" code={_buttonEnabledEg}>
            <Button isActive>Enabled</Button>
          </CodeBlocks>
          <CodeBlocks title="Example - Disabled Button" code={_buttonDisabledEg}>
            <Button isDisabled>Disabled</Button>
          </CodeBlocks>
        </div>

        <div className="component-box component-example">
          <CodeBlocks title="Example - Normal Button" code={_buttonNormalEg}>
            <Button>Normal</Button>
          </CodeBlocks>
          <CodeBlocks title="Example - Large Button" code={_buttonLargeEg}>
            <Button bSize="lg">Large</Button>
          </CodeBlocks>
          <CodeBlocks title="Example - Small Button" code={_buttonSmallEg}>
            <Button bSize="sm">Small</Button>
          </CodeBlocks>
          <CodeBlocks title="Example - Extra Small Button" code={_buttonExtraSmallEg}>
            <Button bSize="xs">Extra Small</Button>
          </CodeBlocks>
        </div>

        <div className="component-box component-example">
          <CodeBlocks title="Example - Block Button" code={_buttonBlockEg}>
            <Button isBlock>Block</Button>
          </CodeBlocks>
        </div>

        <div className="component-box component-example">
          <CodeBlocks title="Example - Click Button" code={_buttonClickEg}>
            <Button onClick={this.message}>Click</Button>
          </CodeBlocks>
        </div>
      </div>
    );
  }
}
