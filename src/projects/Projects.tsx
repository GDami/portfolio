import { Project } from "./Project";
import suiviImg from "/suivi-preview.png"
import randomImg from "/random-preview.png"
import modloaderImg from "/modloader.png"
import "./Projects.css"

export function Projects() {
    return (
        <div className="section projects" id="projects">
            <h1>Projects</h1>
            <h3>Projects 👍</h3>
            <div className="projects-list">
                <Project
                    title="Suivi Candidatures"
                    description="Suivi Candidatures (French for 'application tracking') is a tool I developed to help me keep track of all the applications I've sent (what a world we live in)."
                    url="https://github.com/GDami/SuiviCandidatures/"
                    image={suiviImg}
                ></Project>
                <Project
                    title="Godot Mod Loader"
                    description="A mod loader for games made in Godot, written in gdscript. This is an open source project I contributed on, and it has been officially added to several games already."
                    url="https://github.com/GodotModding/godot-mod-loader"
                    image={modloaderImg}
                ></Project>
                <Project
                    title="random spotify button"
                    description="A simple app I made to familiarize myself with Angular. This app shows you a random track with the press of a button. It uses the Spotify API."
                    url="https://github.com/GDami/random-spotify/"
                    image={randomImg}
                ></Project>
            </div>
        </div>
    )
}