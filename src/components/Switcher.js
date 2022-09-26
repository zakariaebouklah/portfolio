import React from 'react';

function Switcher(props) {

    return (
            <button onClick={props.onToggle} className="z-30 nav-icons absolute right-5 bottom-5 m-auto">
                <img src={props.source} alt="icon" className="h-9 w-9"/>
            </button>
    );
}

export default Switcher;