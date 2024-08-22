"use client"

import Image from "next/image";
import MotionTransition from "./TransitionComponent";

type MotionImgProps = {
    url: string
    className: string
}

export default function MotionImg({ url, className }: MotionImgProps) {
    return (
        <MotionTransition position="bottom" className={`w-full md:max-w-32 xl:max-w-60 aspect-square ${className}`}>
            <Image
                src={`/${url}`}
                fill
                sizes="(max-width: 768px) 100vh, 512px"
                alt="trajectory image"
            />
        </MotionTransition>
    )
}
