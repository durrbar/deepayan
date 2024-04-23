export default function HomeHero() {
    return (
        <section className="min-h-full h-screen relative flex flex-1 shrink-0 items-center justify-center overflow-hidden  bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
            <img
                src="/assets/uploads/WhatsApp-Image-2022-03-29-at-11.04.46-AM.jpeg"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-65"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mix-blend-multiply opacity-95"></div>

            <div className="relative flex flex-col items-center p-4 ">
                <p className="mb-4 text-center sm:text-3xl text-white text-base md:mb-8">
                    Because Only Together We Can
                </p>
                <h1 className="mb-8 text-center sm:text-8xl font-bold text-white text-base md:mb-12 md:text-6xl">
                    একটি মানবিক পৃথিবীর জন্য
                </h1>

                <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                    <a
                        href="#"
                        className="inline-block rounded-full bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                    >
                        Read More
                    </a>

                    <a
                        href="#"
                        className="inline-block rounded-full bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-black outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                    >
                        Donate
                    </a>
                </div>
            </div>
        </section>
    );
}
