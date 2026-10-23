import React, { useRef, useState } from 'react'
import { pages } from './NavbarData'
import { useNavigate } from 'react-router-dom'

function AllPages() {

    const navigate = useNavigate()
    const hideTimeout = useRef(null)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    // Hovering helpers
    const handleMouseEnter = () => {
        clearTimeout(hideTimeout.current)
        setIsClosing(false)
        setDropdownOpen(true)
    }
    const handleMouseLeave = () => {
        hideTimeout.current = setTimeout(() => setIsClosing(true), 150)
    }

    // This is used to play the dropdown closing animation,
    // If a element is toggled using a boolean state, whenever the state is made false,
    // react will instantly remove the element from DOM,
    // so there will be no time for performing css animation.
    const handleAnimationEnd = () => {
        if (isClosing) setDropdownOpen(false)
    }

    const handleNavigate = (path) => {
        navigate(path)
        setDropdownOpen(false)
    }

    return (

        <div
            className="relative"
        >
            <button
                className="flex items-center gap-1 px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer select-none"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                All pages
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown panel */}
            {(dropdownOpen) && (
                <div
                    className="absolute left-0 top-full mt-2 w-72 bg-[#1a1a2e] rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
                    style={{
                        animation: isClosing
                            ? 'dropdownFadeOut 0.18s ease-in forwards'
                            : 'dropdownFadeIn 0.18s ease-out',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onAnimationEnd={handleAnimationEnd}
                >
                    <div className="p-3 grid grid-cols-2 gap-x-2 gap-y-1">
                        {pages.map((group) => (
                            <div key={group.group}>
                                <p className="px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-1">
                                    {group.group}
                                </p>
                                {group.items.map((item) => (
                                    <button
                                        key={item.path}
                                        onClick={() => handleNavigate(item.path)}
                                        className="w-full text-left px-3 py-2 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-150 cursor-pointer"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Dropdown animation keyframe */}
            <style>{`
                @keyframes dropdownFadeIn {
                    from { opacity: 0; transform: translateY(-6px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes dropdownFadeOut {
                    from { opacity: 1; transform: translateY(0); }
                    to   { opacity: 0; transform: translateY(-6px); }
                }
            `}</style>

        </div>

    )

}

export default AllPages