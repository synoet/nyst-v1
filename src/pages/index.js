import React from "react"
import Hero from '../components/sections/hero.js'
import Nav from '../components/nav.js'
import styled, {ThemeProvider} from 'styled-components';
// import theme from '../styles/theme'
// import GlobalStyle from '../styles/GlobalStyle'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;
// `

export default function Home() {
  return (
    <div id = 'root'>
      {/* <ThemeProvider theme = {theme}>
        <GlobalStyle> */}
          {/* <StyledContent> */}
            <Nav />
            <Hero />

          {/* </StyledContent> */}
        {/* </GlobalStyle>
      </ThemeProvider> */}
    </div>
    

  )
}
