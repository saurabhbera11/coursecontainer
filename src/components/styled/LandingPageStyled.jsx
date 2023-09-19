import styled from 'styled-components';
import backgroundImage from '../../assets/background.jpg';


export const BackgroundImage = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.8; /* Adjust the opacity for the fading effect */
  height: 100vh; /* Ensure the background covers the entire viewport height */
`;