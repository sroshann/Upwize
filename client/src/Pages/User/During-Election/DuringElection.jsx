import { useMemo } from 'react'
import backgroundImage from '../../../assets/Common/Shape Image.png'
import { votingPositions } from './votingData'
import { useNavigate } from 'react-router-dom'  

function DuringElection() {
  const safePositions = useMemo(() => votingPositions, [])
  const navigate = useNavigate();
  
  const handleVote = (position) => {
    navigate(`/user/during-election/${position.id}`)
  }

  return (
    <section className="min-h-screen flex flex-col antialiased relative bg-gradient-to-b from-[#0865FF] to-white text-[#000000]">
      <div
        style={{
          backgroundImage: `url(${backgroundImage}), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: 'cover, 80px 80px, 80px 80px',
          backgroundPosition: 'center, 0 0, 0 0',
          backgroundRepeat: 'no-repeat, repeat, repeat',
        }}
        className="flex-grow w-full pb-28 relative z-0"
      >

        <div className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 md:px-10 lg:px-12 lg:py-12 xl:px-16">

          <div className="mx-auto max-w-[1100px] text-center">
            <h1 className="mt-5 whitespace-nowrap font-black leading-[0.7] tracking-[-0.04em] text-white text-[clamp(3.6rem,11vw,8rem)]">
              VOTE NOW
            </h1>

            <p className="mt-4 font-bold text-white/90 text-[clamp(1.1rem,3vw,1.7rem)] leading-[clamp(1.5,4vw,1.8)]">
              Choose Your Voice, Shape Your Campus
            </p>
          </div>

          <div className="w-[90%] md:w-full mx-auto mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {safePositions.map((position) => (
              <article
                key={position.id}
                className="rounded-[1.8rem] border border-[#dfe9ff] bg-[#f5f7fb] p-4 shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] sm:p-5 md:p-6"
              >
                <div className="flex h-full flex-col gap-5 justify-between text-center">

                  <div className="flex flex-col justify-center flex-grow">
                    <h2 className="text-[1.4rem] font-bold leading-tight tracking-[-0.03em] text-[#000000] sm:text-[1.7rem]">
                      {position.title}
                    </h2>

                    <p className="mx-auto mt-3 text-[0.82rem] leading-6 text-[#616161] sm:text-[0.9rem]">
                      {position.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleVote(position)}
                    aria-label={`Vote for ${position.title}`}
                    className="mx-auto w-full max-w-[220px] rounded-full bg-[#171717] px-5 py-3 text-[0.82rem] font-semibold tracking-[0.04em] text-white transition duration-200 hover:bg-[#054bbd] focus:outline-none focus:ring-2 focus:ring-[#0865FF]/50"
                  >
                    VOTE
                  </button>

                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default DuringElection