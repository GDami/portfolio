import './SkillIcon.css'

type SkillIconProps = {
    name:string,
    class:string,
    level:number,
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
        </div>
    )
}