import React from "react";
import './Projects.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Projects() {
    return (
        <div className="section projects--section">
            <p className="title projects--title web--title">Projects</p>
            <div className="projects--container">
                <div className="projects--carousel--container">
                    <Carousel>
                        <div className="carousel--container">
                            <img src="/images/projects/luvianka.png" alt="Slide 1" className="" />
                            <div className="carousel--about">
                                <div className="carousel--link">
                                    <p className="carousel--text"><a href="https://luvianka.netlify.app/" className="carousel--text--link">DEMO</a></p>
                                    <p className="carousel--text"><a href="https://github.com/lekanonifade/LUVIANKA" className="carousel--text--link">CODE</a></p>
                                </div>
                                <div className="carousel--details">
                                    <p className="carousel--text">LG</p>
                                    <p className="carousel--text">MD</p>
                                    <p className="carousel--text">SM</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel--container">
                            <img src="/images/projects/airplay.png" alt="Slide 2" className="" />
                            <div className="carousel--about">
                                <div className="carousel--link">
                                    <p className="carousel--text"><a href="https://aaairplay.netlify.app/" className="carousel--text--link">DEMO</a></p>
                                    <p className="carousel--text"><a href="https://github.com/lekanonifade/AIRPLAY" className="carousel--text--link">CODE</a></p>
                                </div>
                                <div className="carousel--details">
                                    <p className="carousel--text">LG</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel--container">
                            <img src="/images/projects/covenant.png" alt="Slide 3" className="" />
                            <div className="carousel--about">
                                <div className="carousel--link">
                                    <p className="carousel--text"><a href="https://adejare.netlify.app/" className="carousel--text--link">DEMO</a></p>
                                    <p className="carousel--text"><a href="https://github.com/lekanonifade/COVENANT" className="carousel--text--link">CODE</a></p>
                                </div>
                                <div className="carousel--details">
                                    <p className="carousel--text">LG</p>
                                    <p className="carousel--text">MD</p>
                                    <p className="carousel--text">SM</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel--container">
                            <img src="/images/projects/rio.png" alt="Slide 4" className="" />
                            <div className="carousel--about">
                                <div className="carousel--link">
                                    <p className="carousel--text"><a href="https://rio-app.netlify.app/" className="carousel--text--link">DEMO</a></p>
                                    <p className="carousel--text"><a href="https://github.com/lekanonifade/RIO" className="carousel--text--link">CODE</a></p>
                                </div>
                                <div className="carousel--details">
                                    <p className="carousel--text">LG</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel--container">
                            <img src="/images/projects/eprenz.png" alt="Slide 5" className="" />
                            <div className="carousel--about">
                                <div className="carousel--link">
                                    <p className="carousel--text"><a href="https://eprenz.netlify.app/" className="carousel--text--link">DEMO</a></p>
                                    <p className="carousel--text"><a href="https://github.com/lekanonifade/EPRENZ" className="carousel--text--link">CODE</a></p>
                                </div>
                                <div className="carousel--details">
                                    <p className="carousel--text">LG</p>
                                    <p className="carousel--text">MD</p>
                                    <p className="carousel--text">SM</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel--container">
                            <img src="/images/projects/myportfolio.png" alt="Slide 6" className="" />
                            <div className="carousel--about">
                                <div className="carousel--link">
                                    <p className="carousel--text"><a href="https://lekanonifade.netlify.app/" className="carousel--text--link">DEMO</a></p>
                                    <p className="carousel--text"><a href="https://github.com/lekanonifade/PORTFOLIO" className="carousel--text--link">CODE</a></p>
                                </div>
                                <div className="carousel--details">
                                    <p className="carousel--text">LG</p>
                                    <p className="carousel--text">MD</p>
                                    <p className="carousel--text">SM</p>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>

                <div className="projects--tablet--container">

                </div>

                <div className="projects--mobile--container">

                </div>
            </div>
        </div>
    )
}