import Nav from "@/components/nav";
import Moon from "@/components/moon";
import Planets from "@/components/planets";
import Stars from "@/components/stars";
import { PiReadCvLogo } from "react-icons/pi";
import { FaGithubAlt } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";

export default function Home() {
  return (
    <main className="w-screen h-screen fixed overflow-hidden bg-linear-to-r from-indigo-500/10 via-violet-500/20 to-fuchsia-500/30">
      <Stars />
      {/* <Nav /> */}
      <div className="grid grid-cols-[30%_1fr] h-full w-full items-center justify-center ps-32 pe-5  relative z-0">

        <div className="flex flex-col h-full py-10">
          <div className="text-white my-auto">
            <h1 className="text-[60px] font-bold font-poetsen">Thoraya Adel</h1>
            <div className="flex items-center gap-2 relative mt-5">
              <div className="flex-1 space-y-3 ms-5">
                <p className="font-bold text-xl">Front End Developer</p>
                <p className="max-w-[300px] text-violet-200">I build accessible, pixel-perfect digital experiences for the web.</p>
                {/* <div className="bg-linear-to-r from-[#3CF3FF]/40 to-[#FA00FF]/40 flex items-center justify-center max-w-max p-[3px] rounded-md mt-8">
                  <button className="text-violet-200 font-semibold cursor-pointer m-auto bg-violet-500/5 rounded-md px-8 py-1.5">About me</button>
                </div> */}
              </div>
              <div className="w-[1px] h-full bg-white absolute" />
              <div className="absolute bottom-0 -left-[6.5px]
                border-l-[7px] border-l-transparent
                border-b-[10px] border-t-white
                border-r-[7px] border-r-transparent" />
            </div>
          </div>
          <div>
            <ul className="uppercase text-white space-y-6">
              <li className="flex items-center gap-4 cursor-pointer group max-w-min">
                <div className="w-[80px] h-[1.5px] bg-linear-to-r from-[#3CF3FF]/40 to-[#FA00FF]/40 group-hover:w-[80px]" />
                <span className="text-sm font-semibold text-violet-200">About</span>
              </li>
              <li className="flex items-center gap-4 cursor-pointer group max-w-min">
                <div className="w-[30px] h-[1.5px] bg-linear-to-r from-[#3CF3FF]/40 to-[#FA00FF]/40 group-hover:w-[80px] transition-all duration-500" />
                <span className="text-sm font-semibold text-violet-200">Experience</span>
              </li>
              <li className="flex items-center gap-4 cursor-pointer group max-w-min">
                <div className="w-[30px] h-[1.5px] bg-linear-to-r from-[#3CF3FF]/40 to-[#FA00FF]/40 group-hover:w-[80px] transition-all duration-500" />
                <span className="text-sm font-semibold text-violet-200">projects</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-10 text-white mt-auto">
            <PiReadCvLogo className="text-[35px] cursor-pointer hover:text-cyan-600 transition-all" />
            <FaGithubAlt className="text-[30px] cursor-pointer hover:text-cyan-600 transition-all" />
            <TfiLinkedin className="text-[28px] cursor-pointer hover:text-cyan-600 transition-all" />
          </div>
        </div>

        <div className="flex-1 w-full h-full justify-self-end m-auto relative">
          <div className="absolute z-40 w-full h-full text-cyan-950">
            <Moon />
          </div>
          <Planets />
        </div>

      </div>


    </main>
  );
}
