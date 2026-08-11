import logoNav from '../../Assets/Navbar/LogoNavbar.png'

function Navbar() {

    return (

        <nav className="w-full bg-[#0865ff] text-[#f7f6ff] sticky top-0 z-50">
            <div className="flex justify-between items-center w-full px-4 md:px-10 py-4 max-w-[1280px] mx-auto h-20">

                {/* <!-- Logo --> */}
                <a href="#" className="flex items-center gap-2 flex-shrink-0 hover:scale-95 duration-150 ease-in-out">
                    <img className='w-30' src={logoNav} alt="logo" />
                </a>

                {/* <!-- Desktop Navigation --> */}
                <div className="hidden md:flex items-center justify-center space-x-2 flex-1">
                    <a href="#" className="flex items-center gap-1 px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
                        All pages
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </a>
                    <a href="#" className="px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">Pricing</a>
                    <a href="#" className="px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">Features</a>
                </div>

                {/* <!-- CTA & Mobile Menu --> */}
                <div className="flex items-center justify-end flex-shrink-0 gap-2">
                    <a href="#" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors hover:scale-95 duration-150 shadow-sm">
                        Create admin
                    </a>

                    {/* <!-- Mobile Menu Button --> */}
                    <button id="menu-btn" aria-label="Open menu" aria-expanded="false" className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
                        <svg id="icon-menu" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        <svg id="icon-close" className="w-7 h-7 hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>

            {/* <!-- Mobile Menu Panel --> */}
            <div id="mobile-menu" className="hidden md:hidden bg-[#0865ff] border-t border-white/10 px-4 pb-4">
                <div className="flex flex-col gap-1 pt-2">
                    <a href="#" className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors">
                        All pages
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </a>
                    <a href="#" className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors">Pricing</a>
                    <a href="#" className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors">Features</a>
                    <a href="#" className="mt-2 inline-flex items-center justify-center px-6 py-2.5 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors shadow-sm">
                        Create admin
                    </a>
                </div>
            </div>
        </nav>

    )

}

export default Navbar