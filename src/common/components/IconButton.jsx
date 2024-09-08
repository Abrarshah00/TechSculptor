import React from 'react'
import './styles/iconbutton-styles.scss'

const IconButton = ({ icon, style }) => {
    return (
        <button className='icon-button' style={style}> {icon}</button >
    )
}

export default IconButton