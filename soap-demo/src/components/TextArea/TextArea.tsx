import React, { TextareaHTMLAttributes } from 'react'
import styles from './TextArea.module.css';
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest}) => {
    return(

        <div className={`${styles['textarea-result']}`}>
            <label htmlFor={name}>{label}</label>
        <textarea name={name} id={name} {...rest}/>
    </div>
    )
}

export default TextArea;