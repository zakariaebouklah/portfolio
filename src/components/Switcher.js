import React from 'react';

function Switcher(props) {

    return (
            <button onClick={props.onToggle} className="fixed z-30 sm:w-10 sm:h-10 h-14 w-14 bg-light-two
        bg-opacity-30 text-light-two flex justify-center items-center hover:bg-light-four rounded-3xl hover:rounded-xl
        transition-all duration-200 ease-linear cursor-pointer right-5 bottom-7 m-auto dark:bg-dark-two/25
        dark:hover:bg-dark-two">
                <img src={props.source} alt="icon" className="h-9 w-9 sm:h-7 sm:w-7"/>
            </button>
    );
}

export default Switcher;