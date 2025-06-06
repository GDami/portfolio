import './AboutDetail.css'

interface AboutProps {
    description: string,
    reversed:boolean,
    svg:string
}

export function AboutDetail(props: AboutProps) {
    return (
        <div className={"about-detail " + (props.reversed ? "reversed" : "")}>
            <span className="about-description">{props.description}</span>
            <div className="about-divider" />
            <img className="about-img" src={props.svg} alt="svg img"></img>
        </div>
    )
}