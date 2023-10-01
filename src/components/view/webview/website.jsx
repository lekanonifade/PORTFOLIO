import React from "react";
import './Website.css';
import About from "../../about/about";
import Education from "../../education/education";
import Experience from "../../experience/experience";
import Techstack from "../../techstack/tech";
import References from "../../references/references";
import Projects from "../../projects/projects";
import Services from "../../services/services";
import Contact from "../../contact/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAngleUp, faBriefcase, faEnvelope, faFileLines, faGear, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Website() {
    return (
        <div className="website" id="home">
            <nav>
                <ul className="ullist">
                    <li><a href="#home">HOME<FontAwesomeIcon icon={faHome} /></a></li>
                    <li><a href="#about">ABOUT<FontAwesomeIcon icon={faAddressCard} /></a></li>
                    <li><a href="#resume">RESUME<FontAwesomeIcon style={{ position: "relative", left: '-3px' }} icon={faFileLines} /></a></li>
                    <li><a href="#projects">PROJECTS<FontAwesomeIcon icon={faBriefcase} /></a></li>
                    <li><a href="#services">SERVICES<FontAwesomeIcon icon={faGear} /></a></li>
                    <li><a href="#contact">CONTACT<FontAwesomeIcon icon={faPhone} /></a></li>
                </ul>
            </nav>
            <div className="homepage section">
                <div className="header">
                    {/* <h1 className="name--title">Lekan Onifade</h1> */}
                    <h1></h1>
                    <div class="pyramid-loader">
                        <div class="wrapper">
                            <span class="side side1"></span>
                            <span class="side side2"></span>
                            <span class="side side3"></span>
                            <span class="side side4"></span>
                            <span class="shadow"></span>
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <h1 className="web--intro">Hello, I am <br />Olamilekan Onifade.</h1>
                    <h3 class="web--works">
                        i am a
                        <div class="web--intro--about">
                            <span>
                                developer<br />
                                programmer<br />
                                freelancer<br />
                                creator
                            </span>
                        </div>
                    </h3>
                    <hr className="line" />
                    <div className="getintouch">
                        <a href="mailto:ayomikunolamilekan@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="home--touch" /></a>
                        <a href="https://www.linkedin.com/in/olamilekan-o-294412b7/"><FontAwesomeIcon icon={faLinkedin} className="home--touch" /></a>
                        <a href="https://twitter.com/wildaffod"><FontAwesomeIcon icon={faTwitter} className="home--touch" /></a>
                        <a href="https://github.com/wildaffod"><FontAwesomeIcon icon={faGithub} className="home--touch" /></a>
                    </div>
                </div>
            </div>
            <div id="about"><About /></div>
            <div className="section resume--section" id="resume">
                <p className="title web--title">Resume</p>
                <Education />
                <Experience />
                <Techstack />
                <References />
            </div>
            <div id="projects"><Projects /></div>
            <div id="services"><Services /></div>
            <div id="contact"><Contact /></div>
            <div className="gobackup">
                <a href="#home" className="gobackup--icon">
                    <p class="gobackup--text">
                        <p>Back to Top</p>
                        <hr className="gobackup--line" />
                    </p>
                    <FontAwesomeIcon
                        style={{
                            fontSize: "50px"
                        }}
                        icon={faAngleUp}
                    />
                </a>
            </div>
        </div>
    )
}