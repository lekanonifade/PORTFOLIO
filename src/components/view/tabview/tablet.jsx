import React from "react";
import './Tablet.css'
import Intro from "../../introduction/intro";
import Education from "../../education/education";
import Language from "../../language/language";
import Techstack from "../../techstack/tech";
import Introduction from "../../introduction/introduction";
import About from "../../about/about";
import Experience from "../../experience/experience";
import Link from "../../links/link";
import References from "../../references/references";

export default function Tablet() {
    return (
        <div className='tablet'>
            <div className='sidebar'>
                <Intro />
                <Education />
                <Language />
                <Techstack />
            </div>
            <div className='main'>
                <Introduction />
                <About />
                <Experience />
                <Link />
                <References />
            </div>
        </div>
    )
}