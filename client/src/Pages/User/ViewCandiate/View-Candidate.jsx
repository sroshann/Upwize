import React from 'react'
import backgroundImage from '../../../assets/Common/Shape Image.png'
import candidate from './BasicDetails'

export default function ViewCandidate() {
    return (
        <section
            className="text-black min-h-screen flex flex-col antialiased relative"
            style={{ background: 'linear-gradient(to bottom, #0865FF 40%, #5b9bff 90%, #ffffff 100%)' }}
        >
            {/* ── Shape Image + Grid overlay ── */}
            <div
                className="flex-grow w-full relative z-10"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* ── Profile Section ── */}
                <div className="max-w-3xl sm:max-w-none mx-auto px-5 sm:px-10 md:px-14 lg:px-24 xl:px-48 pt-10 sm:pt-14 pb-10 sm:pb-14 sm:pr-0">

                    {/* ── MOBILE: vertical card ── */}
                    <div className="flex flex-col items-center sm:hidden">

                        {/* Position — top */}
                        <p className="
                            text-[30px] font-black tracking-[0em]
                            uppercase text-white text-center
                            m-0 mb-5
                        ">
                            {candidate.position}
                        </p>

                        {/* Photo card — centered */}
                        <div className="
                            bg-white overflow-hidden
                            rounded-[22px] w-[250px] h-[350px]
                            p-[7px]
                            shadow-[0_8px_32px_rgba(0,0,0,0.22)]
                            mb-5
                        ">
                            <img
                                src={candidate.imgSrc}
                                alt={`${candidate.firstName} ${candidate.lastName}`}
                                className="w-full h-full object-cover object-top rounded-[16px] block"
                            />
                        </div>

                        {/* Full name — below photo */}
                        <h1 className="
                            text-[28px] font-black leading-[1.0]
                            tracking-[-0.5px] uppercase text-white
                            text-center m-0 mb-[6px]
                        ">
                            {candidate.firstName} {candidate.lastName}
                        </h1>

                        {/* Details — centered below name */}
                        <div className="flex flex-col items-center gap-[3px] mt-[6px]">
                            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-white m-0 text-center leading-[1.4]">
                                {candidate.department}
                            </p>
                            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-white m-0 text-center">
                                {candidate.semBatch}
                            </p>
                            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-white m-0 text-center">
                                <span className="font-black">AGE : </span>{candidate.age}
                            </p>
                            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-white m-0 mb-[4px] text-center leading-[1.4]">
                                {candidate.party}
                            </p>
                            <p className="text-[12px] font-bold text-white/[0.88] m-0 tracking-[0.01em] text-center">
                                {candidate.email}
                            </p>
                            <p className="text-[12px] font-bold text-white/[0.88] m-0 tracking-[0.01em] text-center">
                                {candidate.phone}
                            </p>
                        </div>
                    </div>

                    {/* ── DESKTOP: horizontal row ── */}
                    <div className="hidden sm:flex flex-row items-start gap-10 md:gap-10 lg:gap-16 w-full">

                        {/* Photo card */}
                        <div className="flex-shrink-0">
                            <div className="
                                bg-white overflow-hidden
                                rounded-[22px] sm:rounded-[28px]
                                w-[200px] sm:w-[260px] md:w-[350px]
                                h-[260px] sm:h-[340px] md:h-[500px]
                                p-[8px] sm:p-[10px]
                                shadow-[0_12px_48px_rgba(0,0,0,0.22)]
                            ">
                                <img
                                    src={candidate.imgSrc}
                                    alt={`${candidate.firstName} ${candidate.lastName}`}
                                    className="w-full h-full object-cover object-top rounded-[20px] block"
                                />
                            </div>
                        </div>

                        {/* Candidate details */}
                        <div className="flex flex-col text-white flex-1 gap-[4px] pt-[8px]">

                            {/* First name */}
                            <h1 className="text-[clamp(32px,5vw,96px)] font-black leading-[0.95] tracking-[-1px] uppercase text-white m-0">
                                {candidate.firstName}
                            </h1>

                            {/* Last name */}
                            <h1 className="text-[clamp(32px,5vw,96px)] font-black leading-[0.95] tracking-[-1px] uppercase text-white m-0 mb-[12px]">
                                {candidate.lastName}
                            </h1>

                            {/* Position */}
                            <p className="text-[16px] sm:text-[22px] md:text-[30px] font-black tracking-[0.14em] md:tracking-[0.18em] uppercase text-white m-0 mb-[16px]">
                                {candidate.position}
                            </p>

                            {/* Details */}
                            <div className="flex flex-col gap-[4px] md:gap-[6px]">
                                <p className="text-[11px] sm:text-[14px] md:text-[18px] font-bold uppercase tracking-[0.07em] text-white m-0 leading-[1.4]">
                                    {candidate.department}
                                </p>
                                <p className="text-[11px] sm:text-[14px] md:text-[18px] font-bold uppercase tracking-[0.07em] text-white m-0">
                                    {candidate.semBatch}
                                </p>
                                <p className="text-[11px] sm:text-[14px] md:text-[18px] font-bold uppercase tracking-[0.07em] text-white m-0">
                                    <span className="font-black">AGE : </span>{candidate.age}
                                </p>
                                <p className="text-[11px] sm:text-[14px] md:text-[18px] font-bold uppercase tracking-[0.07em] text-white m-0 mb-[8px] md:mb-[10px] leading-[1.4]">
                                    {candidate.party}
                                </p>
                                <p className="text-[11px] sm:text-[14px] md:text-[18px] font-bold text-white/[0.88] m-0 tracking-[0.01em]">
                                    {candidate.email}
                                </p>
                                <p className="text-[11px] sm:text-[14px] md:text-[18px] font-bold text-white/[0.88] m-0 tracking-[0.01em]">
                                    {candidate.phone}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Tagline + About ── */}
                <div className="max-w-3xl md:max-w-none mx-auto px-5 md:px-10 lg:px-18 xl:px-32 pt-[4px] md:pt-[8px] pb-8 md:pb-12">
                    <h2 className="
                        text-[22px] sm:text-[26px] md:text-[32px]
                        font-bold italic
                        text-white/[0.88] m-0
                        mb-[10px] sm:mb-[14px]
                        leading-[1.3]
                        text-center sm:text-left
                    ">
                        {candidate.tagline}
                    </h2>
                    <p className="
                        text-[13px] sm:text-[15px] md:text-[18px]
                        font-normal text-white/[0.88]
                        leading-[1.65] sm:leading-[1.7]
                        m-0
                        text-center sm:text-left
                        sm:w-full
                    ">
                        {candidate.about}
                    </p>
                </div>

                {/* ── Clubs and Responsibilities ── */}
                <div className="max-w-3xl sm:max-w-none mx-auto px-5 sm:px-10 md:px-14 lg:px-24 xl:px-32 pt-[28px] sm:pt-[32px] pb-20 sm:pb-24">

                    {/* Section heading */}
                    <h2 className="
                        text-[22px] sm:text-[clamp(28px,4vw,52px)]
                        font-black uppercase
                        text-white/[0.88] m-0
                        mb-[18px] sm:mb-[24px]
                        tracking-[0.01em] leading-[1.1]
                        text-center sm:text-left
                    ">
                        CLUBS AND RESPONSIBILITIES
                    </h2>

                    {/* Table */}
                    <div className="
                        border border-[#e0e0e0] sm:border-[#d8d8d8]
                        rounded-[16px] sm:rounded-[20px]
                        overflow-hidden
                        shadow-[0_2px_10px_rgba(0,0,0,0.06)] sm:shadow-[0_4px_20px_rgba(0,0,0,0.07)]
                        bg-white
                    ">
                        {/* Header */}
                        <div className="grid grid-cols-2 bg-[#f8f8f8] sm:bg-[#f5f5f5] border-b border-[#e0e0e0] sm:border-[#d8d8d8]">
                            <div className="
                                py-[14px] sm:py-[20px]
                                px-[24px] sm:px-[40px]
                                text-center
                                text-[11px] sm:text-[14px]
                                font-[800] uppercase
                                tracking-[0.12em] sm:tracking-[0.14em]
                                text-black
                                border-r border-[#e0e0e0] sm:border-[#d8d8d8]
                            ">
                                CLUB NAME
                            </div>
                            <div className="
                                py-[14px] sm:py-[20px]
                                px-[24px] sm:px-[40px]
                                text-center
                                text-[11px] sm:text-[14px]
                                font-[800] uppercase
                                tracking-[0.12em] sm:tracking-[0.14em]
                                text-black
                            ">
                                ROLE
                            </div>
                        </div>

                        {/* Rows */}
                        {candidate.clubs.map((club, idx) => (
                            <div
                                key={idx}
                                className={`grid grid-cols-2 bg-white transition-colors duration-[150ms]${idx < candidate.clubs.length - 1 ? ' border-b border-[#f0f0f0] sm:border-[#eeeeee]' : ''}`}
                                onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                                onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
                            >
                                {/* Club name cell */}
                                <div className="
                                    py-[16px] sm:py-[22px]
                                    px-[20px] sm:px-[40px]
                                    text-center
                                    border-r border-[#f0f0f0] sm:border-[#eeeeee]
                                    flex flex-col items-center justify-center
                                    gap-[2px] sm:gap-[4px]
                                ">
                                    <p className="text-[11px] sm:text-[14px] font-bold text-black m-0 leading-[1.3]">
                                        {club.name}
                                    </p>
                                    <p className="text-[9.5px] sm:text-[12px] font-normal text-[#555555] m-0 leading-[1.4] max-w-[180px]">
                                        {club.fullName}
                                    </p>
                                </div>

                                {/* Role cell */}
                                <div className="py-[16px] sm:py-[22px] px-[20px] sm:px-[40px] flex items-center justify-center">
                                    <span className="
                                        text-[11px] sm:text-[14px]
                                        font-semibold sm:font-bold
                                        text-black uppercase
                                        tracking-[0.1em] sm:tracking-[0.12em]
                                    ">
                                        {club.role}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
