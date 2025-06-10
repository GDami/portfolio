import './AboutDetail.css'

interface AboutProps {
    description: string,
    reversed:boolean,
    svg:string
}

function includeEmphasis(text:string) {
    let textArray = text.split(",,,")
    return (
        <>
            {textArray.map((value, index) => {
                if (index % 2 === 0) {
                    return value
                } else {
                    return (<em key={"em" + index}>{value}</em>)
                }
            })}
        </>
    )
}

export function AboutDetail(props: AboutProps) {
    return (
        <div className={"about-detail " + (props.reversed ? "reversed" : "")}>
            <img className="about-img" src={props.svg} alt="svg img"></img>
            <div className="about-divider" />
            <span className="about-description">{includeEmphasis(props.description)}</span>
        </div>
    )
}