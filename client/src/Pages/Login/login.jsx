import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../../assets/Common/Shape Image.png'

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [admissionNumber, setAdmissionNumber] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // handle login logic here
    }

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0865FF] to-white antialiased overflow-hidden">

            {/* Background Grid & Shape Image Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${backgroundImage}), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
                    backgroundSize: 'cover, 80px 80px, 80px 80px',
                    backgroundPosition: 'center, 0 0, 0 0',
                    backgroundRepeat: 'no-repeat, repeat, repeat',
                }}
            />

            {/* Login Card */}
            <div className="relative z-10 w-full flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
                <div className="w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">

                    <div className="px-6 py-8 sm:px-10 sm:py-10">

                        {/* Heading */}
                        <div className="mb-7 sm:mb-8">
                            <h1 className="text-[26px] sm:text-[30px] lg:text-[32px] font-bold text-[#000000] leading-tight tracking-[-0.02em] mb-2 sm:mb-3">
                                Welcome back
                            </h1>
                            <p className="text-sm sm:text-[15px] leading-[1.6] font-normal text-[#616161] max-w-[320px]">
                                Sign in to explore, participate, and stay informed across your campus network.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">

                            {/* Admission Number */}
                            <div className="flex flex-col gap-1.5 sm:gap-2">
                                <label
                                    htmlFor="admissionNumber"
                                    className="text-sm sm:text-[15px] font-medium text-[#000000]"
                                >
                                    Admission number
                                </label>

                                <div className="relative flex items-center rounded-xl border border-[#E5E5E5] bg-[#F8F8F8] hover:border-[#0865FF] focus-within:border-[#0865FF] focus-within:ring-2 focus-within:ring-[#0865FF]/20 transition-all duration-200">
                                    <span className="pl-4 pr-2.5 flex-shrink-0 text-[#616161]">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                    </span>
                                    <input
                                        id="admissionNumber"
                                        type="text"
                                        value={admissionNumber}
                                        onChange={(e) => setAdmissionNumber(e.target.value)}
                                        placeholder="eg-240883"
                                        className="flex-1 py-3 sm:py-3.5 pr-4 bg-transparent text-sm sm:text-[15px] text-[#000000] placeholder-[#9CA3AF] font-normal outline-none"
                                    />
                                </div>


                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-1.5 sm:gap-2">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="text-sm sm:text-[15px] font-medium text-[#000000]"
                                    >
                                        Password
                                    </label>
                                    <Link
                                        to="/forgot-password"
                                        className="text-sm sm:text-[13.5px] font-medium text-[#0865FF] hover:text-[#0101DB] transition-colors duration-150"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>

                                <div className="relative flex items-center rounded-xl border border-[#E5E5E5] bg-[#F8F8F8] hover:border-[#0865FF] focus-within:border-[#0865FF] focus-within:ring-2 focus-within:ring-[#0865FF]/20 transition-all duration-200">
                                    <span className="pl-4 pr-2.5 flex-shrink-0 text-[#616161]">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                    </span>
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="flex-1 py-3 sm:py-3.5 bg-transparent text-sm sm:text-[15px] text-[#000000] placeholder-[#9CA3AF] font-normal outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="pr-4 pl-2 flex-shrink-0 text-[#616161] hover:text-[#0865FF] transition-colors duration-150 focus:outline-none"
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? (
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                                <line x1="1" y1="1" x2="23" y2="23" />
                                            </svg>
                                        ) : (
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Sign In Button */}
                            <button
                                id="sign-in-btn"
                                type="submit"
                                className="w-full flex items-center justify-center gap-2.5 py-3.5 sm:py-4 px-6 bg-[#000000] hover:bg-[#1a1a1a] active:bg-[#333333] text-white text-sm sm:text-[15px] font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0865FF] group mt-1"
                            >
                                Sign in
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-transform duration-200 group-hover:translate-x-1"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>

                        </form>

                        {/* Sign Up Link */}
                        <p className="mt-7 sm:mt-8 text-center text-sm sm:text-[14px] font-normal text-[#616161]">
                            Don&apos;t have an account?{' '}
                            <Link
                                to="/register"
                                className="font-semibold text-[#0865FF] hover:text-[#0101DB] transition-colors duration-150"
                            >
                                Sign up
                            </Link>
                        </p>

                    </div>
                </div>
            </div>

        </section>
    )
}
