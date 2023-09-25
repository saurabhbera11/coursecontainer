import styled from 'styled-components';
import backgroundImage from '../../assets/background.jpg';

export const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    z-index: -1;
  }
`;