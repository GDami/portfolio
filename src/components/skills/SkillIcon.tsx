import { useRef, type MouseEventHandler, type RefObject } from 'react'
import './SkillIcon.css'
import { SkillPopup } from './SkillPopup'

type SkillIconProps = {
    name:string,
    class:string,
    level:number,
    description?:string,
}

export function SkillIcon(props:SkillIconProps) {
    const popupRef = useRef<HTMLDivElement>(null)

    const checkBounds:MouseEventHandler<HTMLDivElement> = (event) => {
        const div = event.target as HTMLElement

        console.log(div.offsetLeft + 8)
        console.log(popupRef.current?.offsetWidth)
        console.log(window.innerWidth)

        if (div.parentElement) {
            popupRef.current?.classList.toggle(
                "left",
                (div.offsetLeft + popupRef.current?.offsetWidth) + 8 > (div.parentElement?.offsetLeft + div.parentElement?.offsetWidth)
            )
        }

        popupRef.current?.classList.toggle(
            "top",
            div.getBoundingClientRect().bottom + popupRef.current?.offsetHeight + 16 > window.innerHeight
        )
    }

    return (
        <div onMouseEnter={checkBounds} className="skill-icon">
            <span className='skill-text'>
                < i className={props.class}  ></i> 
                {props.name}
            </span>
            {props.description && <SkillPopup ref={popupRef as RefObject<HTMLDivElement>} description={props.description}></SkillPopup>}
        </div>
    )
}