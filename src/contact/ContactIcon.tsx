import type { PropsWithChildren } from 'react'
import './ContactIcon.css'

type ContactIconProps = PropsWithChildren & {
    class: string,
    link: string
}

export function ContactIcon(props:ContactIconProps) {

    const inside = props.children ? props.children : < i className={props.class}  ></i> 
    return (
        <a className='contact-icon' href={props.link} target="_blank">
            <span>{inside}</span>
        </a>
    )
}