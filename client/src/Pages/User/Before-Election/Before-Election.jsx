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
                    <div className="flex flex-col">
                        <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight text-white leading-none uppercase">
                            YOUR VOICE, YOUR
                        </h1>
                        <div className="flex flex-col md:flex-row md:items-end justify-between mt-3 gap-6">
                            <p className="text-white/95 text-lg sm:text-xl max-w-lg font-normal leading-snug">
                                Browse every candidate, learn about their manifesto, achievements,
                                and aspirations before casting your vote.
                            </p>
                            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight text-white leading-none uppercase text-right md:text-right">
                                LEADER
                            </h1>
                        </div>
                    </div>
                </section>

                {/* ── Chairperson Section ── */}
                <section className="max-w-6xl mx-auto px-6 pt-10 pb-16">
                    <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-normal text-white uppercase mb-12 drop-shadow-sm">
                        CHAIRPERSON
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {chairpersonCandidates.map((candidate, idx) => (
                            <CandidateCard key={idx} {...candidate} />
                        ))}
                    </div>
                </section>

                {/* ── Vice Chairperson Section ── */}
                <section className="max-w-6xl mx-auto px-6 pt-6 pb-8">
                    <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-normal text-white uppercase mb-12 drop-shadow-sm">
                        VICE CHAIRPERSON
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {viceChairpersonCandidates.map((candidate, idx) => (
                            <CandidateCard key={idx} {...candidate} />
                        ))}
                    </div>
                </section>

            </div>
        </section>
    )
}