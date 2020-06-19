import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: 65vh;
    background-color: #4A64E9;
    margin-bottom: 25vh;
`;

export const Content = styled.div`
    position: relative;
`;

export const FirstWave = styled.div`
    position: absolute;
    width: 100%;
    height: 20vh;
    z-index: 500;
    bottom: -60vh;
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
    filter: blur(0.5px);
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
    filter: blur(0.5px);
`;

export const Description = styled.span`    
    position: absolute;
    top: 55vh;
    z-index: 1000;
    right: 15vw;
    font-size: 3vw;
    color: #9BABF3;
`;

export const Animation = styled.div`
    height: 60vh;
    width: 40vw;
    z-index: 1000;
    position: absolute;
    top: 0vh;
    right: 10vw;
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
`;

export const AboutLink = styled.span`   
    font-size: 2vw;
    color: white;
    transform: rotate(-90deg);
    margin-left: 1vw;
    margin-top: -35vh;
    margin-bottom: 15vh;
    z-index: 1000;
    cursor: pointer;
    opacity: 90%;
    filter: blur(0.7px);
`;

export const ContactLink = styled.span`
    font-size: 2vw;
    color: white;
    transform: rotate(-90deg);
    margin-top: 5vh;
    margin-left: 0vw;
    z-index: 2000;
    cursor: pointer;
`;

export const AboutContainer = styled.div`
    position: relative;
    min-height: 80vh;
    width: 100%;
    background-color: white;
`;

export const AboutTitle = styled.div`
    position: absolute;
    font-size: 7vw;
    color: #9BABF3;
    transform: rotate(-90deg);
    left: -10vw;
    top: 25vh;
    font-weight: 600;
`;

export const AboutAnimation = styled.div`
    height: 35vh;
    width: 45vw;
    position: absolute;
    top: 5vh;
    left: 30vw;
`;

export const AboutText = styled.span`
    width: 45vw;
    font-size: 1.8vw;<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

    text-align: justify;
    position: absolute;
    top: 40vh;
    left: 30vw;
    color: #172F94;
    font-weight: 600;
`;

export const SecondWave = styled.div`
    position: absolute;
    top: -40px;
    top: -35vh;
    width: 100%;
    height: 10vh;
`;

export const ContactContainer = styled.div`
    margin-top: 25vh;
    position: relative;
    background-color: #4A64E9;
    height: 40vh;
`;

export const ContactContent = styled.div`
    position: absolute;
    top: 40px;
    z-index: 1000;
    width: 100%;
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
`;

export const LogoTitle = styled.a`
    color: white;
    font-size: 1.1vw;
    font-weight: 600;
    cursor: pointer;
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
