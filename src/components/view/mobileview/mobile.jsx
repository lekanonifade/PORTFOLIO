import React from "react";
import './Mobile.css'
import Introduction from "../../introduction/introduction";
import About from "../../about/about";
import Link from "../../links/link";
import References from "../../references/references";
import Techstack from "../../techstack/tech";
import Experience from "../../experience/experience";
import Education from "../../education/education";
import Projects from "../../projects/projects";

export default function Mobile() {
    return (
        <div className='mobile'>
            <Introduction />
            <About />
            <Link />
            <References />
            <Techstack />
            <Experience />
            <Education />
            <Projects />
        </div>
    )
}