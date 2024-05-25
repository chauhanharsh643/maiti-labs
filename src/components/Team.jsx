import React from "react";
import './Team.css';

const Team = () => {
    return (
        <div className="team-container">
            <div className="left-team-container">
                <div className="left-first">
                    <img src="https://www.maitilabs.org/static/media/Logo.00129f1c05848c338b15.png" alt="" />
                    <div>Maiti Labs</div>
                </div>
                <div className="left-second">Join a diverse and passionate community, making a lasting impact on our planet. Together, let's raise awareness and accelerate climate action worldwide.</div>
                <div className="left-third"><div className="button">join Us</div></div>
            </div>
            <div className="right-team-container">
                <div className="right-first"><div className="button">Sign Up</div></div>
                <div className="right-second">
                    <div>
                        <div className="right-heading">Company</div>
                        <div className="points">About</div>
                        <div className="points">Awareness Portal</div>
                        <div className="points">GreenBit</div>
                        <div className="points">Team</div>
                        <div className="points">Career</div>
                    </div>
                    <div>
                        <div className="right-heading">Resources</div>
                        <div className="points">Blogs</div>
                        <div className="points">Linkedin</div>
                        <div className="points">Twitter</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;