import type { PropsWithChildren } from 'react'
import './ProjectIcon.css'

type IconProps = PropsWithChildren & {
    iconSrc:string
}

export function ProjectIcon(props:IconProps) {
    const inside = props.children ? props.children : < i className={props.iconSrc}  ></i> 

    return (
        <span className="project-icon">
            {inside}
        </span>
    )
}