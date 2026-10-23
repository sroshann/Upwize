import React from 'react'

function AddedParties({ data, setFunction }) {

    const handleRemoveParty = (id) => {
        setFunction(prev => prev.filter(p => p.id !== id))
        if (data?.length === 0) setFunction([])
    }

    return (
        <section className="w-full py-10">
            <div className="mx-auto">

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data.map(item => (
                        <div
                            key={item.id}
                            className="bg-white w-[97%] md:w-full mx-auto rounded-xl md:rounded-2xl p-5 flex flex-col gap-4 shadow-lg transition-transform duration-300 md:hover:scale-102"
                        >
                            {/* Top row: logo · names · color */}
                            <div className="flex items-center gap-3">

                                {/* Logo */}
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden bg-white border border-[#E0E0E0]"
                                >
                                    {item.logo ? (
                                        <img
                                            src={item.logo}
                                            alt={`${item.fullName} logo`}
                                            className="w-full h-full object-contain"
                                        />
                                    ) : (
                                        <span className="text-2xl font-bold text-[#0865FF] select-none">
                                            {item.shortName?.[0] || item.fullName?.[0] || '?'}
                                        </span>
                                    )}
                                </div>

                                <section>

                                    <p className="text-[#1a1a2e] text-sm font-bold leading-tight truncate">
                                        {item.fullName}
                                    </p>
                                    <section className="flex justify-center gap-1 items-center w-fit">

                                        {/* Names */}
                                        <p className="text-[#616161] text-xs font-medium mt-0.5 truncate">
                                            {item.shortName}
                                        </p>

                                        {/* Color swatch */}
                                        <div className="flex-shrink-0 flex flex-col items-center gap-1">
                                            <span
                                                className="w-4 h-4 rounded-full border-1 border-white shadow-md block pt-2"
                                                style={{ backgroundColor: item.color }}
                                            />
                                        </div>

                                    </section>

                                </section>

                            </div>

                            {/* Description */}
                            <p className="text-[#616161] text-[13px] leading-[1.5] line-clamp-3 flex-1">
                                {item.description || <span className="italic text-[#aaa]">No description provided.</span>}
                            </p>

                            {/* Remove button */}
                            <button
                                type="button"
                                onClick={() => handleRemoveParty(item.id)}
                                className="w-full mt-auto bg-[#1a1a2e] hover:bg-red-600 text-white text-sm font-semibold py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-0.5 cursor-pointer"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default AddedParties