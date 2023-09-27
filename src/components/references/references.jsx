import React from "react";
import './References.css'
import referencesData from "./referencesData";
import Referencesprop from "./referencesProp";

export default function References() {

    const myReferences = referencesData.map(item => {
        return (
            <div className="references--prop">
                <Referencesprop
                    referencesImage={item.referencesImage}
                    referencesName={item.referencesName}
                    referencesHref={item.referencesHref}
                    referencesLink={item.referencesLink}
                    referencesWork={item.referencesWork}
                />
            </div>
        )
    })

    return (
        <div className="section references--section">
            <p className="title sudo--title--main web--sudo">References</p>
            <div className="references--render render">
                {myReferences}
            </div>
        </div>
    )
}