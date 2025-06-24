import './SkillPopup.css'

type SkillPopupProps = {
    description: string,
}

export function SkillPopup(props:SkillPopupProps) {
    return (
        <div className='skill-popup'>
            <span>{props.description}</span>
        </div>
    )
}