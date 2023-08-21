import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import html from "../images/html.png"
import css from "../images/css.png"
import javascript from "../images/javascript.png"
import sass from "../images/sass.png"
import react from "../images/react.webp"
import bootstrap from "../images/bootstrap.png"
import profileImg from "../profileImg.jpg"

function MainPage(){
    return (
        <section className="main-page container" id="home">
            <div className="about-section">
                <div className="img-container">
                    <img src={profileImg} alt="" className="self-portarit" />
                </div>
                <div className="text">
                    <h1 className="name">Deák Levente</h1>
                    <h1 className="title">Junior Frontend Fejlesztő</h1>
                    <p className="about">Kiskorom óta szeretem az informatikát, így szeretnék nem csak hobbiként, hanem karrierként is vele foglalkozni. Azért választottam a webfejlesztést, mert így az informatikán belül olyan kreatív munkát is végezhetek, mint a weboldal felépítésének vagy kinézetének a kialakítása.</p>
                </div>
            </div>
            <div className="swiper">
                <h4 className="swiper-title">Képességeim</h4>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    breakpoints={{
                        500: {
                            slidesPerView: 4
                        },
                        800: {
                            slidesPerView: 5
                        },
                        1000: {
                            slidesPerView: 6
                        }
                    }}
                    modules={[Autoplay]}
                    autoplay={true}
                    loop={true}
                >
                    <SwiperSlide><img src={html} alt="" className="swiper-img" /></SwiperSlide>
                    <SwiperSlide><img src={css} alt="" className="swiper-img" /></SwiperSlide>
                    <SwiperSlide><img src={javascript} alt="" className="swiper-img" /></SwiperSlide>
                    <SwiperSlide><img src={sass} alt="" className="swiper-img" /></SwiperSlide>
                    <SwiperSlide><img src={react} alt="" className="swiper-img" /></SwiperSlide>
                    <SwiperSlide><img src={bootstrap} alt="" className="swiper-img" /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    )

}

export default MainPage