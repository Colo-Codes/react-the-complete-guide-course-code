import { useState } from 'react';
import styles from './Modal.module.css';
import Button from './Button';

const Modal = props => {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onResetErrorMessage} />
            <div className={styles.modal}>
                <div className={styles.message}>{props.errorMessage}</div>
                <Button onClick={props.onResetErrorMessage}>Close</Button>
            </div>
        </div>
    );
}

export default Modal;