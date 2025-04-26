import ProjectsList from "@/components/projects-list";
import ExperiencesList from "@/components/experiences-list";
import Link from "next/link";
import Footer from "@/components/footer";

export default function page() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12 md:px-12 md:py-16 lg:py-0 ">
            <main className="lg:flex lg:justify-between lg:gap-4">
                <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 ">
                    <div className="m-auto flex flex-col justify-center text-white">
                        <Link href='/'>
                            <h1 className="text-[50px] lg:text-[60px] font-bold mb-8 font-poetsen">Thoraya Adel</h1>
                        </Link>
                        <div className="flex items-center gap-2 h-full relative ">
                            <div className="flex-1 space-y-3 ms-5">
                                <p className="font-bold">Front End Engineer</p>
                                <p className="max-w-[300px] text-violet-200/80">Meta Front-End Developer certified, graduated with second-class honours. </p>
                            </div>

                            <div className="w-[1px] h-full bg-[#573d63] me-5 absolute" />
                            <div className="absolute -bottom-2 -left-[6.5px]
                                border-l-[7px] border-l-transparent
                                border-b-[10px] border-b-[#573d63]
                                border-r-[7px] border-r-transparent" />
                        </div>
                        <h2 className="block lg:hidden mt-20 uppercase font-bold mb-10">About</h2>
                        <section className="sm:w-[80%]">
                            <article className="lg:mt-14 leading-7 text-lg space-y-4 text-violet-200/80">
                                <p>Motivated Frontend Developer with over 3 years of hands-on experience building responsive web applications. </p>
                                <p>Eager to learn and grow in dynamic development teams, with a strong foundation in turning designs into clean, functional interfaces. Familiar with agile methodologies, version control, and deploying web projects. </p>
                                <p>Passionate about writing maintainable code and continuously improving both technical and soft skills.</p>
                            </article>
                        </section>
                        <section className="mt-14 lg:mt-40">
                            <Footer />
                        </section>
                    </div>
                </div>
                <div className="pt-5 lg:pt-24 lg:w-[52%] lg:py-24 space-y-22 sm:space-y-28">
                    <div>
                        <div className="flex items-center  lg:hidden mb-10 relative overflow-hidden">
                            <h2 className=" uppercase font-bold text-white">Experiences</h2>
                            <div className="px-4 w-full">
                                <div className="w-full h-[1px] bg-white/20 me-5 absolute" />
                                <div className="absolute -right-[2px] top-[8px]
                                border-l-[7px] border-l-transparent
                                border-b-[10px] border-b-[#573d63]
                                border-r-[7px] border-r-transparent rotate-[270deg]" />
                            </div>
                        </div>
                        <ExperiencesList />
                    </div>
                    <div>
                        <div className="flex items-center  lg:hidden mb-10 relative overflow-hidden">
                            <h2 className=" uppercase font-bold text-white">Projects</h2>
                            <div className="px-4 w-full">
                                <div className="w-full h-[1px] bg-white/20 me-5 absolute" />
                                <div className="absolute -right-[2px] top-[8px]
                                border-l-[7px] border-l-transparent
                                border-b-[10px] border-b-[#573d63]
                                border-r-[7px] border-r-transparent rotate-[270deg]" />
                            </div>
                        </div>
                        <ProjectsList />
                    </div>
                </div>
            </main>
        </div>

    )
}