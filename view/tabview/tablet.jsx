import React from "react";
import './Tablet.css'
import Intro from "../../components/introduction/intro";
import Education from "../../components/education/education";
import Language from "../../components/language/language";
import Techstack from "../../components/techstack/tech";
import Introduction from "../../components/introduction/introduction";
import About from "../../components/about/about";
import Experience from "../../components/experience/experience";
import Link from "../../components/links/link";
import References from "../../components/references/references";

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