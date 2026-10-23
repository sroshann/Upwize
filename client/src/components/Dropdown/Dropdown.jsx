import React, { useState } from 'react'

function Dropdown({ value, onChange, options, placeholder }) {
    const [open, setOpen] = useState(false)

    const placeholderText = placeholder || options[0]

    // Show all options; the placeholder is just for display/empty-state
    // const listOptions = options.filter((o) => o !== placeholderText)

    const displayValue = value && value !== "" ? value : placeholderText

    const handleSelect = (opt) => {
        onChange(opt)
        setOpen(false)
    }

    return (
        <div className="relative" style={{ fontFamily: "inherit" }}>
            {/* Trigger button */}
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className={[
                    "w-full flex items-center justify-between",
                    "bg-white border rounded-lg px-4 py-2.5",
                    "text-sm font-normal transition-all duration-200",
                    "focus:outline-none",
                    open
                        ? "border-[#0865FF] ring-1 ring-[#0865FF] bg-white"
                        : "border-[#E0E0E0] hover:border-[#0865FF]/50",
                    value && value !== "" ? "text-black" : "text-[#616161]",
                ].join(" ")}
            >
                <span className="truncate">{displayValue}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20" height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style={{
                        flexShrink: 0,
                        marginLeft: "8px",
                        color: "#616161",
                        transition: "transform 0.2s",
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                >
                    <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z" />
                </svg>
            </button>

            {/* Dropdown panel */}
            {open && (
                <>
                    {/* Backdrop */}
                    <div
                        style={{ position: "fixed", inset: 0, zIndex: 10 }}
                        onClick={() => setOpen(false)}
                    />
                    <div
                        style={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            zIndex: 20,
                            marginTop: "6px",
                            background: "#fff",
                            borderRadius: "16px",
                            border: "1px solid #EBEBEB",
                            boxShadow: "0 8px 32px 0 rgba(8,101,255,0.10), 0 2px 8px 0 rgba(0,0,0,0.08)",
                            overflow: "hidden",
                            animation: "customSelectFadeIn 0.15s ease",
                        }}
                    >
                        <ul
                            style={{
                                padding: "8px 0",
                                maxHeight: "224px",
                                overflowY: "auto",
                                margin: 0,
                                listStyle: "none",
                            }}
                            className="custom-dd-scroll"
                        >
                            {options.map((opt) => {
                                const isSelected = value === opt
                                return (
                                    <li key={opt}>
                                        <button
                                            type="button"
                                            onClick={() => handleSelect(opt)}
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                padding: "10px 16px",
                                                fontSize: "14px",
                                                textAlign: "left",
                                                border: "none",
                                                cursor: "pointer",
                                                background: isSelected ? "#EEF3FF" : "transparent",
                                                color: isSelected ? "#0865FF" : "#222",
                                                fontWeight: isSelected ? 600 : 400,
                                                transition: "background 0.12s",
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!isSelected) e.currentTarget.style.background = "#F5F7FF"
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!isSelected) e.currentTarget.style.background = "transparent"
                                            }}
                                        >
                                            <span>{opt}</span>
                                            {isSelected && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18" height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#0865FF"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    style={{ flexShrink: 0, marginLeft: "8px" }}
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            )}
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </>
            )}

            <style>{`
                @keyframes customSelectFadeIn {
                    from { opacity: 0; transform: translateY(-6px) scale(0.98); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }
                .custom-dd-scroll::-webkit-scrollbar { width: 4px; }
                .custom-dd-scroll::-webkit-scrollbar-track { background: transparent; }
                .custom-dd-scroll::-webkit-scrollbar-thumb { background: #D0D5DD; border-radius: 8px; }
                .custom-dd-scroll::-webkit-scrollbar-thumb:hover { background: #0865FF; }
            `}</style>
        </div>
    )
}

export default Dropdown