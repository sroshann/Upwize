import React from 'react'
import backgroundImage from '../../../assets/Common/Shape Image.png'
import addPositionImg from '../../../assets/Admin/Before election/add-position.png'
import addGuidelines from '../../../assets/Admin/Before election/add-guidelines.png'

function BeforeElection() {

    return (

        <section class="bg-gradient-to-b from-[#0865FF] to-white text-black min-h-screen flex flex-col antialiased bg-grid relative">

            {/* <!-- Main Content (Hero) --> */}
            <main
                class="flex-grow flex flex-col justify-start items-center px-[20px] md:px-[80px] md:pt-15 pt-12 pb-20 relative z-10 w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})` }}>

                {/* <!-- Desktop Layout (Split) --> */}
                <div class="hidden md:flex w-full max-w-7xl mx-auto flex-col">
                    <h1 class="text-[120px] leading-none tracking-[-0.04em] font-bold uppercase text-left text-white w-full max-w-[1200px]">
                        START A NEW<br />
                        <span class="block text-right pr-20">WAVE</span>
                    </h1>
                    <div
                        class="w-full max-w-2xl text-left  mt-[-70px]">
                        <p class="text-xl leading-[30px] font-normal text-white">
                            Configure all the required details, including political associations, positions, candidates, and
                            administrators, to host a new election.
                        </p>
                    </div>
                </div>

                {/* <!-- Mobile Layout (Stacked) --> */}
                <div
                    className="flex md:hidden w-full flex-col text-center">
                    <h1 className="text-[60px] leading-[65px] tracking-[-0.02em] font-bold uppercase text-white mb-6">
                        START A<br />
                        NEW WAVE
                    </h1>
                    <p className="text-[20px] leading-[30px] font-normal text-white">
                        Configure all the required details, including political associations, positions, candidates, and
                        administrators, to host a new election.
                    </p>
                </div>

                {/* <!-- Bento Grid --> */}
                <div className="md:w-full w-[95%] max-w-7xl mx-auto md:mt-24 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    {/* Card 1: Add a political association */}
                    <div className="bg-[#f9f9f9] md:rounded-[32px] rounded-3xl p-8 shadow-sm flex flex-col justify-between transition-transform duration-300 md:hover:scale-106 hover:scale-104">
                        <div>
                            <h2 className="text-2xl font-bold text-black mb-1">Add a political association</h2>
                            <p className="text-gray-500 mb-6">Create an identity that can people follow</p>
                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-sm flex-grow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-[#0a1e43]">
                                    <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-black">Youth Democracy Front</h3>
                                    <p className="text-gray-500 text-sm mt-0.5">Registered Association</p>
                                </div>
                            </div>
                            <h4 className="font-bold text-black text-lg mb-2">About the Association</h4>
                            <p className="text-gray-600 mb-8 leading-relaxed font-light">
                                We are committed to transparency, equality, and people's participation in building a stronger democracy.
                                Join us in shaping a better future through your vote.
                            </p>
                            <button className="w-full bg-[#0865FF] hover:bg-blue-700 text-white font-medium md:py-4 py-2 md:px-6 px-4 rounded-full flex justify-between items-center transition-colors">
                                <span className="md:text-lg">Register Association</span>
                                <div className="bg-black rounded-full p-1.5 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-[20px]">arrow_forward</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Add position of standing */}
                    <div className="bg-[#f9f9f9] md:rounded-[32px] rounded-3xl p-8 shadow-sm flex flex-col justify-between transition-transform duration-300 md:hover:scale-106 hover:scale-104">
                        <div>
                            <h2 className="text-2xl font-bold text-black mb-1">Add position of standing</h2>
                            <p className="text-gray-500 mb-6">Specify each roles or seats in which candidates can compete</p>
                        </div>

                        <img src={addPositionImg} alt="add-position" className='h-[200px] lg:h-[335px]' />
                    </div>

                    {/* Card 3: Create candidates */}
                    <div className="bg-[#f9f9f9] md:rounded-[32px] rounded-3xl p-8 shadow-sm flex flex-col justify-between overflow-hidden transition-transform duration-300 md:hover:scale-106 hover:scale-104">
                        <div>
                            <h2 className="text-2xl font-bold text-black mb-1">Create candidates</h2>
                            <p className="text-gray-500 mb-6">Add details of individuals who can lead tomorrow</p>
                        </div>

                        <div className="flex-grow relative md:min-h-[350px] min-h-[100px] mt-[35px] md:mt-0 ml-[18px] md:ml-0 flex items-center justify-center">

                            {/* Blue Card */}
                            <div className="absolute md:w-[240px] w-[150px] bg-[#0865FF] text-white rounded-3xl md:p-5 p-4 shadow-2xl transform -rotate-[10deg] hover:-rotate-0 -translate-x-28 z-10 transition-transform hover:-translate-y-8">
                                <div className="flex gap-3 items-start mb-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border border-white/20">
                                        <span className="material-symbols-outlined text-white opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                                    </div>
                                    <div className="pt-1">
                                        <div className="font-bold text-base leading-tight">Arjun Menon</div>
                                        <div className="hidden md:block text-[10px] opacity-80 mt-1">Chairman Candidate</div>
                                        <div className="hidden md:block text-[10px] opacity-80">Youth Democracy Front</div>
                                    </div>
                                </div>
                                <div className="flex gap-2 md:mb-8 mb-4">
                                    <span className="bg-white text-[#0865FF] text-[10px] font-bold px-3 py-1 rounded-full">Verified</span>
                                    <span className="bg-white text-[#0865FF] text-[10px] font-bold px-3 py-1 rounded-full">Active</span>
                                </div>
                                <div className="flex justify-between items-end mt-4">
                                    <div>
                                        <div className="font-bold text-2xl leading-none mb-1">1,250+</div>
                                        <div className="text-xs opacity-90">Supporters</div>
                                    </div>
                                    <span className="material-symbols-outlined text-[32px] opacity-90" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
                                </div>
                            </div>

                            {/* Orange Card */}
                            <div className="absolute md:w-[240px] w-[150px] bg-[#FF6B2B] text-white rounded-3xl md:p-5 p-4 shadow-2xl transform -rotate-3 hover:-rotate-0 -translate-x-4 z-20 transition-transform hover:-translate-y-8">
                                <div className="flex gap-3 items-start mb-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border border-white/20">
                                        <span className="material-symbols-outlined text-white opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                                    </div>
                                    <div className="pt-1">
                                        <div className="font-bold text-base leading-tight">Meera Nair</div>
                                        <div className="hidden md:block text-[10px] opacity-80 mt-1">Vice Chairman Candidate</div>
                                        <div className="hidden md:block text-[10px] opacity-80">Youth Democracy Front</div>
                                    </div>
                                </div>
                                <div className="flex gap-2 md:mb-8 mb-4">
                                    <span className="bg-white text-[#FF6B2B] text-[10px] font-bold px-3 py-1 rounded-full">Verified</span>
                                    <span className="bg-white text-[#FF6B2B] text-[10px] font-bold px-3 py-1 rounded-full">Active</span>
                                </div>
                                <div className="flex justify-between items-end mt-4">
                                    <div>
                                        <div className="font-bold text-2xl leading-none mb-1">980+</div>
                                        <div className="text-xs opacity-90">Supporters</div>
                                    </div>
                                    <span className="material-symbols-outlined text-[32px] opacity-90" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
                                </div>
                            </div>

                            {/* Red Card */}
                            <div className="absolute md:w-[240px] w-[150px] bg-[#EF4444] text-white rounded-3xl md:p-5 p-4 shadow-2xl transform rotate-[8deg] hover:-rotate-0 translate-x-24 z-30 transition-transform hover:-translate-y-8">
                                <div className="flex gap-3 items-start mb-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border border-white/20">
                                        <span className="material-symbols-outlined text-white opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                                    </div>
                                    <div className="pt-1">
                                        <div className="font-bold text-base leading-tight">Rohan Pillai</div>
                                        <div className="hidden md:block text-[10px] opacity-80 mt-1">General Secretary Candidate</div>
                                        <div className="hidden md:block text-[10px] opacity-80">Youth Democracy Front</div>
                                    </div>
                                </div>
                                <div className="flex gap-2 md:mb-8 mb-4">
                                    <span className="bg-white text-[#EF4444] text-[10px] font-bold px-3 py-1 rounded-full">Verified</span>
                                    <span className="bg-white text-[#EF4444] text-[10px] font-bold px-3 py-1 rounded-full">Active</span>
                                </div>
                                <div className="flex justify-between items-end mt-4">
                                    <div>
                                        <div className="font-bold text-2xl leading-none mb-1">760+</div>
                                        <div className="text-xs opacity-90">Supporters</div>
                                    </div>
                                    <span className="material-symbols-outlined text-[32px] opacity-90" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Card 4: Add admins */}
                    <div className="bg-[#f9f9f9] md:rounded-[32px] rounded-3xl p-8 shadow-sm flex flex-col justify-between transition-transform duration-300 md:hover:scale-106 hover:scale-104">
                        <div>
                            <h2 className="text-2xl font-bold text-black mb-1">Create guidelines</h2>
                            <p className="text-gray-500 mb-6">Provide guidelines or steps that should be followed.</p>
                        </div>

                        <img src={addGuidelines} alt="add-position" className='h-[240px] lg:h-[390px] lg:rounded-3xl rounded-2xl' />
                    </div>

                </div>
            </main>
        </section>

    )

}

export default BeforeElection