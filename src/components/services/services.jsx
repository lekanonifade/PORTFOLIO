import React from "react";
import './Services.css'

export default function Services() {
    return (
        <div className="section services--section">
            <p className="title services--title web--title">Services</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae culpa eaque, eveniet ratione fugiat temporibus, eligendi amet beatae repellendus accusantium error distinctio ipsa provident, minus impedit. Non, doloribus! Cumque, nulla.</p>
            <div className="services--grid">
                <div className="services first--service">
                    <img src="" alt="" />
                    <h4>Web Development</h4>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="services second--service">
                    <img src="" alt="" />
                    <h4>Web Design</h4>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="services third--service">
                    <img src="" alt="" />
                    <h4>Support</h4>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    )
}