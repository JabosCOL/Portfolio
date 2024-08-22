import Image from "next/image";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { skills } from "@/data"
import Swiper from "swiper/types";
import "swiper/css"
import "swiper/css/effect-coverflow"

export default function SkillsDisplay() {
    const handleAutoPlayStart = ( swiper: Swiper.Swiper ) => {
        const autoplay = swiper.autoplay
        autoplay.pause()
        setTimeout(() => {
            autoplay.resume()
        }, 700);
    }

    return (
        <SwiperContainer
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            loop={true}
            coverflowEffect={{ scale: 0.6, rotate: 40, slideShadows: false }}
            autoplay={{ delay: 300, waitForTransition: true}}
            allowTouchMove={false}
            spaceBetween={30}
            slidesPerView={3}
            onAutoplayStart={handleAutoPlayStart}
            className="w-full max-w-60 h-20 rounded-md"
        >
            <div className="swiper-wrapper">
                {skills.map((skill) => (
                    <SwiperSlide
                        key={skill.id}
                        className="relative w-full aspect-square"
                    >
                        <Image
                            src={`/${skill.url}`}
                            priority
                            fill
                            sizes="(max-width: 768px) 100vh, 300px"
                            alt="Skill icon"
                        />
                    </SwiperSlide>
                ))}
            </div>
        </SwiperContainer>
    )
}
