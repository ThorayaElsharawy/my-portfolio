"use client"
import React, { useEffect, useState } from 'react'
import keyrush from '@/public/images/KeyRush.png'
import brainwave from '@/public/images/brainwave.png'
import shopping from '@/public/images/shopping.png'
import rmtDev from '@/public/images/rmtDev.png'
import build from '@/public/images/under-construction.png'
import Image from "next/image";
import { MdArrowOutward } from 'react-icons/md'
import Link from 'next/link'

const PROJECTS = [
    {
        id: 1,
        title: 'rmtDev',
        tools: ['React', 'Typescript', 'Tailwind CSS'],
        img: rmtDev,
        des: `rmtDev is a platform built for developers seeking remote jobs. Discover hand-picked opportunities across tech roles, tailored for remote work lifestyles. Whether you're a frontend, backend, or full-stack dev, 
        rmtDev helps you find your next job from anywhere in the world`,
        underBuid: false
    },
    {
        id: 2,
        title: 'Shopping App',
        tools: ['React', 'Redux', 'Tailwind CSS', 'Typescript', 'REST APIs'],
        img: shopping,
        des: `Shopping App is your go-to destination for all things electronics. Explore the latest gadgets, filter by category to find exactly what you need, and easily add items to your cart. With a smooth and simple shopping experience, 
        getting your favorite tech has never been easier.`,
        underBuid: false
    },
    {
        id: 3,
        title: 'KeyRush',
        tools: ['HTML', 'CSS', 'Javascript'],
        img: keyrush,
        des: `KeyRush is a sleek typing test app designed to make practicing fast and fun. Switch between time, word, and quote modes to challenge yourself in different ways. 
        Improve your accuracy, track your progress, and enjoy the rhythm of typing.`,
        underBuid: false
    },
    {
        id: 4,
        title: 'BrainWave',
        tools: ['HTML & CSS', 'Tailwind CSS', 'React'],
        img: brainwave,
        des: `BrainWave is a sleek and responsive AI landing page designed to showcase the power of artificial intelligence. With a smooth, modern design, it offers an intuitive user experience that highlights AI's potential for business growth. Explore the future of AI through a clean, 
        interactive layout.`,
        underBuid: false,
        link: 'https://brainwave-six-beta.vercel.app/'
    },
    {
        id: 5,
        title: 'JourneyRover',
        tools: ['Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Typescript', 'Framer Motion'],
        img: build,
        des: 'Is an interactive travel platform that helps users discover global destinations and explore new cultures. With personalized recommendations and detailed guides, it makes planning your next adventure easy and exciting. Start your journey today with tailored travel insights and inspiration.',
        underBuid: true,
        link: 'https://journeyrover-dpceilg04-thoraya-adels-projects.vercel.app/'

    }
]

export default function ProjectsList() {
    const [active, setActive] = useState<number | null>(null)
    useEffect(() => {
        const hash = window.location.hash

        if (hash) {
            const sectionId = document.querySelector(hash)
            if (sectionId) {
                setTimeout(() => {
                    sectionId.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            }
        }
    }, []);
    return (
        <div id='projects' className=''>
            {PROJECTS.sort((a, b) => b.id - a.id).map((project) => {
                return (
                    <div key={project.id}
                        onMouseEnter={() => setActive(project.id)}
                        onMouseLeave={() => setActive(null)}
                        className={`mb-12 lg:mb-5 lg:p-4 md:flex items-start gap-4 text-white hover:bg-white/5  transition-all duration-300 cursor-pointer rounded-lg group hover:shadow-[0_0_5px_#3e124778]  ${active === null ? 'opacity-100' : active !== project.id && 'opacity-40'}`}>
                        <div className="md:w-[400px] md:min-w-[150px] mt-2">
                            <Image src={project?.img} width={200} height={200} alt="keyrush" className="w-[200px] h-auto rounded-xs shadow-[0_0_5px_#8f7793] group-hover:shadow-[0_0_5px_#f5b7ffbf] transition-all" />
                        </div>
                        <div className="mt-5 md:mt-0">
                            <div className='flex items-center gap-2'>
                                <h3 className="font-bold text-lg">{project.title}
                                    {project.underBuid && <small className='text-xs mx-2 text-white/40'>(Under build)</small>}
                                </h3>
                                {project.link && <Link href={project.link} target='_blank'><MdArrowOutward className='group-hover:ms-2 duration-200' /></Link>}
                            </div>
                            <p className="text-sm mt-2 text-violet-200/80 leading-5 ">{project.des}</p>
                            <div className="flex flex-wrap mt-2 gap-2">
                                {project.tools.map((tool, i) => (
                                    <div key={i} className="rounded-full px-3 py-0.5 text-xs leading-5 bg-fuchsia-500/20 text-fuchsia-300">{tool}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
