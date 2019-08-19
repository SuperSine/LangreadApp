import React, { Component } from 'react';
import Nav from './Nav';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';
import { Theme } from './GlobalStyle';
import BackdropStyle from './styles/BackdropStyle';
import OutsideAlerter from '../utils/OutsideAlerter';

const StyledDiv = styled.div`
.nav-is-toggled::after {
  opacity: 1;
  visibility: visible;
}
`;

const StyledHeader = styled.header`

    display: flex;
    align-items: center;
    /* position: fixed; */
    z-index: 101;
    padding: 10px 20px;
    width: 100%;
    height: 50px;
    background-color: ${Theme.black};
  
 .hamburger {
    margin-right: auto;
    color: #fff;
    cursor: pointer;
  }
`;

Router.onRouteChangeStart = () => {
  NProgress.start();
}

Router.onRouteChangeComplete = () => {
  NProgress.done();
}

Router.onRouteChangeError = () => {
  NProgress.done();
}

class Header extends Component {
  state = {
    isToggled: false
  }

  onDivClick = () => {
    this.setState({ isToggled: !this.state.isToggled })
  }

  onOutsideClick = () => {
    if (this.state.isToggled == true)
      this.setState({ isToggled: false });
  }

  render() {
    return (
      <StyledDiv>

        <BackdropStyle isShow={this.state.isToggled} />
        <OutsideAlerter onClick={this.onOutsideClick}>

          <StyledHeader onClick={this.onDivClick}>
            <span className="hamburger material-icons" id="ham">menu</span>
          </StyledHeader>
          <Nav navIsToggled={this.state.isToggled} />

        </OutsideAlerter>
      </StyledDiv>
    );
  }
}

export default Header;