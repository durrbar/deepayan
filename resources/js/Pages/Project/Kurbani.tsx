import { Head } from "@inertiajs/react";

import { MainLayout } from "@/Layouts/Main";

import GetDonate from "@/Sections/Common/GetDonate";

import { kurbaniImages } from "@/constants/kurbani";
import DonateButton from "@/Components/DonateButton";
import ImageGrid from "@/Sections/Common/ImageGrid";

export default function ProjectKurbani() {
    return (
        <MainLayout>
            <Head title="Kurbani Project" />

            <section className="bg-gray-50 dark:bg-gray-900 min-h-full relative flex flex-1 shrink-0 items-center justify-center overflow-hidden py-8 mt-12 md:py-10 xl:py-24">
                <>
                    <div className="flex flex-col relative">
                        <div className="text-center">
                            <h2 className="font-bold text-4xl text-black dark:text-white opacity-100 z-10">
                                প্রজেক্ট কুরবানি
                            </h2>
                            <div className="flex justify-center items-center">
                                <hr className="my-6 w-2/6  h-2 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-75 dark:via-amber-400" />
                            </div>
                        </div>
                        <div className="flex flex-col  md:flex-row relative max-w-screen-xl px-4 py-8 gap-10  lg:grid-cols-12">
                            <div className="lg:ml-2.5 lg:mt-0 lg:col-span-6 lg:flex">
                                <img
                                    className="rounded-lg"
                                    src="/assets/uploads/kurbani/bannerboy-1000x1024.jpg"
                                    alt="mockup"
                                />
                            </div>
                            <div className="mr-auto max-w-lg place-self-center lg:col-span-6">
                                <h6 className="max-w-2xl mb-6 font-medium dark:text-white text-black lg:mb-8 ">
                                    কুরবানী,মহান আল্লাহর সন্তুষ্টি লাভের উদ্দেশে
                                    সামর্থবান মুসলিম বান্দাহর উপরে অসহায় বান্দার
                                    হক , কিন্তু কালের বিবর্তনে এই উৎসবটি নতুন
                                    ফ্রিজ কেনা আর গোস্ত খাবার উৎসবে পরিণত হয়েছে
                                    (আস্তাগফিরুল্লাহ) । এই চরম উর্ধগতির বাজারে
                                    পশু ক্রয়ের ক্ষমতা হারিয়েছে কয়েকলক্ষ পরিবার।
                                    এই পবিত্র উৎসবের দিনেও যেন কোনো মধ্যবিত্ত বা
                                    অসহায় মানুষের বাসায় অবুঝ শিশুর অবুঝ প্রশ্নে
                                    কোনো পিতার হৃদয়ে রক্তখরন না হয়, সেইজন্য
                                    আমাদের এই ছোট্ট উদ্যোগ। এই উদ্যোগে সামিল হতে
                                    পারেন আপনিও । ক্ষুধামুক্ত বাংলাদেশ গোড়ার
                                    লক্ষে যুক্ত হন আমাদের সাথে। আপনার একটি
                                    অনুদান হাসি ফোটাবে হাজারো অসহায় পরিবার এর
                                    মুখে।
                                </h6>

                                <DonateButton />
                            </div>
                        </div>
                    </div>
                </>
            </section>

            <ImageGrid images={kurbaniImages} />

            <GetDonate />
        </MainLayout>
    );
}
