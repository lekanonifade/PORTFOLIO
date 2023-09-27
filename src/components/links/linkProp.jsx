export default function Linkprop(props) {
    return (
        <div>
            <a href={props.linkHref} className="link--container">
                {/* <p className="link--image"><i className={props.linkImage}></i></p> */}
                <img src={props.linkImage} className="link--image"/>
                <p className="link--text">{props.linkText}</p>
            </a>
        </div>
    )
}