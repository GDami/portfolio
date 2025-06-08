import './AboutDetail.css'

interface AboutProps {
    description: string,
    reversed:boolean,
    svg:string
}

export function AboutDetail(props: AboutProps) {
    return (
        <div className={"about-detail " + (props.reversed ? "reversed" : "")}>
            <img className="about-img" src={props.svg} alt="svg img"></img>
            <div className="about-divider" />
            <span className="about-description">{props.description}</span>
        </div>
    )
}