import { useMemo } from 'react'
import { votingPositions } from './votingData'

function DuringElection() {
  const positions = useMemo(() => votingPositions, [])

  const handleVote = (position) => {
    console.log('Selected position:', position)
    // Future: navigate to candidate selection or open a modal
  }

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(8,101,255,0.28),_transparent_35%),linear-gradient(to_bottom,#0865ff_0%,#dbe8ff_45%,#f8fbff_100%)] text-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="relative overflow-hidden rounded-[2rem] bg-white/85 border border-slate-200 shadow-[0_28px_80px_rgba(8,101,255,0.12)] backdrop-blur-sm">
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0865ff] to-transparent opacity-90" />
          <div className="relative px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <p className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-semibold tracking-wide text-[#0865ff] shadow-sm ring-1 ring-[#0865ff]/10">
                Election voting is open
              </p>
              <h1 className="mt-6 text-5xl sm:text-6xl font-black tracking-[-0.04em] text-slate-950">
                VOTE NOW
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-8 text-slate-600">
                Choose your Voice, Shape your campus.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {positions.map((position) => (
                <article
                  key={position.id}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)]"
                  title=""
                >
                  <div className="flex h-full flex-col justify-between gap-8 text-center">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-950">
                        {position.title}
                      </h2>
                      <p className="mt-4 text-sm leading-6 text-slate-600">
                        {position.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleVote(position)}
                      title=""
                      aria-label={`Vote for ${position.title}`}
                      className="mx-auto w-full max-w-[220px] rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0865ff]/60"
                    >
                      VOTE
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DuringElection;