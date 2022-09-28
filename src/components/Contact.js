import React from 'react';

function Contact(props) {

    return (
        <div className="py-36">
            <div className="text-center dark:text-white py-7 mx-[17px] text-6xl sm:text-4xl font-script font-extrabold"
                 data-aos="fade-up" data-aos-duration="1000">
                Contact
            </div>
            <div className="flex flex-row sm:flex-col justify-around space-x-9 py-3">
                <div className="larger:w-1/2 text-9xl text-white font-script font-bold bg-light-two dark:bg-dark-five p-7 sm:text-5xl larger:rounded-br-md larger:rounded-tr-md">
                    <p className="text-center">Thanks</p>
                    <p className="text-center">For</p>
                    <p className="text-center">Scrolling</p>
                </div>
                <div className="justify-center larger:w-1/2">
                    <form
                        action={props.actionUrl}
                        method="POST"
                        className="flex flex-col p-5 space-y-7 w-96 sm:w-72"
                        id="my-form"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <label className="flex flex-col">
                            Your email address:
                            <input type="email" name="email" className="mt-2.5 bg-black/5 dark:bg-black/25 justify-between p-3.5 focus:outline-none shadow-inner rounded-xl"/>
                        </label>
                        <label className="flex flex-col">
                            Your message:
                            <textarea name="message" className="mt-2.5 bg-black/5 dark:bg-black/25 justify-between p-2 focus:outline-none shadow-inner rounded-xl"></textarea>
                        </label>
                        <button type="submit" className="bg-teal-700 hover:bg-light-two dark:bg-dark-two dark:hover:bg-dark-two/80 dark:text-dark-one my-14 w-1/4 text-white text-xl sm:text-sm p-3.5 rounded-md transition-all ease-in-out duration-300">
                            Send
                        </button>
                    </form>
                    <div id="my-form-status" className="ml-4 text-3xl dark:text-white font-script font-bold" ></div>
                </div>
            </div>
        </div>

    );
}

export default Contact;