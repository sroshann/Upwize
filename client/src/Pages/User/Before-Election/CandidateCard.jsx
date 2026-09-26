import React from 'react'
import { styles } from './CandidateData'

function CandidateCard({ imgSrc, imgAlt, name, nameLine2, department, year, party, partyShort, partyColor, tagline }) {
    return (
        <div
            style={styles.candidateCard}
            className="bg-white p-5 flex flex-col items-center text-center text-slate-900 shadow-xl border border-slate-100 transition-transform duration-300 hover:-translate-y-1.5"
        >
            {/* Photo */}
            <div
                style={styles.candidateImgBox}
                className="w-full aspect-[4/3] overflow-hidden bg-slate-100 mb-5 relative"
            >
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="w-full h-full object-cover object-top brightness-[0.98]"
                />
            </div>

            {/* Name */}
            <h3 className="text-2xl font-bold text-slate-950 leading-tight min-h-[58px] flex items-center justify-center">
                {name}
                {nameLine2 && (
                    <>
                        <br />
                        {nameLine2}
                    </>
                )}
            </h3>

            {/* Department & Year */}
            <p className="text-slate-700 text-xs font-semibold mt-2.5 max-w-[200px] leading-snug">
                {department}
            </p>
            <p className="text-slate-700 text-xs font-semibold mt-0.5">{year}</p>

            {/* Party */}
            <div className="mt-3">
                <p className="text-slate-800 text-xs font-bold">{party}</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="text-xs font-extrabold text-slate-900 tracking-wider">
                        {partyShort}
                    </span>
                    <span
                        className="w-3.5 h-3.5 rounded-full inline-block shadow-sm"
                        style={{ backgroundColor: partyColor }}
                    />
                </div>
            </div>

            {/* Tagline */}
            <p className="text-slate-800 text-xs italic font-medium my-4">
                "{tagline}"
            </p>

            {/* CTA */}
            <a
                href="#"
                className="w-full py-2.5 px-4 bg-[#0a0a0a] hover:bg-[#0865FF] text-white text-xs font-semibold rounded-full text-center transition-colors duration-200 mt-auto shadow-sm"
            >
                View Candidate
            </a>
        </div>
    )
}


export default CandidateCard