import React from 'react';
import PropTypes from 'prop-types';
import styles from './app-header-link.module.css';

function Link({indent,image,active,text}) {
  return (
    <a href='#' className={`${styles.link} ${indent === true ? styles.indent : null}  pt-4 pr-5 pb-4 pl-5`}>
      {image}
      <p className={`${active === true ? styles.on : null} text text_type_main-default ml-2`}>{text}</p>
    </a>
  );
}

Link.propTypes = {
  indent: PropTypes.bool.isRequired,
  image: PropTypes.element.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Link;