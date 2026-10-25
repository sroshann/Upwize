import React from 'react'
import backgroundImage from '../../../../assets/Common/Shape Image.png'
import candidate from './BasicDetails'

export default function ViewCandidate() {
    return (
        <section
            className="text-black min-h-screen flex flex-col antialiased relative"
            style={{ background: 'linear-gradient(to bottom, #0865FF 30%, #5b9bff 55%, #ffffff 70%)' }}
        >
            {/* ── Shape Image + Grid overlay ── */}
            <div
                className="flex-grow w-full relative z-10"
                style={{
                    backgroundImage: `url(${backgroundImage}), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
                    backgroundSize: 'cover, 80px 80px, 80px 80px',
                    backgroundPosition: 'center, 0 0, 0 0',
                    backgroundRepeat: 'no-repeat, repeat, repeat',
                }}
            >

                {/* ════════════════════════════════════════
                    MOBILE LAYOUT  (hidden on md+)
                    ════════════════════════════════════════ */}
                <div className="md:hidden">

                    {/* Profile section */}
                    <div className="max-w-3xl mx-auto px-5 pt-10 pb-10">
                        <div className="flex flex-row items-start gap-5 w-full">

                            {/* Photo card */}
                            <div className="flex-shrink-0">
                                <div
                                    className="bg-white overflow-hidden"
                                    style={{
                                        borderRadius: '18px',
                                        width: '148px',
                                        height: '188px',
                                        padding: '6px',
                                        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                                    }}
                                >
                                    <img
                                        src={candidate.imgSrc}
                                        alt={`${candidate.firstName} ${candidate.lastName}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                            borderRadius: '12px',
                                            display: 'block',
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Candidate details */}
                            <div className="flex flex-col text-white flex-1 min-w-0" style={{ gap: '2px', paddingTop: '4px' }}>
                                <h1 style={{ fontSize: '36px', fontWeight: '900', lineHeight: '1.0', letterSpacing: '-0.5px', textTransform: 'uppercase', color: '#ffffff', margin: '0' }}>
                                    {candidate.firstName}
                                </h1>
                                <h1 style={{ fontSize: '36px', fontWeight: '900', lineHeight: '1.0', letterSpacing: '-0.5px', textTransform: 'uppercase', color: '#ffffff', margin: '0 0 6px 0' }}>
                                    {candidate.lastName}
                                </h1>
                                <p style={{ fontSize: '15px', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.92)', margin: '0 0 8px 0' }}>
                                    {candidate.position}
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                                    <p style={{ fontSize: '9.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#ffffff', margin: 0, lineHeight: '1.35' }}>{candidate.department}</p>
                                    <p style={{ fontSize: '9.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#ffffff', margin: 0 }}>{candidate.semBatch}</p>
                                    <p style={{ fontSize: '9.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#ffffff', margin: 0 }}>
                                        <span style={{ fontWeight: '900' }}>AGE : </span>{candidate.age}
                                    </p>
                                    <p style={{ fontSize: '9.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#ffffff', margin: '0 0 6px 0', lineHeight: '1.35' }}>{candidate.party}</p>
                                    <p style={{ fontSize: '9.5px', fontWeight: '700', color: 'rgba(255,255,255,0.88)', margin: 0, letterSpacing: '0.01em' }}>{candidate.email}</p>
                                    <p style={{ fontSize: '9.5px', fontWeight: '700', color: 'rgba(255,255,255,0.88)', margin: 0, letterSpacing: '0.01em' }}>{candidate.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tagline + About */}
                    <div className="max-w-3xl mx-auto px-5 pb-8" style={{ paddingTop: '4px' }}>
                        <h2 style={{ fontSize: '25px', fontWeight: '700', fontStyle: 'italic', color: 'rgba(255,255,255,0.88)', margin: '0 0 10px 0', lineHeight: '1.3' }}>
                            {candidate.tagline}
                        </h2>
                        <p style={{ fontSize: '14px', fontWeight: '400', color: 'rgba(255,255,255,0.88)', lineHeight: '1.65', margin: 0, maxWidth: '560px' }}>
                            {candidate.about}
                        </p>
                    </div>

                    {/* Clubs */}
                    <div className="max-w-3xl mx-auto px-5 pb-20" style={{ paddingTop: '28px' }}>
                        <h2 style={{ fontSize: '28px', fontWeight: '900', textTransform: 'uppercase', color: 'rgba(255,255,255,0.88)', margin: '0 0 18px 0', letterSpacing: '0.01em', lineHeight: '1.1' }}>
                            CLUBS AND RESPONSIBILITIES
                        </h2>
                        <div style={{ border: '1px solid #e0e0e0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.06)', background: '#ffffff' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#f8f8f8', borderBottom: '1px solid #e0e0e0' }}>
                                <div style={{ padding: '14px 24px', textAlign: 'center', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#000000', borderRight: '1px solid #e0e0e0' }}>CLUB NAME</div>
                                <div style={{ padding: '14px 24px', textAlign: 'center', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#000000' }}>ROLE</div>
                            </div>
                            {candidate.clubs.map((club, idx) => (
                                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: idx < candidate.clubs.length - 1 ? '1px solid #f0f0f0' : 'none', background: '#ffffff' }}>
                                    <div style={{ padding: '16px 20px', textAlign: 'center', borderRight: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                                        <p style={{ fontSize: '11px', fontWeight: '700', color: '#000000', margin: 0, lineHeight: '1.3' }}>{club.name}</p>
                                        <p style={{ fontSize: '9.5px', fontWeight: '400', color: '#555555', margin: 0, lineHeight: '1.4', maxWidth: '180px' }}>{club.fullName}</p>
                                    </div>
                                    <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ fontSize: '11px', fontWeight: '600', color: '#000000', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{club.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ════════════════════════════════════════
                    DESKTOP LAYOUT  (md and above)
                    ════════════════════════════════════════ */}
                <div className="hidden md:block">

                    {/* ── Profile Section ── */}
                    <div className="w-full px-14 lg:px-25 xl:px-50 pt-14 pb-14 pr-0">
                        <div className="flex flex-row items-start gap-10 lg:gap-16 w-full">

                            {/* Photo card */}
                            <div className="flex-shrink-0">
                                <div
                                    style={{
                                        background: '#ffffff',
                                        borderRadius: '28px',
                                        width: '260px',
                                        height: '330px',
                                        padding: '10px',
                                        boxShadow: '0 12px 48px rgba(0,0,0,0.22)',
                                    }}
                                >
                                    <img
                                        src={candidate.imgSrc}
                                        alt={`${candidate.firstName} ${candidate.lastName}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                            borderRadius: '20px',
                                            display: 'block',
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Candidate details */}
                            <div
                                className="flex flex-col text-white flex-1"
                                style={{ gap: '4px', paddingTop: '8px' }}
                            >
                                {/* First name */}
                                <h1
                                    style={{
                                        fontSize: 'clamp(60px, 7vw, 96px)',
                                        fontWeight: '900',
                                        lineHeight: '0.95',
                                        letterSpacing: '-1px',
                                        textTransform: 'uppercase',
                                        color: '#ffffff',
                                        margin: '0',
                                    }}
                                >
                                    {candidate.firstName}
                                </h1>

                                {/* Last name */}
                                <h1
                                    style={{
                                        fontSize: 'clamp(60px, 7vw, 96px)',
                                        fontWeight: '900',
                                        lineHeight: '0.95',
                                        letterSpacing: '-1px',
                                        textTransform: 'uppercase',
                                        color: '#ffffff',
                                        margin: '0 0 12px 0',
                                    }}
                                >
                                    {candidate.lastName}
                                </h1>

                                {/* Position */}
                                <p
                                    style={{
                                        fontSize: '30px',
                                        fontWeight: '900',
                                        letterSpacing: '0.18em',
                                        textTransform: 'uppercase',
                                        color: '#ffffff',
                                        margin: '0 0 16px 0',
                                    }}
                                >
                                    {candidate.position}
                                </p>

                                {/* Details */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>

                                    {/* Department */}
                                    <p
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.07em',
                                            color: '#ffffff',
                                            margin: 0,
                                            lineHeight: '1.4',
                                        }}
                                    >
                                        {candidate.department}
                                    </p>

                                    {/* Sem / Batch */}
                                    <p
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.07em',
                                            color: '#ffffff',
                                            margin: 0,
                                        }}
                                    >
                                        {candidate.semBatch}
                                    </p>

                                    {/* Age */}
                                    <p
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.07em',
                                            color: '#ffffff',
                                            margin: 0,
                                        }}
                                    >
                                        <span style={{ fontWeight: '900' }}>AGE : </span>
                                        {candidate.age}
                                    </p>

                                    {/* Party */}
                                    <p
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.07em',
                                            color: '#ffffff',
                                            margin: '0 0 10px 0',
                                            lineHeight: '1.4',
                                        }}
                                    >
                                        {candidate.party}
                                    </p>

                                    {/* Email */}
                                    <p
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: '700',
                                            color: 'rgba(255,255,255,0.88)',
                                            margin: 0,
                                            letterSpacing: '0.01em',
                                        }}
                                    >
                                        {candidate.email}
                                    </p>

                                    {/* Phone */}
                                    <p
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: '700',
                                            color: 'rgba(255,255,255,0.88)',
                                            margin: 0,
                                            letterSpacing: '0.01em',
                                        }}
                                    >
                                        {candidate.phone}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* ── Tagline + About ── */}
                    <div
                        className="w-full px-14 lg:px-25 xl:px-40 pb-12"
                        style={{ paddingTop: '8px' }}
                    >
                        <h2
                            style={{
                                fontSize: '32px',
                                fontWeight: '700',
                                fontStyle: 'italic',
                                color: 'rgba(255,255,255,0.88)',
                                margin: '0 0 14px 0',
                                lineHeight: '1.3',
                            }}
                        >
                            {candidate.tagline}
                        </h2>

                        <p
                            style={{
                                fontSize: '18px',
                                fontWeight: '400',
                                color: 'rgba(255,255,255,0.88)',
                                lineHeight: '1.7',
                                margin: 0,
                                maxWidth: 'none',
                                width: '100%',
                            }}
                        >
                            {candidate.about}
                        </p>
                    </div>


                    {/* ── Clubs and Responsibilities ── */}
                    <div
                        className="w-full px-14 lg:px-24 xl:px-32 pb-24"
                        style={{ paddingTop: '32px' }}
                    >
                        {/* Section heading */}
                        <h2
                            style={{
                                fontSize: 'clamp(32px, 4vw, 52px)',
                                fontWeight: '900',
                                textTransform: 'uppercase',
                                color: 'rgba(255,255,255,0.88)',
                                margin: '0 0 24px 0',
                                letterSpacing: '0.01em',
                                lineHeight: '1.1',
                            }}
                        >
                            CLUBS AND RESPONSIBILITIES
                        </h2>

                        {/* Table */}
                        <div
                            style={{
                                border: '1px solid #d8d8d8',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                                background: '#ffffff',
                            }}
                        >
                            {/* Header */}
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    background: '#f5f5f5',
                                    borderBottom: '1px solid #d8d8d8',
                                }}
                            >
                                <div
                                    style={{
                                        padding: '20px 40px',
                                        textAlign: 'center',
                                        fontSize: '14px',
                                        fontWeight: '800',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.14em',
                                        color: '#000000',
                                        borderRight: '1px solid #d8d8d8',
                                    }}
                                >
                                    CLUB NAME
                                </div>
                                <div
                                    style={{
                                        padding: '20px 40px',
                                        textAlign: 'center',
                                        fontSize: '14px',
                                        fontWeight: '800',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.14em',
                                        color: '#000000',
                                    }}
                                >
                                    ROLE
                                </div>
                            </div>

                            {/* Rows */}
                            {candidate.clubs.map((club, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        borderBottom: idx < candidate.clubs.length - 1 ? '1px solid #eeeeee' : 'none',
                                        background: '#ffffff',
                                        transition: 'background 0.15s',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                                    onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
                                >
                                    {/* Club name cell */}
                                    <div
                                        style={{
                                            padding: '22px 40px',
                                            textAlign: 'center',
                                            borderRight: '1px solid #eeeeee',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '4px',
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontSize: '14px',
                                                fontWeight: '700',
                                                color: '#000000',
                                                margin: 0,
                                                lineHeight: '1.3',
                                            }}
                                        >
                                            {club.name}
                                        </p>
                                        <p
                                            style={{
                                                fontSize: '12px',
                                                fontWeight: '400',
                                                color: '#555555',
                                                margin: 0,
                                                lineHeight: '1.4',
                                            }}
                                        >
                                            {club.fullName}
                                        </p>
                                    </div>

                                    {/* Role cell */}
                                    <div
                                        style={{
                                            padding: '22px 40px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: '14px',
                                                fontWeight: '700',
                                                color: '#000000',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.12em',
                                            }}
                                        >
                                            {club.role}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                {/* end desktop layout */}

            </div>
        </section>
    )
}
