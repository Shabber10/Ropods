"use client";

import React, { useEffect, useState } from "react";

export const AnimatedBackground = () => {
    const [particles] = useState(() => {
        const colors = ['#00e5ff', '#00ff88', '#9d00ff', '#ff3366'];
        return Array.from({ length: 60 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * -20,
            color: colors[Math.floor(Math.random() * colors.length)],
            xAnim: Math.random() * 10 - 5,
            opAnim: Math.random() * 0.7 + 0.3
        }));
    });

    const [lines] = useState(() => {
        return Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            y: Math.random() * 100,
            width: Math.random() * 20 + 5,
            duration: Math.random() * 15 + 10,
            delay: Math.random() * -15,
        }));
    });

    return (
        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none -z-[100] transform-gpu"
             style={{ background: 'linear-gradient(135deg, #050014 0%, #0a1128 50%, #0f3d6b 100%)' }}>
            <style>{`
                @keyframes orb1 { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.1); } }
                @keyframes orb2 { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.2); } }
                @keyframes orb3 { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1); } }
                @keyframes wave1 { 0%, 100% { transform: translateY(0); opacity: 0.5; } 50% { transform: translateY(20px); opacity: 0.9; } }
                @keyframes wave2 { 0%, 100% { transform: translateY(0); opacity: 0.5; } 50% { transform: translateY(-25px); opacity: 0.8; } }
                @keyframes meteor { 
                    0% { transform: translate(-50vw, 150vh) rotate(-38deg); opacity: 0; } 
                    10% { opacity: 1; } 
                    80% { opacity: 1; } 
                    100% { transform: translate(150vw, -50vh) rotate(-38deg); opacity: 0; } 
                }
                @keyframes particleDrift {
                    0% { transform: translate(0, 0) rotate(0deg); opacity: 0; filter: brightness(1) drop-shadow(0 0 var(--glow-size) var(--glow-color)); }
                    20% { opacity: var(--max-op); }
                    50% { filter: brightness(2) drop-shadow(0 0 calc(var(--glow-size) * 2) var(--glow-color)); }
                    80% { opacity: var(--max-op); }
                    100% { transform: translate(var(--end-x), -20vh) rotate(360deg); opacity: 0; filter: brightness(1) drop-shadow(0 0 var(--glow-size) var(--glow-color)); }
                }
            `}</style>

            {/* Base Intense Glows */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#3d0099] blur-[140px]"
                style={{ animation: 'orb1 10s infinite ease-in-out' }}
            />
            <div
                className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#ff0055]/30 blur-[150px]"
                style={{ animation: 'orb2 14s infinite ease-in-out -2s' }}
            />
            <div
                className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-[#00e5ff]/20 blur-[120px]"
                style={{ animation: 'orb3 12s infinite ease-in-out -5s' }}
            />

            {/* Dense Parallel Wave Curves (Vector Background style) */}
            <div className="absolute inset-0 opacity-80">
                <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ff0055" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#ff0055" stopOpacity="1" />
                            <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.2" />
                        </linearGradient>
                        <linearGradient id="wave2" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#00e5ff" stopOpacity="1" />
                            <stop offset="100%" stopColor="#ff0055" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                    <g style={{ transformOrigin: '50% 50%', transform: 'rotate(-15deg)' }}>
                        {Array.from({ length: 15 }).map((_, i) => (
                            <path
                                key={`waveA-${i}`}
                                d={`M-200,${300 + i * 12} Q400,${100 + i * 15} 800,${400 + i * 12} T2000,${300 + i * 12}`}
                                fill="none"
                                stroke="url(#wave1)"
                                strokeWidth="1.5"
                                style={{
                                    animation: `wave1 ${8 + i * 0.2}s infinite ease-in-out`,
                                    filter: 'drop-shadow(0 0 6px rgba(255, 0, 85, 0.6))'
                                }}
                            />
                        ))}
                    </g>
                    <g style={{ transformOrigin: '50% 50%', transform: 'rotate(10deg)' }}>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <path
                                key={`waveB-${i}`}
                                d={`M-200,${600 + i * 15} Q500,${800 + i * 20} 1000,${500 + i * 15} T2200,${600 + i * 15}`}
                                fill="none"
                                stroke="url(#wave2)"
                                strokeWidth="2"
                                style={{
                                    animation: `wave2 ${10 + i * 0.3}s infinite ease-in-out ${0.5}s`,
                                    filter: 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.6))'
                                }}
                            />
                        ))}
                    </g>
                </svg>
            </div>

            {/* Meteors */}
            {lines.map((line) => (
                <div
                    key={`meteor-${line.id}`}
                    className="absolute pointer-events-none origin-right"
                    style={{
                        top: `${line.y}vh`,
                        left: `${((line.y * 3.7) % 100) - 100}vw`,
                        width: `${line.width * 6}px`,
                        height: `2px`,
                        background: `linear-gradient(90deg, transparent, rgba(64, 255, 0, 0.4) 50%, #fff 100%)`,
                        boxShadow: `0 0 15px 3px rgba(0, 255, 17, 0.4)`,
                        animation: `meteor ${line.duration * 0.3}s infinite linear ${line.delay}s`
                    }}
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-white rounded-full shadow-[0_0_10px_4px_#40ff00ff]" />
                </div>
            ))}

            {/* Bright Floating Particles (Polygons / Triangles) */}
            {particles.map((p) => {
                const isTriangle = p.id % 2 === 0;
                const maxOp = p.opAnim < 0.7 ? p.opAnim + 0.3 : 1;
                return (
                    <div
                        key={`particle-${p.id}`}
                        className="absolute"
                        style={{
                            top: `${p.y}vh`,
                            left: `${p.x}vw`,
                            width: 0,
                            height: 0,
                            borderLeft: `${p.size + 1}px solid transparent`,
                            borderRight: `${p.size + 1}px solid transparent`,
                            borderBottom: isTriangle ? `${(p.size + 1) * 2}px solid ${p.color}` : "none",
                            borderTop: !isTriangle ? `${(p.size + 1) * 2}px solid ${p.color}` : "none",
                            "--max-op": maxOp,
                            "--end-x": `${p.xAnim * 2}vw`,
                            "--glow-color": p.color,
                            "--glow-size": `${p.size * 4}px`,
                            animation: `particleDrift ${p.duration}s infinite linear ${p.delay}s`
                        } as React.CSSProperties}
                    />
                );
            })}

            {/* Top Noise Overlay for texture */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
        </div>
    );
};
