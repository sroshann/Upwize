import React, { useState } from 'react'
import backgroundImage from '../../../assets/Common/Shape Image.png'

function AddGuidelines() {

    const [formData, setFormData] = useState({
        name: '',
        category: '',
        priority: '',
        description: '',
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
        setFormData({ name: '', category: '', priority: '', description: '' })
    }

    return (
        <section className="bg-gradient-to-b from-[#0865FF] to-white text-black min-h-screen flex flex-col antialiased relative">

            {/* Background grid overlay */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />

            {/* Main Content */}
            <main className="flex-grow relative z-10 w-full px-5 md:px-16 lg:px-24 pt-10 md:pt-16 pb-20">

                {/* Desktop layout: two-column */}
                <div className="hidden md:flex w-full max-w-7xl mx-auto gap-12 lg:gap-20 items-start">

                    {/* Left — heading + bullet tips */}
                    <div className="flex-1 min-w-0 pt-2">
                        <h1 className="text-[52px] lg:text-[68px] xl:text-[80px] leading-[1.05] font-bold text-white mb-8 tracking-tight">
                            Add new<br />guideline
                        </h1>

                        <ul className="space-y-4 text-white text-[15px] lg:text-[16px] leading-[1.6] max-w-[440px]">
                            <li>
                                <span className="font-bold">Enter a clear and meaningful title </span>
                                <span className="font-normal opacity-90">that briefly describes the purpose of the guideline.</span>
                            </li>
                            <li>
                                <span className="font-bold">Write the instructions in simple and easy-to-understand language </span>
                                <span className="font-normal opacity-90">so that every voter can follow them correctly.</span>
                            </li>
                            <li>
                                <span className="font-normal opacity-90">Review the guideline carefully for errors or missing information before publishing it.</span>
                            </li>
                            <li>
                                <span className="font-bold">Ensure that the information is accurate, relevant, and applicable to the current election.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right — form card */}
                    <div className="w-full max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] flex-shrink-0">
                        <FormCard
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            submitted={submitted}
                        />
                    </div>
                </div>

                {/* Mobile layout: stacked */}
                <div className="flex md:hidden flex-col w-full">

                    {/* Heading */}
                    <h1 className="text-[48px] sm:text-[56px] leading-[1.05] font-bold text-white mb-6 tracking-tight">
                        Add a new<br />guideline
                    </h1>

                    {/* Bullet tips */}
                    <ul className="space-y-3 text-white text-[14px] leading-[1.65] mb-8">
                        <li>
                            <span className="font-bold">Enter a clear and meaningful title </span>
                            <span className="font-normal opacity-90">that briefly describes the purpose of the guideline.</span>
                        </li>
                        <li>
                            <span className="font-bold">Write the instructions in simple and easy-to-understand language </span>
                            <span className="font-normal opacity-90">so that every voter can follow them correctly.</span>
                        </li>
                        <li>
                            <span className="font-normal opacity-90">Review the guideline carefully for errors or missing information before publishing it.</span>
                        </li>
                        <li>
                            <span className="font-bold">Ensure that the information is accurate, relevant, and applicable to the current election.</span>
                        </li>
                    </ul>

                    {/* Form card */}
                    <FormCard
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        submitted={submitted}
                    />
                </div>

            </main>
        </section>
    )
}

/* ─────────────────────────────────────────────────────────
   Shared form card — rendered for both breakpoints
───────────────────────────────────────────────────────── */
function FormCard({ formData, handleChange, handleSubmit, submitted }) {
    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-7 w-full">

            {/* Success banner */}
            {submitted && (
                <div className="mb-5 px-4 py-3 rounded-xl bg-[#0865FF]/10 border border-[#0865FF]/30 text-[#0865FF] text-sm font-medium text-center">
                    ✅ Guideline added successfully!
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Guideline name */}
                <div>
                    <label className="block text-[13px] font-medium text-[#000000] mb-1.5">
                        Guideline name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Give a name for your guideline"
                        required
                        className="w-full border border-[#E0E0E0] rounded-xl px-4 py-3 text-[14px] text-[#000000] placeholder-[#616161] bg-[#F8F8F8] focus:outline-none focus:ring-2 focus:ring-[#0865FF]/40 focus:border-[#0865FF] transition-all duration-200"
                    />
                </div>

                {/* Category + Priority row */}
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-[13px] font-medium text-[#000000] mb-1.5">
                            Category
                        </label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            placeholder="Which belongs to"
                            required
                            className="w-full border border-[#E0E0E0] rounded-xl px-4 py-3 text-[14px] text-[#000000] placeholder-[#616161] bg-[#F8F8F8] focus:outline-none focus:ring-2 focus:ring-[#0865FF]/40 focus:border-[#0865FF] transition-all duration-200"
                        />
                    </div>
                    <div>
                        <label className="block text-[13px] font-medium text-[#000000] mb-1.5">
                            Priority
                        </label>
                        <input
                            type="text"
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            placeholder="Provide priority"
                            required
                            className="w-full border border-[#E0E0E0] rounded-xl px-4 py-3 text-[14px] text-[#000000] placeholder-[#616161] bg-[#F8F8F8] focus:outline-none focus:ring-2 focus:ring-[#0865FF]/40 focus:border-[#0865FF] transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-[13px] font-medium text-[#000000] mb-1.5">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter the guideline details and instructions that users need to know"
                        required
                        rows={5}
                        className="w-full border border-[#E0E0E0] rounded-xl px-4 py-3 text-[14px] text-[#000000] placeholder-[#616161] bg-[#F8F8F8] resize-none focus:outline-none focus:ring-2 focus:ring-[#0865FF]/40 focus:border-[#0865FF] transition-all duration-200"
                    />
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="w-full bg-[#000000] hover:bg-[#0865FF] text-white font-semibold text-[15px] py-4 rounded-xl transition-colors duration-300 mt-1 tracking-wide"
                >
                    Add guideline
                </button>

            </form>
        </div>
    )
}

export default AddGuidelines