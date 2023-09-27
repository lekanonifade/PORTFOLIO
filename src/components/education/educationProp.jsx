export default function Educationprop(props) {
    return (
        <div className="education--container">
            <img src={props.educationImage} className="education--image" />
            <div className="education--about">
                <p className="education--title">{props.educationTitle}</p>
                <div className="education--details">
                    <p>{props.educationSchool}</p>
                    <p className="education--dot">●</p>
                    <p className="education--duration">{props.educationDuration}</p>
                </div>
            </div>
        </div>
    )
}