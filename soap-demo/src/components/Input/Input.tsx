import React from 'react';
import styles from './Input.module.css';

const Input = (props: any) => {
    return (
        <input type="text" onChange={props.onChange} className={`${styles['custom-input']} ${props.classes}`} />
    );
}

export default Input;