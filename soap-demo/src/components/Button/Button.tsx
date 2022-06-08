import styles from './Button.module.css';

const Button = (props: any) => {
    return (
        <button type={props.type} className={`${styles.button} ${props.classes}`} onClick={props.onClick}>{props.children}</button>
    );
}

export default Button;