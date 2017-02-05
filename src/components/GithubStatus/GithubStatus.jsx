import './GithubStatus.less';

import React from 'react';

export default class GithubStatus extends React.Component {
  render() {
    const _subscriptionUrl = `${this.props.componentRepoUrl}/subscription`;
    const _starUrl = `${this.props.componentRepoUrl}`;
    const _forkUrl = `${this.props.componentRepoUrl}/fork`;

    const _dataCountHrefWatchers = `/get-set-go/${this.props.componentPackageName}/watchers`;
    const _dataCountApiWatchers = `/repos/get-set-go/${this.props.componentPackageName}#subscribers_count`;
    const _ariaLabelWatchers = `Watch get-set-go/${this.props.componentPackageName} on GitHub`;

    const _dataCountHrefStargazers = `/get-set-go/${this.props.componentPackageName}/stargazers`;
    const _dataCountApiStargazers = `/repos/get-set-go/${this.props.componentPackageName}#stargazers_count`;
    const _ariaLabelStargazers = `Star get-set-go/${this.props.componentPackageName} on GitHub`;

    const _dataCountHrefFork = `/get-set-go/${this.props.componentPackageName}/network`;
    const _dataCountApiFork = `/repos/get-set-go/${this.props.componentPackageName}#forks_count`;
    const _ariaLabelFork = `Fork get-set-go/${this.props.componentPackageName} on GitHub`;

    return (
      <div className="component-github-status">
        <div className="page-header">
          <h2>{this.props.componentName} component</h2>

          <div className="pull-right">
            <a className="github-button" href={_subscriptionUrl} data-icon="octicon-eye" data-style="mega" data-count-href={_dataCountHrefWatchers} data-count-api={_dataCountApiWatchers} data-count-aria-label="# watchers on GitHub" aria-label={_ariaLabelWatchers}>Watch</a>

            <a className="github-button" href={_starUrl} data-icon="octicon-star" data-style="mega" data-count-href={_dataCountHrefStargazers} data-count-api={_dataCountApiStargazers} data-count-aria-label="# stargazers on GitHub" aria-label={_ariaLabelStargazers}>Star</a>

            <a className="github-button" href={_forkUrl} data-icon="octicon-repo-forked" data-style="mega" data-count-href={_dataCountHrefFork} data-count-api={_dataCountApiFork} data-count-aria-label="# forks on GitHub" aria-label={_ariaLabelFork}>Fork</a>
          </div>

        </div>
      </div>
    );
  }
}
