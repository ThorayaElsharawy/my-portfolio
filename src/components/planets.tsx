"use client"
import React, { useState } from 'react'
import { FaGithubAlt, FaInfo, FaInstagram } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { GiSoapExperiment } from 'react-icons/gi';
import { PiReadCvLogo } from 'react-icons/pi';
import { TfiLinkedin } from 'react-icons/tfi';

export default function Planets() {
    const [animateId, setAnimateId] = useState<'github' | 'linkedin' | 'cv' | 'insta' | '' | null>(null);
    console.log('here');

    return (
        <svg className='m-auto'
            width="100%" height="100%"
            viewBox="0 0 200 150"
            xmlns="http://www.w3.org/2000/svg">
            <defs>

                <radialGradient id="grad1" cx="50%" cy="50%" r="50%" >
                    <stop offset="50%" stopColor='#731d7c' />
                    <stop offset="100%" stopColor='#341142' />
                </radialGradient>
                <radialGradient id="grad2" cx="50%" cy="50%" r="50%" >
                    <stop offset="50%" stopColor='#40788f' />
                    <stop offset="100%" stopColor='#341142' />
                </radialGradient>
                <radialGradient id="grad3" cx="50%" cy="50%" r="50%" >
                    <stop offset="0%" stopColor='#3CF3FF' />
                    <stop offset="20%" stopColor='#3CF3FF' />
                    <stop offset="100%" stopColor='#341142' />
                </radialGradient>


                <radialGradient id="gradSky" cx="50%" cy="50%" r="50%" >
                    <stop offset="0%" stopColor='#3CF3FF' />
                    <stop offset="20%" stopColor='#3CF3FF' />
                    <stop offset="100%" stopColor='#341142' />
                </radialGradient>

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

            <g className='cursor-pointer' transform='translate(75,40)'
                onMouseEnter={() => setAnimateId('github')}
                onMouseLeave={() => setAnimateId(null)}
            >
                <circle cx="10" cy="10" r="10" fill='#420f4b' />
                <circle cx="10" cy="10" r="10" fill='url(#grad1)'>
                    {animateId === 'github' && <animate attributeName="opacity" values="1; 0; 1" dur="1.5s" repeatCount="indefinite" />}
                </circle>
                <g transform='translate(5,5)'>
                    <PiReadCvLogo className='text-cyan-200 text-[10px]' />
                </g>
            </g>
            <g className='cursor-pointer' transform='translate(125,60)'
                onMouseEnter={() => setAnimateId('insta')}
                onMouseLeave={() => setAnimateId(null)}
            >
                <circle cx="10" cy="10" r="10" fill='#6880b2' />
                <circle cx="10" cy="10" r="10" fill='url(#gradSky)'>
                    {animateId === 'insta' && <animate attributeName="opacity" values="1; 0; 1" dur="1.5s" repeatCount="indefinite" />}
                </circle>
                <g transform='translate(5,5)'>
                    <FaGithubAlt className='text-[#181717] text-[10px]' />
                </g>
            </g>
            <g className='cursor-pointer' transform='translate(145,100)'
                onMouseEnter={() => setAnimateId('')}
                onMouseLeave={() => setAnimateId(null)}
            >
                <circle cx="10" cy="10" r="10" fill='#6880b2' />
                <circle cx="10" cy="10" r="10" fill='url(#gradSky)'>
                    {animateId === '' && <animate attributeName="opacity" values="1; 0; 1" dur="1.5s" repeatCount="indefinite" />}
                </circle>
                <g transform='translate(7,6)'>
                    <TfiLinkedin className='text-[#0A66C2] text-[7px]' />
                </g>
            </g>

            <g className='cursor-pointer' transform='translate(20,60)'
                onMouseEnter={() => setAnimateId('linkedin')}
                onMouseLeave={() => setAnimateId(null)}
            >
                <circle cx="10" cy="10" r="10" fill='#420f4b' />
                <circle cx="10" cy="10" r="10" fill='url(#grad1)'>
                    {animateId === 'linkedin' && <animate attributeName="opacity" values="1; 0; 1" dur="2s" repeatCount="indefinite" />}
                </circle>
                <g transform='translate(5,5)'>
                    <GiSoapExperiment className='text-cyan-100 text-[10px]' />
                </g>
            </g>
            <g className='cursor-pointer' transform='translate(0,130)'
                onMouseEnter={() => setAnimateId('cv')}
                onMouseLeave={() => setAnimateId(null)}
            >
                <circle cx="10" cy="10" r="10" fill='#420f4b' />
                <circle cx="10" cy="10" r="10" fill='url(#grad1)'>
                    {animateId === 'cv' && <animate attributeName="opacity" values="1; 0; 1" dur="2s" repeatCount="indefinite" />}
                </circle>
                <g transform='translate(6,6)'>
                    <FaInfo className='text-[#17A2B8] text-[7px]' />
                </g>
            </g>
        </svg>
    )
}
