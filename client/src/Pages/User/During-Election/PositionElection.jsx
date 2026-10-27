import { useParams, useNavigate } from 'react-router-dom'
import backgroundImage from '../../../assets/Common/Shape Image.png'
import { votingPositions } from './votingData'

import {
  chairpersonCandidates,
  viceChairpersonCandidates,
} from '../Before-Election/CandidateData'

function PositionElection() {
  const { positionId } = useParams()
  const navigate = useNavigate()

  const position = votingPositions.find(
    (item) => item.id === positionId
  )

  const candidatesByPosition = {
    chairperson: chairpersonCandidates,
    'vice-chairperson': viceChairpersonCandidates,
  }

  const candidates = candidatesByPosition[positionId] ?? []

  if (!position) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-6">
        <p className="text-center text-lg font-semibold">
          Position not found.
        </p>
      </main>
    )
  }

  const title = position.title.toUpperCase()
  const subtitle = `Cast Your Vote for the next ${position.title}`

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#0865f9] via-[#76a9fa] to-white">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px),
            url(${backgroundImage})
          `,
          backgroundSize: `
            clamp(54px, 9.8vw, 105px) clamp(54px, 9.8vw, 105px),
            clamp(54px, 9.8vw, 105px) clamp(54px, 9.8vw, 105px),
            cover
          `,
          backgroundPosition: 'top left, top left, center',
          backgroundRepeat: 'repeat, repeat, no-repeat',
        }}
      />

      <section className="relative mx-auto w-full max-w-[1600px] px-[clamp(20px,5.55vw,64px)] pb-[clamp(70px,10vw,120px)] pt-[clamp(38px,5.3vw,65px)]">
        {/* Position heading */}
        <header className="mb-[clamp(28px,4.5vw,53px)] text-center">
          <h1 className="break-words text-[clamp(2rem,9.5vw,8.25rem)] font-bold leading-[0.96] tracking-[-0.055em] text-white">
            {title}
          </h1>

          <p className="mt-[clamp(8px,1vw,13px)] text-[clamp(0.8rem,2.65vw,1.7rem)] font-medium leading-tight tracking-[-0.04em] text-white">
            {subtitle}
          </p>
        </header>

        {/* Candidate cards */}
        {candidates.length === 0 ? (
          <p className="py-8 text-center text-sm font-medium text-white">
            No candidates are available for this position yet.
          </p>
        ) : (
          <div className="flex flex-wrap items-stretch justify-center gap-[clamp(14px,2.5vw,30px)]">
            {candidates.map((candidate, index) => (
              <article
                key={`${candidate.name}-${candidate.partyShort}-${index}`}
                className="relative flex w-full min-w-0 flex-[1_1_100%] items-center gap-[clamp(12px,3vw,30px)] rounded-[clamp(17px,1.8vw,24px)] bg-[#f8f8f8] p-[clamp(14px,2.2vw,32px)] sm:flex-[1_1_420px] md:max-w-[calc(50%-15px)]"
              >
                {/* Candidate image */}
                <img
                  src={candidate.imgSrc}
                  alt={candidate.imgAlt}
                  className="aspect-square w-[clamp(100px,15vw,190px)] shrink-0 rounded-[clamp(14px,2vw,22px)] object-cover"
                />

                {/* Candidate details */}
                <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                  <h2 className="w-full break-words text-[clamp(1rem,2.5vw,1.8rem)] font-semibold leading-tight tracking-[-0.04em] text-black">
                    {candidate.name}
                    {candidate.nameLine2
                      ? ` ${candidate.nameLine2}`
                      : ''}
                  </h2>

                  <button
                    type="button"
                    onClick={() => navigate('/user/before-election')}
                    className="mt-2 text-[clamp(0.65rem,1vw,0.85rem)] text-[#36a3e6] hover:underline"
                  >
                    View Candidate Details
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      console.log('Selected candidate:', candidate)
                    }
                    className="mt-3 w-full rounded-full bg-gradient-to-b from-[#414141] to-[#101010] px-4 py-[clamp(8px,1vw,12px)] text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    VOTE
                  </button>
                </div>

                {/* Squircle arrow button */}
                <button
                  type="button"
                  aria-label={`View ${candidate.name} details`}
                  onClick={() => navigate('/user/before-election')}
                  className="absolute right-[clamp(6px,0.8vw,12px)] top-[clamp(6px,0.8vw,12px)] flex size-[clamp(25px,2.5vw,34px)] items-center justify-center rounded-[clamp(8px,1.1vw,12px)] bg-gradient-to-b from-[#70adff] to-[#347df5] text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:from-[#8bbcff] hover:to-[#1765ed] hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  <span className="flex items-center justify-center text-[clamp(1.1rem,1.5vw,1.4rem)] leading-none">
                    ↗
                  </span>
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default PositionElection
