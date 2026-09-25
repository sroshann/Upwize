import React from 'react'
import backgroundImage from '../../../assets/Common/Shape Image.png'

/* ─────────────────────────────────────────────
   Inline styles matching Admin page theme
───────────────────────────────────────────── */
const styles = {
  bgGridPattern: {
    backgroundImage: `
      linear-gradient(to right,  rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
    backgroundSize: '80px 80px',
  },
  candidateCard: {
    borderRadius: '32px',
    boxShadow:
      '0 10px 30px -5px rgba(0,0,0,0.08), 0 4px 12px -2px rgba(0,0,0,0.05)',
  },
  candidateImgBox: {
    borderRadius: '22px',
  },
}

/* ─────────────────────────────────────────────
   Re-usable candidate card
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   Candidate data matching Admin palette
───────────────────────────────────────────── */
const chairpersonCandidates = [
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIMXpmgz-73IpGTZn5rlFsPz2WpV52U2QgsXsnbvZw6mhaH-hdhwh0kxc9o-Ri6FfCBJ7pMUlQklpAuOzPAinWUeioYvpyUh9H0iZjzmzdufNNkEZIIxBBaRW_I7AuXfeQrXrLuaqHWF6Z3WV60WarltqAMu4fRPvN3oc5-RIgftQ3zqpz_qgjHAq0aFTNdHhN2kcxpqjRYy7R4o1CZkT2uzXsIKGLy8Ls0Ib-DRp81qnsN5SdJZab',
    imgAlt: 'Abdulla Anoob Khan',
    name: 'Abdulla Anoob',
    nameLine2: 'Khan',
    department: 'Electronics and Communication Engineering',
    year: '3rd Year',
    party: 'Kerala Students Union',
    partyShort: 'KSU',
    partyColor: '#0865FF',
    tagline: 'A promise to serve',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA6qtrAXmv9QMPO-hrJ77S07Y6Fl4tAxnUyLO1nPYvPNu4SSZp3nBUSF_VX3sjGC4gd7ermB3UfvmscngHI6ajrh9jFfac28LNIhVFDzKoWQrdHYYwKW__ZB05lRP3pCUBohy8WJtnKHoac_9cs62XRgm2gvAHcuFayxBbUeWerw1dIx61NxU3vXQbEQjhJ_FYkvVj4MqfZffjlFRfwVk662iFZrrrvnGJApLtfg5AZI8ynh5vQU6eV',
    imgAlt: 'Swaroop Chandran',
    name: 'Swaroop Chandran',
    nameLine2: null,
    department: 'Chemical Engineering',
    year: '3rd Year',
    party: 'Student Federation of India',
    partyShort: 'SFI',
    partyColor: '#EF4444',
    tagline: 'A promise to serve',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCFZO9qpeLPBSC5DshVWT3Of5Dp56mOfLl50-r4SRNqShmHRTHw65d4xU6NU28Zc_mOGmRvtyuZHSNnvnDRrklm3S0oIv4pXB2rO-18BaW9trQHa0qcOjOStoWAGCG1owbVWrbQVMTbJN5Bwgbg-2meu3TkpjxGTncfuDkAl9Oz6h3w-oJrtwqHCiTwnyCScN8JIFMRr1RvMWs0tOWkWxe0kpLuVqn410wkh0I-ht_00qiYyDd3KnVL',
    imgAlt: 'Swaroop Chandran',
    name: 'Swaroop Chandran',
    nameLine2: null,
    department: 'Electronics and Communication Engineering',
    year: '3rd Year',
    party: 'Akhil Bharathiya Vidyarthi Parishad',
    partyShort: 'ABVP',
    partyColor: '#FF6B2B',
    tagline: 'A promise to serve',
  },
]

const viceChairpersonCandidates = [
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDmSwk2CPb4AQWokZKA5rUooixRiSuBnomuztEjOLIu3fQxZI-99TSoj2SYkdUUFR_s41obvCmI4lhYDHRcrRmiT7rGX-WxZ25VIDzCflM9d7fAA6rvMyiotNUCCw5rUxB1aWC42ditij8RTgCjTaNuG2sRl9_8o_RuParAXFQBh5AiC3llvZc_9dOomuILTvR5FLJLfOSqj7DASPFMVSPOzJ2ZgQJbXIe9j_K_gItwn-IsY1hU7jl5',
    imgAlt: 'Abdulla Anoob Khan',
    name: 'Abdulla Anoob',
    nameLine2: 'Khan',
    department: 'Electronics and Communication Engineering',
    year: '3rd Year',
    party: 'Kerala Students Union',
    partyShort: 'KSU',
    partyColor: '#0865FF',
    tagline: 'A promise to serve',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDYStJulTkcAN17D82OQB56LBD8fkufsa4OCAuw6JdhBq2aIYJUGpxSX0wMqQObs2nX5Rnx0ir09W4ysH8C7CSBNEzTxDgS4f1Qn9zNJJKdteWMAofztcoRhtvT5e2_Kl9UOU-uxZoMSg_x3sKY5YAMG_43MeOEzi--B5xus1D57Y3n_1b4_kIZHfmLeOi9L6iqbPUAIz6Cd9nzyrPy-8APARh1z76nT8T7UFeZxaPzL8LMm7i5E2Rv',
    imgAlt: 'Swaroop Chandran',
    name: 'Swaroop Chandran',
    nameLine2: null,
    department: 'Chemical Engineering',
    year: '3rd Year',
    party: 'Student Federation of India',
    partyShort: 'SFI',
    partyColor: '#EF4444',
    tagline: 'A promise to serve',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4GWEt3EjyrCEMGzS75Lu3H5ueO7WA1EhC4yot-YmRGmgX3NfGH0Y2MWVc450ZxdsdUP-ejyTwSqKRY7s7uEGnGVaukp2JJdiVfOi9lVh3TzS-N5nX07tSgVuyAq4_pcWzyC51k60Kv4NJ-tIEdJ7DqZNjcwnn4ASFvjKmdS4uRchNyUrEWOc-CjC_gQs988gnk4DQzT_jgWgBui9S-oYIXibIwAQ-97OtljA-r_5Vbcowvh_NTqik',
    imgAlt: 'Swaroop Chandran',
    name: 'Swaroop Chandran',
    nameLine2: null,
    department: 'Electronics and Communication Engineering',
    year: '3rd Year',
    party: 'Akhil Bharathiya Vidyarthi Parishad',
    partyShort: 'ABVP',
    partyColor: '#FF6B2B',
    tagline: 'A promise to serve',
  },
]

/* ─────────────────────────────────────────────
   Page component
───────────────────────────────────────────── */
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