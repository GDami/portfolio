import './SkillIcon.css'
import { SkillPopup } from './SkillPopup'

type SkillIconProps = {
    name:string,
    class:string,
    level:number,
    description?:string,
}

export function SkillIcon(props:SkillIconProps) {
    return (
        <div className="skill-icon">
            <span className='skill-text'>
                < i className={props.class}  ></i> 
                {props.name}
            </span>
            <span className='skill-bg back'></span>
            <span className={'skill-bg level'+ props.level}></span>
            <span className='inverter'></span>
            {props.description && <SkillPopup description={props.description}></SkillPopup>}
        </div>
    )
}