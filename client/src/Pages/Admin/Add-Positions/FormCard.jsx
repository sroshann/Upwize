import React, { useEffect, useState } from 'react'
import Dropdown from '../../../components/Dropdown/Dropdown'
import { CATEGORY_OPTIONS, GENDER_OPTIONS, PROGRAM_OPTIONS, DEPARTMENT_OPTIONS } from "./AddPositionData"
import { addPositionFormik } from '../../../formik/admin/before-election.formik'

function FormCard() {

    const [showCategory, setShowCategory] = useState(false) // Set whether category is required
    const [showGender, setShowGender] = useState(false) // Set whether gender is required
    const [showProgram, setShowProgram] = useState(false) // Set whether program is 

    const formik = addPositionFormik()
    const {

        belongsTo, category, department, 
        gender, program, responsibilities

    } = formik.values

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

    const handleResponsibilityKeyDown = (e) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault()
            const value = e.target.value.trim().replace(/,$/, '')
            if (value && !responsibilities.includes(value)) {
                formik.setFieldValue('responsibilities', [...responsibilities, value])
            }
            e.target.value = ''
        }
    }

    const removeResponsibility = (tag) => {
        formik.setFieldValue('responsibilities', responsibilities.filter((r) => r !== tag))
    }

    return (
        <form onSubmit={formik.handleSubmit} className="bg-white rounded-[20px] sm:rounded-[22px] shadow-2xl p-5 sm:p-7 md:w-full w-[95%] mx-auto">
            <div className="mb-4">
                <label className="block text-black text-sm font-medium mb-1.5">Enter position name</label>
                <input
                    {...formik.getFieldProps('position')}
                    placeholder="Provide name of the position"
                    className="bg-[#F8F8F8] w-full border border-[#E0E0E0] rounded-lg px-4 py-2.5 text-sm text-black placeholder-[#616161] font-normal focus:outline-none focus:border-[#0865FF] focus:ring-1 focus:ring-[#0865FF] transition-all duration-200 bg-white"
                />
            </div>
            <div className="mb-4">
                <label className="block text-black text-sm font-medium mb-1.5">Add responsibilities</label>
                <input
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
                    <input
                        {...formik.getFieldProps('shortName')}
                        placeholder="Provide if any"
                        className="bg-[#F8F8F8] w-full border border-[#E0E0E0] rounded-lg px-4 py-2.5 text-sm text-black placeholder-[#616161] font-normal focus:outline-none focus:border-[#0865FF] focus:ring-1 focus:ring-[#0865FF] transition-all duration-200 bg-white"
                    />
                </div>
                <div>
                    <label className="block text-black text-sm font-medium mb-1.5">Does it belongs to</label>
                    <Dropdown
                        value={belongsTo}
                        onChange={(value) => formik.setFieldValue('belongsTo', value)}
                        options={["No", "Yes"]}
                        placeholder="No"
                    />
                </div>
            </div>

            {showCategory && <div className="mb-4">
                <label className="block text-black text-sm font-medium mb-1.5">Category</label>
                <Dropdown
                    value={category}
                    onChange={(value) => formik.setFieldValue('category', value)}
                    options={CATEGORY_OPTIONS}
                    placeholder="Select the category of belonging"
                />
            </div>}

            {showCategory && showGender && <div className="mb-4">
                <label className="block text-black text-sm font-medium mb-1.5">Gender</label>
                <Dropdown
                    value={gender}
                    onChange={(value) => formik.setFieldValue('gender', value)}
                    options={GENDER_OPTIONS}
                    placeholder="Select gender"
                />
            </div>}

            {showCategory && showProgram && <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                    <label className="block text-black text-sm font-medium mb-1.5">Program</label>
                    <Dropdown
                        value={program}
                        onChange={(value) => formik.setFieldValue('program', value)}
                        options={PROGRAM_OPTIONS}
                        placeholder="Select"
                    />
                </div>
                <div>
                    <label className="block text-black text-sm font-medium mb-1.5">Department</label>
                    <Dropdown
                        value={department}
                        onChange={(value) => formik.setFieldValue('department', value)}
                        options={DEPARTMENT_OPTIONS}
                        placeholder="Select department"
                    />
                </div>
            </div>}

            <div className="mb-5">
                <label className="block text-black text-sm font-medium mb-1.5">Description</label>
                <textarea
                    {...formik.getFieldProps('description')}
                    rows={4}
                    placeholder="Describe about your association, in form of slogan, reflecting your personal views and objectives"
                    className="w-full border border-[#E0E0E0] rounded-lg px-4 py-2.5 text-sm text-black placeholder-[#616161] font-normal focus:outline-none focus:border-[#0865FF] focus:ring-1 focus:ring-[#0865FF] transition-all duration-200 bg-white resize-none leading-relaxed"
                />
            </div>
            <button type="submit" className="w-full bg-[#1a1a2e] hover:bg-[#0101DB] text-white font-semibold text-sm md:text-base py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 mt-1">
                Create association
            </button>
        </form>
    )
}

export default FormCard