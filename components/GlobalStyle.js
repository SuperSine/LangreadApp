import { createGlobalStyle } from 'styled-components';

const Theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09)'
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('/static/Roboto/Roboto.woff2') format('woff2');
    font-weight:normal;
    font-style:normal;
  }

  html{
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after{
    box-sizing: inherit;
  }

  body{
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
    font-family:'Roboto';
  } 

  a{
    margin:2rem;
    text-decoration:none;
    color:${Theme.black}
  }
  ul{
    padding:0;
  }

 .ripple {
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.ripple:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #b2b2b2 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform .5s, opacity 1s;
}

.ripple:active:after {
  transform: scale(0, 0);
  opacity: .3;
  transition: 0s;
}
`;

export { GlobalStyle as default, Theme };