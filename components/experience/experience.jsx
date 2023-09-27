import React from "react";
import './Experience.css'
import experienceData from "./experienceData";
import Experienceprop from "./experienceProp";

export default function Experience() {

    const myExperience = experienceData.map(item => {
        return (
            <div className="experience--prop">
                <Experienceprop
                    experienceImage={item.experienceImage}
                    experienceTitle={item.container1.experienceTitle}
                    experienceWork={item.container1.experienceWork}
                    experienceTitleLink={item.container1.duration.experienceTitleLink}
                    experienceCompany={item.container1.duration.experienceCompany}
                    experienceDuration={item.container1.duration.experienceDuration}
                    experienceNote={item.container1.experienceNote}
                    experienceUl={item.container1.experienceUl}
                    experienceTechStack={item.container1.techstack}
                />
            </div>
        )
    })

    return (
        <div className="section experience--section">
            <p className="title sudo--title--main web--sudo">Experience</p>
            <div className="experience--render render">
                {myExperience}
            </div>
        </div>
    )
}