import React from 'react'
import './projects-styles.scss'
import IconButton from 'src/common/components/IconButton'
import { ExternalLink, MoveUpRight } from 'lucide-react'
import { projects } from 'src/common/constants/skills'

const Projects = () => {

    const handleRedirect = (link) => {
        window.open(link, '_blank')
    }
    return (
        <div className='projects__section'>
            <div className='projects__section-heading'>
                Projects
            </div>
            <div className='projects__card-container'>
                <ul>
                    {projects?.map((project) => (
                        <li className='project__name' onClick={() => handleRedirect(project.link)}>{project.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Projects