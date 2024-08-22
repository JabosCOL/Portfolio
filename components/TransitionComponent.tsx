"use client"

import { fadeIn } from "@/utils/MotionTransitions"
import { motion } from "framer-motion"

type MotionTransitionProps = {
    children: React.ReactNode
    position: 'right' | 'bottom'
    className?: string
}

export default function MotionTransition({ children, position, className }: MotionTransitionProps) {
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