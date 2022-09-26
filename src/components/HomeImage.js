import React from 'react';
import lightImage from '../images/bg-light.jpg';

function HomeImage(props) {

    return (
        <div className="relative top-32 sm:top-56">
            <img src={lightImage} alt="light" className="relative left-1/2 -translate-x-1/2"/>
        </div>
    );
}

export default HomeImage;