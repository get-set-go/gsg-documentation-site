import './Home.less';

import React from 'react';
import { Link } from 'react-router';

import logo from '../../assets/get-set-go_logo.png';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center">
                <img src={logo} />
              </div>
              <div className="col-md-8">
                <h1>Get-Set-Go <small><sup>v0.0.1</sup></small></h1>
                <p className="lead">A React, Bootstrap based components for React projects on the web.</p>

                <a className="github-button" href="https://github.com/get-set-go/gsg-documentation-site/subscription" data-icon="octicon-eye" data-style="mega" data-count-href="/get-set-go/gsg-documentation-site/watchers" data-count-api="/repos/get-set-go/gsg-documentation-site#subscribers_count" data-count-aria-label="# watchers on GitHub" aria-label="Watch get-set-go/gsg-documentation-site on GitHub">Watch</a>
                <a className="github-button" href="https://github.com/get-set-go/gsg-documentation-site" data-icon="octicon-star" data-style="mega" data-count-href="/get-set-go/gsg-documentation-site/stargazers" data-count-api="/repos/get-set-go/gsg-documentation-site#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star get-set-go/gsg-documentation-site on GitHub">Star</a>
                <a className="github-button" href="https://github.com/get-set-go/gsg-documentation-site/fork" data-icon="octicon-repo-forked" data-style="mega" data-count-href="/get-set-go/gsg-documentation-site/network" data-count-api="/repos/get-set-go/gsg-documentation-site#forks_count" data-count-aria-label="# forks on GitHub" aria-label="Fork get-set-go/gsg-documentation-site on GitHub">Fork</a>
                <a className="github-button" href="https://github.com/get-set-go" data-style="mega" data-count-href="/get-set-go/followers" data-count-api="/users/get-set-go#followers" data-count-aria-label="# followers on GitHub" aria-label="Follow @get-set-go on GitHub">Follow @get-set-go</a>

                <p className="btn-collection">
                  <Link to="components" className="btn btn-primary">See Components</Link>
                </p>

              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="lead">Get-Set-Go is an open source project. Its hosted, developed, and maintained on GitHub.</p>
          <p><a className="btn btn-success" href="//github.com/get-set-go" target="_blank">View Get-Set-Go projects on Github</a></p>
        </div>

      </div>
    );
  }
}
