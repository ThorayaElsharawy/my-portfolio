"use client"
import { PiReadCvLogo } from "react-icons/pi";
import { FaGithubAlt } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import ProjectsList from "@/components/projects-list";
import ExperiencesList from "@/components/experiences-list";
import Link from "next/link";
import { useEffect } from "react";

export default function page() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
    return (
        <div className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12 md:px-12 md:py-16 lg:py-0 ">
            <main className="lg:flex lg:justify-between lg:gap-4">
                <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 ">

                    <div className=" m-auto flex flex-col justify-center text-white">
                        <Link href='/'>
                            <h1 className="text-[60px] font-bold mb-8 font-poetsen">Thoraya Adel</h1>
                        </Link>
                        <div className="flex items-center gap-2 h-full relative">
                            <div className="flex-1 space-y-3 ms-5 text-violet-200">
                                <p className="font-bold">Front End Engineer</p>
                                <p className="max-w-[300px]">Meta Front-End Developer certified, graduated with second-class honours. </p>
                            </div>

                            <div className="w-[1px] h-full bg-white me-5 absolute" />
                            <div className="absolute -bottom-2 -left-[6.5px]
                                border-l-[7px] border-l-transparent
                                border-b-[10px] border-t-white
                                border-r-[7px] border-r-transparent" />
                        </div>
                        <section className="w-[80%]">
                            <article className="mt-24 leading-7 text-lg space-y-4 text-violet-200">
                                <p>Motivated Frontend Developer with over 3 years of hands-on experience building responsive web applications. </p>
                                <p>Eager to learn and grow in dynamic development teams, with a strong foundation in turning designs into clean, functional interfaces. Familiar with agile methodologies, version control, and deploying web projects. </p>
                                <p>Passionate about writing maintainable code and continuously improving both technical and soft skills.</p>
                            </article>
                        </section>
                        <section className="mt-40">
                            <div className="flex items-center gap-10 text-white mt-auto mb-20">
                                <Link href="https://drive.google.com/file/d/1xI0qS9_Myg073HUt3FKcmilSoVsDw5_Y/view" target="_blank">
                                    <PiReadCvLogo className="text-[25px] cursor-pointer hover:text-cyan-600 transition-all" />
                                </Link>
                                <Link href='https://www.linkedin.com/in/thorayaelsharawy/' target="_blank">
                                    <TfiLinkedin className="text-[25px] cursor-pointer hover:text-cyan-600 transition-all" />
                                </Link>
                                <Link href='https://github.com/ThorayaElsharawy' target="_blank">
                                    <FaGithubAlt className="text-[25px] cursor-pointer hover:text-cyan-600 transition-all" />
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="pt-24 lg:w-[52%] lg:py-24 space-y-28">
                    <ExperiencesList />
                    <ProjectsList />
                </div>
            </main>
        </div>

    )
}