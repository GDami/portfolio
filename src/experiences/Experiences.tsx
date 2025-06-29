import { Experience } from './Experience'
import './Experiences.css'

export function Experiences() {
    return (
        <div className="section-container experiences" id="experiences">
            <h1 className="main-heading section-title">My <span>Experience</span></h1>
            <div className='experiences-vertical-container'>
                <div className='experiences-visual-timeline'></div>
                <div className='experiences-container'>
                    <Experience
                    title='Fullstack engineer intern at Coreoz'
                    description='I collaborated on multiple projects : internal tools, apps and business applications. Most projects would use Spring Boot and React, and I gained a lot of hands-on experience using React in very different codebases. I also learned a lot on styling during a redesign project where I closely collaborated with the UX/UI Designer.'
                    dates={['Nov 2020', 'Apr 2021']}/>
                    <Experience
                    title='Fullstack engineer intern at Coreoz'
                    description='I collaborated on multiple projects : internal tools, apps and business applications. Most projects would use Spring Boot and React, and I gained a lot of hands-on experience using React in very different codebases. I also learned a lot on styling during a redesign project where I closely collaborated with the UX/UI Designer.'
                    dates={['Nov 2020', 'Apr 2021']}/>
                    <Experience
                    title='Fullstack engineer intern at Coreoz'
                    description='I collaborated on multiple projects : internal tools, apps and business applications. Most projects would use Spring Boot and React, and I gained a lot of hands-on experience using React in very different codebases. I also learned a lot on styling during a redesign project where I closely collaborated with the UX/UI Designer.'
                    dates={['Nov 2020', 'Apr 2021']}/>
                </div>
            </div>
        </div>
    )
}