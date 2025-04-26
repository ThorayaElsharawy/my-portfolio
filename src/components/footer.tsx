import React from 'react'
import { PiReadCvLogo } from "react-icons/pi";
import { FaGithubAlt } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex items-center gap-10 text-white mt-auto">
            <Link href="https://drive.google.com/file/d/1xI0qS9_Myg073HUt3FKcmilSoVsDw5_Y/view" target="_blank">
                <PiReadCvLogo className="text-[25px] cursor-pointer hover:text-cyan-600 transition-all" />
            </Link>
            <Link href='https://www.linkedin.com/in/thorayaelsharawy/' target="_blank">
                <TfiLinkedin className="text-[25px] cursor-pointer hover:text-cyan-600 transition-all" />
            </Link>
            <Link href='https://github.com/ThorayaElsharawy' target="_blank">
                <FaGithubAlt className="text-[25px] cursor-pointer hover:text-cyan-600 transition-all" />
            </Link>
        </footer>
    )
}
