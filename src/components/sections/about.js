import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'


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
`;

const AboutText = styled.div`
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
`;

const SectionTitle = styled.div`
width: 70%;
font-size: 20px;
color: var(--white);
`;



const About = () => {
    return (
        <AboutSection>
            <Container>
            <SectionTitle> 1. About</SectionTitle>
                <AboutText>
                    <p>Hello, Im Teo, a Computer Science student @NYU, and Software Engineer</p>
                </AboutText>
                <AboutImage></AboutImage>
            </Container>
        </AboutSection>
    )
}

export default About
