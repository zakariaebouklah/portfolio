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

function App() {

    const [isDark, setIsDark] = useState(false);
    const [image, setImage] = useState(lightModeImg);

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
        <div className="flex flex-col space-y-9 sm:space-y-0">
            <div id="home" className="flex flex-col space-y-20 sm:h-screen">
                { isDark ? <HomeImageDark/> : <HomeImage/> }
                <HomeBody/>
            </div>
            <div id="education" className="bg-light-two dark:bg-dark-four h-fit">
                <Education/>
            </div>
        </div>
    </div>
  );
}

export default App;
