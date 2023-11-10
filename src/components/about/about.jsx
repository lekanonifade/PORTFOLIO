import React from "react";
import './About.css';

export default function About() {
    return (
        <div className="section about--section">
            <p className="title sudo--title--main web--title">About</p>
            <div className="about--details">
                <div className="img-container">
                    <img src="lekan.png" className="about--image" />
                </div>
                <div>
                    <p className="about--note about--note--lg">
                        Welcome to my webpage portfolio. I am excited to share with you my journey, skills, and accomplishments in the
                        world of web development. With a passion for creating visually appealing and user-friendly websites, I have
                        dedicated myself to mastering the art of web design and development. Through this portfolio, I aim to showcase
                        my expertise, creativity, and dedication to delivering exceptional digital experiences. <br /><br />
                        I have always been fascinated by the digital realm, and my journey in web development began during my late years
                        in University. Since then, I have pursued my passion by acquiring a solid educational foundation. I hold a Bachelor of Engineering
                        in Computer Engineering from Olabisi Onabanjo University. My academic journey has equipped me with a strong
                        understanding of the principles of web development, including HTML, CSS, JavaScript, and various frameworks. <br /><br />
                        I possess a diverse skill set that enables me to tackle various aspects of web development. Proficient in
                        front-end technologies such as HTML, CSS, and JavaScript, I can transform design concepts into functional and
                        visually appealing websites. I am well-versed in responsive design, ensuring that the websites I create are
                        optimized for seamless user experiences across different devices. <br /><br />
                        I have experience with popular front-end frameworks like Bootstrap and React, which allow me to build scalable
                        and dynamic web applications. Also, I have a good understanding of back-end technologies such as Node.js
                        and database like MySQL, enabling me to create robust and interactive web solutions. <br /><br />
                        Throughout my journey, I have had the privilege of working on diverse projects that have honed my skills and
                        expanded my knowledge. I have collaborated with clients and teams to create websites that align with their visions
                        and goals. This experience has taught me the importance of effective communication, project management, and
                        delivering results that exceed expectations.
                    </p>
                    <p className="about--note about--note--md">
                        Welcome to my web portfolio! I'm passionate about web development, holding a Bachelor's in Computer Engineering.
                        Proficient in HTML, CSS, and JavaScript, I create visually appealing and user-friendly websites with a focus on responsive design.
                        Experienced in Bootstrap and React for dynamic applications, I navigate back-end technologies like Node.js and MySQL.
                        My diverse skill set enables me to transform design concepts into functional websites.
                        Throughout my journey, diverse projects have honed my skills, emphasizing effective communication, project management, and consistently exceeding expectations.
                        Explore my portfolio to witness my commitment to exceptional digital experiences.
                    </p>
                </div>
            </div>
        </div>
    )
}