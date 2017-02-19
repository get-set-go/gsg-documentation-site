import React from 'react';

import { Navbar, NavbarBrand, NavbarNavs, NavbarForm } from 'gsg-navbar';

import GithubStatus from '../../components/GithubStatus';
import Installation from '../../components/Installation';
import CodeBlocks from '../../components/CodeBlocks';

export default class NavbarPage extends React.Component {
  render() {
    const _navbarLeftEg = `<Navbar>
    <NavbarBrand />
    <NavbarNavs />
    <NavbarForm />
</Navbar>`;

    const _navbarRightEg = `<Navbar>
    <NavbarBrand />
    <NavbarForm />
    <NavbarNavs isOnRight={true}/>
</Navbar>`;

    const _navbarOnlyBrandEg = `<Navbar>
    <NavbarBrand />
</Navbar>`;

    return (
      <div className="component-page">

        <GithubStatus
          componentName="Navbar"
          componentRepoUrl="https://github.com/get-set-go/gsg-navbar"
          componentPackageName="gsg-navbar" />

        <Installation hostedAt="https://github.com/get-set-go/gsg-navbar.git" />

        <div className="component-box component-example">
          <CodeBlocks title="Example - Navbar with left navs and form" code={_navbarLeftEg}>
            <Navbar
              brand={<NavbarBrand linkTo="#" title="Brand" />}
              navs={<NavbarNavs />}
              forms={<NavbarForm />} />
          </CodeBlocks>
        </div>

      </div>
    );
  }
}
