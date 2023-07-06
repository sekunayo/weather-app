import React from 'react'
import { ButtonType, ButtonVariantType } from '../../types/component';
import { styles } from './styles';

interface ButtonProps {
    type: ButtonType;
    children: any;
    handleClick?: () => void;
    variant: ButtonVariantType;
}
const Button = ({ type, children, handleClick, variant }: ButtonProps) => {
    return (
        <button onClick={handleClick} type={type} className={styles.button(variant)}>{children}</button>
    )
}

export default Button