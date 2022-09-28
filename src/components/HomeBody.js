import React from 'react';
import {AiFillGithub} from "react-icons/ai";
import {SiFacebook, SiCodepen, SiLinkedin} from "react-icons/si";
import {CgInstagram} from "react-icons/cg";

function HomeBody(props) {
    return (
        <div className="pt-14 sm:pt-44">
            <div className="font-arvo text-center sm:text-3xl text-7xl dark:text-white sm:m-5">ZAKARIAE BOUKLAH</div>
            <div className="text-center text-3xl dark:text-white sm:m-5 sm:text-xl">Software Engineer</div>
            <div className="p-5">
                <ul className="flex flex-row space-x-9 absolute sm:relative sm:justify-center left-1/2 -translate-x-1/2">
                    <a target="_blank" href="https://github.com/zakariaebouklah">
                        <li>
                            <AiFillGithub size="30" className="hover:text-light-three hover:animate-rotation dark:text-dark-four dark:hover:text-dark-two"/>
                        </li>
                    </a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100010224937972">
                        <li>
                            <SiFacebook size="30" className="hover:text-light-three hover:animate-rotation dark:text-dark-four dark:hover:text-dark-two"/>
                        </li>
                    </a>
                    <a target="_blank" href="https://codepen.io/zakibouklah">
                        <li>
                            <SiCodepen size="30" className="hover:text-light-three hover:animate-rotation dark:text-dark-four dark:hover:text-dark-two"/>
                        </li>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/zakariae-bouklah-8b7a07222/">
                        <li>
                            <SiLinkedin size="30" className="hover:text-light-three hover:animate-rotation dark:text-dark-four dark:hover:text-dark-two"/>
                        </li>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/zakibouklah/">
                        <li>
                            <CgInstagram size="30" className="hover:text-light-three hover:animate-rotation dark:text-dark-four dark:hover:text-dark-two"/>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    );
}

export default HomeBody;