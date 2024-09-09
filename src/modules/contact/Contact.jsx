import React from 'react'
import './contact-styles.scss'
import Button from 'src/common/components/Button'
import { social } from 'src/common/constants/profile'

const Contact = () => {

    const handleRedirect = (link) => {
        window.open(link, '_blank')
    }
    return (
        <div className='contact__container'>
            <div className='banner'>
                <div className='banner__message'>Thank you for taking the time to learn more about my work. I hope you found what you were looking for!
                </div>
            </div>
            <div className='contact__section'>
                <div className='contact__message'>
                    Ready to create tech magic? Shoot me an email!
                </div>
                <div className='contact__email'>abrar.dev00@gmail.com</div>
                <div className='social__section'>
                    {social?.map((social) => (
                        <Button buttonText={social?.website} variant={social.button ? social.button : 'button-primary'} onClick={() => handleRedirect(social.link)} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Contact