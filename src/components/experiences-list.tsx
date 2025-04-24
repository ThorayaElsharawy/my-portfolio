"use client"
import React, { useEffect } from 'react'

export default function ExperiencesList() {
    useEffect(() => {
        // Wait for the DOM to load, then scroll to hash if it exists
        const hash = window.location.hash;
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 100); // slight delay ensures it's rendered
            }
        }
    }, []);
    return (
        <div id='experiences'>
            <div className='mb-5 lg:flex lg:items-start gap-4 text-white hover:bg-white/5 p-5 transition-all cursor-pointer rounded-sm group'>
                <div className='w-[400px]'>
                    <h2 className='text-sm text-violet-200 font-semibold'>2021 - 2023</h2>
                </div>
                <div className="lg:ps-20">
                    <h3 className="font-bold text-lg">Front End Developer</h3>
                    <p className="text-sm mt-2 text-violet-200 leading-5">EduApps is a educational system which make the remote learning more attractive to the kids by applying different type of animation
                        to the learning materials that help kids understand the new lessons easily in more funny way</p>
                    <div className="flex flex-wrap mt-2 gap-2">
                        <div className="rounded-full px-3 py-0.5 text-xs leading-5 bg-fuchsia-500/20 text-fuchsia-300">React</div>
                        <div className="rounded-full px-3 py-0.5 text-xs leading-5 bg-fuchsia-500/20 text-fuchsia-300">HTML & CSS</div>
                        <div className="rounded-full px-3 py-0.5 text-xs leading-5 bg-fuchsia-500/20 text-fuchsia-300">Firebase</div>
                        <div className="rounded-full px-3 py-0.5 text-xs leading-5 bg-fuchsia-500/20 text-fuchsia-300">Netlify</div>
                        <div className="rounded-full px-3 py-0.5 text-xs leading-5 bg-fuchsia-500/20 text-fuchsia-300">Git</div>
                        <div className="rounded-full px-3 py-0.5 text-xs leading-5 bg-fuchsia-500/20 text-fuchsia-300">Agile</div>
                    </div>
                </div>
            </div>
            <div className='mb-5 lg:flex items-start gap-4 text-white hover:bg-white/5 p-5 transition-all cursor-pointer rounded-sm group'>
                <div className='w-[400px]'>
                    <h2 className='text-sm text-violet-200 font-semibold'>Apr - Oct 2019</h2>
                </div>
                <div className="lg:ps-20">
                    <h3 className="font-bold text-lg">Front End Developer</h3>
                    <p className="text-sm mt-2 text-violet-200 leading-5">Mandoob is A web-based system designed to monitor and manage shipments in real time.
                        Provides detailed tracking, status updates, and route information for each delivery.
                        Includes an admin portal for managing shipments, users, and operational data.</p>
                    <div className="flex flex-wrap mt-2 gap-2">
                        <div className="rounded-full px-3 py-0.5 text-xs leading-5 bg-fuchsia-500/20 text-fuchsia-300">React</div>
                        <div className="rounded-full px-3 py-0.5 text-xs leading-5 bg-fuchsia-500/20 text-fuchsia-300">HTML & CSS</div>
                        <div className="rounded-full px-3 py-0.5 text-xs leading-5 bg-fuchsia-500/20 text-fuchsia-300">Firebase</div>
                        <div className="rounded-full px-3 py-0.5 text-xs leading-5 bg-fuchsia-500/20 text-fuchsia-300">Netlify</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
