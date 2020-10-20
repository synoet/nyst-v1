import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Hero from '../components/sections/hero.js'
import Nav from '../components/nav.js'
import GlobalStyles from '../styles/GlobalStyle'

import Loader from '../components/loader.js'

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
            <GlobalStyles/>
            {isLoading ? (<Loader finishLoading = {() => setIsLoading(false)} />) : (
                <StyledContent>
                    <Nav></Nav>
                    <Hero></Hero>
                </StyledContent>


            )}

        </div>
    )
}

export default Layout
