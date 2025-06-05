import './About.css'
import { AboutDetail } from './AboutDetail'

export function About() {
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    let generalDescription = "I am a software engineer with a degree in computer science and I am currently looking for a position as a web developer.\nI strive for quality and am looking to join a team to develop my skills in."
    let hobbiesDescription = "My interests include games, piano and cat petting.\nI also love exploring new places and learning stuff. But behind the scenes is where I like to look. Finding out how things come to be is what piques my curiosity."
    let skillsDescription = "Ever since I was a kid I have been fiddling around breaking out things like my favorite websites and games, to try and understand the way they're structured.\nNow I simply code. I am good at coding."
    return (
        <div className='section about' id="about">
            <h1>About me</h1>
            <AboutDetail
                description={generalDescription}
                reversed={false}
            />
            <AboutDetail
                description={hobbiesDescription}
                reversed={true}
            />
            <AboutDetail
                description={skillsDescription}
                reversed={false}
            />
        </div>
    )
}