import './SkillPopup.css'

type SkillPopupProps = {
    description: string,
}

export function SkillPopup(props:SkillPopupProps) {
    const description = props.description.startsWith('"') ? <span><em>{props.description.substring(1, props.description.length - 1)}</em></span> : <span>{props.description}</span>
    return (
        <div className='skill-popup'>
            {description}
        </div>
    )
}