import "./Project.css"

interface ProjectProps {
    title:string,
    description:string,
    url:string,
    image:string
}

export function Project(props:ProjectProps) {
    let imageJsx = (
        <img className="project-img" src={props.image} alt="project-img"></img>
    )

    return (
        <div className="project">
            <h3 className="project-title">{props.title}</h3>
            { props.url ? (
                <a href={props.url} target="_blank">{imageJsx}</a>
            ) : imageJsx}
            <span className="project-description">
                {props.description}
            </span>
        </div>
    )
}