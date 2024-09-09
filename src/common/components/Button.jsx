import React from 'react'
import "./styles/button-styles.scss"

const Button = ({ buttonText, variant, onClick }) => {
    return (
        <button className={variant || 'button-primary'} onClick={onClick}>{buttonText}</button>
    )
}

export default Button