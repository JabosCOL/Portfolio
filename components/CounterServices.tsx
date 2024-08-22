import { counter } from "@/data";
import CountUp from "react-countup";

export default function CounterServices() {
    return (
        <div className="flex justify-evenly mt-10">
            {counter.map(({ id, endCounter, text }) => (
                <div key={id}>
                    <div className='md:border-r-2 border-gray-100'>
                        <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                            {endCounter > 1 && "+"}
                            <CountUp end={endCounter} start={0} duration={5} />
                        </p>
                        <p className="text-xs uppercase max-w-[100px]">
                            {text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
