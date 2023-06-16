import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation, Pagination, Scrollbar, Zoom } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

import "./Temoignages.css";

import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"

const Temoignages = () => {
    return (
        <div className='temoignages'>
            <div className='title'>Temoignages</div>

            <div className='mainContent'>
                <Swiper
                    modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Navigation]}
                    autoplay={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    scrollbar={true}
                    zoom={true}
                    className="mySwiper"

                    navigation={true}
                >
                    <SwiperSlide>
                        <div className='text'>
                            <FaAngleDoubleLeft />
                            <div className='content'>
                                <span>
                                    Développeur Fullstack depuis plus de 10 ans, j’ai décidé de changer de vie, de quitter le salariat pour devenir Entrepreneur, Freelance et digital nomade.
                                    Je partage tout ce que j’ai appris sur la programmation, comment devenir freelance, l’entreprenariat et l’efficacité.
                                    Mes conseils sont basés sur mon expérience.
                                    Abonne-toi maintenant pour faire parti de l’aventure.
                                </span>

                                <p>
                                    Stéphane Kikoni
                                </p>
                            </div>
                            <FaAngleDoubleRight />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text'>
                            <FaAngleDoubleLeft />
                            <div className='content'>
                                <span>
                                    Développeur Fullstack depuis plus de 10 ans, j’ai décidé de changer de vie, de quitter le salariat pour devenir Entrepreneur, Freelance et digital nomade.
                                    Je partage tout ce que j’ai appris sur la programmation, comment devenir freelance, l’entreprenariat et l’efficacité.
                                    Mes conseils sont basés sur mon expérience.
                                    Abonne-toi maintenant pour faire parti de l’aventure.
                                </span>

                                <p>
                                    Stéphane Kikoni
                                </p>
                            </div>

                            <FaAngleDoubleRight />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text'>
                            <FaAngleDoubleLeft />
                            <div className='content'>
                                <span>
                                    Développeur Fullstack depuis plus de 10 ans, j’ai décidé de changer de vie, de quitter le salariat pour devenir Entrepreneur, Freelance et digital nomade.
                                    Je partage tout ce que j’ai appris sur la programmation, comment devenir freelance, l’entreprenariat et l’efficacité.
                                    Mes conseils sont basés sur mon expérience.
                                    Abonne-toi maintenant pour faire parti de l’aventure.
                                </span>

                                <p>
                                    Stéphane Kikoni
                                </p>
                            </div>
                            <FaAngleDoubleRight />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};
export default Temoignages;