import React from 'react'
import styled from 'styled-components';
import {email} from '../../config';


const ContactSection = styled.div`
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
    margin-top 10vh;
   }

`;
const Content = styled.div`
width: 70%;

.title {
    font-size: 30px;
}
p {
    color: var(--white);
}
}

  .company {
    color: var(--green);
    color: #53d4ba;
    display: inline-block;
    border-bottom: 3px solid #e0e0e0;
    text-decoration: none;
    &:before {
        content: '▹';
    }

    :hover {
        border-bottom-color: transparent;
        -webkit-transform: skew(0deg, 3deg);
        -ms-transform: skew(0deg, 3deg);
        transform: skew(0deg, 3deg);

    


}
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

const Contact = () => {
    console.log(email);
    return (
        <ContactSection id = 'contact'>
            <Container>
                <SectionTitle>5. Contact Me</SectionTitle>
                <Content>
                    <h3 className = 'title'> Say Hello! </h3>
                    <p>I'm always looking for new opportunities and connections. Wether you want to collaborate or just want to say Hello, I'll Try my best to get back to you!</p>
                    <p>You can reach me at <a className = 'company' href = {`mailto:${email}`}>teonys@nyu.edu</a></p>
                    
                </Content>
            </Container>
        </ContactSection>
    )
}

export default Contact