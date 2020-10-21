import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Hero from '../components/sections/hero.js'
import Nav from '../components/nav.js'
import GlobalStyles from '../styles/GlobalStyle'
import Experience from '../components/sections/experience'
import About from '../components/sections/about'

import Helmet from 'react-helmet'

import Loader from '../components/loader.js'
import favicon from '../images/favicon.ico'

const StyledContent = styled.div`
font-family: var(--font--mono);
animation: fadeIn ease 3s;
@keyframes fadeIn{
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
`;


const Layout = () => {
    const [isLoading, setIsLoading] = useState(true)
    return (

        <div id = 'root'>
            <Helmet>
                <link rel="icon" href={favicon} />
                <title>Teo Nys</title>
            </Helmet>
            <GlobalStyles/>
            {isLoading ? (<Loader finishLoading = {() => setIsLoading(false)} />) : (
                <StyledContent>
                    <Nav></Nav>
                    <Hero></Hero>
                    <About></About>
                    <Experience></Experience>
                </StyledContent>


            )}

        </div>
    )
}

export default Layout
