import React from 'react'
import "./styles/button-styles.scss"

const Button = ({ buttonText, variant }) => {
    return (
        <button className={variant || 'button-primary'}>{buttonText}</button>
    )
}

export default Button