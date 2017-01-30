import './SubHeader.less';

import React from 'react';

export default class SubHeader extends React.Component {
  render() {
    const _subscriptionUrl = `${this.props.componentRepoUrl}/subscription`;
    const _starUrl = `${this.props.componentRepoUrl}`;
    const _forkUrl = `${this.props.componentRepoUrl}/fork`;

    const _dataCountHrefWatchers = `/get-set-go/${this.componentPackageName}/watchers`;
    const _dataCountApiWatchers = `/repos/get-set-go/${this.componentPackageName}#subscribers_count`;
    const _ariaLabelWatcher = `Watch get-set-go/${this.componentPackageName} on GitHub`;

    return (
      <div className="component-subheader">
        <div className="page-header">
          <h2>{this.props.componentName} component</h2>
          
          <a className="github-button" href={_subscriptionUrl} data-icon="octicon-eye" data-style="mega" data-count-href={_dataCountHrefWatchers} data-count-api={_dataCountApiWatchers} data-count-aria-label="# watchers on GitHub" aria-label={_ariaLabelWatcher}>Watch</a>

          <a className="github-button" href={_starUrl} data-icon="octicon-star" data-style="mega" data-count-href="/get-set-go/gsg-alert/stargazers" data-count-api="/repos/get-set-go/gsg-alert#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star get-set-go/gsg-alert on GitHub">Star</a>

          <a className="github-button" href={_forkUrl} data-icon="octicon-repo-forked" data-style="mega" data-count-href="/get-set-go/gsg-alert/network" data-count-api="/repos/get-set-go/gsg-alert#forks_count" data-count-aria-label="# forks on GitHub" aria-label="Fork get-set-go/gsg-alert on GitHub">Fork</a>

        </div>
      </div>
    );
  }
}
