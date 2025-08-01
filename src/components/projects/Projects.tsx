import { Project } from "./Project";
import suiviImg from "/suivi-preview.png"
import randomImg from "/random-preview.png"
import modloaderImg from "/modloader.png"
import modsImg from "/mods-prev.png"
import "./Projects.css"
import { useTranslation } from "react-i18next";

export function Projects() {
const { t } = useTranslation()

    return (
            <div className="section-container projects" id="projects">
                <h1 className="section-title animated-underline">{t("projects.title.1")}<span>{t("projects.title.2")}</span></h1>
                <div className="projects-list">
                    <Project
                        title="Suivi Candidatures"
                        description={t("project.suivi.description")}
                        source="https://github.com/GDami/SuiviCandidatures/"
                        image={suiviImg}
                        technos={['html5','css3','python','django', 'sqlite']}
                    ></Project>
                    <Project
                        title="random spotify button"
                        description={t("project.spotify.description")}
                        source="https://github.com/GDami/random-spotify/"
                        image={randomImg}
                        reversed
                        technos={['html5','css3','typescript','angular',]}
                    ></Project>
                    <Project
                        title="Mods"
                        description={t("project.mods.description")}
                        source="https://github.com/stars/GDami/lists/mod-repos/"
                        image={modsImg}
                        technos={['java','blender', 'godot']}
                    ></Project>
                    <Project
                        title="Godot Mod Loader"
                        description={t("project.modLoader.description")}
                        source="https://github.com/GodotModding/godot-mod-loader"
                        image={modloaderImg}
                        reversed
                        technos={['godot']}
                    ></Project>
                </div>
            </div>
    )
}