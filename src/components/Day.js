import React from 'react'
import styled from "styled-components";
import bgImg from "../assets/bg.png";
import sun from "../assets/sun.png";
import city from "../assets/city.png";
import clouds from "../assets/clouds.png";
import ist from "../assets/istanbul.png";
import row1 from "../assets/row-01.png";
import row2 from "../assets/row-02.png";
import row3 from "../assets/row-03.png";
import row4 from "../assets/row-04.png";





const day = () => {
    return (
    
    <DayContainer>
    <Graphic>
 
    </Graphic>
    
    
    
    
    <Background>
    <Sun><img src={sun}/> </Sun>
    <City><img src={city}/></City>
    <Clouds><img src={clouds}/></Clouds>
    </Background>
    
    <Panel>
        <h1>Sunday, 19 May 2019  |  4:30PM</h1>
        <Mumbai><img src={ist}/></Mumbai>
        <Row1><img src={row1}/></Row1>
        <Row2><img src={row2}/></Row2>
        <Row3><img src={row3}/></Row3>
        <Row4><img src={row4}/></Row4>

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
const Background = styled.div`
  background-image: url(${bgImg});
  position: absolute;
width: 375px;
height: 300px;
left: 50px;
top: 10px;

background: linear-gradient(180deg, #54B4F9 5.67%, #FFFFFF 127%);


`;

const Graphic = styled.div`
position: absolute;
width: 678px;
height: 300px;
left: -234px;
top: 0px;

`;
const Panel = styled.div`
position: absolute;
width: 375px;
height: 531px;
left: 50px;
top: 279px;
background: #FFFFFF;
box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);
border-radius: 30px;

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
const City = styled.div`
position: absolute;
left: -0%;
right: -18.4%;
top: 15%;
bottom: 63.06%;

`;
const Sun = styled.div`
position: absolute;
width: 46px;
height: 46px;
left: 211px;
top: 17px;

`;
const Clouds = styled.div`
position: absolute;
width: 337.5px;
height: 92.98px;
left: 17px;
top: 7px;


`;

const Mumbai = styled.div`
position: absolute;
width: 154px;
height: 48px;
left: 221px;
top: 0px;



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
export default day;
