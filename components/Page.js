import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, createGlobalStyle  } from 'styled-components';
import GlobalStyle, {Theme} from './GlobalStyle';

const StyledPage = styled.div`
  background: white;
  color:${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;


class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>   
        <StyledPage>
        <GlobalStyle />
        <Meta />
        <Header />
        <Inner>
          {this.props.children}
        </Inner>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export {Page as default};