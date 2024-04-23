import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Pagination } from "swiper/modules";
import "../slider.css";

export default function HomeSlider() {
    return (
        <section className="py-16 px-8 bg-gray-300">
            <div className="mx-auto container ">
                <div className="py-6">
                    <Swiper
                        spaceBetween={30}
                        autoplay
                        loop
                        parallax
                        effect="flip"
                        slidesPerView={4}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <img
                                className="rounded-2xl border-blue-600 border-2 h-96 w-72 object-cover"
                                src="/assets/uploads/IMG_20220710_123648.jpg"
                                loading="lazy"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="rounded-2xl border-blue-600 border-2 h-96 w-72 object-cover"
                                src="/assets/uploads/depmed-8.jpg"
                                loading="lazy"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="rounded-2xl border-blue-600 border-2 h-96 w-72 object-cover"
                                src="/assets/uploads/WhatsApp-Image-2023-07-09-at-12.02.35-PM.jpeg"
                                loading="lazy"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="rounded-2xl border-blue-600 border-2 h-96 w-72 object-cover"
                                src="/assets/uploads/WhatsApp-Image-2023-07-09-at-12.02.18-PM1-q95atnqtat1y0zodrr04gvc9bv0wli9cjqdv0bub3s.jpeg"
                                loading="lazy"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="rounded-2xl border-blue-600 border-2 h-96 w-72 object-cover"
                                src="/assets/uploads/WhatsApp-Image-2023-07-09-at-12.02.33-PM-q95ati3s5su83bwkookd1wrhrjspbbmyiygy4o2o54.jpeg"
                                loading="lazy"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
