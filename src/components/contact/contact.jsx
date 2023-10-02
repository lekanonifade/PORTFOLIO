import React from "react";
import Link from "../links/link";

export default function Contact() {
    return (
        <div className="section contact--section">
            <p className="title contact--title web--title">Contact</p>
            <div className="contact--flex">
                <div className="link--contact">
                    <p>I am open to talk regarding freelancing or full-time opportunities. Fell free to contact me using your preferred medium.</p>
                    <Link />
                </div>
                <form action="mailto:ayomikunolamilekan@gmail.com" method="post" enctype="text/plain" className="send--message">

                    <label for="name" class="inputBox">
                        <input placeholder="Write here..." type="text" id="name" name="Name" required />
                        <span>Name :</span>
                    </label>

                    <label for="email" class="inputBox">
                        <input placeholder="Write here..." type="email" id="email" name="Email" required />
                        <span>Email :</span>
                    </label>

                    <label for="message" class="inputBox">
                        <textarea placeholder="Write here..." type="message" id="message" name="Message" className="message--box" required />
                        <span>Message :</span>
                    </label>

                    <button className="button">
                        <span className="button_lg">
                            <input type="submit" className="inputsubmit"/>
                            <span className="button_sl"></span>
                            <span className="button_text">SUBMIT</span>
                        </span>
                    </button>
                    
                </form>
            </div>
        </div>
    )
}