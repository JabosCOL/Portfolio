"use client"

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "@/data";
import ContainerTransition from "@/components/ContainerTransition";
import ProjectDisplay from "@/components/ProjectDisplay";
import ButtonFilter from "@/components/ButtonFilter";

export default function Projects() {
    const [filter, setFilter] = useState(1)
    const filteredProjects = useMemo(() => projects.filter(({category}) => category === filter), [filter])

    return (
        <ContainerTransition className="px-5 mh:py-5 overflow-hidden">
            <section className="container mx-auto pt-header pb-nav min-h-screen flex flex-col justify-center md:p-0 md:items-center overflow-hidden">
                <div className="flex justify-center items-center gap-5 w-full mt-5">
                    <ButtonFilter
                        filter={1}
                        setFilter={setFilter}
                        icon="/button-react.svg"
                        className={filter === 1 ? "bg-secondary" : "bg-white/5"}
                    />
                    <ButtonFilter
                        filter={2}
                        setFilter={setFilter}
                        icon="/button-css.svg"
                        className={filter === 2 ? "bg-secondary" : "bg-white/5"}
                    />
                </div>
                <AnimatePresence mode="wait">
                    <ProjectDisplay key={filter} filteredProjects={filteredProjects} />
                </AnimatePresence>
            </section>
        </ContainerTransition>
    )
}
