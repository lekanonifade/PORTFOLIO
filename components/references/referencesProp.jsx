export default function Referencesprop(props) {
    return (
        <div className="references--container">
            <img src={props.referencesImage} className="references--image" />
            <div className="references--details">
                <p className="references--name">{props.referencesName}
                    <a href={props.referencesHref}
                        className="references--link">
                        {props.referencesLink}
                    </a>
                </p>
                <p className="references--work">{props.referencesWork}</p>
            </div>
        </div>
    )
}