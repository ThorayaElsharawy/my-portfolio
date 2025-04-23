import React from 'react'
import keyrush from '@/public/images/KeyRush.png'
import brainwave from '@/public/images/brainwave.png'
import shopping from '@/public/images/shopping.png'
import rmtDev from '@/public/images/rmtDev.png'

import Image from "next/image";

const PROJECTS = [
    {
        id: 1,
        title: 'KeyRush',
        tools: ['HTML', 'CSS', 'Javascript'],
        img: keyrush,
        des: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Placeat repudiandae eum eos maiores earum aspernatur omnis! Deleniti aut omnis quisquam?`,
    },
    {
        id: 2,
        title: 'BrainWave',
        tools: ['HTML & CSS', 'Tailwindcss', 'React'],
        img: brainwave,
        des: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Placeat repudiandae eum eos maiores earum aspernatur omnis! Deleniti aut omnis quisquam?`,
    },
    {
        id: 3,
        title: 'Shopping App',
        tools: ['React', 'Redux', 'Tailwindcss'],
        img: shopping,
        des: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Placeat repudiandae eum eos maiores earum aspernatur omnis! Deleniti aut omnis quisquam?`,
    },
    {
        id: 4,
        title: 'rmtDev',
        tools: ['React', 'Typescript', 'Tailwindcss'],
        img: rmtDev,
        des: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Placeat repudiandae eum eos maiores earum aspernatur omnis! Deleniti aut omnis quisquam?`,
    }
]

export default function ProjectsList() {
    return (
        <div>
            {PROJECTS.map((project) => {
                return (
                    <div key={project.id} className="mb-5 lg:flex items-start gap-4 text-white hover:bg-white/5 p-5 transition-all cursor-pointer rounded-lg group hover:shadow-[0_0_5px_#3e124778]">
                        <div className="w-[400px]">
                            <Image src={project.img} width={200} height={200} alt="keyrush" className="w-[200px] h-auto rounded-xs shadow-[0_0_5px_#8f7793] group-hover:shadow-[0_0_5px_#f5b7ffbf] transition-all" />
                        </div>
                        <div className="mt-5 lg:mt-0">
                            <h3 className="font-bold text-lg">{project.title}</h3>
                            <p className="text-sm mt-2 text-violet-200 leading-5 ">{project.des}</p>
                            <div className="flex mt-2 gap-2">
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
