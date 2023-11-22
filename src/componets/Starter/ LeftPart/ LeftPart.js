import React from 'react';
import './left.css'; // Make sure to create this CSS file

function LeftPart() {
    return (
        <div className="left-part">
            <h1 id="wlc">Welcome </h1>
            <h1 id="myPage">To My Movie Page</h1>
            <p>
                Thank you for visiting my website.
                Here, you will find an exciting collection of movies tailored to your preferences.
                Whether you're in the mood for a classic blockbuster, a hidden indie gem, or something in between,
                we've got you covered. Dive in and discover films that resonate with your taste and mood!
            </p>
        </div>
    );
}

export default LeftPart;
