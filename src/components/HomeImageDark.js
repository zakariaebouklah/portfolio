import React from 'react';
import darkImage from '../images/bg.jpg';

function HomeImageDark(props) {
    return (
        <div className="relative top-32 sm:top-56">
            <img src={darkImage} alt="dark" className="relative left-1/2 -translate-x-1/2"/>
        </div>
    );
}

export default HomeImageDark;