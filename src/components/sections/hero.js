import React from 'react';
import styled from 'styled-components'


const SectionHero = styled.div`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
height: 100vh;
margin-top: -74px;
margin-right: auto;
margin-left: auto;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: start;
-webkit-align-items: flex-start;
-ms-flex-align: start;
align-items: flex-start;
background-color: #0a192e;
font-family: var(--font-mono);
color: #e8e8e8;
`;

const Container = styled.div`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
width: 100%;
max-width: 1200px;
margin-top: 225px;
margin-right: 40px;
margin-left: 40px;
padding-top: 147px;
padding-bottom: 120px;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-webkit-align-items: center;
-ms-flex-align: center;
align-items: center;
`;

const HeroIntro = styled.h1`
width: 70%;
color: #53d4ba;
font-size: 24px;
`;

const HeroName = styled.h1`
    width: 70%;
    font-size: 72px;
`;

const HeroDesc = styled.h2`
width: 70%;
font-size: 20px;
line-height: 34px;
`;

const hero = () => {
    return (

            <SectionHero>
                <Container>
                    <HeroIntro> Hello, my name is</HeroIntro>
                    <HeroName>Teo Nys</HeroName>
                    <HeroDesc>New York City--based developer & designer that cares a lot about creating useful, meaningful, and well-crafted products. I’m currently working on Clarissa AI — an intelligent medical assistant.</HeroDesc>
                    <HeroDesc>Take a look through my work below. If you want to say hi, or chat about a new project — get in touch.</HeroDesc>
                </Container>
            </SectionHero>
    )
}

export default hero
