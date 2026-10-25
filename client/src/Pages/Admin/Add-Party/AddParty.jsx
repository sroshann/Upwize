import backgroundImage from '../../../assets/Common/Shape Image.png'
import { bulletPoints } from './AddPartyData'
import FormCard from './FormCard'
import AddedParties from './AddedParties'
import { useQuery } from '@tanstack/react-query'
import { queryClient, queryKeys } from '../../../lib/tanstack'
import { useEffect } from 'react'

function AddParty() {

    const { data: recentlyAdded = [] } = useQuery({
        queryKey: queryKeys.rcntAssociation(),
        queryFn: () => {},
        enabled: false,
    })

    useEffect(() => {
        // Resetting recently added cache into empty
        return () => queryClient.removeQueries({ queryKey: queryKeys.rcntAssociation() })
    }, [queryClient])

    return (
        <section
            className="min-h-screen flex flex-col antialiased font-[Plus_Jakarta_Sans] relative overflow-hidden"
            style={{ background: 'linear-gradient(to bottom, #0865FF 0%, #ffffff 100%)' }}
        >
            {/* ── Background Shape Image & Grid Overlay ── */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{
                    backgroundImage: `url(${backgroundImage}), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
                    backgroundSize: 'cover, 80px 80px, 80px 80px',
                    backgroundPosition: 'center, 0 0, 0 0',
                    backgroundRepeat: 'no-repeat, repeat, repeat',
                }}
            />

            {/* ── Main Content ── */}
            <main className="relative z-10 flex-grow w-full">
                <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20 pt-10 md:pt-14 lg:pt-20 pb-20">

                    {/* ══════════════════════════════════════════════════
                        DESKTOP LAYOUT (lg+): Left text col + Right form
                    ══════════════════════════════════════════════════ */}
                    <div className="hidden lg:flex flex-row items-start gap-12 xl:gap-20">

                        {/* Left: Title + Bullet Points */}
                        <div className="flex-1 min-w-0 pt-2">
                            <h1 className="text-[56px] xl:text-[72px] font-bold leading-[1.04] tracking-[-0.03em] text-white mb-6 xl:mb-8">
                                Create a new<br />association
                            </h1>
                            <ul className="flex flex-col gap-4">
                                {bulletPoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        {/* Bullet dot */}
                                        <span className="mt-[7px] w-2 h-2 rounded-full bg-white/60 flex-shrink-0" />
                                        <p className="text-white/90 text-[14px] xl:text-[16px] leading-[1.65] font-medium">
                                            {point}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Form Card */}
                        <div className="w-full max-w-[480px] xl:max-w-[520px] flex-shrink-0">
                            <FormCard />
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════════════
                        TABLET LAYOUT (md only): centered, stacked
                    ══════════════════════════════════════════════════ */}
                    <div className="hidden md:flex lg:hidden flex-col items-center gap-0">
                        <div className="w-full max-w-xl text-center mb-8">
                            <h1 className="text-[62px] font-bold leading-[1.02] tracking-[-0.03em] text-white mb-6">
                                Create a new<br />association
                            </h1>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-left px-2">
                                {bulletPoints.map((point, i) => (
                                    <p key={i} className="text-white/90 text-[14px] leading-[1.6] font-medium flex items-start gap-2">
                                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                                        {point}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="w-full max-w-lg">
                            <FormCard />
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════════════
                        MOBILE LAYOUT (<md): centered, compact stacked
                    ══════════════════════════════════════════════════ */}
                    <div className="flex md:hidden flex-col items-center gap-0">
                        <div className="w-full text-center mb-7">
                            <h1 className="text-[42px] sm:text-[52px] font-bold leading-[1.04] tracking-[-0.02em] text-white mb-5">
                                Create a new<br />association
                            </h1>
                            <div className="flex flex-col gap-2.5 w-[88%] mx-auto">
                                {bulletPoints.map((point, i) => (
                                    <p key={i} className="text-white/85 text-[13px] sm:text-[14px] leading-[1.6] font-medium text-center">
                                        {point}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="w-full max-w-sm sm:max-w-md">
                            <FormCard />
                        </div>
                    </div>

                    {/* ── Recently Added Section ── */}
                    {recentlyAdded && recentlyAdded.length > 0 && (
                        <div className="mt-16 sm:mt-20">

                            {/* Section heading — matches ViewCandidate "CLUBS AND RESPONSIBILITIES" style */}
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-white mb-6 sm:mb-8 tracking-wide">
                                Recently Added
                            </h2>

                            {/* Divider */}
                            <div className="w-16 h-0.5 bg-white/30 mb-8" />

                            <AddedParties associations={recentlyAdded} />
                        </div>
                    )}

                </div>
            </main>
        </section>
    )
}

export default AddParty
