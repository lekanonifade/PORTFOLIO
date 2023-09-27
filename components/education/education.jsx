import React from "react";
import './Education.css'
import educationData from "./educationData";
import Educationprop from "./educationProp";


export default function Education() {

    const myEducation = educationData.map(item => {
        return (
            <div className="education--prop">
                <Educationprop
                    educationImage={item.educationImage}
                    educationTitle={item.educationTitle}
                    educationSchool={item.educationSchool}
                    educationDuration={item.educationDuration}
                />
            </div>
        )
    })

    return (
        <div className="section education--section">
            <p className="title sudo--title--side web--sudo">Education</p>
            <div className="education--render render">
                {myEducation}
            </div>
        </div>
    )
}