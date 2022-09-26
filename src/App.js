import './index.css';
import Navbar from "./components/Navbar";
import Switcher from "./components/Switcher";
import HomeImage from "./components/HomeImage";
import HomeImageDark from "./components/HomeImageDark";
import React, {useState} from "react";
import lightModeImg from "./images/sun.png";
import darkModeImg from "./images/half-moon.png";
import HomeBody from "./components/HomeBody";

function App() {

    const [isDark, setIsDark] = useState(false);
    const [image, setImage] = useState(lightModeImg);

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
        <div id="home" className="flex flex-col space-y-20">
            { isDark ? <HomeImageDark/> : <HomeImage/> }
            <HomeBody/>
        </div>
    </div>
  );
}

export default App;
