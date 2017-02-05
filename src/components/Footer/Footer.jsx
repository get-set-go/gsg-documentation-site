import './Footer.less';

import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-component text-center">
        <hr/>
        <a href="//github.com/get-set-go/gsg-documentation-site" target="_blank" className="btn btn-link btn-sm">Github Home Page</a>
        <a href="//github.com/get-set-go/gsg-documentation-site/releases" target="_blank" className="btn btn-link btn-sm">Release Page</a>
        <a href="//github.com/get-set-go/gsg-documentation-site/milestones" target="_blank" className="btn btn-link btn-sm">Milestones</a>
        <a href="//github.com/get-set-go/gsg-documentation-site/issues" target="_blank" className="btn btn-link btn-sm">Report Issues</a>
        <a href="//github.com/get-set-go/gsg-documentation-site/pulls" target="_blank" className="btn btn-link btn-sm">Open Pull Requests</a>
        <a href="//github.com/get-set-go/gsg-documentation-site" target="_blank" className="btn btn-link btn-sm">About Get-Set-Go</a>
      </footer>
    );
  }
}
