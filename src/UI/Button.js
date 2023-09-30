import React from 'react'
import styles from './Button.module.css';

const Button = props => {
    const classNames = `${styles.button} ${props.className || ''}`;
    return (
        <button className={classNames} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button
