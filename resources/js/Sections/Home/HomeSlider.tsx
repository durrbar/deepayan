import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { homeSlider } from "@/constants/homeSlider";

export default function HomeSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
    };

    return (
        <section className="py-16 px-8 mx-auto bg-gradient-to-r from-pink-500/40 via-purple-500/40 to-indigo-500/40 mix-blend-normal ">
            <div className="mx-auto container ">
                <div className="slider-container">
                    <Slider {...settings}>
                        {homeSlider.map((image) => (
                            <div key={image}>
                                <img
                                    className="rounded-2xl border-blue-600 border-2 h-96 w-72 object-cover"
                                    src={image}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
