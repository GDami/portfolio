import viteLogo from '/vite.svg'
import './AboutDetail.css'

interface AboutProps {
    description: string,
    reversed:boolean
}

export function AboutDetail(props: AboutProps) {
    return (
        <div className={"about-detail " + (props.reversed ? "reversed" : "")}>
            <span className="about-description">{props.description}</span>
            <div className="about-divider" />
            <img src={viteLogo} alt="vite logo"></img>
        </div>
    )
}