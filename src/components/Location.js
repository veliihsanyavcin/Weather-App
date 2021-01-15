import React from 'react'
import bgImg from "../assets/bg.png";
import styled from "styled-components";
import sun from "../assets/sun.png";
import city from "../assets/city.png";
import clouds from "../assets/clouds.png";
import searchbar from "../assets/sb.png";
import places from "../assets/places.png";
import rc from "../assets/rc.png";


const location = () => {
    return (
        <DayContainer>

            <Graphic>

            </Graphic>

            <Background>
                <Sun><img src={sun} /> </Sun>
                <City><img src={city} /></City>
                <Clouds><img src={clouds} /></Clouds>
            </Background>

            <Panel>
                <h1>Location</h1>
                <img src={searchbar} />
                <h1 className="loccity">İstanbul</h1>
                <img className="rc" src={rc} />
                <h2>İstanbul, Turkey</h2>
                <h3>33°C</h3>
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
left: 950px;
top: -1660px;
background: linear-gradient(180deg, #77BCEE 0%, #FFFFFF 100%);

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

const Graphic = styled.div`

`;

const Panel = styled.div`
position: absolute;
width: 375px;
height: 740px;
left: 950px;
top: -1600px;
border-radius: 26px;
background: #FFFFFF;
box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);

h1 {
    position: absolute;
    width: 63px;
    height: 19px;
    left: 157px;
    top: 47px;
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #999999;
}

h2 {
    position: absolute;
    width: 128px;
    height: 22px;
    left: 35px;
    top: 177px;
    font-family: Barlow;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.05em;
    color: #444444;    
}

h3 {
    position: absolute;
    width: 33px;
    height: 19px;
    left: 307px;
    top: 177px;
    font-family: Barlow;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #666666;
}

img {
    position: absolute;
    width: 335px;
    height: 40px;
    left: 20px;
    top: 103px;
    background: #F3F3F3;
    border-radius: 4px;
}

.rc{
    position: absolute;
    width: 335px;
    height: 40px;
    left: 20px;
    top: 168px;
    background: #ECF7FD;
    border-radius: 4px;
}

.loccity {
    position: absolute;
    width: 97px;
    height: 22px;
    left: 35px;
    top: 112px;
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.05em;
    text-align: left;
    color: #000000;
}

`;

export default location;