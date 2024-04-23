import { MainLayout } from "@/Layouts/Main";
import { Head } from "@inertiajs/react";

export default function Contact() {
    return (
        <MainLayout>
            <Head title="Contact Us" />
            <section className="px-8 py-8 lg:py-16 mt-14">
                <div className="container mx-auto text-center">
                    <h1 className="block antialiased tracking-normal font-sans font-semibold leading-tight text-blue-gray-900 mb-4 !text-3xl lg:!text-5xl">
                        We're Here to Help
                    </h1>
                    <p className="block antialiased font-sans leading-relaxed text-inherit mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
                        Whether it's a question about our services, a request
                        for technical assistance, or suggestions for
                        improvement, our team is eager to hear from you.
                    </p>
                    <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
                        <img
                            src="https://www.material-tailwind.com/image/map.svg"
                            alt="map"
                            className="w-full h-full lg:max-h-[510px]"
                        />
                        <form
                            action="#"
                            className="flex flex-col gap-4 lg:max-w-sm"
                        >
                            <p className="block antialiased font-sans text-sm leading-normal text-inherit text-left !font-semibold !text-gray-600">
                                Select Options for Business Engagement
                            </p>
                            <div className="flex gap-4">
                                <button
                                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] max-w-fit"
                                    type="button"
                                    data-ripple-dark="true"
                                >
                                    General inquiry
                                </button>
                                <button
                                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] max-w-fit"
                                    type="button"
                                    data-ripple-dark="true"
                                >
                                    Product Support
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="block antialiased font-sans text-sm leading-normal text-inherit mb-2 text-left font-medium !text-gray-900">
                                        First Name
                                    </p>
                                    <div className="relative w-full h-11 !min-w-full">
                                        <input
                                            placeholder="First Name"
                                            name="first-name"
                                            className="peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md !border !border-gray-300 text-gray-900 placeholder:!text-gray-500 focus:!border-gray-900 focus:!border-2 focus:border-t-gray-900"
                                        />
                                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 hidden"></label>
                                    </div>
                                </div>
                                <div>
                                    <p className="block antialiased font-sans text-sm leading-normal text-inherit mb-2 text-left font-medium !text-gray-900">
                                        Last Name
                                    </p>
                                    <div className="relative w-full h-11 !min-w-full">
                                        <input
                                            placeholder="Last Name"
                                            name="last-name"
                                            className="peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md !border !border-gray-300 text-gray-900 placeholder:!text-gray-500 focus:!border-gray-900 focus:!border-2 focus:border-t-gray-900"
                                        />
                                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 hidden"></label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="block antialiased font-sans text-sm leading-normal text-inherit mb-2 text-left font-medium !text-gray-900">
                                    Your Email
                                </p>
                                <div className="relative w-full h-11 !min-w-full">
                                    <input
                                        placeholder="name@email.com"
                                        name="email"
                                        className="peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md !border !border-gray-300 text-gray-900 placeholder:!text-gray-500 focus:!border-gray-900 focus:!border-2 focus:border-t-gray-900"
                                    />
                                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 hidden"></label>
                                </div>
                            </div>
                            <div>
                                <p className="block antialiased font-sans text-sm leading-normal text-inherit mb-2 text-left font-medium !text-gray-900">
                                    Your Message
                                </p>
                                <div className="relative w-full !min-w-full">
                                    <textarea
                                        rows={6}
                                        placeholder="Message"
                                        name="message"
                                        className="peer w-full h-full min-h-[100px] bg-transparent font-sans font-normal outline outline-0 focus:outline-0 resize-y disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !border !border-gray-300 text-gray-900 placeholder:!text-gray-500 focus:!border-gray-900 focus:!border-2 focus:border-t-gray-900"
                                        spellCheck="false"
                                    ></textarea>
                                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 hidden"></label>
                                </div>
                            </div>
                            <button
                                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full"
                                type="button"
                                data-ripple-light="true"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
