import React from 'react'
import './start.css';
import LeftPart from './ LeftPart/ LeftPart';
import RightPart from './RightPart/RightPart';

function Start() {
    return (
        <div className="container">
            <LeftPart />
            <RightPart />
        </div>
    );
}

export default Start