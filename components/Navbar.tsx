"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { itemsNavbar } from '@/data'
import MotionTransition from './TransitionComponent'

export default function Navbar() {
    const router = usePathname()

    return (
        <MotionTransition
            position='right'
            key={router}
            className='z-20 flex justify-center w-full fixed bottom-10'
        >
            <nav>
                <div className='flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm'>
                    {itemsNavbar.map(item => (
                        <div
                            key={item.id}
                            className={`px-3 py-2 transition-colors duration-150 rounded-full cursor-pointer hover:bg-secondary ${router === item.link && 'bg-secondary'}`}
                        >
                            <Link href={item.link}>{item.icon}</Link>
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    )
}
