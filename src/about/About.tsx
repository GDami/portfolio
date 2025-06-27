import './About.css'
import portraitSvg from "/1518958240827.jpg"

export function About() {
    //@ts-expect-error
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    let generalDescription = "I'm a passionate software engineer with a degree in computer science and I am currently looking for a position as a web developer.\nI started out as a script kiddie and have experience in both fullstack web development and game dev. I strive for quality and am always happy to share my skills."
    return (
        <div className='section-container about' id="about">
            <img className="about-portrait" src={portraitSvg} alt='portrait'></img>
            <div className='about-details'>
                <h1 className='main-heading section-title'>About <span>me</span></h1>
                <br></br>
                <h2>&gt; whoami<span>_</span></h2>
                <p>{generalDescription}</p>
                <br></br>
                <h2>&gt; cat hobbies.txt<span>_</span></h2>
                <p>My other interests include <b>piano</b>, <u>biking</u> and <em>cat petting</em>. I love exploring new places, learning stuff and misusing html tags. Generally, behind the scenes is where I like to look. Figuring out how something works is what excites me.</p>
                
            </div>
        </div>
    )
}