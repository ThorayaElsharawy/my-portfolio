import React from 'react'
import { PiReadCvLogo } from "react-icons/pi";
import { FaGithubAlt } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex items-center gap-10 text-white">
            <Link href="https://drive.google.com/file/d/1hEl480lVSUF6NHYrqA3l0exk50lC2SrB/view?usp=sharing" target="_blank">
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
