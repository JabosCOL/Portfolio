import { timeLime } from "@/data";

export default function TimeLine() {
    return (
        <div className="flex flex-col justify-center mt-10 md:mt-20 ">
            <div className="w-full max-w-3xl mx-auto mb-32">
                <div className="-my-6">
                    {timeLime.map(({id, title, date, subtitle, description}) => (
                        <div key={id} className="relative py-6 pl-8 sm:pl-32 group z-10">
                            <h3 className="mb-1 text-2xl font-bold uppercase sm:mb-0">{title}</h3>
                            <div
                                className="flex flex-col sm:flex-row items-start mb-1
                                    group-last:before:hidden before:absolute
                                    before:left-1 sm:before:left-0 before:h-[22rem] md:before:h-full
                                    before:px-px before:bg-slate-400 sm:before:ml-[6.5rem]
                                    before:self-start before:-translate-x-1/2 md:before:-translate-x-1.5
                                    before:translate-y-5 md:before:translate-y-3 after:absolute after:left-2
                                    sm:after:left-0 after:w-2 after:h-2 after:bg-primary
                                    after:border-4 after:box-content after:border-slate-50
                                    after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-3
                                    after:translate-y-4 md:after:translate-y-0"
                            >
                                <time
                                    className="sm:absolute left-0 translate-y-1 md:-translate-y-3 inline-flex items-center justify-center font-semibold uppercase w-20 h-9 py-5 px-2 mb-3 sm:mb-0 text-xs text-center text-secondary border border-secondary rounded-full"
                                >
                                    {date}
                                </time>
                                <div className="text-xl text-secondary font-bold">{subtitle}</div>
                            </div>
                            <div className="text-slate-400">{description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
