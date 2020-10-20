import React, {useState, useEffect} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components';


const ExperienceSection = styled.div`
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
@media (max-width: 1100px) {
    margin-top 7vh;
   }
`;

const ExperienceWrap = styled.div`
width: 70%;
`;

const TabList = styled.ul`
width: 90%;
list-style: none;
`;

const SectionTitle = styled.div`
width: 70%;
font-size: 20px;
color: var(--white);
line-height: 50px;
padding-bottom: 10px;
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

const TabContent = styled.div`
width: 100%;
height: auto;
padding-top: 10px;
// padding-left: 30px;
ul{
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      font-size: 18px;
      color: var(--white);
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
      }
    }
}
h3 {
  margin-bottom: 5px;
  font-weight: 500;
  color: var(--white);
  .company {
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
.range {
  margin-bottom: 30px;
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
}
`;

const Experience = () => {
    const data = useStaticQuery(graphql`
        query {
            allStrapiExperience {
                edges {
                node {
                    position
                    company
                    dates
                    link
                    Description {
                    id
                    desc1
                    }
                }
                }
            }
        }
    `);
    const experienceData = data.allStrapiExperience.edges;
    console.log(experienceData);
    return (
        <ExperienceSection>
            <Container>
                <SectionTitle> 2. Experience</SectionTitle>
                <ExperienceWrap>
                    <TabList>
                    {experienceData.map((select, index) => {
                        return (
                            <TabContent>
                                <h3>{select.node.position} <a href = {select.node.link} className = 'company'>{select.node.company}</a></h3>
                                <p className = 'range'>{select.node.dates}</p>
                                <ul>
                                    
                                        {select.node.Description.map((desc, index) => {
                                            return (
                                                <li>{desc.desc1}</li>

                                            )
                                        })}
                                </ul>

                            </TabContent>

                        )
                    })}

                    </TabList>


                </ExperienceWrap>
            </Container>
        </ExperienceSection>

    )
}

export default Experience
