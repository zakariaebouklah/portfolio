import './index.css';
import Navbar from "./components/Navbar";
import Switcher from "./components/Switcher";
import HomeImage from "./components/HomeImage";
import HomeImageDark from "./components/HomeImageDark";
import React, {useEffect, useState} from "react";
import lightModeImg from "./images/sun.png";
import darkModeImg from "./images/half-moon.png";
import HomeBody from "./components/HomeBody";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {

    const [isDark, setIsDark] = useState(false);
    const [image, setImage] = useState(lightModeImg);

    document.querySelector("html").classList.add("scroll-smooth");

    useEffect(() => {
        AOS.init();
    }, [])

    function switching() {
        const html = document.querySelector("html");
        if (!html.classList.contains("dark"))
        {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
        setIsDark(!isDark);
        if (isDark)
        {
            setImage(lightModeImg);
        } else {
            setImage(darkModeImg);
        }
    }

  return (
    <div className="bg-light-one h-screen dark:bg-dark-one">
        <Navbar/>
        <Switcher onToggle={switching} source={image}/>
        <div className="flex flex-col sm:space-y-0">
            <div id="home" className="flex flex-col space-y-20 sm:h-screen mb-9 sm:mb-0">
                { isDark ? <HomeImageDark/> : <HomeImage/> }
                <HomeBody/>
            </div>
            <div id="education" className="bg-light-two dark:bg-dark-four h-fit py-[72px] sm:py-10">
                <Education/>
            </div>
            <div id="skills" className="h-full py-24 sm:py-10 dark:bg-dark-one dark:pt-10">
                <Skills/>
            </div>
        </div>
    </div>
  );
}

export default App;
