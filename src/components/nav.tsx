import React from 'react'

export default function Nav() {
    return (
        <nav>
            <ul className="font-nationalPark text-sm uppercase text-white flex items-center 
                justify-around gap-24 mt-10 bg-black w-max m-auto p-5 px-20 rounded-full shadow-[0_0_5px_10px_#00000040]
                relative z-50 font-semibold
            ">
                <li className="cursor-pointer border-b-2  pb-1 border-fuchsia-700 hover:border-fuchsia-700 transition-all">About</li>
                <li className="cursor-pointer border-b-2  pb-1 border-transparent hover:border-fuchsia-700 transition-all">Projects</li>
                <li className="cursor-pointer border-b-2  pb-1 border-transparent hover:border-fuchsia-700 transition-all">Experience</li>
                <li className="cursor-pointer border-b-2  pb-1 border-transparent hover:border-fuchsia-700 transition-all">Contact</li>
            </ul>
        </nav>
    )
}
