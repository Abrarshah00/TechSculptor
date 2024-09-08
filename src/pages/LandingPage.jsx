import React from 'react'
import About from 'src/modules/About/About'
import HeroSection from 'src/modules/HeroSection/HeroSection'
import Navbar from 'src/modules/Navbar/Navbar'
import SkillRibbon from 'src/modules/SkillsRibbon/SkillRibbon'

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <Navbar />
            <HeroSection />
            <SkillRibbon />
            <About />
        </div>
    )
}

export default LandingPage