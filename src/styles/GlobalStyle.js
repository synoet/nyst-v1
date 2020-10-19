import { createGlobalStyle } from 'styled-components';
import Fonts from './fonts';

const GlobalStyle = createGlobalStyle`
.button-main {
  padding: 12px 32px;
  border-style: solid;
  border-width: 3px;
  border-color: #53d4ba;
  border-radius: 6px;
  background-color: transparent;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
  color: #53d4ba;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
}

.button-main:hover {
  border-color: #53d4ba;
  -webkit-transform: translate(0px, -2px);
  -ms-transform: translate(0px, -2px);
  transform: translate(0px, -2px);
  color: #53d4ba;
}

.button-main:active {
  opacity: 0.7;
  -webkit-transform: translate(0px, 0px);
  -ms-transform: translate(0px, 0px);
  transform: translate(0px, 0px);
}

.centred-paragraph {
  width: 67%;
  margin-right: auto;
  margin-left: auto;
}

.centred-paragraph._80px-right-padding {
  width: 70%;
  padding-right: 80px;
}

.hero-intro {
  width: 70%;
  color: #53d4ba;
  font-size: 24px;
}

.text-span-3 {
  color: #ffcd00;
}

.text-link {
  display: inline-block;
  border-bottom: 3px solid #e0e0e0;
  -webkit-transition: all 300ms cubic-bezier(.23, 1, .32, 1);
  transition: all 300ms cubic-bezier(.23, 1, .32, 1);
}

.text-link:hover {
  border-bottom-color: transparent;
  -webkit-transform: skew(0deg, 3deg);
  -ms-transform: skew(0deg, 3deg);
  transform: skew(0deg, 3deg);
  color: #5b1ed6;
}

.text-link:active {
  opacity: 0.7;
  -webkit-transform: skew(0deg, 0deg);
  -ms-transform: skew(0deg, 0deg);
  transform: skew(0deg, 0deg);
}

.text-link.bold {
  font-weight: 700;
}

.text-link.bold:hover {
  border-bottom-color: hsla(0, 0%, 87.8%, 0);
}

.text-link.bold._24px {
  color: #53d4ba;
  text-decoration: none;
}

.text-link.bold._24px:hover {
  -webkit-transform: skew(3deg, 3deg);
  -ms-transform: skew(3deg, 3deg);
  transform: skew(3deg, 3deg);
  color: #53d4ba;
}

.container-hero {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin-top: 225px;
  margin-right: 40px;
  margin-left: 40px;
  padding-top: 147px;
  padding-bottom: 120px;
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
}

.hero-desc-1 {
  display: block;
  width: 70%;
  margin-top: 13px;
  margin-bottom: 32px;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  -ms-grid-row-align: auto;
  align-self: auto;
  -webkit-box-ordinal-group: 1;
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  color: #f7f7f7;
  font-size: 22px;
  line-height: 30px;
  text-align: left;
  text-decoration: none;
}

.hero-desc-1.second-body {
  width: 100%;
  font-size: 22px;
}

.heading-1 {
  display: block;
  width: 70%;
  margin-top: 0px;
  margin-bottom: 0px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  background-color: transparent;
  color: #fff;
  font-size: 72px;
  line-height: 80px;
  font-weight: 700;
  letter-spacing: -1px;
  text-transform: none;
}

.hero-name {
  width: 70%;
  font-weight: 600;
}

.bold-text {
  color: #53d4ba;
}

.navigation-wrap {
  margin-right: -24px;
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
}

.navigation {
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
  font-family: Sfmono, sans-serif;
  color: #fff;
  font-size: 17px;
}

.logo-2 {
  margin-bottom: 0px;
}

.div-nav {
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
}

.logo-image {
  display: block;
  background-color: rgba(255, 205, 0, 0);
  -webkit-transition: all 300ms cubic-bezier(.23, 1, .32, 1);
  transition: all 300ms cubic-bezier(.23, 1, .32, 1);
}

.logo-image:hover {
  position: static;
  overflow: visible;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.logo-image:active {
  -webkit-transform: scale(0.9) rotate(-45deg);
  -ms-transform: scale(0.9) rotate(-45deg);
  transform: scale(0.9) rotate(-45deg);
}

.navigation-links {
  padding: 9px 24px;
  color: #f7f7f7;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
}

.navigation-links:hover {
  opacity: 0.7;
  -webkit-transform: skew(3deg, 3deg);
  -ms-transform: skew(3deg, 3deg);
  transform: skew(3deg, 3deg);
  color: #53d4ba;
  text-decoration: none;
  text-transform: capitalize;
  white-space: normal;
}

.navigation-links:active {
  opacity: 0.6;
  -webkit-transform: scale(0.94) skew(0deg, 0deg);
  -ms-transform: scale(0.94) skew(0deg, 0deg);
  transform: scale(0.94) skew(0deg, 0deg);
  color: #fff;
  text-transform: capitalize;
}

.navigation-links.w--current {
  padding-right: 30px;
  padding-left: 30px;
  background-color: transparent;
  opacity: 1;
  color: #ffcd00;
  font-weight: 700;
  text-transform: capitalize;
}

.navigation-links.w--current:hover {
  opacity: 1;
  -webkit-transform: skew(0deg, 0deg);
  -ms-transform: skew(0deg, 0deg);
  transform: skew(0deg, 0deg);
  color: #ffcd00;
}

.navigation-links.hide.w--current {
  color: #53d4ba;
}

.navigation-links.resume-button {
  border-style: solid;
  border-width: 2px;
  border-color: #53d4ba;
  border-radius: 10px;
  color: #53d4ba;
}

.section-nav {
  width: 100%;
  max-width: 1200px;
  margin-right: 40px;
  margin-left: 40px;
}

.text-span-7 {
  color: #53d4ba;
}

.section-hero {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
  margin-top: -74px;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  background-color: #0a192e;
  font-family: Sfmono, sans-serif;
  color: #e8e8e8;
}

.link {
  text-decoration: none;
}

@media screen and (min-width: 1920px) {
  .button-main {
    border-color: #53d4ba;
    color: #53d4ba;
  }
  .button-main:hover {
    border-color: #53d4ba;
    color: #53d4ba;
  }
  .centred-paragraph._80px-right-padding {
    width: 70%;
  }
  .text-span-6 {
    color: #53d4ba;
  }
  .hero-intro {
    width: 70%;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    -ms-grid-row-align: auto;
    align-self: auto;
    color: #53d4ba;
    font-size: 24px;
  }
  .text-link.bold._24px {
    color: #53d4ba;
  }
  .container-hero {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 220px;
    padding-top: 97px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .hero-desc-1 {
    width: 70%;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    color: #f7f7f7;
    text-align: left;
  }
  .hero-desc-1.second-body {
    width: 100%;
  }
  .heading-1 {
    width: 70%;
    color: #e5e5e5;
    font-size: 24px;
    font-weight: 600;
  }
  .hero-name {
    font-size: 72px;
  }
  .logo-image {
    background-color: rgba(255, 205, 0, 0);
  }
  .section-hero {
    background-color: #0a192e;
    color: #0a192e;
  }
}

@media screen and (max-width: 991px) {
  .button-main {
    margin-bottom: 0px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .centred-paragraph {
    width: 67%;
    margin-right: 16%;
    margin-left: 16%;
    padding-right: 40px;
    padding-left: 40px;
  }
  .heading-1 {
    width: 100%;
    margin-right: 16%;
    margin-left: 16%;
    padding-left: 40px;
    font-size: 56px;
    line-height: 63px;
  }
  .navigation-links:active {
    background-color: transparent;
  }
  .section-nav {
    margin-right: 40px;
    margin-left: 40px;
  }
}

@media screen and (max-width: 767px) {
  .button-main {
    width: 100%;
    text-align: center;
  }
  .centred-paragraph {
    width: 100%;
    margin-right: 0%;
    margin-left: 0%;
    padding-right: 0px;
    padding-left: 0px;
  }
  .heading-1 {
    margin-right: 0%;
    margin-left: 0%;
    padding-right: 0px;
    padding-left: 0px;
  }
  .navigation-wrap {
    margin-right: -12px;
  }
  .logo-2 {
    padding-left: 0px;
  }
  .logo-2.w--current {
    padding-left: 0px;
  }
  .navigation-links {
    padding-right: 20px;
    padding-left: 20px;
  }
  .navigation-links:active {
    background-color: transparent;
  }
  .navigation-links.w--current {
    padding-right: 20px;
    padding-left: 20px;
  }
  .navigation-links.hide {
    padding-right: 20px;
    padding-left: 20px;
  }
}

@media screen and (max-width: 479px) {
  .button-main {
    padding-right: 24px;
    padding-left: 24px;
  }
  .centred-paragraph {
    width: 100%;
  }
  .container-hero {
    padding-bottom: 80px;
  }
  .hero-desc-1 {
    font-size: 20px;
    line-height: 34px;
  }
  .heading-1 {
    width: 100%;
    font-size: 40px;
    line-height: 46px;
  }
  .navigation-wrap {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-right: -20px;
  }
  .navigation {
    overflow: hidden;
  }
  .navigation-links {
    padding-right: 20px;
    padding-left: 20px;
  }
  .navigation-links.w--current {
    display: block;
  }
  .navigation-links.hide {
    display: none;
  }
}

@font-face {
  font-family: 'Sfmono';
  src: url('../fonts/SFMono-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Sfmono';
  src: url('../fonts/SFMono-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Sfmono';
  src: url('../fonts/SFMono-Semibold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
`;

export default GlobalStyle;