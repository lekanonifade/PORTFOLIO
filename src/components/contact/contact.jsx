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
                <div className="send--message">
                    <label class="inputBox">
                        <input placeholder="Write here..." id="name" type="name" required="" />
                        <span>Name :</span>
                    </label>
                    <div class="inputBox">
                        <input placeholder="Write here..." id="email" type="email" required="" />
                        <span>Email :</span>
                    </div>
                    <div class="inputBox">
                        <textarea placeholder="Write here..." type="text" required="" className="message--box" />
                        <span>Message :</span>
                    </div>
                    <button class="button">
                        <span class="button_lg">
                            <span class="button_sl"></span>
                            <span class="button_text">Submit</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}