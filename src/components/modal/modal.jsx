import React from 'react';
import ReactDom from 'react-dom';
import styles from './modal.module.css';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/modal-overlay';

const modal = document.getElementById('modal');

function Modal ({closeModal, children}) {

  React.useEffect(() => {
    document.addEventListener('keydown', closeModalEsc);
    return () => {
      document.removeEventListener('keydown', closeModalEsc);
    }
  })

  const closeModalEsc = (e) => {
    if(e.key === 'Escape') {
      closeModal();
    }
  }

  return ReactDom.createPortal(
    <div className={styles.wrapper}>
      <ModalOverlay closeModal={closeModal} />
      <div className={styles.popup} onClick={e => e.stopPropagation()}>
        <div className={styles.button}>
          <CloseIcon type='primary' onClick={closeModal} />
        </div>
        {children}
      </div>
    </div>,
    modal
  )
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
}

export default Modal;