"use client"

import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import CoverParticles from "@/components/CoverParticles"
import ContainerTransition from "@/components/ContainerTransition"
import SkillsDisplay from "@/components/SkillsDisplay"

export default function Home() {
	return (
		<main className="bg-no-repeat mh:pt-20 mh:pb-5">
			<div className="absolute top-0 left-0 w-full h-screen bg-gradientGreen mh:h-[calc(100vh+6.25rem)]" />
			<div className="container mx-auto px-5 pt-header pb-nav min-h-screen h-full flex justify-center items-center md:p-0 mh:p-0">
				<CoverParticles />
				<ContainerTransition
					className="z-20 grid justify-items-center h-full gap-5 md:grid-cols-2"
				>
					<div className="flex flex-col justify-center items-center gap-2 max-w-md">
						<div className="relative w-full max-w-40 aspect-[1/1] md:max-w-sm">
							<Image
								src="/profile-pic.png"
								priority
								fill
								sizes="(max-width: 768px) 100vh, 350px"
								alt="Profile pic"
								className="rounded-full border-4 border-white"
							/>
						</div>
						<SkillsDisplay />
					</div>

					<div className="flex flex-col justify-center gap-5 md:max-w-md">
						<h1
							className="text-2xl text-center leading-tight font-bold uppercase md:text-4xl md:text-left"
						>
							If you can think it
							<TypeAnimation
								sequence={[
									"you can program it",
									1000,
									"you can dream it",
									1000,
									"you can achieve it",
									1000
								]}
								wrapper="span"
								speed={50}
								repeat={Infinity}
								className="block font-bold capitalize text-secondary"
							/>
						</h1>

						<p className="text-xl text-slate-400 text-center md:text-left">
							As a web developer, my goal is to blend design and functionality to enhance the user experience.
						</p>

						<div className="flex items-center justify-center gap-5 md:justify-start">
							<Link
								href="/projects"
								className="px-3 py-2 transition-all border cursor-pointer text-md w-fit rounded-xl hover:shadow-lg hover:shadow-white/50"
							>
								See Projects
							</Link>
							<Link
								href="mailto: cesar.bolivarc@hotmail.com"
								className="px-3 py-2 transition-all border cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-lg hover:shadow-secondary/50"
							>
								Get In Touch
							</Link>
						</div>
					</div>
				</ContainerTransition>
			</div>
		</main>
	);
}