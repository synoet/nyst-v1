import { createGlobalStyle } from 'styled-components';
import Fonts from './fonts';

const GlobalStyle = createGlobalStyle`
${Fonts};

:root {
    --dark-background: #0A192E;
    --green: #53D4BA;
    --light-slate: #8892b0;
    --slate: #8892b0;
    --white: #e6f1ff;


    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 18px;
    --fz-lg: 14px;
    --fz-xl: 24px;
    --fz-xxl: 26px;
    --fz-heading: 32px;

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