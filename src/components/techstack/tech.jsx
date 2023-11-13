import React from "react";
import './Tech.css'
import techData from "./techData";
import Techprop from "./techProp";

export default function Techstack() {
    const myTech = techData.map(item => {
        return (
            <div className="tech--prop">
                <Techprop
                    techImage={item.techImage}
                    techText={item.techText}
                    // techYear={item.techYear}
                />
            </div>
        )
    })

    return (
        <div className="section tech--section">
            <p className="title sudo--title--side web--sudo">TechStack</p>
            <p className="featured">FEATURED</p>
            <div className="tech--render render">
                {myTech}
            </div>
        </div>
    )
}