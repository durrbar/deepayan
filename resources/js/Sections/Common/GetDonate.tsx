export default function GetDonate() {
    return (
        <section className=" min-h-full relative flex flex-1 shrink-0 items-center justify-center overflow-hidden py-8  md:py-10 xl:py-24">
            <img
                src="/assets/uploads/WhatsApp-Image-2022-03-29-at-10.26.32-AM.jpeg"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="absolute inset-0 h-full w-full object-cover object-center  blur-sm"
            />

            <div className="absolute inset-0 bg-black/70  opacity-75"></div>
            <>
                <div className="flex flex-col">
                    <div className="text-center relative mb-5">
                        <h2 className="font-bold text-4xl text-white">
                            অনুদান গ্রহণ
                        </h2>
                        <div className="flex justify-center items-center">
                            <hr className="my-6 w-2/6  h-2 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-75 dark:via-amber-400" />
                        </div>
                    </div>
                    <div className="flex flex-row relative max-w-screen-xl px-4 my-10 py-4 gap-6 justify-between">
                        <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
                            <h1 className="mb-8 text-center text-lg font-bold text-white sm:text-5xl md:mb-12 md:text-2xl">
                                একটি সুবিধাবঞ্চিত শিশুর জীবনের মোড় ঘুরিয়ে দিতে
                                আমাদের সহায়তা করুন
                            </h1>
                            <p className="mb-4 text-center text-xs text-white sm:text-xl md:mb-8">
                                আপনার অনুদান পৌঁছে যাবে সুবিধাবঞ্চিত শিশু ও
                                মানুষদের সাহায্যে। দারিদ্র ও ক্ষুধামুক্ত একটি
                                বাংলাদেশ গড়ার এই লক্ষযাত্রায় আপনাকে স্বাগতম।
                            </p>

                            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                                <a
                                    href="#"
                                    className="inline-block rounded-full bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-black outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                                >
                                    Donate
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </section>
    );
}
