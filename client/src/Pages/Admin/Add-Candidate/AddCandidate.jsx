import React, { useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import backgroundImage from '../../../assets/Common/Shape Image.png'
import { DEPARTMENT_OPTIONS, SEMESTER_OPTIONS, BATCH_OPTIONS, rules, POSITION_OPTIONS, PARTY_OPTIONS, CLUB_OPTIONS } from './AddCandidateData'
import Dropdown from '../../../components/Dropdown/Dropdown'
import { addCandidate } from '../../../api/admin/before-election.api'

// Rules must be standardised


export default function AddCandidate() {
    const fileInputRef = useRef(null)
    const [photoPreview, setPhotoPreview] = useState(null)
    const [photoBase64, setPhotoBase64] = useState(null)
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        semester: '',
        batch: '',
        position: '',
        age: '',
        party: '',
        contactNumber: '',
        club: '',
        role: '',
        message: '',
    })

    const { mutate, isPending } = useMutation({

        mutationFn: addCandidate,
        onSuccess: (data) => {
            toast.success(data?.message || 'Candidate added successfully')
            // Reset form
            setForm({ firstName: '', lastName: '', email: '', department: '', semester: '', batch: '', position: '', age: '', party: '', contactNumber: '', club: '', role: '', message: '' })
            setPhotoPreview(null)
            setPhotoBase64(null)
            if (fileInputRef.current) fileInputRef.current.value = ''
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || 'Failed to add candidate')
        }

    })

    const handlePhotoChange = (e) => {
        const file = e.target.files[0]
        if (!file) return
        setPhotoPreview(URL.createObjectURL(file))
        // Convert to base64 for server upload
        const reader = new FileReader()
        reader.onloadend = () => setPhotoBase64(reader.result)
        reader.readAsDataURL(file)
    }

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        mutate({
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            age: form.age,
            department: form.department,
            semester: form.semester,
            batch: form.batch,
            position: form.position,
            association: form.party,
            contactNumber: form.contactNumber,
            club: form.club,
            role: form.role,
            message: form.message,
            profileImg: photoBase64,
        })
    }

    const inputBase =
        'w-full rounded-xl border border-[#E0E0E0] bg-[#FFFFFF] px-4 py-3 text-sm text-[#000000] placeholder-[#616161] outline-none focus:border-[#0865FF] focus:ring-1 focus:ring-[#0865FF] transition'

    const selectBase =
        'w-full rounded-xl border border-[#E0E0E0] bg-[#FFFFFF] px-4 py-3 text-sm text-[#616161] outline-none focus:border-[#0865FF] focus:ring-1 focus:ring-[#0865FF] transition appearance-none cursor-pointer'

    const labelBase = 'block text-[13px] font-medium text-[#000000] mb-1.5'

    const ChevronDown = () => (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
        </svg>
    )

    return (
        <section className="min-h-screen bg-gradient-to-b from-[#0865FF] to-white font-['Plus_Jakarta_Sans'] antialiased relative">

            {/* Background grid + shape image overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${backgroundImage}), linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)`,
                    backgroundSize: 'cover, 80px 80px, 80px 80px',
                    backgroundPosition: 'center, 0 0, 0 0',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Page wrapper */}
            <div className="relative z-10 flex flex-col md:flex-row min-h-screen w-full max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-10 md:pt-20 pb-20 md:pb-28 gap-10 md:gap-14 lg:gap-20">

                {/* LEFT — title + rules */}
                <div className="flex flex-col w-full md:w-[42%] lg:w-[40%] flex-shrink-0 text-center md:text-left">
                    <h1 className="text-[52px] md:text-[64px] xl:text-[76px] leading-[1.05] tracking-[-0.03em] font-bold text-white mb-6 md:mb-8">
                        Create a new<br />candidate
                    </h1>
                    <ul className="flex flex-col gap-3 w-[90%] mx-auto md:w-full md:mx-0">
                        {rules.map((rule, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                                <span className="text-[13px] md:text-[13px] lg:text-[14px] font-normal text-white/90 leading-snug">
                                    {rule}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT — Form card */}
                <div className="w-full md:flex-1">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-3xl md:rounded-[28px] shadow-2xl shadow-black/10 p-6 sm:p-8 flex flex-col gap-6"
                    >

                        {/* Photo upload */}
                        <div>
                            <p className={labelBase}>Upload photo</p>
                            <div className="flex items-center gap-3">

                                {/* Upload trigger — hidden once a photo is selected */}
                                {!photoPreview && (
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="w-21 h-27 md:w-35 md:h-45 rounded-xl bg-[#F8F8F8] flex items-center justify-center hover:border-[#0865FF] hover:bg-blue-50 transition-all duration-200 cursor-pointer flex-shrink-0 overflow-hidden"
                                    >
                                        <span className="text-[#616161] md:mb-1 text-2xl font-light leading-none select-none">+</span>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handlePhotoChange}
                                        />
                                    </button>
                                )}

                                {/* Preview — shown only when a photo is selected */}
                                {photoPreview && (
                                    <div className="relative">
                                        <img src={photoPreview} alt="Photo preview" className="w-21 h-27 md:w-35 md:h-45 rounded-xl object-cover" />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setPhotoPreview(null)
                                                if (fileInputRef.current) fileInputRef.current.value = ''
                                            }}
                                            className="absolute top-0 right-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 hover:text-white hover:bg-red-500 transition-all duration-200 cursor-pointer"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z" />
                                            </svg>
                                        </button>
                                    </div>
                                )}

                            </div>
                        </div>

                        {/* First name & Last name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className={labelBase}>First name</label>
                                <input id="firstName" name="firstName" type="text" placeholder="First name" value={form.firstName} onChange={handleChange} className={inputBase} />
                            </div>
                            <div>
                                <label htmlFor="lastName" className={labelBase}>Last name</label>
                                <input id="lastName" name="lastName" type="text" placeholder="Last name" value={form.lastName} onChange={handleChange} className={inputBase} />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className={labelBase}>Email</label>
                            <input id="email" name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handleChange} className={inputBase} />
                        </div>

                        {/* Department */}
                        <div>
                            <label htmlFor="department" className={labelBase}>Department</label>
                            <Dropdown

                                value={DEPARTMENT_OPTIONS[0]}
                                onChange={null}
                                options={DEPARTMENT_OPTIONS}
                                placeholder="Select your department"

                            />
                        </div>

                        {/* Semester & Batch */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="semester" className={labelBase}>Year of study</label>
                                <Dropdown

                                    value={SEMESTER_OPTIONS[0]}
                                    onChange={null}
                                    options={SEMESTER_OPTIONS}
                                    placeholder="Select your year of study"

                                />
                            </div>
                            <div>
                                <label htmlFor="batch" className={labelBase}>Batch</label>
                                <Dropdown

                                    value={BATCH_OPTIONS[0]}
                                    onChange={null}
                                    options={BATCH_OPTIONS}
                                    placeholder="Select your batch"

                                />
                            </div>
                        </div>

                        {/* Position */}
                        <div>
                            <label htmlFor="position" className={labelBase}>Position</label>
                            <Dropdown

                                value={POSITION_OPTIONS[0]}
                                onChange={null}
                                options={POSITION_OPTIONS}
                                placeholder="Select your position"

                            />
                        </div>

                        {/* Age & Party */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="age" className={labelBase}>Age</label>
                                <input id="age" name="age" type="number" min="18" max="40" placeholder="Enter your age" value={form.age} onChange={handleChange} className={inputBase} />
                            </div>
                            <div>
                                <label htmlFor="party" className={labelBase}>Party</label>
                                <Dropdown

                                    value={PARTY_OPTIONS[0]}
                                    onChange={null}
                                    options={PARTY_OPTIONS}
                                    placeholder="Select your party"

                                />
                            </div>
                        </div>

                        {/* Contact number */}
                        <div>
                            <label htmlFor="contactNumber" className={labelBase}>Contact number</label>
                            <input id="contactNumber" name="contactNumber" type="tel" placeholder="Contact number" value={form.contactNumber} onChange={handleChange} className={inputBase} />
                        </div>

                        {/* Club & Role */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="club" className={labelBase}>Club</label>
                                <Dropdown

                                    value={CLUB_OPTIONS[0]}
                                    onChange={null}
                                    options={CLUB_OPTIONS}
                                    placeholder="Select a club"

                                />
                            </div>
                            <div>
                                <label htmlFor="role" className={labelBase}>Role</label>
                                <input id="role" name="role" type="text" placeholder="Enter your role" value={form.role} onChange={handleChange} className={inputBase} />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className={labelBase}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Type your message here..."
                                value={form.message}
                                onChange={handleChange}
                                className={`${inputBase} resize-none`}
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full bg-[#000000] hover:bg-[#0101DB] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[15px] py-4 rounded-2xl transition-colors duration-300 tracking-wide mt-1"
                        >
                            {isPending ? 'Creating...' : 'Create Candidate'}
                        </button>

                    </form>
                </div>

            </div>
        </section>
    )
}