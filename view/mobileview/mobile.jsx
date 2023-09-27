import React from "react";
import './Mobile.css'
import Introduction from "../../components/introduction/introduction";
import About from "../../components/about/about";
import Link from "../../components/links/link";
import References from "../../components/references/references";
import Techstack from "../../components/techstack/tech";
import Experience from "../../components/experience/experience";
import Education from "../../components/education/education";

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
        </div>
    )
}