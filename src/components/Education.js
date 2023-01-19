import React from 'react';
import Student from "../images/student.png";
import Programing from "../images/programming.png";
import Prototype from "../images/prototype.png";
import HighSchool from "../images/studying.png";

function Education(props) {
    return (
        <div>
            <div className="text-center text-white m-[17px] text-6xl sm:text-4xl font-script font-extrabold"
                 data-aos="fade-up" data-aos-duration="1000">
                Education
            </div>
            <div className="bg-light-one shadow-3xl dark:bg-dark-one mx-12 sm:mx-3 relative rounded-md p-4"
                 data-aos="fade-up" data-aos-duration="2000">
                <img src={Student} alt="education" className="w-12 h-12 sm:w-7 sm:h-7 absolute -top-5 -right-5
                        sm:-right-3 sm:-top-3"/>
                <div id="container1" className="my-2 py-3 flex flex-col space-y-7">
                    <div className="flex flex-col items-center space-y-4">
                        <div>
                            <img src={Programing} alt="speciality" className="h-12 w-12 sm:w-7 sm:h-7"/>
                        </div>
                        <div className="sm:text-sm sm:font-bold sm:p-1.5 dark:text-white">
                            National School of Applied Sciences of Oujda - ENSAO
                        </div>
                    </div>
                    <div className="flex flex-row sm:px-1.5 justify-center space-x-28">
                        <div className="font-extrabold sm:text-xs text-light-two dark:text-dark-two">[2021-2024]</div>
                        <div className="sm:text-sm dark:text-white">Software Engineer Student</div>
                    </div>
                </div>
                <hr/>
                <div id="container2" className="my-2 py-3 flex flex-col space-y-7">
                    <div className="flex flex-col items-center space-y-4">
                        <div>
                            <img src={Prototype} alt="engineer-tools" className="h-12 w-12 sm:w-7 sm:h-7"/>
                        </div>
                        <div className="sm:text-sm sm:font-bold sm:p-1.5 dark:text-white">
                            National School of Applied Sciences of Oujda - ENSAO
                        </div>
                    </div>
                    <div className="flex flex-row sm:px-1.5 justify-center space-x-1 sm:space-x-3">
                        <div className="font-extrabold sm:text-xs text-light-two dark:text-dark-two">[2019-2021]</div>
                        <div className="sm:text-sm dark:text-white">Sciences and Techniques for the Engineer</div>
                    </div>
                </div>
                <hr/>
                <div id="container3" className="my-2 py-3 flex flex-col space-y-7">
                    <div className="flex flex-col items-center space-y-4">
                        <div>
                            <img src={HighSchool} alt="high-school" className="h-12 w-12 sm:w-7 sm:h-7"/>
                        </div>
                        <div className="sm:text-sm sm:font-bold sm:p-1.5 dark:text-white">Lala ASMAE High School</div>
                    </div>
                    <div className="flex flex-row sm:px-1.5 justify-center space-x-1 sm:space-x-3">
                        <div className="font-extrabold sm:text-xs text-light-two dark:text-dark-two">[2018-2019]</div>
                        <div className="sm:text-sm dark:text-white">Baccalaureate option Experimental Sciences</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;