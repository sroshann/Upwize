import React, { useState, useRef } from 'react'
import backgroundImage from '../../../assets/Common/Shape Image.png'
import { bulletPoints } from './AddPartyData'
import FormCard from './FormCard'
import AddedParties from './AddedParties'

function AddParty() {
    const [logoPreview, setLogoPreview] = useState(null)
    const [partyColor, setPartyColor] = useState('#0865FF')
    const [fullName, setFullName] = useState('')
    const [shortName, setShortName] = useState('')
    const [description, setDescription] = useState('')
    const [parties, setParties] = useState([])
    const fileInputRef = useRef(null)

    const handleLogoUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => setLogoPreview(reader.result)
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!fullName.trim() || !logoPreview || !shortName.trim() || !description.trim()) return
        const newParty = {
            id: Date.now(),
            logo: logoPreview,
            fullName,
            shortName,
            color: partyColor,
            description,
        }
        setParties(prev => [newParty, ...prev])
        // Reset form
        setFullName('')
        setShortName('')
        setDescription('')
        setPartyColor('#0865FF')
        setLogoPreview(null)
        if (fileInputRef.current) fileInputRef.current.value = ''
    }

    const formProps = {
        logoPreview,
        setLogoPreview,
        partyColor,
        setPartyColor,
        fullName, setFullName,
        shortName, setShortName,
        description, setDescription,
        fileInputRef,
        handleLogoUpload,
        handleSubmit,
    }

    return (
        <section className="bg-gradient-to-b from-[#0865FF] to-white min-h-screen flex flex-col antialiased">

            {/* Hero + Form area */}
            <main
                className="flex-grow flex flex-col justify-start items-center px-5 md:px-12 lg:px-25 pt-8 lg:pt-14 pb-4 relative z-10 w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >

                {/* MOBILE layout (< md) */}
                <div className="flex md:hidden w-full flex-col">
                    <h1 className="text-[48px] text-center leading-[48px] tracking-[-0.02em] font-bold text-white mb-5">
                        Create a new<br />association
                    </h1>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-3 mb-8 w-[90%] mx-auto">
                        {bulletPoints.map((point, i) => (
                            <p key={i} className="text-white text-center text-[13px] leading-[16px] font-normal">
                                {point}
                            </p>
                        ))}
                    </div>
                    <FormCard {...formProps} />
                </div>

                {/* TABLET layout (md only) */}
                <div className="hidden md:flex lg:hidden w-full max-w-2xl flex-col mx-auto">
                    <h1 className="text-[70px] text-center leading-[68px] tracking-[-0.03em] font-bold text-white mb-8">
                        Create a new association
                    </h1>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10">
                        {bulletPoints.map((point, i) => (
                            <p key={i} className="text-white text-center text-[15px] leading-[20px] font-normal">
                                {point}
                            </p>
                        ))}
                    </div>
                    <div className="flex-1 w-[85%] mx-auto">
                        <FormCard {...formProps} />
                    </div>
                </div>

                {/* DESKTOP layout (lg+) */}
                <div className="hidden lg:flex w-full max-w-7xl mx-auto flex-row items-start gap-12 xl:gap-20">
                    {/* Left text column */}
                    <div className="flex-1 flex flex-col pt-4">
                        <h1 className="text-[64px] xl:text-[76px] leading-[1.05] tracking-[-0.03em] font-bold text-white mb-8">
                            Create a new<br />association
                        </h1>
                        <div className="flex flex-col gap-4">
                            {bulletPoints.map((point, i) => (
                                <p key={i} className="text-white text-[15px] xl:text-[16px] leading-[24px] font-normal max-w-[420px]">
                                    {point}
                                </p>
                            ))}
                        </div>
                    </div>
                    {/* Right form column */}
                    <div className="flex-1 max-w-[500px] xl:max-w-[560px]">
                        <FormCard {...formProps} />
                    </div>
                </div>

                {parties.length > 0 && <AddedParties data={parties} setFunction={setParties} />}
            </main>

        </section>
    )
}

export default AddParty
