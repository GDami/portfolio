import "./Project.css"
import { ProjectIcon } from "./ProjectIcon"

type ProjectProps = {
    title:string,
    description:string,
    url:string,
    image:string,
    reversed?:boolean,
    technos:string[]
}

export function Project(props:ProjectProps) {
    let imageJsx = (
        <img className="project-img" src={props.image} alt="project-img"></img>
    )

    return (
        <div className={"project" + (props.reversed ? " reversed" : "")}>
            <div className="project-text">
                <br></br>
                <h2 className="project-title">{props.title}</h2>
                <p className="project-description">
                    {props.description}
                </p>
                <div className="project-icons">
                    {props.technos.map((techno) => {
                        const src = techno.startsWith('/') ? techno : 'bxl  bx-' + techno
                        return (
                        <ProjectIcon iconSrc={src}></ProjectIcon>
                    )})}
                </div>
            </div>
            <div className="project-img-container">
                { props.url ? (
                    <a href={props.url} target="_blank">{imageJsx}</a>
                ) : imageJsx}
            </div>
        </div>
    )
}