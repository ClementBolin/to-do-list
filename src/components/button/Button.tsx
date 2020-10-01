import React from 'react';
import './Button.scss';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile'];
const COLOR = ['primary', 'blue', 'red', 'green']

interface IProps {
    children?: string;
    type?: any;
    onClick?: any;
    buttonStyle?: string;
    buttonSize?: string;
    buttonColor?: string
}

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}: IProps) => {
    buttonStyle = buttonStyle == undefined ? "btn--primary" : buttonStyle
    buttonSize = buttonSize == undefined ? "btn--medium" : buttonSize
    buttonColor = buttonColor == undefined ? "primary" : buttonColor
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : 'btn--primary';
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : 'btn--medium';
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : 'primary' ;

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
            onClick={onClick}
            type={type} >{children}</button>
        
    )
}
