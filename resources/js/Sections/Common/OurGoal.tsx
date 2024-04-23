export default function OurGoal() {
    return (
        <section className="bg-white dark:bg-gray-900 min-h-full relative flex flex-1 shrink-0 items-center justify-center overflow-hidden py-8 shadow-lg md:py-10 xl:py-24">
            <img
                src="/assets/uploads/banner-02.jpg"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-50 blur-sm"
            />

            <div className="absolute inset-0 bg-black  opacity-55"></div>
            <>
                <div className="flex flex-col relative">
                    <div className="text-center">
                        <h2 className="font-bold text-4xl text-black dark:text-white opacity-100 z-10">
                            আমাদের লক্ষ্য
                        </h2>
                        <div className="flex justify-center items-center">
                            <hr className="my-6 w-2/6  h-2 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-75 dark:via-amber-400" />
                        </div>
                    </div>
                    <div className="flex flex-col  md:flex-row relative max-w-screen-xl px-4 py-8 gap-10  lg:grid-cols-12">
                        <div className="mr-auto max-w-lg place-self-center lg:col-span-6">
                            <h3 className="max-w-2xl mb-6 font-extrabold text-pink-700 text-3xl lg:mb-8  ">
                                একটি দারিদ্র ও ক্ষুধামুক্ত দেশ, যেখানে কোনো
                                মানুষ অভুক্ত অবস্থায় রাস্তায় ঘুমাবে না
                            </h3>

                            <h6 className="max-w-2xl mb-6 font-light text-white lg:mb-8  ">
                                <strong className="font-bold">
                                    “ক্ষুধার রাজ্যে পৃথিবী গদ্যময়,পূর্ণিমা চাঁদ
                                    যেন ঝলসানো রুটি”
                                </strong>
                                &nbsp; – &nbsp; সুকান্ত ভট্টাচার্য এই লাইনটির
                                মাধ্যমে কী বোঝাতে চেয়েছেন? তিঁনি বোঝাতে
                                চেয়েছেন, একজন ক্ষুধার্ত মানুষের কাছে পার্থিব
                                জীবনের সৌন্দর্য মূল্যহীন। একজন মানুষ এর
                                স্বাভাবিকভাবে বাঁচার জন্য তাকে তার মৌলিক
                                অধিকারসমূহ প্রদান করা ছাড়া কোনো বিকল্প নেই।
                            </h6>

                            <h6 className="max-w-2xl mb-6 font-light text-white lg:mb-8 ">
                                আমরা বিশ্বাস করি প্রতিটা মানুষ তাদের মৌলিক
                                অধিকার নিয়ে বাঁচার অধিকার রাখে, বাংলাদেশ এর ২০.৫
                                শতাংশ মানুষ যারা দারিদ্রসীমার নিচে বসবাস করেন
                                তাদের জীবনযাত্রার মান উন্নয়ন ও জাতির জনক
                                বঙ্গবন্ধু শেখ মুজিবুর রহমান এর সেই ক্ষুধামুক্ত
                                সোনার বাংলা গড়ার দৃঢ় প্রত্যয় নিয়ে আমাদের
                                ফাউন্ডেশন এর যাত্রা শুরু হয় ২০১৭ সাল থেকে,
                                আমাদের এই ক্ষুদ্র প্রয়াসে আপনাদের আগ্রহ ও
                                সহযোগিতা একান্ত কাম্য। স্বপ্নের সেই সোনার বাংলা
                                গড়ার যাত্রায় আপনার অপেক্ষায় আমরা।
                            </h6>
                        </div>
                        <div className="lg:ml-2.5 lg:mt-0 rounded-xl lg:col-span-6 lg:flex">
                            <img
                                className="rounded-xl"
                                src="/assets/logo/deepayan-logo.png"
                                alt="mockup"
                            />
                        </div>
                    </div>
                </div>
            </>
        </section>
    );
}
