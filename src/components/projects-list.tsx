import React, { useEffect, useState } from 'react'
import keyrush from '@/public/images/KeyRush.png'
import brainwave from '@/public/images/brainwave.png'
import shopping from '@/public/images/shopping.png'
import rmtDev from '@/public/images/rmtDev.png'

import Image from "next/image";

const PROJECTS = [
    {
        id: 1,
        title: 'Shopping App',
        tools: ['React', 'Redux', 'Tailwindcss', 'Typescript', 'REST APIs'],
        img: shopping,
        des: `Shopping App is your go-to destination for all things electronics. Explore the latest gadgets, filter by category to find exactly what you need, and easily add items to your cart. With a smooth and simple shopping experience, 
        getting your favorite tech has never been easier.`,
    },
    {
        id: 2,
        title: 'BrainWave',
        tools: ['HTML & CSS', 'Tailwindcss', 'React'],
        img: brainwave,
        des: `BrainWave is a sleek and responsive AI landing page designed to showcase the power of artificial intelligence. With a smooth, modern design, it offers an intuitive user experience that highlights AI's potential for business growth. Explore the future of AI through a clean, 
        interactive layout.`,
    },
    {
        id: 3,
        title: 'KeyRush',
        tools: ['HTML', 'CSS', 'Javascript'],
        img: keyrush,
        des: `KeyRush is a sleek typing test app designed to make practicing fast and fun. Switch between time, word, and quote modes to challenge yourself in different ways. 
        Improve your accuracy, track your progress, and enjoy the rhythm of typing.`,
    },
    {
        id: 4,
        title: 'rmtDev',
        tools: ['React', 'Typescript', 'Tailwindcss'],
        img: rmtDev,
        des: `rmtDev is a platform built for developers seeking remote jobs. Discover hand-picked opportunities across tech roles, tailored for remote work lifestyles. Whether you're a frontend, backend, or full-stack dev, 
        rmtDev helps you find your next job from anywhere in the world`,
    }
]

export default function ProjectsList() {
    const [active, setActive] = useState<number | null>(null)
    return (
        <div id='projects'>
            {PROJECTS.map((project) => {
                return (
                    <div key={project.id}
                        onMouseEnter={() => setActive(project.id)}
                        onMouseLeave={() => setActive(null)}
                        className={`mb-5 md:flex items-start gap-4 text-white hover:bg-white/5 p-5 transition-all duration-300 cursor-pointer rounded-lg group hover:shadow-[0_0_5px_#3e124778]  ${active === null ? 'opacity-100' : active !== project.id && 'opacity-40'}`}>
                        <div className="w-[400px] min-w-[150px]">
                            <Image src={project.img} width={200} height={200} alt="keyrush" className="w-[200px] h-auto rounded-xs shadow-[0_0_5px_#8f7793] group-hover:shadow-[0_0_5px_#f5b7ffbf] transition-all" />
                        </div>
                        <div className="mt-5 md:mt-0">
                            <h3 className="font-bold text-lg">{project.title}</h3>
                            <p className="text-sm mt-2 text-violet-200 leading-5 ">{project.des}</p>
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
