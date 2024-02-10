import React from 'react';
import Video from "../../../assets/Waves-Video.mp4";

const BackgroundVideo = () => (
    <video autoPlay muted loop plays-inline="true" id="myVideo">
        <source src={Video} type="video/mp4"/>
    </video>
    
);

export default BackgroundVideo;