import React from "react";
import './Video.css';

const Video = () => {
    return (
        <div className="video-container">
            <video autoPlay loop muted>
                <source src="https://www.maitilabs.org/static/media/birdvideo.c2d102a546e6c528cb29.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Video;