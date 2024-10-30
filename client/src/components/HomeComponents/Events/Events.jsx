import React from 'react';
import './ParallaxStars.css';

const Events = () => {

    // Generate random stars
    const generateBoxShadows = (count) => {
        let boxShadow = '';
        for (let i = 0; i < count; i++) {
            const x = Math.floor(Math.random() * 2000);
            const y = Math.floor(Math.random() * 2000);
            boxShadow += `${x}px ${y}px #FFF, `;
        }
        return boxShadow.slice(0, -2); // Remove last comma and space
    };


    return (
        <div className="stars-container">
            <div id="stars" style={{ boxShadow: generateBoxShadows(700) }}></div>
            <div id="stars2" style={{ boxShadow: generateBoxShadows(200) }}></div>
            <div id="stars3" style={{ boxShadow: generateBoxShadows(100) }}></div>

            <div id="title">
                <span>RETINA 2024</span>
                <br />
                <span>EVENTS HIGHLIGHTS</span>
            </div>
        </div>
    );
};

export default Events;
