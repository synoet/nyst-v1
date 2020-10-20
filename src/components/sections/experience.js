import React, {useState, useEffect} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components';


const ExperienceSection = styled.div`
display: flex;
justify-content: center;
background-color: var(--dark-background);
height: 50vh;
align-items: flex-start;
`;

const Container = styled.div`
font-size: 22px;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
width: 100%;
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

const ExperienceWrap = styled.div`
width: 70%;
`;

const TabList = styled.ul`
width: 70%;
list-style = none;
`;

const SectionTitle = styled.div`
width: 70%;
font-size: 20px;
color: var(--white);
`;


const Experience = () => {
    const data = useStaticQuery(graphql`
        query {
            allStrapiExperience {
                edges {
                node {
                    position
                    Company
                    dates
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
                        <li>{select.node.Company}</li>
                    )
                
                })}

                    </TabList>


                </ExperienceWrap>
            </Container>
        </ExperienceSection>

    )
}

export default Experience
