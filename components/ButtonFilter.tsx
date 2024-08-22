import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

type ButtonFilterProps = {
    filter: number
    setFilter: Dispatch<SetStateAction<number>>
    icon: string
    className?: string
}

export default function ButtonFilter({ filter, setFilter, icon, className }: ButtonFilterProps) {
    return (
        <button
            className={`relative w-full max-w-12 aspect-[1/1] p-2 rounded-full hover:bg-secondary  transition duration-300 ${className}`}
            onClick={() => setFilter(filter)}
        >
            <Image
                src={icon}
                priority
                fill
                sizes="(max-width: 768px) 100vh, 250px"
                alt="React button"
            />
        </button>
    )
}
