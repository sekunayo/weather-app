import React from 'react'
import { ButtonType } from '../../types/component';
import { styles } from './styles';

interface ButtonProps {
    type: ButtonType;
    children: any;
}
const Button = ({ type, children }: ButtonProps) => {
    return (
        <button type={type} className={styles.button}>{children}</button>
    )
}

export default Button