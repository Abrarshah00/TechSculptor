import React from 'react'
import About from 'src/modules/about/About'
import Contact from 'src/modules/contact/Contact'
import Experience from 'src/modules/experience/Experience'
import HeroSection from 'src/modules/herosection/HeroSection'
import Navbar from 'src/modules/navbar/Navbar'
import Projects from 'src/modules/projects/Projects'
import SkillRibbon from 'src/modules/skillsribbon/SkillRibbon'

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <Navbar />
            <HeroSection />
            <SkillRibbon />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    )
}

export default LandingPage