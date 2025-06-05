import './About.css'
import { AboutDetail } from './AboutDetail'

export function About() {
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    let generalDescription = "I am an software engineer graduate looking for a job."
    let hobbiesDescription = "I like to shower"
    let skillsDescription = "I am good at coding"
    return (
        <div className='section about' id="about">
            <h1>About me</h1>
            <AboutDetail
                description={lorem}
                reversed={false}
            />
            <AboutDetail
                description={lorem}
                reversed={true}
            />
            <AboutDetail
                description={lorem}
                reversed={false}
            />
        </div>
    )
}