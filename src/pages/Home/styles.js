import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: 70vh;
    background-color: #4A64E9;
`;

export const Name = styled.span`
    position: absolute;
    left: 20vw;
    top: 30vh;
    font-size: 9vw;
    font-weight: 500;
    color: #ffffff;
    margin-top: 20px;
`;

export const Subname = styled.span`
    position: absolute;
    left: 20vw;
    top: 45vh;
    font-size: 9vw;
    font-weight: 500;
    color: #ffffff;
    margin-top: 20px;
`;

export const Description = styled.span`    
    position: absolute;
    bottom: -12vh;
    right: 15vw;
    font-size: 3vw;
    color: #9BABF3;
`;


export const Animation = styled.div`
    height: 60vh;
    width: 40vw;
    position: absolute;
    top: 10vh;
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
    border: 0px solid white;
    box-shadow: 2px 2px 8px white;
`;

export const AboutLink = styled.span`   
    font-size: 2vw;
    color: white;
    transform: rotate(-90deg);
    margin-left: 1vw;
    margin-top: -20vh;
    margin-bottom: 15vh;
    cursor: pointer;
`;

export const ContactLink = styled.span`
    font-size: 2vw;
    color: white;
    transform: rotate(-90deg);
    margin-top: 10vh;
    margin-left: 0vw;
    cursor: pointer;
`;
