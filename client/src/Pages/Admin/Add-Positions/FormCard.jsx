import React, { useEffect, useState } from 'react'
import Dropdown from '../../../components/Dropdown/Dropdown'
import { CATEGORY_OPTIONS, GENDER_OPTIONS, PROGRAM_OPTIONS, DEPARTMENT_OPTIONS } from "./AddPositionData"

function FormCard({
    positionName, setPositionName,
    responsibilityInput, setResponsibilityInput,
    responsibilities, handleResponsibilityKeyDown, removeResponsibility,
    shortName, setShortName,
    belongsTo, setBelongsTo,
    category, setCategory,
    gender, setGender,
    program, setProgram,
    department, setDepartment,
    description, setDescription,
}) {

    const [showCategory, setShowCategory] = useState(false) // Set whether category is required
    const [showGender, setShowGender] = useState(false) // Set whether gender is required
    const [showProgram, setShowProgram] = useState(false) // Set whether program is required

    useEffect(() => {

        setShowCategory(belongsTo === 'Yes')
        setShowGender(category === 'Gender')
        setShowProgram(category === 'Program')

        return () => {
            setShowCategory(false)
            setShowGender(false)
            setShowProgram(false)
        }

    }, [belongsTo, category])

    return (
        <div className="bg-white rounded-[20px] sm:rounded-[22px] shadow-2xl p-5 sm:p-7 md:w-full w-[95%] mx-auto">
            <div className="mb-4">
                <label className="block text-black text-sm font-medium mb-1.5">Enter position name</label>
                <input
                    type="text"
                    value={positionName}
                    onChange={(e) => setPositionName(e.target.value)}
                    placeholder="Provide name of the position"
                    className="bg-[#F8F8F8] w-full border border-[#E0E0E0] rounded-lg px-4 py-2.5 text-sm text-black placeholder-[#616161] font-normal focus:outline-none focus:border-[#0865FF] focus:ring-1 focus:ring-[#0865FF] transition-all duration-200 bg-white"
                />
            </div>
            <div className="mb-4">
                <label className="block text-black text-sm font-medium mb-1.5">Add responsibilities</label>
                <input
                    type="text"
                    value={responsibilityInput}
                    onChange={(e) => setResponsibilityInput(e.target.value)}
                    onKeyDown={handleResponsibilityKeyDown}
                    placeholder="Add responsibilities one by one"
                    className="bg-[#F8F8F8] w-full border border-[#E0E0E0] rounded-lg px-4 py-2.5 text-sm text-black placeholder-[#616161] font-normal focus:outline-none focus:border-[#0865FF] focus:ring-1 focus:ring-[#0865FF] transition-all duration-200 bg-white"
                />
                {responsibilities.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2.5">
                        {responsibilities.map((tag) => (
                            <span key={tag} className="inline-flex items-center gap-1.5 bg-[#0865FF]/10 text-[#0865FF] text-[12px] font-semibold px-3 py-1 rounded-full">
                                {tag}
                                <button onClick={() => removeResponsibility(tag)} className="text-[#0865FF] hover:text-[#E64240] leading-none font-bold text-[14px] transition-colors" aria-label={"Remove " + tag}><span className='font-normal'>x</span></button>
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                    <label className="block text-black text-sm font-medium mb-1.5">Short name</label>
                    <input type="text" value={shortName} onChange={(e) => setShortName(e.target.value)} placeholder="Provide if any" className="bg-[#F8F8F8] w-full border border-[#E0E0E0] rounded-lg px-4 py-2.5 text-sm text-black placeholder-[#616161] font-normal focus:outline-none focus:border-[#0865FF] focus:ring-1 focus:ring-[#0865FF] transition-all duration-200 bg-white" />
                </div>
                <div>
                    <label className="block text-black text-sm font-medium mb-1.5">Does it belongs to</label>
                    <Dropdown
                        value={belongsTo}
                        onChange={setBelongsTo}
                        options={["No", "Yes"]}
                        placeholder="No"
                    />
                </div>
            </div>

            {showCategory && <div className="mb-4">
                <label className="block text-black text-sm font-medium mb-1.5">Category</label>
                <Dropdown
                    value={category}
                    onChange={setCategory}
                    options={CATEGORY_OPTIONS}
                    placeholder="Select the category of belonging"
                />
            </div>}

            {showCategory && showGender && <div className="mb-4">
                <label className="block text-black text-sm font-medium mb-1.5">Gender</label>
                <Dropdown
                    value={gender}
                    onChange={setGender}
                    options={GENDER_OPTIONS}
                    placeholder="Select gender"
                />
            </div>}

            {showCategory && showProgram && <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                    <label className="block text-black text-sm font-medium mb-1.5">Program</label>
                    <Dropdown
                        value={program}
                        onChange={setProgram}
                        options={PROGRAM_OPTIONS}
                        placeholder="Select"
                    />
                </div>
                <div>
                    <label className="block text-black text-sm font-medium mb-1.5">Department</label>
                    <Dropdown
                        value={department}
                        onChange={setDepartment}
                        options={DEPARTMENT_OPTIONS}
                        placeholder="Select department"
                    />
                </div>
            </div>}

            <div className="mb-5">
                <label className="block text-black text-sm font-medium mb-1.5">Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} placeholder="Describe about your association, in form of slogan, reflecting your personal views and objectives" className="w-full border border-[#E0E0E0] rounded-lg px-4 py-2.5 text-sm text-black placeholder-[#616161] font-normal focus:outline-none focus:border-[#0865FF] focus:ring-1 focus:ring-[#0865FF] transition-all duration-200 bg-white resize-none leading-relaxed" />
            </div>
            <button type="submit" className="w-full bg-[#1a1a2e] hover:bg-[#0101DB] text-white font-semibold text-sm md:text-base py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 mt-1">
                Create association
            </button>
        </div>
    )
}

export default FormCard