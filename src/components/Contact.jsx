import React from "react";
import './Contact.css';
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";


const Contact = () =>{
    return (
        <div className="contact-container">
            <div className="contact-heading">CONTACT</div>
            <div className="contact-bottom-container">
                <div className="contact-left">
                    <div className="contact-text">Any doubts? <br /> feel free to get in touch with us</div>
                    <div class="form-container">
                        <div className="first-input">
                            <div class="form-group">
                                <input type="text" id="name" name="name" placeholder="Name" />
                            </div>
                            <div class="form-group">
                                <input type="email" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea id="message" name="message" placeholder="Message"></textarea>
                        </div>
                        <div class="form-group">
                            <button type="submit">Submit</button>
                        </div>
                    </div>

                </div>
                <div className="line"></div>
                <div className="contact-right">
                    <div className="heading">CONTACT US</div>
                    <div className="connect-apps"><IoMail /> <div>Mail</div></div>
                    <div className="heading">FOLLOW US</div>
                    <div className="connect-apps"><FaInstagram /> <div>Instagram</div></div>
                    <div className="connect-apps"><FaLinkedin /><div>Linkedin</div></div>
                    <div className="connect-apps"><FaTwitter /><div>Twitter</div></div>
                </div>
            </div>
        </div>
    )
}

export default Contact;