import React from "react";
import './Introduction.css'
import introductionData from "./introductionData";
import Introductionprop from "./introductionProp";

export default function Introduction() {
    const myIntroduction = introductionData.map(item => {
        return (
            <div className="introduction--prop">
                <Introductionprop
                    introductionImage={item.introductionImage}
                    introductionText={item.introductionText}
                />
            </div>
        )
    })

    return (
        <div className="section introduction--details">
            <img src="lekan.png" className="intro--image" />
            <div className="real">
                <h1 className="introduction--name">Onifade Olamilekan</h1>
                <p className="introduction--work typewriter">Frontend Developer 💜</p>
                <div className="introduction--icons">
                    {myIntroduction}
                </div>
            </div>
        </div>
    )
}