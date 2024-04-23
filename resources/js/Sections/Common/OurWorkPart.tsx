import { ourWorkPart } from "@/constants/ourWorkPart";

interface ReviewCardPropsType {
    heading: string;
    image: string;
    details: string;
}

export function CardReview({ heading, image, details }: ReviewCardPropsType) {
    return (
        <div className="flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
            <img
                src={image}
                alt={heading}
                className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="p-6 relative flex flex-col justify-end">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                    {heading}
                </h4>
                <p className="block antialiased font-sans text-base leading-relaxed text-white my-2 font-normal">
                    {details}
                </p>
            </div>
        </div>
    );
}

export default function OurWorkPart() {
    return (
        <section className="py-20 px-8 bg-slate-300 dark:bg-slate-800">
            <div className="mx-auto container">
                <div className="text-center">
                    <h2 className="font-bold text-4xl text-black dark:text-white">
                        আমাদের কার্যক্রমের একাংশ
                    </h2>
                    <div className="flex justify-center items-center">
                        <hr className="my-6 w-2/6  h-2 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-75 dark:via-amber-400" />
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3"></div>
                <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-4">
                    {ourWorkPart.map(({ heading, image, details }, index) => (
                        <CardReview
                            key={index}
                            heading={heading}
                            image={image}
                            details={details}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
