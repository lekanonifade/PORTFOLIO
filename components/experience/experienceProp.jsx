export default function Experienceprop(props) {
    return (
        <div className="experience--container">
            <img src={props.experienceImage} className="experience--image" />
            <div className="experience--relative">
                <p className="experience--title">{props.experienceTitle}</p>
                <p className="experience--work">{props.experienceWork}</p>
                <div className="experience--details">
                    <p><a href={props.experienceTitleLink} className="experience--link">{props.experienceCompany}</a></p>
                    <p>{props.experienceDuration}</p>
                </div>
                <p className="experience--note">{props.experienceNote}</p>
                <ul className="experience--ul">
                    {props.experienceUl.map(i => <li>{i}</li>)}
                </ul>
                <p className="experience--tech">Tech Stack</p>
                <div className="experience--stack">
                    {props.experienceTechStack.map(techstackItem => {
                        return (
                            <div className="experience--techstack">
                                <img src={techstackItem.experienceTechImage} className="tech--image" />
                                <p className="tech--title">{techstackItem.experienceTechTitle}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <hr className="line" />
        </div>
    )
}