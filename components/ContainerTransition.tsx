import { motion } from 'framer-motion'

type ContainerProps = {
    children: React.ReactNode
    className?: string
}

export default function ContainerTransition({ children, className }: ContainerProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.4, ease: 'easeIn' } }}
            className={className}
        >
            {children}
        </motion.div>
    )
}