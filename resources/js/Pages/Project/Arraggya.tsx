import { Head } from "@inertiajs/react";
import { MainLayout } from "@/Layouts/Main";

import OurGoal from "@/Sections/Common/OurGoal";
import GetDonate from "@/Sections/Common/GetDonate";
import OurSupporters from "@/Sections/Common/OurSupporters";
import { arraggyaImages } from "@/constants/arraggya";

export default function ProjectArraggya() {
    return (
        <MainLayout>
            <Head title="Araggya Project" />

            <section className="bg-white dark:bg-gray-900 min-h-full relative flex flex-1 shrink-0 items-center justify-center overflow-hidden py-8 mt-12 shadow-lg md:py-10 xl:py-24">
                <div className="absolute inset-0 bg-black  opacity-55"></div>
                <>
                    <div className="flex flex-col relative">
                        <div className="text-center">
                            <h2 className="font-bold text-4xl text-black dark:text-white opacity-100 z-10">
                                প্রজেক্ট আরোগ্য
                            </h2>
                            <div className="flex justify-center items-center">
                                <hr className="my-6 w-2/6  h-2 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-75 dark:via-amber-400" />
                            </div>
                        </div>
                        <div className="flex flex-col  md:flex-row relative max-w-screen-xl px-4 py-8 gap-10  lg:grid-cols-12">
                            <div className="mr-auto max-w-lg place-self-center lg:col-span-6">
                                <h6 className="max-w-2xl mb-6 font-light text-white lg:mb-8 ">
                                    সুস্বাস্থ্য ও সুস্থতা মহান সৃষ্টিকর্তার পক্ষ
                                    থেকে সমগ্র মানবজাতির উপরে একটি নিয়ামত
                                    স্বরূপ। এই নিয়ামত এর অভাব আমরা অক্ষরে অক্ষরে
                                    টের পাই যখন আমরা বা আমাদের প্রিয়জন অসুস্থ
                                    হয়ে পড়েন। হয়তো অসুস্থ হলে আপনি বা আমি
                                    চিকিৎসকের শরণাপন্ন হই, হয়তো ঔষধ সেবন এর পরে
                                    মহান আল্লাহ রাব্বুল আল-আমিন এর রহমতে সুস্থতা
                                    লাভ করি। কিন্তু কখনো ভেবে দেখেছেন ? এক বেলার
                                    আহার জোগাতে যেই অসহায় মানুষদের হিমশিম খেতে
                                    হয় তারা কিভাবে বছর এর পর বছর রোগ-ব্যাধি তে
                                    ভুগেন। এর ফলাফল হলো একটা অমানবিক মৃত্যু।
                                    দীপায়ন এ আমরা বিশ্বাস করি প্রতিটা মানুষ এর
                                    রয়েছে সুস্থভাবে বেঁচে থাকার অধিকার। আমাদের
                                    রয়েছে প্রশিক্ষিত একদল স্বাস্থকর্মী ও কিছু
                                    মহানুভব চিকিৎসকদের একটি দল যারা নিরলসভাবে
                                    কাজ করে চলেছেন এই অসহায় মানুষদের মুখে হাসি
                                    ফোটাতে। আমাদের ভবিৎষত কর্মপরিকল্পনাতে রয়েছে
                                    <strong className="font-bold">
                                        &nbsp;দীপায়ন আরোগ্যলয়&nbsp;
                                    </strong>{" "}
                                    যা সম্পূর্ণ বিনামূল্যে চিকিৎসা দিবে একটি
                                    বিশাল জনগোষ্ঠীকে, একটি রোগমুক্ত বাংলাদেশ
                                    গড়ার এই প্রয়াস এ আপনার অনুদান হাসি ফোটাবে
                                    হাজারো অসহায় রোগীর মুখে। সোনার বাংলাদেশ গড়ার
                                    দৃঢ় প্রত্যয়ে আপনাকে স্বাগতম।
                                </h6>

                                <button className="hidden lg:block rounded-full align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3.5 px-7 bg-blue-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-blue-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
                                    Donate
                                </button>
                            </div>
                            <div className="lg:ml-2.5 lg:mt-0 lg:col-span-6 lg:flex">
                                <img
                                    className="rounded-lg w-96 h-auto"
                                    src="/assets/uploads/arraggya/WhatsApp-Image-2022-10-17-at-10.15.50-PM.jpeg"
                                    alt="mockup"
                                />
                            </div>
                        </div>
                    </div>
                </>
            </section>

            <section className="py-16 px-8 bg-gray-300">
                <div className="mx-auto container ">
                    <div className="py-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {arraggyaImages.map((image, index) => (
                                <div key={index}>
                                    <img
                                        className="h-auto max-w-full aspect-[4/3] rounded-lg"
                                        src={image}
                                        alt={image}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <OurSupporters />

            <GetDonate />
        </MainLayout>
    );
}
