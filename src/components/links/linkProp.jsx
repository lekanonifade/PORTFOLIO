export default function Linkprop(props) {
    return (
        <div>
            <div className="link--container">
                <img src={props.linkImage} className="link--image"/>
                <p><a href={props.linkHref}  className="link--text">{props.linkText}</a></p>
            </div>
        </div>
    )
}