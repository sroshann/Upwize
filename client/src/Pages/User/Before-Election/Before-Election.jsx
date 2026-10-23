import React from 'react'
import backgroundImage from '../../../assets/Common/Shape Image.png'
import { chairpersonCandidates, styles, viceChairpersonCandidates } from './CandidateData'
import CandidateCard from './CandidateCard'


export default function BeforeElectionUser() {
    return (
        <section className="bg-gradient-to-b from-[#0865FF] to-white text-white min-h-screen flex flex-col antialiased relative">
            {/* ── Background Grid & Shape Image Overlay (matching Admin page) ── */}
            <div
                style={{
                    ...styles.bgGridPattern,
                    backgroundImage: `url(${backgroundImage}), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
                    backgroundSize: 'cover, 80px 80px, 80px 80px',
                    backgroundPosition: 'center, 0 0, 0 0',
                    backgroundRepeat: 'no-repeat, repeat, repeat',
                }}
                className="flex-grow w-full pb-28 relative z-10"
            >

                {/* ── Hero Section ── */}
                <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
                    {/* <!-- Desktop Layout (Split) --> */}
                    <div className="hidden md:flex w-full max-w-7xl mx-auto flex-col">
                        <h1 className="text-[120px] leading-none tracking-[-0.04em] font-bold uppercase text-left text-white w-full max-w-[1200px]">
                            YOUR VOICE, YOUR<br />
                            <span className="block text-right pr-20">LEADER</span>
                        </h1>
                        <div
                            className="w-full max-w-2xl text-left  mt-[-70px]">
                            <p className="md:w-[94%] text-xl leading-[30px] font-normal text-white">
                                Browse every candidate, learn about their manifesto, achievements,
                                and aspirations before casting your vote.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex md:hidden w-full flex-col text-center">
                        <h1 className="text-[55px] leading-[65px] tracking-[-0.02em] font-bold uppercase text-white mb-6">
                            YOUR VOICE<br />
                            YOUR LEADER
                        </h1>
                        <p className="text-[20px] leading-[30px] font-normal text-white">
                            Browse every candidate, learn about their manifesto, achievements,
                            and aspirations before casting your vote.
                        </p>
                    </div>
                </section>

                {/* ── Chairperson Section ── */}
                <section className="max-w-6xl mx-auto pt-6 sm:pt-10 pb-10 sm:pb-16 px-2 sm:px-6">
                    <h2 className="text-center text-3xl sm:text-5xl font-extrabold tracking-normal text-white uppercase mb-6 sm:mb-12 drop-shadow-sm">
                        CHAIRPERSON
                    </h2>
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-4 md:gap-8">
                        {chairpersonCandidates.map((candidate, idx) => (
                            <CandidateCard key={idx} {...candidate} />
                        ))}
                    </div>
                </section>

                {/* ── Vice Chairperson Section ── */}
                <section className="max-w-6xl mx-auto pt-4 sm:pt-6 pb-8 px-2 sm:px-6">
                    <h2 className="text-center text-3xl sm:text-5xl font-extrabold tracking-normal text-white uppercase mb-6 sm:mb-12 drop-shadow-sm">
                        VICE CHAIRPERSON
                    </h2>
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-4 md:gap-8">
                        {viceChairpersonCandidates.map((candidate, idx) => (
                            <CandidateCard key={idx} {...candidate} />
                        ))}
                    </div>
                </section>

            </div>
        </section>
    )
}