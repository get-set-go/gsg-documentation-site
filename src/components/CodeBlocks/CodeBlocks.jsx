import './CodeBlocks.less';

import React from 'react';

export default class CodeBlocks extends React.Component {
  render() {
    return (
      <div className="component-codeblocks">
        <h4>{this.props.title}</h4>
        
        {this.props.children}
        <pre>
          {this.props.code}
        </pre>
      </div>
    );
  }
}
