import React from 'react';

import Button from 'gsg-button';

import SubHeader from '../../components/SubHeader';
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
    alert('Hello World!');
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

    return (
      <div className="component-page">

        <SubHeader 
          componentName="Button"
          componentRepoUrl="https://github.com/get-set-go/gsg-button"
          componentPackageName="gsg-button" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-button.git" />

        <div className="component-box component-example">
          <h3>Styles</h3>

          <CodeBlocks title="Default button example" code={_buttonDefaultEg}>
            <Button>Default Button</Button>
          </CodeBlocks>
          <CodeBlocks title="Primary button example" code={_buttonPrimaryEg}>
            <Button bStyle="primary">Primary Button</Button>
          </CodeBlocks>
          <CodeBlocks title="Success button example" code={_buttonSuccessEg}>
            <Button bStyle="success">Success Button</Button>
          </CodeBlocks>
          <CodeBlocks title="Info button example" code={_buttonInfoEg}>
            <Button bStyle="info">Info Button</Button>
          </CodeBlocks>
          <CodeBlocks title="Warning button example" code={_buttonWarningEg}>
            <Button bStyle="warning">Warning Button</Button>
          </CodeBlocks>
          <CodeBlocks title="Danger button example" code={_buttonDangerEg}>
            <Button bStyle="danger">Danger Button</Button>
          </CodeBlocks>
        </div>

        <div className="component-box component-example">
          <h3>Types</h3>

          <CodeBlocks title="Button button example" code={_buttonEg}>
            <Button bType="button">Button</Button>
          </CodeBlocks>
          <CodeBlocks title="Submit button example" code={_buttonSubmitEg}>
            <Button bType="submit">Submit</Button>
          </CodeBlocks>
          <CodeBlocks title="Reset button example" code={_buttonResetEg}>
            <Button bType="reset">Reset</Button>
          </CodeBlocks>
        </div>

        <div className="component-box component-example">
          <h3>States</h3>

          <CodeBlocks title="Enabled button example" code={_buttonEnabledEg}>
            <Button isActive>Enabled Button</Button>
          </CodeBlocks>
          <CodeBlocks title="Disabled button example" code={_buttonDisabledEg}>
            <Button isDisabled>Disabled Button</Button>
          </CodeBlocks>
        </div>
        
        <div className="component-box component-example">
          <h3>Events</h3>

          <CodeBlocks title="Click button example" code={_buttonClickEg}>
            <Button onClick={this.message}>Click Button</Button>
          </CodeBlocks>
        </div>

        <PropsGrid />

        <EventsGrid />

      </div>
    );
  }
}
