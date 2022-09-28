import React from 'react';

function Skills(props) {
    return (
        <div>
            <div className="text-center dark:text-white py-2 mx-[17px] text-6xl sm:text-4xl font-script font-extrabold"
                 data-aos="fade-up" data-aos-duration="1000">
                Skills
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-1 sm:gap-14 gap-7 mx-12">
                <div className="flex flex-col space-y-9">
                    <p className="font-bold text-3xl text-center dark:text-dark-two">Web Development</p>
                    <div className="grid grid-cols-2 place-items-center" data-aos="fade-up" data-aos-duration="2000">
                        <img alt="html" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                             className="h-12 w-12" />
                        <img alt="css" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                             className="h-12 w-12" />
                        <img alt="tailwind" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                             className="h-12 w-12" />
                        <img alt="bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                             className="h-12 w-12" />
                    </div>
                    <div className="grid grid-cols-2 place-items-center" data-aos="fade-up" data-aos-duration="2000">
                        <img alt="vanillaJS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                             className="w-12 h-12"/>
                        <img alt="ReactJS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                             className="w-12 h-12"/>
                    </div>
                    <div className="grid grid-cols-2 place-items-center" data-aos="fade-up" data-aos-duration="2000">
                        <img alt="PHP" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                             className="w-12 h-12"/>

                        <img alt="Symfony" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg"
                             className="w-12 h-12"/>
                    </div>
                </div>
                <div className="flex flex-col space-y-9">
                    <p className="font-bold text-3xl text-center dark:text-dark-two">Programming</p>
                    <div className="grid grid-cols-2 gap-1 place-items-center" data-aos="fade-up"
                         data-aos-duration="2000">

                        <img alt="C" className="w-12 h-12"
                             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />

                        <img alt="C++" className="w-12 h-12"
                             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />

                        <img alt="Java" className="w-12 h-12"
                             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />

                        <img alt="C#" className="w-12 h-12"
                             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />

                    </div>
                </div>
                <div className="flex flex-col space-y-9">
                    <p className="font-bold text-3xl text-center dark:text-dark-two">Databases & other stuffs</p>
                    <div className="grid grid-cols-2 gap-1 place-items-center" data-aos="fade-up"
                         data-aos-duration="2000">
                        <img alt="Linux" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                             className="w-12 h-12" />

                        <img alt="MySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                             className="w-12 h-12" />

                        <img alt="git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                             className="w-12 h-12" />
                    </div>
                    <div className="grid grid-cols-2 gap-1 place-items-center" data-aos="fade-up"
                         data-aos-duration="2000">
                        <img alt="Ai" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
                             className="w-12 h-12" />

                        <img alt="Ps" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                             className="w-12 h-12" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;