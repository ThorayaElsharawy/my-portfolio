import Stars from "@/components/stars";
import { PiReadCvLogo } from "react-icons/pi";
import { FaGithubAlt } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import ProjectsList from "@/components/projects-list";
import ExperiencesList from "@/components/experiences-list";

export default function page() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12 md:px-12 md:py-16 lg:py-0 ">
            <main className="lg:flex lg:justify-between lg:gap-4">
                <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 ">

                    <div className=" m-auto flex flex-col justify-center text-white">
                        <h1 className="text-[60px] font-bold mb-8 font-poetsen">Thoraya Adel</h1>
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
                                <p>Motivated Frontend Developer with over 3 years of hands-on experience building responsive web applications using HTML, CSS, JavaScript, React. </p>
                                <p>Eager to learn and grow in dynamic development teams, with a strong foundation in turning designs into clean, functional interfaces. Familiar with agile methodologies, version control, and deploying web projects. </p>
                                <p>Passionate about writing maintainable code and continuously improving both technical and soft skills.</p>
                            </article>
                        </section>
                        <section className="mt-40">
                            <div className="flex items-center  gap-10 text-white">
                                <PiReadCvLogo className="text-[25px] cursor-pointer hover:text-cyan-600 transition-all" />
                                <FaGithubAlt className="text-[20px] cursor-pointer hover:text-cyan-600 transition-all" />
                                <TfiLinkedin className="text-[20px] cursor-pointer hover:text-cyan-600 transition-all" />
                            </div>
                        </section>
                    </div>
                </div>
                <div className="pt-24 lg:w-[52%] lg:py-24">
                    <div className="">
                        <ExperiencesList />
                        <ProjectsList />
                    </div>
                </div>
            </main>
        </div>

    )
}


// <main className="fixed inset-0 w-full flex bg-[#000a0b] overflow-auto bg-linear-to-r from-indigo-500/10 via-violet-500/20 to-fuchsia-500/30">
//     {/* <Stars /> */}
//     <div className="grid grid-cols-[30%_55%] items-start justify-between px-32 text-white  w-full h-full py-20">
//         <div className="">
//             <h1 className="text-[60px] font-bold mb-8 font-poetsen">Thoraya Adel</h1>
//             <div className="flex items-center gap-2 h-full relative">
//                 <div className="flex-1 space-y-3 ms-5 text-violet-200">
//                     <p className="font-bold">Front End Engineer</p>
//                     <p className="max-w-[300px]">I build accessible, pixel-perfect digital experiences for the web.</p>
//                 </div>

//                 <div className="w-[1px] h-full bg-white me-5 absolute" />
//                 <div className="absolute -bottom-2 -left-[6.5px]
//                 border-l-[7px] border-l-transparent
//                 border-b-[10px] border-t-white
//                 border-r-[7px] border-r-transparent" />
//             </div>
//             <section>
//                 <article className="mt-24 leading-7 text-lg space-y-4 text-violet-200">
//                     <p>Motivated Frontend Developer with over 3 years of hands-on experience building responsive web applications using HTML, CSS, JavaScript, React. </p>
//                     <p>Eager to learn and grow in dynamic development teams, with a strong foundation in turning designs into clean, functional interfaces. Familiar with agile methodologies, version control, and deploying web projects. </p>
//                     <p>Passionate about writing maintainable code and continuously improving both technical and soft skills.</p>
//                 </article>
//             </section>
//             <section className="mt-40">
//                 <div className="flex items-center  gap-10 text-white">
//                     <PiReadCvLogo className="text-[25px] cursor-pointer hover:text-cyan-600 transition-all" />
//                     <FaGithubAlt className="text-[20px] cursor-pointer hover:text-cyan-600 transition-all" />
//                     <TfiLinkedin className="text-[20px] cursor-pointer hover:text-cyan-600 transition-all" />
//                 </div>
//             </section>
//         </div>
//         <div className="self-start space-y-30">
//             <ExperiencesList />
//             <ProjectsList />
//         </div>
//     </div>
// </main>