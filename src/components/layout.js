import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Hero from '../components/sections/hero.js'
import Nav from '../components/nav.js'
import GlobalStyles from '../styles/GlobalStyle'

const StyledContent = styled.div`
font-family: var(--font-mono);
`;


const layout = () => {
    return (
        <div id = 'root'>
            <GlobalStyles/>
            <StyledContent>
                <Nav></Nav>
                <Hero></Hero>
            </StyledContent>
        </div>
    )
}

export default layout
