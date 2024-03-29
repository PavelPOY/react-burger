import React from 'react';
import PropTypes from 'prop-types'
import styles from './modal-overlay.module.css';

function ModalOverlay({closeModal}) {
  return(
    <div className={styles.wrapper} onClick={closeModal}></div>
  )
}

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
}

export default ModalOverlay;