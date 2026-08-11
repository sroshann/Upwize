import React from 'react'
import backgroundImage from '../../../assets/Common/Shape Image.png'

function BeforeElection() {

    return (

        <section class="bg-gradient-to-b from-[#0865FF] to-white text-black min-h-screen flex flex-col antialiased bg-grid relative">

            {/* <!-- Main Content (Hero) --> */}
            <main
                class="flex-grow flex flex-col justify-start items-center px-[20px] md:px-[80px] pt-15 pb-20 relative z-10 w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                    className="flex md:hidden w-full flex-col text-center mt-12 bg-[#131313]/90 backdrop-blur-md p-6 border border-[#444748]">
                    <h1 className="text-[40px] leading-tight tracking-[-0.02em] font-bold uppercase text-white mb-6">
                        START A<br />
                        NEW WAVE
                    </h1>
                    <p className="text-base leading-6 font-normal text-white mb-8 px-4">
                        Configure all the required details, including political associations, positions, candidates, and
                        administrators, to host a new election.
                    </p>
                </div>

                {/* <!-- Bento Grid --> */}
                <div className="w-full max-w-7xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 font-['Plus_Jakarta_Sans']">
                    {/* Card 1: Add a political association */}
                    <div className="bg-[#f9f9f9] rounded-[32px] p-8 shadow-sm flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-black mb-1">Add a political association</h2>
                            <p className="text-gray-500 mb-8">Create an identity that can people follow</p>
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
                            <button className="w-full bg-[#0865FF] hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-full flex justify-between items-center transition-colors">
                                <span className="text-lg">Register Association</span>
                                <div className="bg-black rounded-full p-1.5 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-[20px]">arrow_forward</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Add position of standing */}
                    <div className="bg-[#f9f9f9] rounded-[32px] p-8 shadow-sm flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-black mb-1">Add position of standing</h2>
                            <p className="text-gray-500 mb-8">Specify each roles or seats in which candidates can compete</p>
                        </div>
                        
                        <div className="bg-white rounded-3xl p-6 shadow-sm flex-grow flex flex-col">
                            <div className="flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="font-bold text-xl text-black">Election Positions</h3>
                                    <p className="text-gray-500 text-sm mt-1">Youth Democracy Front</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-2 cursor-pointer text-sm hover:bg-gray-50 transition-colors">
                                    <span className="text-gray-700">This Election</span>
                                    <span className="material-symbols-outlined text-gray-500 text-[18px]">expand_more</span>
                                </div>
                            </div>
                            
                            <div className="flex gap-6 justify-end items-center mb-6 text-[9px] font-bold text-gray-500">
                                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#0865FF]"></div> SEATS AVAILABLE</div>
                                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#0a1e43]"></div> NOMINATIONS</div>
                                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#EF4444]"></div> FILLED</div>
                            </div>

                            {/* Chart Approximation */}
                            <div className="relative flex-grow flex flex-col justify-end mt-2 min-h-[200px]">
                                {/* Grid lines */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
                                    {[50, 40, 30, 20, 10, 0].map(val => (
                                        <div key={val} className="flex items-center text-xs text-gray-400 w-full">
                                            <span className="w-6 text-right mr-3">{val}</span>
                                            <div className={`flex-grow border-b ${val === 10 ? 'border-dashed border-gray-300' : 'border-gray-100'}`}></div>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Bars */}
                                <div className="relative z-10 flex justify-between items-end pl-10 pr-2 w-full h-full pb-8">
                                    {/* Chairman */}
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="flex items-end gap-[3px] h-[160px]">
                                            <div className="w-4 md:w-5 bg-[#0865FF] rounded-t-md relative flex items-end justify-center h-[20%] text-white text-[9px] font-bold pb-1">1</div>
                                            <div className="w-4 md:w-5 bg-[#0a1e43] rounded-t-md relative flex items-end justify-center h-[30%] text-white text-[9px] font-bold pb-1">3</div>
                                            <div className="w-4 md:w-5 bg-[#EF4444] rounded-t-md relative flex items-end justify-center h-[20%] text-white text-[9px] font-bold pb-1">1</div>
                                        </div>
                                        <span className="text-[10px] text-gray-500 font-medium tracking-wide">Chairman</span>
                                    </div>
                                    {/* Vice Chairman */}
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="flex items-end gap-[3px] h-[160px]">
                                            <div className="w-4 md:w-5 bg-[#0865FF] rounded-t-md relative flex items-end justify-center h-[20%] text-white text-[9px] font-bold pb-1">1</div>
                                            <div className="w-4 md:w-5 bg-[#0a1e43] rounded-t-md relative flex items-end justify-center h-[25%] text-white text-[9px] font-bold pb-1">2</div>
                                            <div className="w-4 md:w-5 text-[#EF4444] relative flex items-end justify-center h-[10%] text-[10px] font-bold pb-1">0</div>
                                        </div>
                                        <span className="text-[10px] text-gray-500 font-medium tracking-wide">Vice Chairman</span>
                                    </div>
                                    {/* General Secretary */}
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="flex items-end gap-[3px] h-[160px]">
                                            <div className="w-4 md:w-5 bg-[#0865FF] rounded-t-md relative flex items-end justify-center h-[20%] text-white text-[9px] font-bold pb-1">1</div>
                                            <div className="w-4 md:w-5 bg-[#0a1e43] rounded-t-md relative flex items-end justify-center h-[40%] text-white text-[9px] font-bold pb-1">4</div>
                                            <div className="w-4 md:w-5 bg-[#EF4444] rounded-t-md relative flex items-end justify-center h-[20%] text-white text-[9px] font-bold pb-1">1</div>
                                        </div>
                                        <span className="text-[10px] text-gray-500 font-medium whitespace-nowrap tracking-wide">General Secretary</span>
                                    </div>
                                    {/* Joint Secretary */}
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="flex items-end gap-[3px] h-[160px]">
                                            <div className="w-4 md:w-5 bg-[#0865FF] rounded-t-md relative flex items-end justify-center h-[25%] text-white text-[9px] font-bold pb-1">2</div>
                                            <div className="w-4 md:w-5 bg-[#0a1e43] rounded-t-md relative flex items-end justify-center h-[45%] text-white text-[9px] font-bold pb-1">5</div>
                                            <div className="w-4 md:w-5 bg-[#EF4444] rounded-t-md relative flex items-end justify-center h-[20%] text-white text-[9px] font-bold pb-1">1</div>
                                        </div>
                                        <span className="text-[10px] text-gray-500 font-medium whitespace-nowrap tracking-wide">Joint Secretary</span>
                                    </div>
                                    {/* Treasurer */}
                                    <div className="flex flex-col items-center gap-3 hidden md:flex">
                                        <div className="flex items-end gap-[3px] h-[160px]">
                                            <div className="w-4 md:w-5 bg-[#0865FF] rounded-t-md relative flex items-end justify-center h-[20%] text-white text-[9px] font-bold pb-1">1</div>
                                            <div className="w-4 md:w-5 bg-[#0a1e43] rounded-t-md relative flex items-end justify-center h-[30%] text-white text-[9px] font-bold pb-1">3</div>
                                            <div className="w-4 md:w-5 bg-[#EF4444] rounded-t-md relative flex items-end justify-center h-[20%] text-white text-[9px] font-bold pb-1">1</div>
                                        </div>
                                        <span className="text-[10px] text-gray-500 font-medium tracking-wide">Treasurer</span>
                                    </div>
                                    {/* Executive Member */}
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="flex items-end gap-[3px] h-[160px]">
                                            <div className="w-4 md:w-5 bg-[#0865FF] rounded-t-md relative flex items-end justify-center h-[40%] text-white text-[9px] font-bold pb-1">10</div>
                                            <div className="w-4 md:w-5 bg-[#0a1e43] rounded-t-md relative flex items-end justify-center h-[60%] text-white text-[9px] font-bold pb-1">18</div>
                                            <div className="w-4 md:w-5 bg-[#EF4444] rounded-t-md relative flex items-end justify-center h-[25%] text-white text-[9px] font-bold pb-1">4</div>
                                        </div>
                                        <span className="text-[10px] text-gray-500 font-medium whitespace-nowrap tracking-wide">Executive Member</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Create candidates */}
                    <div className="bg-[#f9f9f9] rounded-[32px] p-8 shadow-sm flex flex-col justify-between overflow-hidden">
                        <div>
                            <h2 className="text-2xl font-bold text-black mb-1">Create candidates</h2>
                            <p className="text-gray-500 mb-8">Add details of individuals who can lead tomorrow</p>
                        </div>
                        
                        <div className="bg-white rounded-3xl p-6 shadow-sm flex-grow relative min-h-[350px] flex items-center justify-center">
                            
                            {/* Blue Card */}
                            <div className="absolute w-[240px] bg-[#0865FF] text-white rounded-3xl p-5 shadow-2xl transform -rotate-[10deg] -translate-x-28 z-10 transition-transform hover:z-40 hover:-translate-y-4">
                                <div className="flex gap-3 items-start mb-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border border-white/20">
                                        <span className="material-symbols-outlined text-white opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                                    </div>
                                    <div className="pt-1">
                                        <div className="font-bold text-base leading-tight">Arjun Menon</div>
                                        <div className="text-[10px] opacity-80 mt-1">Chairman Candidate</div>
                                        <div className="text-[10px] opacity-80">Youth Democracy Front</div>
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-8">
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
                            <div className="absolute w-[240px] bg-[#FF6B2B] text-white rounded-3xl p-5 shadow-2xl transform -rotate-3 -translate-x-4 z-20 transition-transform hover:z-40 hover:-translate-y-4">
                                <div className="flex gap-3 items-start mb-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border border-white/20">
                                        <span className="material-symbols-outlined text-white opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                                    </div>
                                    <div className="pt-1">
                                        <div className="font-bold text-base leading-tight">Meera Nair</div>
                                        <div className="text-[10px] opacity-80 mt-1">Vice Chairman Candidate</div>
                                        <div className="text-[10px] opacity-80">Youth Democracy Front</div>
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-8">
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
                            <div className="absolute w-[240px] bg-[#EF4444] text-white rounded-3xl p-5 shadow-2xl transform rotate-[8deg] translate-x-24 z-30 transition-transform hover:z-40 hover:-translate-y-4">
                                <div className="flex gap-3 items-start mb-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border border-white/20">
                                        <span className="material-symbols-outlined text-white opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                                    </div>
                                    <div className="pt-1">
                                        <div className="font-bold text-base leading-tight">Rohan Pillai</div>
                                        <div className="text-[10px] opacity-80 mt-1">General Secretary Candidate</div>
                                        <div className="text-[10px] opacity-80">Youth Democracy Front</div>
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-8">
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
                    <div className="bg-[#f9f9f9] rounded-[32px] p-8 shadow-sm flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-black mb-1">Add admins</h2>
                            <p className="text-gray-500 mb-8">Create one more admin who can handle more</p>
                        </div>
                        
                        <div className="bg-white rounded-3xl p-6 shadow-sm flex-grow flex flex-col gap-6">
                            
                            <div className="flex gap-4">
                                <div className="flex-grow bg-[#F8F9FA] rounded-full px-5 py-3.5 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-gray-500">search</span>
                                    <input type="text" placeholder="Search" className="bg-transparent outline-none text-gray-700 w-full placeholder-gray-500 text-sm font-medium" />
                                </div>
                                <button className="bg-[#0a0a0a] text-white w-[52px] h-[52px] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-gray-800 transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">tune</span>
                                </button>
                            </div>

                            <div className="border border-gray-100 rounded-2xl p-5 flex justify-between items-start">
                                <div className="flex gap-4 items-center">
                                    <div className="w-16 h-16 bg-[#DCE8FE] rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                                        <span className="material-symbols-outlined text-[#0865FF] text-[36px]" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[22px] text-black">Arjun Menon</h3>
                                        <p className="text-gray-500 text-sm mb-1.5">Election Administrator</p>
                                        <div className="flex items-center gap-1.5 text-[#0865FF] text-xs font-bold">
                                            <span className="material-symbols-outlined text-[#0865FF]" style={{fontSize: '16px', fontVariationSettings: "'FILL' 1"}}>verified</span> Super Admin
                                        </div>
                                    </div>
                                </div>
                                <button className="text-gray-700 hover:text-black pt-2">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 600" }}>share</span>
                                </button>
                            </div>

                            <div className="bg-[#FAFAFA] rounded-3xl p-5 border border-gray-50">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="bg-[#EBE5FF] text-[#8155FF] w-[34px] h-[34px] rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[#8155FF]" style={{fontSize: '20px', fontVariationSettings: "'FILL' 1"}}>receipt_long</span>
                                    </div>
                                    <h4 className="font-bold text-black text-lg">Recent Activity</h4>
                                </div>
                                
                                <div className="flex flex-col gap-4">
                                    {/* Activity 1 */}
                                    <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-[#DCFCE7] text-[#22C55E] w-9 h-9 rounded-full flex items-center justify-center">
                                                <span className="material-symbols-outlined" style={{fontSize: '20px', fontVariationSettings: "'FILL' 1"}}>person_add</span>
                                            </div>
                                            <div className="text-[13px]">
                                                <span className="font-bold text-black">Added new admin</span> <span className="text-gray-500">Priya Nair</span>
                                            </div>
                                        </div>
                                        <span className="text-gray-400 text-[11px] font-medium">Today, 10:30 AM</span>
                                    </div>
                                    
                                    {/* Activity 2 */}
                                    <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-[#E0F2FE] text-[#3B82F6] w-9 h-9 rounded-full flex items-center justify-center">
                                                <span className="material-symbols-outlined" style={{fontSize: '18px', fontVariationSettings: "'FILL' 1"}}>edit</span>
                                            </div>
                                            <div className="text-[13px]">
                                                <span className="font-bold text-black">Updated position</span> <span className="text-gray-500">Vice Chairman</span>
                                            </div>
                                        </div>
                                        <span className="text-gray-400 text-[11px] font-medium">Today, 09:45 AM</span>
                                    </div>
                                    
                                    {/* Activity 3 */}
                                    <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-[#FFEDD5] text-[#F97316] w-9 h-9 rounded-full flex items-center justify-center">
                                                <span className="material-symbols-outlined" style={{fontSize: '20px', fontVariationSettings: "'FILL' 1"}}>group</span>
                                            </div>
                                            <div className="text-[13px]">
                                                <span className="font-bold text-black">Assigned roles</span> <span className="text-gray-500">to 2 admins</span>
                                            </div>
                                        </div>
                                        <span className="text-gray-400 text-[11px] font-medium">Yesterday, 04:20 PM</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
        </section>

    )

}

export default BeforeElection