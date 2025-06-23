import './ContactIcon.css'

type ContactIconProps = {
    class: string,
    link: string
}

export function ContactIcon(props:ContactIconProps) {
    return (
        <a className='contact-icon' href={props.link} target="_blank">
            <span>< i className={props.class}  ></i> </span>
        </a>
    )
}