import { useRef, type MouseEventHandler } from 'react'
import './SkillIcon.css'
import { SkillPopup } from './SkillPopup'

type SkillIconProps = {
    name:string,
    class:string,
    level:number,
    description?:string,
}

export function SkillIcon(props:SkillIconProps) {
    const popupRef = useRef<HTMLElement>(null)

    const checkBounds:MouseEventHandler<HTMLDivElement> = (event) => {
        const div = event.target as HTMLElement

        popupRef.current?.classList.toggle(
            "left",
            (div.offsetLeft + popupRef.current?.offsetWidth!) + 8 > window.innerWidth
        )

        popupRef.current?.classList.toggle(
            "top",
            div.getBoundingClientRect().bottom + popupRef.current?.offsetHeight! + 16 > window.innerHeight
        )

        console.log(div.getBoundingClientRect().bottom + popupRef.current?.offsetHeight! + 16 > window.innerHeight)
    }

    return (
        <div onMouseEnter={checkBounds} className="skill-icon">
            {/* <span className='inverter'></span> */}
            <span className='skill-text'>
                < i className={props.class}  ></i> 
                {props.name}
            </span>
            {/* <span className='skill-bg back'></span>
            <span className={'skill-bg level'+ props.level}></span> */}
            {props.description && <SkillPopup ref={popupRef} description={props.description}></SkillPopup>}
        </div>
    )
}