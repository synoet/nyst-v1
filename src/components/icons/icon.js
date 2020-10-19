import React from 'react';
import PropTypes from 'prop-types';
import IconGitHub from '../icons/github.js';
import IconLinkedin from '../icons/linkedin.js';
import Logo from '../icons/logo.js'
import IconTwitter from '../icons/twitter.js';

const Icon = ({ name }) => {
    console.log(name);
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'LinkedIn':
      return <IconLinkedin />;
    case 'Logo':
      return <Logo />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <Logo />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;