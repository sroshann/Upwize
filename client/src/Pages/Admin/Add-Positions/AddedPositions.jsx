import React from 'react'

function AddedPositions({ data, setFunction }) {

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
                            className="bg-white w-[95%] md:w-full mx-auto rounded-xl md:rounded-2xl p-5 flex flex-col gap-y-2 shadow-lg transition-transform duration-300 md:hover:scale-102"
                        >
                            {/* Top row */}
                            <div className="flex flex-col gap-2">

                                <section className="flex items-center gap-2 w-full">

                                    <p className="text-[#1a1a2e] text-sm font-bold leading-tight truncate">
                                        {item.positionName}
                                    </p>
                                    {/* Short name */}
                                    {item?.shortName && <p className="text-[#616161] text-xs font-medium mt-0.5 truncate">
                                        {item.shortName}
                                    </p>}

                                </section>
                                <section className="flex flex-wrap justify-start gap-x-1 gap-y-1.5 items-center w-fit">{item?.responsibilities &&

                                    item.responsibilities?.map((res, index) => (

                                        <span key={index} className="inline-flex items-center gap-1.5 bg-[#0865FF]/10 text-[#0865FF] text-[12px] font-semibold px-3 py-1 rounded-full">
                                            {res}
                                        </span>

                                    ))

                                }</section>

                            </div>

                            {item?.category && <section>

                                <section className="flex justify-center gap-1 items-center w-fit">

                                    {item?.gender && <p className="text-red-600 text-xs font-medium mt-0.5 truncate">
                                        {item.gender}
                                    </p>}

                                    {item?.program && <p className="text-red-600 text-xs font-medium mt-0.5 truncate">
                                        {item.program}
                                    </p>}

                                    {item?.department && <p className="text-red-600 text-xs font-medium mt-0.5 truncate">
                                        {item.department}
                                    </p>}

                                </section>

                            </section>}

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

export default AddedPositions