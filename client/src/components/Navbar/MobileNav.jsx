import React, { useState } from 'react'
import { pages } from './NavbarData'
import { useNavigate } from 'react-router-dom'

function MobileNav({ setMobileMenuOpen }) {

    const navigate = useNavigate()
    const [mobileAllPagesOpen, setMobileAllPagesOpen] = useState(false)

    const handleNavigate = (path) => {
        navigate(path)
        setMobileMenuOpen(false)
        setMobileAllPagesOpen(false)
    }

    return (
        <div className="md:hidden bg-[#0865ff] border-t border-white/10 px-4 pb-4">
            <div className="flex flex-col gap-1 pt-2">

                {/* All Pages accordion (mobile) */}
                <button
                    onClick={() => setMobileAllPagesOpen((p) => !p)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors w-full text-left"
                >
                    All pages
                    <svg
                        className={`w-5 h-5 transition-transform duration-200 ${mobileAllPagesOpen ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {mobileAllPagesOpen && (
                    <div className="mx-2 mb-1 bg-[#1a1a2e]/60 rounded-xl overflow-hidden">
                        {pages.map((group) => (
                            <div key={group.group} className="px-3 py-2">
                                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-1 px-2">
                                    {group.group}
                                </p>
                                {group.items.map((item) => (
                                    <button
                                        key={item.path}
                                        onClick={() => handleNavigate(item.path)}
                                        className="w-full text-left px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-150"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                <a href="#" className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors">Pricing</a>
                <a href="#" className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors">Guidelines</a>
                <a href="#" className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors">About</a>
                <a href="#" className="mt-2 inline-flex items-center justify-center px-6 py-2.5 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors shadow-sm">
                    Create admin
                </a>
            </div>
        </div>
    )
}

export default MobileNav