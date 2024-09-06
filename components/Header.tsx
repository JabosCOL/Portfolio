"use client"

import Link from "next/link";
import { iconsHeader } from "@/data";
import MotionTransition from "./TransitionComponent";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname()
    return (
        <MotionTransition
            position="bottom"
            key={pathname}
            className="z-20 absolute top-10 w-full px-5"
        >
            <header>
                <div className="container mx-auto md:flex md:justify-between">
                    <Link href="/">
                        <h1 className="text-4xl uppercase font-bold text-center md:text-left">
                            David <span className="text-secondary">Bolivar</span>
                        </h1>
                    </Link>
                    <div className="mt-5 md:mt-0 flex items-center justify-center gap-5">
                        {iconsHeader.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                rel="noopener noreferrer"
                                locale={false}
                                download
                                className={`transition-colors duration-300 hover:text-secondary ${id === 2 && "flex gap-2 items-center px-3 py-2 border rounded-xl hover:border-secondary"}`}
                            >
                                {logo}
                                {id === 2 && "Download CV"}
                            </Link>
                        ))}
                    </div>
                </div>
            </header >
        </MotionTransition>
    )
}