"use client"
import React, { useEffect, useState } from 'react'

const EXPERIENCES = {
    exp1: {
        id: 1,
        date: '2021 - 2023',
        jobTitle: 'Front End Developer',
        desc: `EduApps is a educational system which make the remote learning more attractive to the kids by applying different type of animation
    to the learning materials that help kids understand the new lessons easily in more funny way`,
        tools: ['React', 'HTML & CSS', 'Firebase', 'Netlify', 'Git', 'Agile']
    },
    exp2: {
        id: 2,
        date: '2021 - 2023',
        jobTitle: 'Front End Developer',
        desc: `EduApps is a educational system which make the remote learning more attractive to the kids by applying different type of animation
    to the learning materials that help kids understand the new lessons easily in more funny way`,
        tools: ['React', 'HTML & CSS', 'Firebase', 'Netlify', 'Git', 'Agile']
    },
}

export default function ExperiencesList() {
    const [active, setActive] = useState<'exp1' | 'exp2' | null>(null)

    useEffect(() => {
        const hash = window.location.hash

        if(hash) {
            const sectionId = document.querySelector(hash)
            if(sectionId) {
                setTimeout(() => {
                    sectionId.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            }
        }
    }, [])
    return (
        <div id='experiences'>
            {Object.keys(EXPERIENCES).map((exp) => {
                const experience = EXPERIENCES[exp as keyof typeof EXPERIENCES]

                return (
                    <div key={experience.id}
                        onMouseEnter={() => setActive(exp as 'exp1' | 'exp2')}
                        onMouseLeave={() => setActive(null)}
                        className={`mb-5 lg:p-4 lg:flex lg:items-start gap-4 text-white hover:bg-white/5 transition-all duration-300 cursor-pointer rounded-sm group ${active === null ? 'opacity-100' : active !== exp && 'opacity-40'}`}
                    >
                        <div className='md:w-[400px] md:min-w-[150px]'>
                            <h2 className='text-sm text-violet-200 font-semibold'>{experience?.date}</h2>
                        </div>
                        <div className="lg:ps-20">
                            <h3 className="font-bold text-lg">{experience?.jobTitle}</h3>
                            <p className="text-sm mt-2 text-violet-200 leading-5">
                                {experience?.desc}
                            </p>
                            <div className="flex flex-wrap mt-2 gap-2">
                                {experience.tools.map(tool => (
                                    <div key={tool} className="rounded-full px-3 py-0.5 text-xs leading-5 bg-fuchsia-500/20 text-fuchsia-300">{tool}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}