import React from "react";
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="head">About Us</div>
            <div className="image-details">
                <div>
                    <img src="https://www.maitilabs.org/static/media/pexels-roberto-nickson-2559941.dc3ba4c1aaf8a91f289b.jpg" alt="" className="homeImage"/>
                </div>
                <div className="details-container">
                    <div>
                    <div className="details-heading">Youth-Led & Global</div>
                    <div className="details">We are a global youth-led Non-Profit Organization committed to tackling the pressing climate crisis through our innovative community-first approach.</div>
                    </div>
                </div>
            </div>
            <div className="image-details">
                <div className="details-container">
                    <div>
                        <div className="details-heading">Tech Driven Action</div>
                        <div className="details">Powerful technology products, specifically cutting-edge news sites, that empower users to raise their voices and contribute to climate action</div>
                    </div>
                </div>
                <div>
                    <img src="https://www.maitilabs.org/static/media/pexels-baskin-creative-studios-1766838.d0aae02a14e21ccdb459.jpg" alt="" className="homeImage" />
                </div>
            </div>
            <div className="image-details">
                <div>
                    <img src="https://www.maitilabs.org/static/media/pexels-james-wheeler-417074.7730cedcf5c33b1f5fdf.jpg" alt="" className="homeImage"/>
                </div>
                <div className="details-container">
                    <div>
                        <div className="details-heading">Inclusivity through Translations</div>
                        <div className="details">Breaking down barriers through advanced artificial intelligence translations. Our content is accessible and readable in any language.</div>
                    </div>
                </div>
            </div>
            <div  className="initiative">Our Initiative</div>
            <div className="bottom-container">
                <div>
                    <div className="about-left">
                        <div><img src="https://www.maitilabs.org/static/media/Awareness.45126e082c8be53eb6b4.jpg" alt="" /></div>
                        <div>Awareness Portal</div>
                        <div>Climate Information in Every Language <br /> <span>Learn More</span> </div>
                    </div>
                    <div className="about-line"></div>
                    <div className="about-right">
                        <div><img src="https://www.maitilabs.org/static/media/black%20white%20leaf%20logo.a74b09806fdb83fb3de3.png" alt="" /></div>
                        <div>GreenBit</div>
                        <div>Compressing data, Expanding Futures <br /> <span>Learn More</span> </div>
                    </div>
                </div>
            </div>
            <div className="about-button"><div className="button">More</div></div>
        </div>
    )
}

export default About;