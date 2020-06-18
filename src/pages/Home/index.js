import React, { useState } from 'react';
import Lottie from 'react-lottie';
import {
    Container,
    Name,
    Subname,
    Description,
    Animation,
    ButtonBox,
    AboutLink,
    ContactLink,
} from './styles';

import animationData from '../../assets/animations/developer.json';


const Home = () => {
    const [defaultOptions] = useState({
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    });

    return (
        <>
            <Container>
                <Name>Lucas</Name>
                <Subname>Barros</Subname>
                <Description>I'm Fullstack Developer</Description>        
                <Animation>
                    <Lottie options={defaultOptions} isClickToPauseDisabled/>
                </Animation>
                <ButtonBox>
                    <AboutLink>About</AboutLink>
                    <ContactLink>Contact</ContactLink>
                </ButtonBox>
            </Container>
            <svg viewBox="0 0 1166 402" style={{ marginTop: -30 }} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 283.817L38.8667 272.065C77.7333 259.426 155.467 237.253 233.2 248.34C310.933 259.426 388.667 308.207 466.4 307.542C544.133 308.207 621.867 259.426 699.6 283.817C777.333 308.207 855.067 401.335 932.8 402C1010.53 401.335 1088.27 308.207 1127.13 260.092L1166 212.863V0H1127.13C1088.27 0 1010.53 0 932.8 0C855.067 0 777.333 0 699.6 0C621.867 0 544.133 0 466.4 0C388.667 0 310.933 0 233.2 0C155.467 0 77.7333 0 38.8667 0H0V283.817Z" fill="#4A64E9"/>
            </svg>  
        </>
    )
};

export default Home;