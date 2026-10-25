import React, { useRef, useState } from 'react'
import { addPartyFormik } from '../../../formik/admin/before-election.formik'
import toast from 'react-hot-toast'
import { toastStyle } from '../../../lib/toast.lib'
import { validateImage } from '../../../utils/validate.utils'

function FormCard() {

    const [logoPreview, setLogoPreview] = useState(null)
    const fileInputRef = useRef(null)

    const formik = addPartyFormik({ setLogoPreview, fileInputRef })

    const handleLogoUpload = (e) => {

        const file = e.target.files[0]
        if (!file) return

        // Validating uploaded image
        const { error, message } = validateImage(file)
        if (error) {
            toast.error(message, { style: toastStyle })
            e.target.value = ''
            return
        }

        const reader = new FileReader()
        reader.onloadend = () => {
            setLogoPreview(reader.result)
            formik.setFieldValue('logo', reader.result)
        }
        reader.readAsDataURL(file)
    }

    return (
        <div className="w-full bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-7 shadow-2xl shadow-black/10">

            {/* ── Upload Logo ── */}
            <p className="text-[#000000] text-sm font-semibold mb-2.5">Upload logo</p>

            <div className="flex items-center gap-4 mb-5">

                {/* Upload button (hidden when preview exists) */}
                {!logoPreview && (
                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-xl bg-[#F8F8F8] border border-[#E0E0E0] flex flex-col items-center justify-center hover:border-[#0865FF] hover:bg-blue-50 transition-all duration-200 cursor-pointer flex-shrink-0 gap-1"
                    >
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                            <path d="M12 5v14M5 12h14" stroke="#616161" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span className="text-[#616161] text-[10px] font-medium leading-none">PNG only</span>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/png"
                            className="hidden"
                            onChange={handleLogoUpload}
                        />
                    </button>
                )}

                {/* Logo preview */}
                {logoPreview && (
                    <div className="relative flex-shrink-0">
                        <img
                            src={logoPreview}
                            alt="Logo preview"
                            className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-xl object-contain border border-[#E0E0E0] bg-[#F8F8F8]"
                        />
                        <button
                            type="button"
                            onClick={() => {
                                setLogoPreview(null)
                                if (fileInputRef.current) fileInputRef.current.value = ''
                                formik.setFieldValue('logo', null)
                            }}
                            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#E64240] flex items-center justify-center text-white hover:bg-red-600 transition-all duration-200 cursor-pointer shadow-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Helper text */}
                <div className="flex flex-col gap-1">
                    <p className="text-[#616161] text-[12px] sm:text-[13px] font-normal leading-relaxed">
                        Upload a PNG with a transparent background for best display results.
                    </p>
                    {logoPreview && (
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="text-[#0865FF] text-[12px] font-semibold hover:underline w-fit cursor-pointer"
                        >
                            Change image
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/png"
                                className="hidden"
                                onChange={handleLogoUpload}
                            />
                        </button>
                    )}
                </div>
            </div>

            {/* ── Form Fields ── */}
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">

                {/* Full name */}
                <div>
                    <label className="block text-[#000000] text-sm font-semibold mb-1.5">
                        Full name
                    </label>
                    <input
                        type="text"
                        {...formik.getFieldProps('fullName')}
                        placeholder="Provide full name of association"
                        className="bg-[#F8F8F8] w-full border border-[#E0E0E0] rounded-xl px-4 py-2.5 text-sm text-[#000000] placeholder-[#616161] font-normal focus:outline-none focus:border-[#0865FF] focus:ring-1 focus:ring-[#0865FF] transition-all duration-200"
                    />
                    {formik.touched.fullName && formik.errors.fullName && (
                        <p className="text-[#E64240] text-xs mt-1 font-medium">{formik.errors.fullName}</p>
                    )}
                </div>

                {/* Short name + Color picker */}
                <div className="flex gap-3">
                    <div className="flex-1 min-w-0">
                        <label className="block text-[#000000] text-sm font-semibold mb-1.5">
                            Short name
                        </label>
                        <input
                            type="text"
                            {...formik.getFieldProps('shortName')}
                            placeholder="Short name"
                            className="bg-[#F8F8F8] w-full border border-[#E0E0E0] rounded-xl px-4 py-2.5 text-sm text-[#000000] placeholder-[#616161] font-normal focus:outline-none focus:border-[#0865FF] focus:ring-1 focus:ring-[#0865FF] transition-all duration-200"
                        />
                        {formik.touched.shortName && formik.errors.shortName && (
                            <p className="text-[#E64240] text-xs mt-1 font-medium">{formik.errors.shortName}</p>
                        )}
                    </div>

                    <div className="flex-1 min-w-0">
                        <label className="block text-[#000000] text-sm font-semibold mb-1.5">
                            Choose a color
                        </label>
                        <div className="flex items-center bg-[#F8F8F8] border border-[#E0E0E0] rounded-xl px-3 py-2 gap-2 h-[42px] focus-within:border-[#0865FF] focus-within:ring-1 focus-within:ring-[#0865FF] transition-all duration-200">
                            <span className="text-sm text-[#616161] font-normal flex-1 truncate uppercase tracking-wider">
                                {formik.values.color}
                            </span>
                            <label className="cursor-pointer flex-shrink-0 relative">
                                <input
                                    type="color"
                                    {...formik.getFieldProps('color')}
                                    className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                                />
                                <span
                                    className="block w-6 h-6 rounded-full border-2 border-white shadow-md transition-transform duration-200 hover:scale-110"
                                    style={{ backgroundColor: formik.values.color }}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-[#000000] text-sm font-semibold mb-1.5">
                        Description
                    </label>
                    <textarea
                        {...formik.getFieldProps('description')}
                        placeholder="Describe your association in the form of a slogan, reflecting your perspectives and objectives"
                        rows={4}
                        className="bg-[#F8F8F8] w-full border border-[#E0E0E0] rounded-xl px-4 py-2.5 text-sm text-[#000000] placeholder-[#616161] font-normal focus:outline-none focus:border-[#0865FF] focus:ring-1 focus:ring-[#0865FF] transition-all duration-200 resize-none leading-relaxed"
                    />
                    {formik.touched.description && formik.errors.description && (
                        <p className="text-[#E64240] text-xs mt-1 font-medium">{formik.errors.description}</p>
                    )}
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="w-full bg-[#0101DB] hover:bg-[#0865FF] text-white font-bold text-sm sm:text-base py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 mt-1 cursor-pointer"
                >
                    Create association
                </button>

            </form>
        </div>
    )
}

export default FormCard