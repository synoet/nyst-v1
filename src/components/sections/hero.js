import React from 'react';
import styled from 'styled-components'
import Icon from '../icons/icon.js';

import {socialMedia} from '../../config'


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
max-width: 1400px;
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

const DescriptionWrap = styled.div`
width: 70%;
margin-right: auto;
margin-left: auto;
`;

const HeroName = styled.h1`
    width: 70%;
    font-size: 82px;
    font-weight: 600;
    line-height: 20px
`;

const HeroDesc = styled.h2`
width: 100%;
font-size: 24px;
line-height: 40px;
`;

const Button = styled.button`
padding: 12px 32px;
border-style: solid;
border-width: 3px;
border-color: #53d4ba;
border-radius: 6px;
background-color: transparent;
-webkit-transition: all 300ms ease;
transition: all 300ms ease;
color: #53d4ba;
font-size: 16px;
line-height: 24px;
font-weight: 700;
letter-spacing: 2px;

:hover {
    border-color: #53d4ba;
    -webkit-transform: translate(0px, -5px);
    -ms-transform: translate(0px, -5px);
    transform: translate(0px, -5px);
    color: #53d4ba;
`;

const DescLink = styled.a`
color: #53d4ba;
display: inline-block;
border-bottom: 3px solid #e0e0e0;
text-decoration: none;

:hover {
    border-bottom-color: transparent;
    -webkit-transform: skew(0deg, 3deg);
    -ms-transform: skew(0deg, 3deg);
    transform: skew(0deg, 3deg);
`;

const StyledSocialList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
margin: 0;
padding: 0;
list-style: none;
&:after {
  content: '';
  display: block;
  width: 1px;
  height: 90px;
  margin: 0 auto;
}
li {
  padding: 10px;
  a {
    svg {
      width: 20px;
      height: 20px;
      fill: #8892b0;
    }
  }
}
`;

const hero = () => {
    return (

            <SectionHero>
                <Container>
                    <HeroIntro> Hello, my name is</HeroIntro>
                    <HeroName>Teo Nys 👋</HeroName>
                    <DescriptionWrap>
                        <HeroDesc>New York City--based developer & designer that cares a lot about creating useful, meaningful, and well-crafted products. I’m currently working on <DescLink> Clarissa AI </DescLink> — an intelligent medical assistant.</HeroDesc>
                        <HeroDesc>Take a look through my work below. If you want to say hi, or chat about a new project — <DescLink href = 'teonys@nyu.edu'>get in touch.</DescLink></HeroDesc>
                        <StyledSocialList>
                        {socialMedia.map(({ url, name }, i) => (
                                <li key={i}>
                                    <a href={url} aria-label={name}>
                                    <Icon name={name} />
                                    </a>
                                </li>
                            ))}
                        </StyledSocialList>
                        <Button>Full Bio & Resume</Button> 
                    </DescriptionWrap>
                </Container>
            </SectionHero>
    )
}

export default hero;
