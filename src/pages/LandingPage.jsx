import React from 'react'
import About from 'src/modules/about/About'
import Experience from 'src/modules/experience/Experience'
import HeroSection from 'src/modules/herosection/HeroSection'
import Navbar from 'src/modules/navbar/Navbar'
import SkillRibbon from 'src/modules/skillsribbon/SkillRibbon'

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <Navbar />
            <HeroSection />
            <SkillRibbon />
            <About />
            <Experience />
        </div>
    )
}

export default LandingPage