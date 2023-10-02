import React from "react";
import './Services.css'

export default function Services() {
    return (
        <div className="section services--section">
            <p className="title services--title web--title">Services</p>
            <div className="services--grid">
                <div className="services first--service">
                    <img src="/images/services/services-webdev.svg" alt="" className="services--image" />
                    <h4 className="services--title">Web Development</h4>
                </div>
                <div className="services second--service">
                    <img src="/images/services/services-webdes.svg" alt="" className="services--image" />
                    <h4 className="services--title">Web Design</h4>
                </div>
                <div className="services third--service">
                    <img src="/images/services/services-support.svg" alt="" className="services--image" />
                    <h4 className="services--title">Support</h4>
                </div>
            </div>

            <p className="services--about">
                I provide a comprehensive range of services to enhance your online presence.
                My web development expertise transforms your ideas into functional and visually appealing websites, focusing on user engagement.
                I also specialize in crafting stunning web designs that reflect your brand and offer an exceptional user experience.
                In addition, I offer vital website support services to keep your online platform secure, up-to-date, and optimized for peak performance.
                With my technical expertise and proactive monitoring, your website remains in top shape while you focus on your core business.
            </p>
        </div>
    )
}