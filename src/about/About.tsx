import './About.css'

export function About() {
    //@ts-expect-error
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return (
        <div className='section-container about' id="about">
            <h1 className='section-title animated-underline'>about <span>me</span></h1>
            <div className='about-container'>
                <div className='about-details'>
                    <div className='about-detail'>
                        <h2>&gt; whoami<span>_</span></h2>
                        <p>I'm a <em>software engineer</em> with a degree in computer science and I am currently looking for a position as a <em>frontend or fullstack developer</em>. I started out as a script kiddie and have experience in both fullstack web development and game dev. I strive for <em>quality</em> and am always happy to <em>share my skills</em>.</p>
                        <br></br>
                    </div>
                    <div className='about-detail'>
                        <h2>&gt; education<span>_</span></h2>
                        <p>I attended and graduated from the <span><a href='https://www.utt.fr/formations/diplome-d-ingenieur/reseaux-et-telecommunications/' target="_blank">University of Technology of Troyes</a></span> in 2021. This is where I took on my first large <em>coding projects</em>, and learned useful tools like <em>algorithms</em>, <em>statistics</em> or <em>geometry</em>.</p>
                        <br></br>
                    </div>
                    <div className='about-detail'>
                        <h2>&gt; hobbies<span>_</span></h2>
                        <p>My other interests include <em>piano</em>, <em>biking</em>, <em>cooking</em>, <em>games</em> and <em>cat petting</em>. I love <em>exploring</em> and <em>learning</em>. I also find contentment in figuring out how things work, be it through <em>research</em> or <em>experimenting</em>.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}