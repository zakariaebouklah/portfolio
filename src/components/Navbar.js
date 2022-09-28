import React from 'react';
import '../index.css';
import { SiHomeadvisor,  } from "react-icons/si";
import { GiSpellBook, GiSkills } from "react-icons/gi";
import {MdWidgets, MdLocalLaundryService} from "react-icons/md";

function Navbar(props) {

    return (
        <nav className="fixed w-screen h-24 flex flex-row justify-between p-5 bg-white dark:bg-dark-five z-50">
            <div className="w-1/4 font-script text-7xl sm:text-5xl text-center font-extrabold dark:text-dark-four">Zakariae</div>
            <div className="w-3/4 sm:hidden px-9">
                <ul className="flex flex-row space-x-11 justify-end">
                    <a href="#home">
                        <li>
                            <NavIcon text="Home" icon={<SiHomeadvisor size="30"/>}/>
                        </li>
                    </a>
                    <a href="#education">
                        <li>
                            <NavIcon text="Education" icon={<GiSpellBook size="30"/>}/>
                        </li>
                    </a>
                    <a href="#skills">
                        <li>
                            <NavIcon text="Skills" icon={<GiSkills size="30"/>}/>
                        </li>
                    </a>
                    <a href="#experience">
                        <li>
                            <NavIcon text="Experience" icon={<MdWidgets size="30"/>}/>
                        </li>
                    </a>
                    <a href="#contact">
                        <li>
                            <NavIcon text="Contact" icon={<MdLocalLaundryService size="30"/>}/>
                        </li>
                    </a>
                </ul>
            </div>
        </nav>
    );
}

function NavIcon({icon, text}) {
    return (
        <div className="nav-icons group">
            {icon}
            <div className="arrow group-hover:scale-100"></div>
            <span className="icons-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    );
}

export default Navbar;