import { Experience } from './Experience'
import './Experiences.css'

export function Experiences() {
    return (
        <div className="section-container experiences" id="experiences">
            <h1 className="main-heading section-title animated-underline">My <span>Experience</span></h1>
            <div className='experiences-vertical-container'>
                <div className='experiences-visual-timeline'>
                    <div className='experiences-current-time'></div>
                </div>
                <div className='experiences-container'>
                    <Experience
                    title='Fullstack engineer intern at Coreoz'
                    description='I collaborated on multiple projects : internal tools, apps and business applications. Most projects would use Spring Boot and React, and I gained a lot of hands-on experience using React in very different codebases. I also learned a lot on styling during a redesign project where I closely collaborated with the UX/UI Designer.'
                    dates={['Nov 2020', 'Apr 2021']}/>
                    <Experience
                    title='Backend engineer intern at factorythings'
                    description="I worked on the company's main project : a B2B web application for visualizing data from IoT devices that monitor critical physical values on industry machines. I implemented communication protocols with Node.js and collaborated with the Product Manager to adapt the architecture. I also did some bugfixing on the UI part of the application, which introduced me to React."
                    dates={['Aug 2018', 'Jan 2019']}/>
                </div>
            </div>
        </div>
    )
}