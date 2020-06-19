/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-scroll';
import Lottie from 'react-lottie';
import {
    Container,
    Content,
    FirstWave,
    Name,
    Subname,
    Description,
    Animation,
    SecondAnimation,
    ButtonBox,
    AboutLink,
    ContactLink,
    AboutContainer,
    AboutTitle,
    AboutAnimation,
    AboutText,
    ContactContainer,
    SecondWave,
    ContactLogo,
    ContactContent,
    LogoTitle,
    ContactItem,
    ContactTitle,
} from './styles';

import animationDeveloper from '../../assets/animations/developer.json';
import codeDeveloper from '../../assets/animations/code.json';
import animationGirl from '../../assets/animations/girl.json';
const githubIcon = 'https://github.githubassets.com/images/modules/logos_page/Octocat.png';
const linkedinIcon = 'https://www.spiner.com.br/wp-content/uploads/2019/02/midias-sociais-linkedin-icon.png';

const Home = () => {
    const [developerLottie] = useState({
        loop: true,
        autoplay: true,
        animationData: animationDeveloper,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    });

    const [secondDeveloperLottie] = useState({
        loop: true,
        autoplay: true,
        animationData: codeDeveloper,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    });

    const [girlLottie] = useState({
        loop: true,
        autoplay: true,
        animationData: animationGirl,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    });

    return (
        <>
            <Container id="home">
                <Content>
                    <Name>Lucas</Name>
                    <Subname>Barros</Subname>
                    <Description>I'm Fullstack Developer</Description>        
                    <Animation>
                        <Lottie options={developerLottie} isClickToPauseDisabled/>
                    </Animation>
                    <SecondAnimation>
                        <Lottie options={secondDeveloperLottie} isClickToPauseDisabled/>
                    </SecondAnimation>
                    <ButtonBox>
                        <AboutLink>
                            <Link activeClass="active" to="about" spy={true} smooth="easeInOutQuint" offset={50} duration={1000}>
                                About
                            </Link>
                        </AboutLink>
                        <ContactLink>
                            <Link activeClass="active" to="contact" smooth="easeInOutQuint" spy={true}  offset={50} duration={1000}>
                                Contact
                            </Link>
                        </ContactLink>
                    </ButtonBox>
                    <FirstWave>
                        <svg viewBox="0 0 1166 402" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 283.817L38.8667 272.065C77.7333 259.426 155.467 237.253 233.2 248.34C310.933 259.426 388.667 308.207 466.4 307.542C544.133 308.207 621.867 259.426 699.6 283.817C777.333 308.207 855.067 401.335 932.8 402C1010.53 401.335 1088.27 308.207 1127.13 260.092L1166 212.863V0H1127.13C1088.27 0 1010.53 0 932.8 0C855.067 0 777.333 0 699.6 0C621.867 0 544.133 0 466.4 0C388.667 0 310.933 0 233.2 0C155.467 0 77.7333 0 38.8667 0H0V283.817Z" fill="#4A64E9"/>
                        </svg>
                    </FirstWave>
                </Content>
            </Container>
            <AboutContainer id="about">
                <AboutTitle>About me</AboutTitle>                      
                <AboutAnimation>
                    <Lottie options={girlLottie} isClickToPauseDisabled/>
                </AboutAnimation>
                <AboutText>Hello, I'm a Full Stack Developer with 6 years of experience. I work from project management to final delivery. Dedicated and I like challenges!</AboutText>
            </AboutContainer>
            <ContactContainer>
                <SecondWave>
                    <svg viewBox="0 0 1165 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 64L19.4333 53.3C38.8667 43 77.7333 21 116.6 42.7C155.467 64 194.333 128 233.2 138.7C272.067 149 310.933 107 349.8 96C388.667 85 427.533 107 466.4 133.3C505.267 160 544.133 192 583 181.3C621.867 171 660.733 117 699.6 101.3C738.467 85 777.333 107 816.2 117.3C855.067 128 893.933 128 932.8 128C971.667 128 1010.53 128 1049.4 106.7C1088.27 85 1127.13 43 1146.57 21.3L1166 0V288H1146.57C1127.13 288 1088.27 288 1049.4 288C1010.53 288 971.667 288 932.8 288C893.933 288 855.067 288 816.2 288C777.333 288 738.467 288 699.6 288C660.733 288 621.867 288 583 288C544.133 288 505.267 288 466.4 288C427.533 288 388.667 288 349.8 288C310.933 288 272.067 288 233.2 288C194.333 288 155.467 288 116.6 288C77.7333 288 38.8667 288 19.4333 288H0V64Z" fill="#4A64E9"/>
                    </svg>
                </SecondWave>
                <ContactContent id="contact">
                    <ContactTitle>Contact</ContactTitle>
                    <Grid container>
                        <Grid item lg={3} md={3} xs={3} sm={3} align="center" />
                        <Grid item lg={3} md={3} xs={3} sm={3} align="center">
                            <ContactItem>
                                <ContactLogo src={githubIcon} />
                                <LogoTitle>Github</LogoTitle>
                            </ContactItem>
                        </Grid>
                        <Grid item lg={3} md={3} xs={3} sm={3} align="center">
                            <ContactItem>
                                <ContactLogo src={linkedinIcon} style={{marginBottom: 0}} />
                                <LogoTitle>Linkedin</LogoTitle>
                            </ContactItem>
                        </Grid>
                        <Grid item lg={3} md={3} xs={3} sm={3} align="center" />
                    </Grid>
                </ContactContent>
            </ContactContainer>
        </>
    )
};

export default Home;