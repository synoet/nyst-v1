import { createGlobalStyle } from 'styled-components';
import Fonts from './fonts';

const GlobalStyle = createGlobalStyle`
${Fonts};

:root {
    --dark-background: #0A192E
    --green: #53D4BA
    --slate: #8892b0;

    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
}
body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--dark-background);
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xl);
    line-height: 1.3;
}

`;

export default GlobalStyle;