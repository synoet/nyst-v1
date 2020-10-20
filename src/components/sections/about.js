import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import me from '../../images/me.png'
import {Languages, allSkills, tools, creativeTools} from '../../config'


const AboutSection = styled.div`
display: flex;
justify-content: center;
background-color: var(--dark-background);
align-items: flex-start;
`;

const Container = styled.div`
font-size: 22px;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
width: 100%;
padding-bottom: 5rem;
max-width: 1600px;
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
.inner {
width: 70%;

@media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 50px;
   }

}

h3 {
    width: 70%;
    font-size: 16px;
    color: var(--white);
    line-height: 12px;

}
ul.list {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(5, minmax(140px, 200px));
    overflow: hidden;
    list-style: none;
    color: #8892b0;
    li {
      position: relative;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: 16px;
      @media (max-width: 1080px) {
        font-size: 16px;
       }
    &:before {
        content: '▹ ';
        font-size: 16px;
        position: absolute;
        left: 0;
        color: #53D4BA;
      }
`;

const AboutText = styled.div`

p {
    color: var(--white);
    font-size: 18px;

}
.highlight {
    color: var(--green);
    color: #53d4ba;
    display: inline-block;
    border-bottom: 3px solid #e0e0e0;
    text-decoration: none;
    &:before {
        content: '@';
    }
    :hover {
        border-bottom-color: transparent;
        -webkit-transform: skew(0deg, 3deg);
        -ms-transform: skew(0deg, 3deg);
        transform: skew(0deg, 3deg);

    
}
}
ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const AboutImage = styled.div`
position: relative;
max-width: 300px;
display: block;
position: relative;
width: 100%;

img {
    width: 220px;
    height: 210px;
    border: 4px solid var(--green);
    border-radius: 5px;
}
`;

const SectionTitle = styled.div`
width: 70%;
font-size: 20px;
color: var(--white);
line-height: 50px;
padding-bottom: 50px;
display: flex;
align-items: center;
position: relative;
white-space: nowrap;
&:after {
    content: '';
    display: block;
    position: relative;
    width: 400px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--slate);
}
`;



const About = () => {
    return (
        <AboutSection id = 'About'>
            <Container>
                <SectionTitle> 1. About</SectionTitle>
                <div className = 'inner'>
                    <AboutImage><img src = {me}></img></AboutImage>
                    <AboutText>
                        <p>Hello there, I'm Teo, a junior <a href = 'https://www.google.com/search?q=NYU&rlz=1C5CHFA_enUS904US904&oq=NYU&aqs=chrome..69i57j69i59j69i60l6.708j0j1&sourceid=chrome&ie=UTF-8' className = 'highlight'>NYU</a> studying Computer Science and Biomolecular Science.</p>
                        <p>I have a passion for building beautiful and impactful apps & websites. I am currently working <a href = 'https://www.clarissa.ai' className = 'highlight'>Clarissa.ai</a> and <a className = 'highlight'>Clarafai</a></p>
                        <p>When I'm not working on Projects, Work or Uni, I enjoy reading, playing Video Games, Designing, and walking my dog <a href = "https://en.wikipedia.org/wiki/Shiba_Inu" className = 'highlight'>Korra</a> </p>
                    </AboutText>
                </div>
                {/* <SectionTitle> 1.1 Skills & misc</SectionTitle>
                <h3>Languages: </h3>
                <ul className = 'list'>
                    {Languages.map((name, i ) => (
                        <li key = {i}>{name}</li>
                    ))}
                </ul>
                <h3>Technical Skills: </h3>
                <ul className = 'list'>
                    {allSkills.map((name, i ) => (
                        <li key = {i}>{name}</li>
                    ))}
                </ul>
                <h3>Creative Tools: </h3>
                <ul className = 'list'>
                    {creativeTools.map((name, i ) => (
                        <li key = {i}>{name}</li>
                    ))}
                </ul> */}
            </Container>
        </AboutSection>
    )
}

export default About
