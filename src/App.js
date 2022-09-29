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
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

function App() {

    const [isDark, setIsDark] = useState(false);
    const [image, setImage] = useState(lightModeImg);

    let curYear = new Date().getFullYear();

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

    var form = document.getElementById("my-form");

    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("my-form-status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Thanks for your submission!";
                form.reset()
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        status.innerHTML = "Oops! There was a problem submitting your form"
                    }
                })
            }
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
        });
    }
    console.log("Ok")
    if (form)
    {
        form.addEventListener("submit", handleSubmit)
        console.log("Ok")
    }

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        console.log(document.querySelector("#loader"))
        let timeOutID = setTimeout(() => {
            setLoader(false);
        }, 3000)
        return () => clearInterval(timeOutID);
    }, [])

  return loader ?
      <div id="loader" className={loader ? "fadeIn" : "fadeOut"} >
        <Loader/>
      </div>
      : (
          <div>
              <div className="bg-light-one h-screen dark:bg-dark-one">
                  <Navbar/>
                  <Switcher onToggle={switching} source={image}/>
                  <div className="flex flex-col sm:space-y-0">
                      <div id="home" className="flex flex-col space-y-20 sm:h-screen mb-9 sm:mb-0"
                            data-aos="fade-up" data-aos-duration="1000">
                          { isDark ? <HomeImageDark/> : <HomeImage/> }
                          <HomeBody/>
                      </div>
                      <div id="education" className="bg-light-two dark:bg-dark-four h-fit py-[72px] sm:py-10">
                          <Education/>
                      </div>
                      <div id="skills" className="h-full py-24 sm:py-10 dark:bg-dark-one dark:pt-10">
                          <Skills/>
                      </div>
                      <div id="experience" className="h-full bg-light-one dark:bg-dark-five py-24">
                          <Experience/>
                      </div>
                      <div id="contact" className="h-full bg-white dark:bg-dark-four">
                          <Contact actionUrl={`https://formspree.io/f/${process.env.REACT_APP_FORMSPREE}`}/>
                      </div>
                      <div id="footer" className="text-center p-7 text-white bg-light-three dark:bg-dark-one">
                          <Footer year={curYear}/>
                      </div>
                  </div>
              </div>
          </div>
    );
}

export default App;
