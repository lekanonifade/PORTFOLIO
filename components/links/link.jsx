import React from "react";
import './Link.css'
import Linkprop from "./linkProp";
import linkData from "./linkData";

export default function Link() {
    const myLink = linkData.map(item => {
        return (
            <div className="link--prop">
                <Linkprop
                    linkImage={item.linkImage}
                    linkText={item.linkText}
                    linkHref={item.linkHref}
                />
            </div>
        )
    })

    return (
        <div className="section">
            <p className="title link--title sudo--title--main">Links</p>
            <div className="link--icons">
                {myLink}
            </div>
        </div>
    )
}