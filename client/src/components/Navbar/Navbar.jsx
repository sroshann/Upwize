import { useState } from 'react'
import logoNav from '../../assets/Navbar/LogoNavbar.png'
import MobileNav from './MobileNav.jsx'
import AllPages from './AllPages.jsx'

function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="w-full bg-[#0865ff] text-[#f7f6ff] sticky top-0 z-50">
            <div className="flex justify-between items-center w-full px-4 md:px-10 py-4 max-w-[1280px] mx-auto h-20">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2 flex-shrink-0 hover:scale-95 duration-150 ease-in-out">
                    <img className="w-30" src={logoNav} alt="logo" />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-center space-x-2 flex-1">

                    {/* All Pages dropdown trigger */}
                    <AllPages />
                    <a href="#" className="px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">Pricing</a>
                    <a href="#" className="px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">Guidelines</a>
                    <a href="#" className="px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">About</a>
                </div>

                {/* CTA & Mobile Menu toggle */}
                <div className="flex items-center justify-end flex-shrink-0 gap-2">
                    <a
                        href="#"
                        className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors hover:scale-95 duration-150 shadow-sm"
                    >
                        Create admin
                    </a>

                    {/* Open and close the mobile menu */}
                    <button
                        aria-label="Toggle menu"
                        aria-expanded={mobileMenuOpen}
                        onClick={() => setMobileMenuOpen((p) => !p)}
                        className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {mobileMenuOpen && <MobileNav setMobileMenuOpen={setMobileMenuOpen} />}

        </nav>
    )
}

export default Navbar