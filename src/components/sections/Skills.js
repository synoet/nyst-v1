import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Languages, allSkills, tools, creativeTools, awards} from '../../config'
import anime from 'animejs'


const SkillsSection = styled.div`
display: flex;
justify-content: center;
background-color: var(--dark-background)
align-items: flex-start;
`;
const Container = styled.div`
font-size: 22px;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
width: 100%;
margin-top: 2rem;
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
    margin-top 5vh;
   }

}
    
}
`;

const ListWrap = styled.div`
width: 70%;
p {
    color: var(--white);
    font-size: 18px;

}
h3 {
    color: var(--white);
    font-size: 20px;
    margin-top: 1rem;
}
ul.list {
    display: grid;
    grid-template-columns: repeat(6, minmax(140px, 250px));
    overflow: hidden;
    list-style: none;
    color: #8892b0;
    li {
      position: relative;
      padding-left: 30px;
      padding-top: 10px;
      font-family: var(--font-mono);
      font-size: 20px;
      @media (max-width: 1080px) {
        font-size: 16px;
       }
    &:before {
        content: '▹ ';
        font-size: 20px;
        position: absolute;
        left: 0;
        color: #53D4BA;
      }
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

const container = styled.div``;


const Skills = () => {
    
    return (
        <SkillsSection id = 'skills'>
            <Container>
                <SectionTitle> 2. Skills & Stats</SectionTitle>
                <ListWrap>
                    <h3>Languages: </h3>
                    <ul className = 'list'>
                        {Languages.map((name, i ) => (
                            <li className = 'skills' key = {i}>{name}</li>
                        ))}
                    </ul>
                    <h3>Technical Skills: </h3>
                    <ul className = 'list'>
                        {allSkills.map((name, i ) => (
                            <li key = {i}>{name}</li>
                        ))}
                    </ul>
                    <h3>Tools: </h3>
                    <ul className = 'list'>
                        {tools.map((name, i ) => (
                            <li key = {i}>{name}</li>
                        ))}
                    </ul>

                    <h3>Creative Tools: </h3>
                    <ul className = 'list'>
                        {creativeTools.map((name, i ) => (
                            <li key = {i}>{name}</li>
                        ))}
                    </ul>
                </ListWrap>
            </Container>
        </SkillsSection>
    )
}

export default Skills
