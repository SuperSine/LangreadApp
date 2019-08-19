import Link from 'next/link';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Theme } from './GlobalStyle';


const StyledNav = styled.nav`



margin-top: 50px;
  -webkit-transform: translateX(${props => props.navIsToggled ? '0' : '-100%'});
          transform: translateX(${props => props.navIsToggled ? '0' : '-100%'});

  display: flex;
  position: fixed;
  /* z-index: 100; */
  top: 0;
  left: 0;
  width: 250px;
  z-index:102;
  /* height: 100vh; */
  height:100%;
  background-color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  transition: 0.45s;

.nav-items {
  flex: 0 0 100%;
}
.nav-item:not(:last-child) {
  border-bottom: solid 1px #daf9f4;
}
.nav-link {
  display: block;
  padding: 0.875em 1em;
  background-color: #fff;
  color: #20b49c;
  font-size: 1.5rem;
  line-height: 1.5em;
  font-weight: 300;
}

.nav-expand-content {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: translateX(100%);
          transform: translateX(100%);
  background-color: #daf9f4;
  transition: 0.3s;
  visibility: hidden;
}
.nav-expand-content .nav-item:not(:last-child) {
  border-bottom: solid 1px #20b49c;
}
.nav-expand-content .nav-link {
  background-color: #daf9f4;
}
.nav-expand-content .nav-back-link {
  display: flex;
  align-items: center;
  background-color: #20b49c !important;
  color: #fff;
}
.nav-expand-content .nav-back-link::before {
  content: "chevron_left";
  margin-right: 0.5em;
  font-family: "Material Icons";
}
.nav-expand-link {
  display: flex;
  justify-content: space-between;
}
.nav-expand-link::after {
  content: "chevron_right";
  flex: 0 1 auto;
  font-family: "Material Icons";
}
.nav-expand.active > .nav-expand-content {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  visibility: visible;
}
.nav-expand .nav-expand-content {
  background-color: #daf9f4;
}
.nav-expand .nav-expand-content .nav-link {
  background-color: #daf9f4;
}
.nav-expand .nav-expand-content .nav-expand-content {
  background-color: #aff1e6;
}
.nav-expand .nav-expand-content .nav-expand-content .nav-link {
  background-color: #aff1e6;
}
.nav-expand .nav-expand-content .nav-expand-content .nav-expand-content {
  background-color: #84e9d9;
}
.nav-expand .nav-expand-content .nav-expand-content .nav-expand-content .nav-link {
  background-color: #84e9d9;
}
.nav-expand .nav-expand-content .nav-expand-content .nav-expand-content .nav-expand-content {
  background-color: #59e1cb;
}
.nav-expand .nav-expand-content .nav-expand-content .nav-expand-content .nav-expand-content .nav-link {
  background-color: #59e1cb;
}

`;

const NavBack = (props) => (
  <li className="nav-item">
    <a className="nav-link nav-back-link" onClick={props.backClick}>
      Back
    </a>
  </li>
);


class NavItem extends Component {
  state = {
    active: false
  }

  isExpandable = () => (
    this.props.children ? true : false
  );

  onLinkClick = (e) => {
    // e.preventDefault();
    this.setState({ active: !this.state.active });
  }

  render() {
    return (

      <li className={this.state.active ? "ripple nav-link nav-expand active" : "ripple nav-link nav-expand"}>
        <Link href={this.props.link} prefetch={false}>
          <a className={this.props.children ? "nav-link nav-expand-link" : "nav-link"} onClick={this.onLinkClick}>
            {this.props.title}
          </a>
        </Link>


        {this.props.children && (
          <ul className="nav-items nav-expand-content">
            <NavBack backClick={this.onLinkClick} />

            {this.props.children}
          </ul>
        )}
      </li>

    );
  }
}

const NavItems = (props) => (
  <StyledNav navIsToggled={props.navIsToggled}>
    <ul className="nav-items nav-level-1">
        {props.children}
    </ul>
  </StyledNav>
)

const Nav = (props) => (

  <NavItems navIsToggled={props.navIsToggled}>
    <NavItem title="NoOne" link="/noone" />
    <NavItem title="Index" link="/index" />
    <NavItem title="Menu1" link="#">
      <NavItem title="123" link="/noone" />
      <NavItem title="456" link="/noone" />
    </NavItem>
  </NavItems>

);

export default Nav;