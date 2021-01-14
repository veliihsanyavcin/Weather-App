import React from 'react'
import styled from "styled-components";
import bgImg2 from "../assets/bg2.png";
import moon from "../assets/moon.png";
import stars from "../assets/stars.png";
import city2 from "../assets/city2.png";
import clouds2 from "../assets/clouds2.png";
import ist from "../assets/istanbul.png";
import nrow1 from "../assets/nrow-01.png";
import nrow2 from "../assets/nrow-02.png";
import nrow3 from "../assets/nrow-03.png";
import nrow4 from "../assets/nrow-04.png";




const night = () => {
    return (
        <DayContainer>
    <Graphic>
 
    </Graphic>
    
    
    
    
    <Background>
    <Moon><img src={moon}/> </Moon>
    <City><img src={city2}/></City>
    <Clouds><img src={clouds2}/></Clouds>
    <Stars><img src={stars}/></Stars>
    </Background>
    
    <Panel>
        <h1>Sunday, 19 May 2019  |  9:30PM</h1>
        <Mumbai><img src={ist}/></Mumbai>
        <Row1><img src={nrow1}/></Row1>
        <Row2><img src={nrow2}/></Row2>
        <Row3><img src={nrow3}/></Row3>
        <Row4><img src={nrow4}/></Row4>

    </Panel>
 
    </DayContainer>
      
    )
}

const DayContainer = styled.div`
position: relative;
width: 375px;
height: 812px;
background: #FFFFFF;
`;
const Graphic = styled.div`
position: absolute;
width: 678px;
height: 300px;
left: -234px;
top: 0px;

`;

const Background = styled.div`
background-image: url(${bgImg2});
position: absolute;
width: 375px;
height: 300px;
left: 500px;
top: -827px;

background: linear-gradient(180deg, #33284B 0%, #111520 100%);
`;
const Moon = styled.div`
position: absolute;
width: 45.12px;
height: 40.34px;
left: 200px;
top: 22.66px;
`;
const City = styled.div`
position: absolute;
left: -0%;
top: 15%;
bottom: 63.06%;
`;
const Clouds = styled.div`
position: absolute;
width: 337.5px;
height: 92.98px;
left: 7px;
top: 17px;
`;
const Stars = styled.div`
position: absolute;
width: 434.23px;
height: 101.23px;
left: -42px;
top: 3px;

`;

const Panel = styled.div`
position: absolute;
width: 375px;
height: 531px;
left: 500px;
top: -555px;
border-radius: 30px;

background: #FFFFFF;
box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);
h1{
    position: absolute;
    width: 179px;
    height: 17px;
    left: 20px;
    top: 17px;
    font-family: Barlow;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #999999;
}
`;
const Mumbai = styled.div`
position: absolute;
width: 154px;
height: 48px;
left: 221px;
top: 1px;

`;
const Row1 = styled.div`
position: absolute;
width: 282px;
height: 77px;
left: 45px;
top: 75px;

`;
const Row2 = styled.div`
position: absolute;
width: 285px;
height: 69px;
left: 49px;
top: 175px;
`;
const Row3 = styled.div`
position: absolute;
width: 287px;
height: 69px;
left: 41px;
top: 275px;
`;
const Row4 = styled.div`
position: absolute;
width: 440px;
height: 101px;
left: 19px;
top: 375px;
`;

export default night;
