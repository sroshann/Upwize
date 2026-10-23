import React from 'react'

function FormCard({
    logoPreview,
    partyColor,
    setPartyColor,
    fullName, setFullName,
    shortName, setShortName,
    description, setDescription,
    fileInputRef,
    handleLogoUpload,
    handleSubmit,
    setLogoPreview
}) {
    return (
        <div className="md:w-full w-[97%] mx-auto bg-white rounded-2xl md:rounded-3xl p-5 md:p-7 shadow-lg">

            {/* Upload logo label */}
            <p className="text-black text-sm font-medium mb-3">Upload logo</p>

            {/* Upload area */}
            <div className="flex items-center gap-3 mb-5">

                {/* Upload trigger — hidden once an image is selected */}
                {!logoPreview && (
                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#F8F8F8] flex items-center justify-center hover:border-[#0865FF] hover:bg-blue-50 transition-all duration-200 cursor-pointer flex-shrink-0 overflow-hidden"
                    >
                        <span className="text-[#616161] md:mb-1 text-2xl font-light leading-none select-none">+</span>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/png"
                            className="hidden"
                            onChange={handleLogoUpload}
                        />
                    </button>
                )}

                {/* Preview — shown only when an image is selected */}
                {logoPreview && (
                    <div className="relative">
                        <img src={logoPreview} alt="Logo preview" className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-contain" />

                        <button
                            type="button"
                            onClick={() => {
                                setLogoPreview(null)
                                // Reset input so the same file can be re-selected later
                                if (fileInputRef.current) fileInputRef.current.value = ''
                            }}
                            className="absolute top-0 right-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 hover:text-white hover:bg-red-500 transition-all duration-200 cursor-pointer flex-shrink-0 overflow-hidden"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
                            </svg>
                        </button>
                    </div>
                )}

            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* Full name */}
                <div>
                    <label className="block text-black text-sm font-medium mb-1.5">
                        Full name
                    </label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Provide full name of association"
                        className="bg-[#F8F8F8] w-full border border-[#E0E0E0] rounded-lg px-4 py-2.5 text-sm text-black placeholder-[#616161] font-normal focus:outline-none focus:border-[#0865FF] focus:ring-1 focus:ring-[#0865FF] transition-all duration-200 bg-white"
                    />
                </div>

                {/* Short name + Color picker */}
                <div className="flex gap-3">
                    <div className="flex-1">
                        <label className="block text-black text-sm font-medium mb-1.5">
                            Short name
                        </label>
                        <input
                            type="text"
                            value={shortName}
                            onChange={(e) => setShortName(e.target.value)}
                            placeholder="Provide short name"
                            className="w-full border border-[#E0E0E0] rounded-lg px-4 py-2.5 text-sm text-black placeholder-[#616161] font-normal focus:outline-none focus:border-[#0865FF] focus:ring-1 focus:ring-[#0865FF] transition-all duration-200 bg-white"
                        />
                    </div>

                    <div className="flex-1">
                        <label className="block text-black text-sm font-medium mb-1.5">
                            Choose a color
                        </label>
                        <div className="flex items-center border border-[#E0E0E0] rounded-lg px-3 py-2 gap-2 bg-white h-[42px] focus-within:border-[#0865FF] focus-within:ring-1 focus-within:ring-[#0865FF] transition-all duration-200">
                            <span className="text-sm text-[#616161] font-normal flex-1 truncate uppercase">
                                {partyColor}
                            </span>
                            <label className="cursor-pointer flex-shrink-0 relative">
                                <input
                                    type="color"
                                    value={partyColor}
                                    onChange={(e) => setPartyColor(e.target.value)}
                                    className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                                />
                                <span
                                    className="block w-6 h-6 rounded-full border-2 border-white shadow-md transition-transform duration-200 hover:scale-110"
                                    style={{ backgroundColor: partyColor }}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-black text-sm font-medium mb-1.5">
                        Description
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe about your association, in form of slogan, reflecting your perspectives and objectives"
                        rows={4}
                        className="w-full border border-[#E0E0E0] rounded-lg px-4 py-2.5 text-sm text-black placeholder-[#616161] font-normal focus:outline-none focus:border-[#0865FF] focus:ring-1 focus:ring-[#0865FF] transition-all duration-200 bg-white resize-none leading-relaxed"
                    />
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="w-full bg-[#1a1a2e] hover:bg-[#0101DB] text-white font-semibold text-sm md:text-base py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 mt-1"
                >
                    Create association
                </button>
            </form>
        </div>
    )
}

export default FormCard