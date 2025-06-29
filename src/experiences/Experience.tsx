import './Experience.css'

type ExperienceProps = {
    title:string,
    description:string,
    dates:string[]
}

export function Experience(props?:ExperienceProps) {
    return (
        <div className="experience">
            <div className='experience-header'>
                <span className='experience-title'><i className='bx  bx-briefcase-alt-2'  ></i> {props?.title}</span>
                <span className='experience-dates'>{props?.dates?.join(" - ")}</span>
            </div>
            <div className='experience-description'>
                {props?.description}
            </div>
        </div>
    )
}