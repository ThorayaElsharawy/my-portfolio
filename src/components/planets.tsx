"use client"

import { useState } from "react"
import { FaGithubAlt } from "react-icons/fa"
import { PiReadCvLogo } from "react-icons/pi"
import { TfiLinkedin } from "react-icons/tfi"


export default function Planets() {
    let stars = []
    for (let i = 0; i < 300; i++) {

    }

    return (
        <svg className='m-auto'
            width="100%" height="100%"
            viewBox="0 0 200 150"
            xmlns="http://www.w3.org/2000/svg">
            <defs>

                <radialGradient id="radialGradient" cx="25%" cy="25%" r="75%">
                    <stop offset="0%" stopColor="#3CF3FF" />
                    <stop offset="100%" stopColor="#FA00FF" />
                </radialGradient>
                <filter id="dropShadow" r="-50%" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow
                        dx="0"
                        dy="0"
                        stdDeviation="5"
                        floodColor="#89d3e3"
                        floodOpacity="0.3"
                    />
                </filter>
                <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feComponentTransfer in="SourceAlpha">
                        <feFuncA type="table" tableValues="1 0" />
                    </feComponentTransfer>
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feOffset dx="0" dy="0" result="offsetBlur" />
                    <feFlood floodColor="black" result="color" />
                    <feComposite in2="offsetBlur" operator="in" />
                    <feComposite in2="SourceAlpha" operator="in" />
                    <feComposite operator="over" />
                </filter>

                <linearGradient id='moonGradient' x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3CF3FF" />
                    <stop offset="10%" stopColor="#3CF3FF" />
                    <stop offset="80%" stopColor="#FA00FF" />
                </linearGradient>

                <radialGradient id="sphere" cx="35%" cy="35%" r="70%">
                    <stop offset="0%" stopColor="#4cafc6" />
                    <stop offset="80%" stopColor="#43708b" />
                    <stop offset="95%" stopColor="#3e1149" />
                    <stop offset="100%" stopColor="#251139" />
                </radialGradient>
            </defs>

            <g transform="translate(29 66)">
                <circle
                    cx="55"
                    cy="55"
                    r="55"
                    fill="url(#radialGradient)"
                    filter="url(#dropShadow)"
                />
                <circle cx="55" cy="55" r="55" fill="url(#moonGradient)" filter="url(#glow)" opacity={.9}>
                    <animate attributeName="opacity" values="1; 0; 1" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle
                    cx="55"
                    cy="55"
                    r="55"
                    fill="black"
                    filter="url(#innerShadow)"
                    opacity={.8}
                />
            </g>
            <g transform="translate(5 40)">
                <path d="M 80,10 A 70,70 0 0,1 150,80"
                    fill="none"
                    stroke="#c23dc8"
                    strokeWidth=".5" />
            </g>

            <g transform="rotate(50), translate(-5, 10)">
                <path d="M 80,10 A 70,70 0 0,0 150,80"
                    fill="none"
                    stroke="#c23dc8"
                    strokeWidth=".5" />
            </g>

            <g transform='translate(70,35)'
                className="cursor-pointer">
                <circle cx="15" cy="15" r="10" fill="url(#sphere)">
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 15 15"
                        to="360 15 15"
                        dur="3s"
                        repeatCount="indefinite" />
                </circle>
            </g>
            <g transform='translate(130,70)' className="cursor-pointer">
                <circle cx="15" cy="15" r="10" fill="url(#sphere)">
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 15 15"
                        to="360 15 15"
                        dur="3s"
                        repeatCount="indefinite"
                    />
                </circle>
            </g>
            <g transform='translate(140,110)'
                className="cursor-pointer">
                <circle cx="15" cy="15" r="10" fill="url(#sphere)">
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 15 15"
                        to="360 15 15"
                        dur="3s"
                        repeatCount="indefinite" />
                </circle>
            </g>

            {/* left side */}
            <g transform='translate(12,60)'>
                <circle cx="15" cy="15" r="10" fill="url(#sphere)">
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 15 15"
                        to="360 15 15"
                        dur="3s"
                        repeatCount="indefinite" />
                </circle>
            </g>
            <g transform='translate(-2,133)'>
                <circle cx="15" cy="15" r="10" fill="url(#sphere)">
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 15 15"
                        to="360 15 15"
                        dur="3s"
                        repeatCount="indefinite" />
                </circle>
            </g>
        </svg>
    )
}
