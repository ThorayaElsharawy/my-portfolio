import ProjectsList from "@/components/projects-list";
import ExperiencesList from "@/components/experiences-list";
import Link from "next/link";
import Footer from "@/components/footer";

export default function page() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12 md:px-12 md:py-16 lg:py-0 ">
            <main className="lg:flex lg:justify-between lg:gap-4">
                <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 ">

                    <div className="p-4 lg:p-0 m-auto flex flex-col justify-center text-white">
                        <Link href='/'>
                            <h1 className="text-[50px] md:text-[60px] font-bold mb-8 font-poetsen">Thoraya Adel</h1>
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
                        <section className="sm:w-[80%]">
                            <article className="mt-14 sm:mt-24 leading-7 text-lg space-y-4 text-violet-200">
                                <p>Motivated Frontend Developer with over 3 years of hands-on experience building responsive web applications. </p>
                                <p>Eager to learn and grow in dynamic development teams, with a strong foundation in turning designs into clean, functional interfaces. Familiar with agile methodologies, version control, and deploying web projects. </p>
                                <p>Passionate about writing maintainable code and continuously improving both technical and soft skills.</p>
                            </article>
                        </section>
                        <section className="mt-14 md:mt-40">
                           <Footer />
                        </section>
                    </div>
                </div>
                <div className="mt-0 sm:pt-24 lg:w-[52%] lg:py-24 space-y-22 sm:space-y-28">
                    <ExperiencesList />
                    <ProjectsList />
                </div>
            </main>
        </div>

    )
}