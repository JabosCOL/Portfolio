"use client"

import ContainerTransition from "@/components/ContainerTransition";
import CounterServices from "@/components/CounterServices";
import MotionImg from "@/components/MotionImg";
import TimeLine from "@/components/TimeLine";

export default function AboutMe() {
    return (
        <ContainerTransition>
            <main className="container mx-auto pt-[190px] px-5 md:pt-[130px]">
                <h1 className="text-3xl leading-tight text-center font-bold uppercase md:text-4xl">
                    My{' '}
                    <span className="font-bold text-secondary">
                        Journey
                    </span>
                </h1>
                <CounterServices />
                <TimeLine />
                <MotionImg
                    url="about-me.png"
                    className="fixed bottom-0 right-0 z-0 hidden md:block"
                />
                <MotionImg
                    url="about-me-2.png"
                    className="fixed bottom-0 left-0 z-0 hidden md:block"
                />
            </main>
        </ContainerTransition>
    )
}
