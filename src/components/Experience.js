import React from 'react';
import LaboSnippet from "../images/LurigorSnippet.PNG";
import WeatherSnippet from "../images/WeatherSnippet.PNG";
import PortfolioSnippet from "../images/PortfolioSnippet.PNG";
import MemoGameSnippet from "../images/MemoGameSnippet.PNG";


function Experience(props) {
    return (
        <div>
            <div className="text-center dark:text-white py-2 mx-[17px] text-6xl sm:text-4xl font-script font-extrabold"
                 data-aos="fade-up" data-aos-duration="1000">
                Experience
            </div>
            <div className="grid grid-cols-4 gap-3 place-items-center mx-12 sm:grid-cols-1 py-7">
                <a data-aos="fade-up" data-aos-duration="1000"
                   className="shadow-3xl" href="#">
                    <div className="flex flex-col space-y-5 bg-white dark:bg-black p-5 h-64 rounded-md">
                        <img className="w-[307px] h-[145px]" src={LaboSnippet} alt="Ex1"/>
                        <p className="text-center font-semibold dark:text-white text-xl">LURIGOR</p>
                    </div>
                </a>
                <a data-aos="fade-up" data-aos-duration="1000"
                   className="shadow-3xl" href="https://weather-application-zakariaebouklah.vercel.app/">
                    <div className="flex flex-col space-y-5 bg-white dark:bg-black p-5 h-64 rounded-md">
                        <img className="w-[307px] h-[145px]" src={WeatherSnippet} alt="Ex2"/>
                        <p className="text-center font-semibold dark:text-white text-xl">Weather-App</p>
                    </div>
                </a>
                <a data-aos="fade-up" data-aos-duration="1000"
                   className="shadow-3xl" href="#home">
                    <div className="flex flex-col space-y-5 bg-white dark:bg-black p-5 h-64 rounded-md">
                        <img className="w-[307px] h-[145px]" src={PortfolioSnippet} alt="Ex3"/>
                        <p className="text-center font-semibold dark:text-white text-xl">My Portfolio</p>
                    </div>
                </a>
                <a data-aos="fade-up" data-aos-duration="1000"
                   className="shadow-3xl" href="https://codepen.io/zakibouklah/pen/PoRWMQE">
                    <div className="flex flex-col space-y-5 bg-white dark:bg-black p-5 h-64 rounded-md">
                        <img className="w-[307px] h-[145px]" src={MemoGameSnippet} alt="Ex4"/>
                        <p className="text-center font-semibold dark:text-white text-xl">Memory Game With Memes</p>
                    </div>
                </a>

            </div>
        </div>
    );
}

export default Experience;