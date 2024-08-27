import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Eye } from "lucide-react";
import Swiper from "swiper/types";
import { Project } from "@/types";
import "swiper/css";
import "swiper/css/pagination";

type ProjectDisplayProps = {
    filteredProjects: Project[]
}

export default function ProjectDisplay({ filteredProjects }: ProjectDisplayProps) {
    const [project, setProject] = useState<Project>(filteredProjects[0])

    const handleSlideChange = (swiper: Swiper.Swiper) => {
        const currentIndex = swiper.realIndex;
        setProject(filteredProjects[currentIndex])
    }

    return (
        <motion.div
            initial={{ translateX: -1500 }}
            animate={{ translateX: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
            exit={{ translateX: 1500, transition: { duration: 0.4, ease: 'easeInOut' } }}
        >
            <div className="flex flex-col justify-center gap-5 mt-5 md:grid md:grid-cols-2 md:max-w-5xl">
                <SwiperContainer
                    modules={[EffectCoverflow, Autoplay, Pagination]}
                    effect="coverflow"
                    autoplay={{ pauseOnMouseEnter: true, delay: 15000 }}
                    loop={true}
                    pagination={{ dynamicBullets: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={handleSlideChange}
                    className="w-full max-w-sm md:max-w-md rounded-md"
                >
                    <div className="swiper-wrapper">
                        {filteredProjects.map(({ id, image }) => (
                            <SwiperSlide
                                key={id}
                                className="relative w-full aspect-video md:aspect-square"
                            >
                                <Image
                                    src={image}
                                    priority
                                    fill
                                    sizes="(max-width: 768px) 100vh, 900px"
                                    alt="Project image"
                                />
                            </SwiperSlide>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                </SwiperContainer>
                <div className="flex flex-col gap-2 justify-center md:order-[-1]">
                    <div>
                        <h2 className="text-5xl md:text-8xl leading-none font-extrabold text-primary text-outline">
                            0{filteredProjects.indexOf(project) + 1}
                        </h2>
                    </div>
                    <h2 className="text-3xl font-bold leading-none capitalize md:text-5xl">
                        {project.title}
                    </h2>
                    <ul className="list-disc">
                    {project.description.map(description => (
                        <li
                            key={description}
                            className="text-slate-400 list-inside"
                        >{description}</li>
                    ))}
                    </ul>
                    <ul className="flex gap-5">
                        {project.stack.map((tech) => (
                            <li key={project.id} className="text-xl font-bold text-secondary">{tech}</li>
                        ))}
                    </ul>
                    <div className="border border-slate-400"></div>
                    <div className="flex items-center gap-5">
                        <Link href={project.urlGithub} target="_blank">
                            <Image
                                src="/github.svg"
                                alt="Github icon"
                                width={50}
                                height={50}
                                className="bg-white/5 p-2 rounded-full hover:bg-secondary transition-colors duration-300"
                            />
                        </Link>
                        <Link href={project.urlDemo} target="_blank">
                            <Eye
                                width={50}
                                height={50}
                                className="bg-white/5 p-2 rounded-full hover:bg-secondary transition-colors duration-300"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
