export default function Techprop(props) {
    return (
        <div className="tech--container">
            <img src={props.techImage} className="tech--image" />
            <p className="tech--word">{props.techText}</p>
            {/* <div className="tech--details">
                <p className="tech--word">{props.techText}</p>
                <p className="tech--details--span">{props.techYear}</p>
            </div> */}
        </div>
    )
}