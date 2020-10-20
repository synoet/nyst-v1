import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {navLinks } from '../config.js'
import Logo from './icons/logo.js'

const StyledHeader = styled.header`

`;

const StyledNav = styled.nav`
padding-left: 5vw;
padding-right: 5vw;
position: -webkit-sticky;
position: sticky;
top: 0px;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
margin-right: auto;
margin-left: auto;
padding-top: 16px;
padding-bottom: 16px;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
background-color: #0a192e;
font-family: var(--font-mono);
color: #fff;
font-size: 17px;
@media (max-width: 800px) {
    padding-left: 15vw;
    padding-right: 20vw;
    }


`;

const NavWrap = styled.div`
margin-right: -24px;
-webkit-align-self: flex-start;
-ms-flex-item-align: start;
align-self: flex-start;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
margin-right: -20px;

`;

const LogoWrap = styled.div`
display: block;
background-color: rgba(255, 205, 0, 0);
-webkit-transition: all 300ms cubic-bezier(.23, 1, .32, 1);
transition: all 300ms cubic-bezier(.23, 1, .32, 1);
:hover{
    position: static;
    overflow: visible;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
`;
const NavContent = styled.div`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
padding-bottom: 0px;
-webkit-box-pack: justify;
-webkit-justify-content: space-between;
-ms-flex-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
-webkit-align-items: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-flex: 1;
-webkit-flex: 1;
-ms-flex: 1;
flex: 1;
`;

const NavLink = styled.a`
padding: 9px 24px;
color: #f7f7f7;
font-size: 14px;
line-height: 24px;
font-weight: 400;
letter-spacing: 0.25px;
text-decoration: none;
:hover {
    color: #53D4BA;
    border-bottom-color: transparent;
    -webkit-transform: skew(0deg, 3deg);
    -ms-transform: skew(0deg, 3deg);
    transform: skew(0deg, 3deg);

`;

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const Nav = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
    })

    return (
        <StyledHeader>
            <StyledNav>
                    <NavContent>
                        <LogoWrap><Logo /></LogoWrap>
                        {windowDimensions.width >= 900 ? (                        <NavWrap>
                            {navLinks.map(({url, name}, index) => (
                                <NavLink href = {url}>{index + 1}. {name}</NavLink>
                            ))}
                        </NavWrap>) : ('@nysteo')
                        }

                    </NavContent>
            </StyledNav> 
        </StyledHeader>
    )
}

export default Nav
