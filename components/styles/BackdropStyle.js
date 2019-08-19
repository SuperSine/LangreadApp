import styled from 'styled-components';


const BackdropStyle = styled.div`
  visibility:${props => props.isShow ? 'visible' : 'hidden'};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.3);
  padding: 50;
  transition: visibility 0.3s linear;
`;

export default BackdropStyle;


