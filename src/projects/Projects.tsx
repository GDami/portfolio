import { Project } from "./Project";
import suiviImg from "/suivi-preview.png"
import randomImg from "/random-preview.png"
import modloaderImg from "/modloader.png"
import modsImg from "/mods-prev.png"
import "./Projects.css"

export function Projects() {
    return (
            <div className="section-container projects" id="projects">
                <h1 className="main-heading">My <span>Projects</span></h1>
                <div className="projects-list">
                    <Project
                        title="Suivi Candidatures"
                        description="Suivi Candidatures - French for 'application tracking' - is a tool I developed to help me keep track of all the applications I've sent (you're in there). It is a fullstack project with a few pages, data management and server side rendering."
                        url="https://github.com/GDami/SuiviCandidatures/"
                        image={suiviImg}
                        technos={['html5','css3','python','django', 'sqlite']}
                    ></Project>
                    <Project
                        title="random spotify button"
                        description="A simple app I made to familiarize myself with Angular. This app shows you a random track with the press of a button. It uses the Spotify API."
                        url="https://github.com/GDami/random-spotify/"
                        image={randomImg}
                        reversed
                        technos={['html5','css3','typescript','angular',]}
                    ></Project>
                    <Project
                        title="Mods"
                        description="My obsession with games has led me to delve into game dev, and I started coding mods as a way to gain experience developing and testing in short cycles. Mods also come with the advantage of requiring a minimal setup to start working, and having a bunch of game system already in place and ready to be messed with. I have mostly made mods for Brotato and Slay the Spire, but I have also tried my hand at 3D animation on Skyrim, using blender mainly."
                        url="https://github.com/stars/GDami/lists/mod-repos/"
                        image={modsImg}
                        technos={['java','blender', 'godot']}
                    ></Project>
                    <Project
                        title="Godot Mod Loader"
                        description="A mod loader for games made in Godot. This is an open source project I contributed on, and it has been officially added to several games already. It is fully written in Godot's scripting language, gdscript, and also acts as an API to mod developers."
                        url="https://github.com/GodotModding/godot-mod-loader"
                        image={modloaderImg}
                        reversed
                        technos={['godot']}
                    ></Project>
                </div>
            </div>
    )
}