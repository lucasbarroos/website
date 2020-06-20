import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: 65vh;
    background-color: #4A64E9;
    margin-bottom: 25vh;
    @media only screen and (orientation: portrait) {
        height: 80vh;
    }
`;

export const Content = styled.div`
    position: relative;
    @media only screen and (orientation: portrait) {
        top: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

export const FirstWave = styled.div`
    position: absolute;
    width: 100%;
    height: 20vh;
    z-index: 500;
    bottom: -60vh;
    @media only screen and (orientation: portrait) {
        position: relative;
        bottom: -30vh;
        background-color: white;
    }
`;

export const Name = styled.span`
    position: absolute;
    left: 20vw;
    top: 20vh;
    z-index: 1000;
    font-size: 9vw;
    font-weight: 500;
    color: #ffffff;
    margin-top: 20px;
    @media only screen and (orientation: portrait) {
        font-size: 15vw;
        position: relative;
        margin-top: 0px;
        left: 0px;
        top: 18vh;
        font-weight: 600;
    }
`;

export const Subname = styled.span`
    position: absolute;
    left: 20vw;
    top: 35vh;
    z-index: 1000;
    font-size: 9vw;
    font-weight: 500;
    color: #ffffff;
    margin-top: 20px;
    @media only screen and (orientation: portrait) {
        font-size: 15vw;
        position: relative;
        margin-top: 0px;
        left: 0px;
        top: 17vh;
        font-weight: 600;
    }
`;

export const Description = styled.span`    
    position: absolute;
    top: 55vh;
    z-index: 1000;
    right: 15vw;
    font-size: 3vw;
    color: #9BABF3;
    @media only screen and (orientation: portrait) {
        position: relative;
        left: 0px;
        top: 18vh;
        font-size: 4vw;
    }
`;

export const Animation = styled.div`
    height: 45vh;
    width: 35vw;
    z-index: 1000;
    position: absolute;
    top: 8vh;
    right: 10vw;
    @media only screen and (orientation: portrait) {
        display: none;
    }
`;

export const SecondAnimation = styled.div`
    display: none;
    @media only screen and (orientation: portrait) {
        display: initial;
        position: absolute;
        top: -15vh;
        height: 30vh;
        width: 53vw;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
    position: absolute;
    left: -2%;
    width: 6%;
    top: -20px;
    height: 120vh;
    z-index: 1000;
`;

export const AboutLink = styled.span`   
    font-size: 2vw;
    color: white;
    transform: rotate(-90deg);
    margin-left: 1vw;
    margin-top: -45vh;
    margin-bottom: 15vh;
    cursor: pointer;
    @media only screen and (orientation: portrait) {
        display: none;
    }
`;

export const ContactLink = styled.span`
    font-size: 2vw;
    color: white;
    transform: rotate(-90deg);
    margin-top: 15vh;
    margin-left: 0vw;
    cursor: pointer;
    @media only screen and (orientation: portrait) {
        display: none;
    }
`;

export const AboutContainer = styled.div`
    position: relative;
    min-height: 80vh;
    width: 100%;
    background-color: white;
    @media only screen and (orientation: portrait) {
        margin-top: -30vh;
        min-height: 50vh;
    }
`;

export const AboutTitle = styled.div`
    position: absolute;
    font-size: 7vw;
    color: #9BABF3;
    transform: rotate(-90deg);
    left: -10vw;
    top: 30vh;
    font-weight: 600;
`;

export const AboutAnimation = styled.div`
    height: 35vh;
    width: 45vw;
    position: absolute;
    top: 10vh;
    left: 20vw;
    @media only screen and (orientation: portrait) {
        top: 20vh;
        height: 15vh;
        width: 70vw;
    }
`;

export const AboutText = styled.span`
    width: 45vw;
    font-size: 1.8vw;    
    text-align: justify;
    position: absolute;
    top: 45vh;
    left: 30vw;
    color: #172F94;
    font-weight: 600;
    @media only screen and (orientation: portrait) {
        top: 40vh;
    }
`;

export const SecondWave = styled.div`
    position: absolute;
    top: -35vh;
    width: 100%;
    height: 10vh;
    @media only screen and (orientation: portrait) {
        top: 10vh;
        margin-top: -18vh;
        height: 10vh;
        background-color: white;
    }
`;

export const ContactContainer = styled.div`
    margin-top: 25vh;
    position: relative;
    background-color: #4A64E9;
    min-height: 50vh;
    @media only screen and (orientation: portrait) {
        top: 10vh;
        margin-top: 0px;
        min-height: 30vh;
    }
`;

export const ContactContent = styled.div`
    position: absolute;
    top: 40px;
    z-index: 1000;
    width: 100%;
    @media only screen and (orientation: portrait) {
        top: 0vh;
        margin-top: 10vh;
        min-height: 10vh;
    }
`;

export const ContactItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ContactLogo = styled.img`
    height: 6vw;
    width: 6vw;
    margin-bottom: 10px;
    cursor: pointer;
    @media only screen and (orientation: portrait) {   
        height: 15vw;
        width: 15vw;
    }
`;

export const LogoTitle = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1.1vw;
    font-weight: 600;
    cursor: pointer;
    @media only screen and (orientation: portrait) {   
        display: none;
    }
`;

export const ContactTitle = styled.div`
    position: absolute;
    font-size: 7vw;
    color: #ffffff;
    transform: rotate(-90deg);
    left: -7vw;
    top: 0vh;
    font-weight: 600;
`;
