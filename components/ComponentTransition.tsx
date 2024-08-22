"use client"

import { fadeIn } from "@/utils/MotionTransitions"
import { motion } from "framer-motion"

type ComponentTransitionProps = {
    children : React.ReactNode
    position: 'right' | 'bottom'
    className?: string
}

export default function ComponentTransition({children, position, className} : ComponentTransitionProps) {
    return (
        <motion.div
            variants={fadeIn(position)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>
    )
}