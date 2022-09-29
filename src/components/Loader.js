import React from 'react';
import LoaderPic from '../images/Z.png';

function Loader(props) {
    return (
        <div className="h-screen w-screen bg-black z-50">
            <img src={LoaderPic} alt="loader" className="w-80 h-80 absolute top-0 right-0 left-0 bottom-0 m-auto"/>
        </div>
    );
}

export default Loader;