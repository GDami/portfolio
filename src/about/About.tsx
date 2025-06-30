import './About.css'
import portraitImg from "/barbesmall.jpg"

export function About() {
    //@ts-expect-error
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    let generalDescription = "I'm a passionate software engineer with a degree in computer science and I am currently looking for a position as a web developer.\nI started out as a script kiddie and have experience in both fullstack web development and game dev. I strive for quality and am always happy to share my skills."
    return (
        <div className='section-container about' id="about">
            <h1 className='main-heading section-title'>About <span>me</span></h1>
            <div className='about-container'>
                <div className='about-img-container'>
                    <img className="about-portrait" src={portraitImg} alt='portrait'></img>
                    <div className='about-portrait-description'>me</div>
                </div>
                <div className='about-details'>
                    <h2>&gt; whoami<span>_</span></h2>
                    <p>{generalDescription}</p>
                    <br></br>
                    <h2>&gt; education<span>_</span></h2>
                    <p>I attended and graduated from the <a href='https://www.utt.fr/'>University of Technology of Troyes</a> in 2021. This is where I took on my first large coding projects, and learnt useful tools like algorithms, statistics or geometry.</p>
                    <br></br>
                    <h2>&gt; hobbies<span>_</span></h2>
                    <p>My other interests include <b>piano</b>, <b>biking</b>, <b>cooking</b>, <b>games</b> and <b>cat petting</b>. I love exploring and learning. I also find contentment in figuring out how things work, be it through research or experimenting.</p>
                    
                </div>
            </div>
        </div>
    )
}