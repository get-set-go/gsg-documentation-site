import './About.less';

import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className="about-page">
        
        <div className="page-header">
          <h2>About</h2>
          <h3>Meet the Get-Set-Go project developer and maintainer</h3>
        </div>

        <div className="about-box developer-section">
          <h3>Core developer and maintainer</h3>
          <div className="media">
            <div className="media-left">
              <a href="//github.com/hegdeashwin">
                <img className="media-object" src="https://avatars3.githubusercontent.com/u/4667864?v=3&s=460"/>
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">Ashwin Hegde</h4>
              <h5>Software Craftsman, Open Source Developer, Contributor, JavaScript Engineer, Foodie</h5>
              <a className="github-button" href="https://github.com/hegdeashwin" data-style="mega" data-count-href="/hegdeashwin/followers" data-count-api="/users/hegdeashwin#followers" data-count-aria-label="# followers on GitHub" aria-label="Follow @hegdeashwin on GitHub">Follow @hegdeashwin</a>
            </div>
          </div>
        </div>

        <div className="about-box notes-section">
          <p className="lead">Get involved with Get-Set-Go components development by opening an issue.</p>
        </div>

      </div>
    );
  }
}
