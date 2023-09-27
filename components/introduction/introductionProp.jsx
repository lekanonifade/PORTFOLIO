export default function Introductionprop(props) {
    return (
        <div className="introduction--container">
            <p className="introduction--image"><i className={props.introductionImage}></i></p>
            <p className="introduction--text">{props.introductionText}</p>
        </div>
    )
}