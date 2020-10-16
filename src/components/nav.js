import React from 'react'
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {navLinks } from '../config.js'

const StyledHeader = styled.header`

`;

const StyledNav = styled.nav`

`;


const StyledLinks = styled.div`

`;

const nav = () => {
    return (
        <StyledHeader>
            <StyledNav>
                <StyledLinks>
                    {navLinks.map(({url, name}, index) => (
                        <li><Link>{index + 1}.{name}</Link></li>
                    ))}
                </StyledLinks>
            </StyledNav> 
        </StyledHeader>
    )
}

export default nav
