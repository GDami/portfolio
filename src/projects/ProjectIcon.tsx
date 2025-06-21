import './ProjectIcon.css'

type IconProps = {
    iconSrc:string
}

export function ProjectIcon(props:IconProps) {
    return (
        <span className="project-icon">
            {props.iconSrc.startsWith("/") ? (
                <img src={props.iconSrc} alt='project-icon'></img>
            ) : (
                < i className={props.iconSrc}></i> 
            )}
        </span>
    )
}