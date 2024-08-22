"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import React from "react"


export default function Transition() {
    const pathname = usePathname()
    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <motion.div
                    className="fixed top-0 left-0 w-screen h-screen z-50 bg-black origin-left"
                    initial={{ scaleX: 1 }}
                    animate={{ scaleX: 0 , transition: { duration: 0.8, ease: 'easeInOut' } }}
                />
            </div>
        </AnimatePresence>
    )
}
