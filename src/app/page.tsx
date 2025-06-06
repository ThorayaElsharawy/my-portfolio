"use client"
import Moon from "@/components/moon";
import Link from "next/link";
import Footer from "@/components/footer";
import Stars from "@/components/stars";

export default function Home() {

  return (
    <>
      <Stars />
      <div className="mx-auto h-[100dvh] max-w-screen-2xl px-6 md:px-12 py-6 lg:py-0 relative ">
        <main className="lg:flex lg:justify-between lg:gap-4 w-auto">
          <div className="absolute z-10 w-auto h-full lg:h-auto lg:relative lg:w-[30%] flex flex-col gap-24 justify-around py-24">
            <div className="text-white">
              <h1 className="text-[50px] lg:text-[60px] font-bold mb-8 font-poetsen">Thoraya Adel</h1>
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
            <div className="">
              <Footer />
            </div>
          </div>
          <div className="flex-1 top-0 lg:relative m-auto sticky h-screen -mt-12 sm:mt-0">
            <Moon />
          </div>
        </main>
      </div>
    </>

  );
}