import React from 'react'
import { styles } from './CandidateData'

function CandidateCard({ imgSrc, imgAlt, name, nameLine2, department, year, party, partyShort, partyColor, tagline }) {
    return (
        <div
            className="bg-white p-2.5 sm:p-3 md:p-5 flex flex-col items-center text-center text-slate-900 shadow-xl border border-slate-100 transition-transform duration-300 hover:-translate-y-1.5 h-full rounded-[15px] sm:rounded-[30px] md:rounded-[32px]"
            style={{
                boxShadow: '0 10px 30px -5px rgba(0,0,0,0.08), 0 4px 12px -2px rgba(0,0,0,0.05)'
            }}
        >
            {/* Photo */}
            <div
                className="w-full aspect-[4/3] overflow-hidden bg-slate-100 mb-2 sm:mb-3 md:mb-5 relative rounded-[12px] sm:rounded-[20px] md:rounded-[22px]"
            >
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="w-full h-full object-cover object-top brightness-[0.98]"
                />
            </div>

            {/* Name */}
            <h3 className="text-[10px] sm:text-base md:text-2xl font-bold text-slate-950 leading-tight min-h-[26px] sm:min-h-[40px] md:min-h-[58px] flex flex-col justify-center items-center">
                <span>{name}</span>
                {nameLine2 && <span>{nameLine2}</span>}
            </h3>

            {/* Department & Year */}
            <p className="text-slate-700 text-[8px] sm:text-xs font-semibold mt-1 sm:mt-2 md:mt-2.5 max-w-[200px] leading-tight sm:leading-snug">
                {department}
            </p>
            <p className="text-slate-700 text-[8px] sm:text-xs font-semibold mt-0.5">{year}</p>

            {/* Party */}
            <div className="mt-1 sm:mt-2 md:mt-3">
                <p className="text-slate-800 text-[8px] sm:text-xs font-bold leading-tight">{party}</p>
                <div className="flex items-center justify-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
                    <span className="text-[8px] sm:text-xs font-extrabold text-slate-900 tracking-wider">
                        {partyShort}
                    </span>
                    <span
                        className="w-2 h-2 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 rounded-full inline-block shadow-sm flex-shrink-0"
                        style={{ backgroundColor: partyColor }}
                    />
                </div>
            </div>

            {/* Tagline */}
            <p className="text-slate-800 text-[7.5px] sm:text-xs italic font-medium my-1.5 sm:my-2 md:my-4 leading-tight">
                "{tagline}"
            </p>

            {/* CTA */}
            <a
                href="#"
                className="w-full py-1 sm:py-2 md:py-2.5 px-1 sm:px-3 md:px-4 bg-gradient-to-b from-[#2a2a2a] to-[#0a0a0a] hover:from-[#0865FF] hover:to-[#054bbd] text-white text-[8px] sm:text-xs font-semibold rounded-full text-center transition-colors duration-200 mt-auto shadow-sm tracking-tight sm:tracking-normal whitespace-nowrap"
            >
                View Candidate
            </a>
        </div>
    )
}

export default CandidateCard