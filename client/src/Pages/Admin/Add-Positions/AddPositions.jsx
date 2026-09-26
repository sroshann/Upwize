import React, { useState } from "react"
import backgroundImage from "../../../assets/Common/Shape Image.png"
import { BULLET_POINTS } from "./AddPositionData"
import FormCard from "./FormCard"

function AddPositions() {
    const [positionName, setPositionName] = useState("")
    const [responsibilityInput, setResponsibilityInput] = useState("")
    const [responsibilities, setResponsibilities] = useState([])
    const [shortName, setShortName] = useState("")
    const [belongsTo, setBelongsTo] = useState("No")
    const [category, setCategory] = useState("")
    const [gender, setGender] = useState("")
    const [program, setProgram] = useState("")
    const [department, setDepartment] = useState("")
    const [description, setDescription] = useState("")

    const handleResponsibilityKeyDown = (e) => {
        if ((e.key === "Enter" || e.key === ",") && responsibilityInput.trim()) {
            e.preventDefault()
            const val = responsibilityInput.trim().replace(/,$/, "")
            if (val && !responsibilities.includes(val)) {
                setResponsibilities([...responsibilities, val])
            }
            setResponsibilityInput("")
        }
    }

    const removeResponsibility = (tag) => {
        setResponsibilities(responsibilities.filter((r) => r !== tag))
    }

    const formProps = {
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
    }

    return (
        <section className="min-h-screen w-full relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #0865FF 0%, #ffffff 100%)" }}>
            <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0" style={{ backgroundImage: "url(" + backgroundImage + ")" }} />
            <main className="relative z-10 w-full">
                <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-26 pt-8 md:pt-12 lg:pt-16 pb-20">

                    {/* Desktop: two-column split */}
                    <div className="hidden lg:flex flex-row items-start gap-10 xl:gap-16">
                        <div className="flex-1 min-w-0">
                            <h1 className="text-[52px] xl:text-[68px] font-bold leading-[1.05] tracking-[-0.03em] text-white mb-4">
                                Create a new<br />voting position
                            </h1>
                            <ul className="space-y-2.5">
                                {BULLET_POINTS.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <p className="text-white/90 text-[14px] xl:text-[16px] leading-[1.6] font-medium">{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full max-w-[480px] xl:max-w-[520px] flex-shrink-0">
                            <FormCard {...formProps} />
                        </div>
                    </div>

                    {/* Mobile / Tablet: form first, then hero text */}
                    <div className="flex lg:hidden flex-col items-center gap-8 sm:gap-10">
                        <div className="w-full max-w-[540px]">
                            <h1 className="text-[45px] text-center sm:text-[78px] font-bold leading-[1] tracking-[-0.025em] text-white mb-6 md:mb-8">
                                Create a new<br />voting position
                            </h1>
                            <ul className="space-y-3 w-[90%] mx-auto md:w-full">
                                {BULLET_POINTS.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <p className="text-center text-white/90 text-[13px] sm:text-[19px] leading-[1.65] font-medium">{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full max-w-[540px] md:w-full md:max-w-[580px]">
                            <FormCard {...formProps} />
                        </div>
                    </div>

                </div>
            </main>
        </section>
    )
}

export default AddPositions
