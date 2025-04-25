"use client"
import Moon from "@/components/moon";
import Link from "next/link";
import Footer from "@/components/footer";
import Stars from "@/components/stars";

export default function Home() {

  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl ps-6 md:px-12 lg:py-0 relative overflow-hidden">
      <Stars />
      <main className="lg:flex lg:justify-between lg:gap-4">
        <div className="absolute z-10 h-full lg:h-auto lg:relative w-full lg:w-[30%] flex flex-col justify-between">
          <div className="text-white my-auto ">
            <h1 className="text-[60px] font-bold font-poetsen">Thoraya Adel</h1>
            <div className="flex items-center gap-2 relative mt-5">
              <div className="flex-1 space-y-3 ms-5">
                <p className="font-bold text-xl">Front End Developer</p>
                <p className="max-w-[300px] mt-5">Meta Front-End Developer certified, graduated with second-class honours. </p>
              </div>
              <div className="w-[1px] h-full bg-white absolute" />
              <div className="absolute bottom-0 -left-[6.5px]
             border-l-[7px] border-l-transparent
             border-b-[10px] border-t-white
             border-r-[7px] border-r-transparent" />
            </div>
          </div>
          <div className="">
            <ul className="uppercase text-white space-y-6">
              <li>
                <Link href='/about' className="flex items-center gap-4 cursor-pointer group max-w-min">
                  <span className="w-[80px] h-[1.5px] bg-linear-to-r from-[#3CF3FF] to-[#FA00FF] group-hover:w-[80px] inline-block" />
                  <span className="text-sm font-semibold text-violet-200">About</span>
                </Link>
              </li>
              <li>
                <Link href='/about/#experiences' scroll={false} className="flex items-center gap-4 cursor-pointer group max-w-min">
                  <span className="w-[30px] h-[1.5px] bg-linear-to-r from-[#3CF3FF]/60 to-[#FA00FF]/60 group-hover:w-[80px] group-hover:from-[#3CF3FF] group-hover:to-[#FA00FF] transition-all inline-block" />
                  <span className="text-sm font-semibold text-white/40 group-hover:text-violet-200 transition-all">Experience</span>
                </Link>
              </li>
              <li>
                <Link href='/about/#projects' scroll={false} className="flex items-center gap-4 cursor-pointer group max-w-min">
                  <span className="w-[30px] h-[1.5px] bg-linear-to-r from-[#3CF3FF]/60 to-[#FA00FF]/60 group-hover:w-[80px] group-hover:from-[#3CF3FF] group-hover:to-[#FA00FF] transition-all inline-block" />
                  <span className="text-sm font-semibold text-white/40 group-hover:text-violet-200 transition-all">projects</span>
                </Link>
              </li>
            </ul>
          </div>
          <Footer />
        </div>
        <div className="flex-1 top-0 lg:relative m-auto sticky h-screen">
          <Moon />
        </div>
      </main>
    </div>
  );
}