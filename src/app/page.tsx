import Planets from "@/components/planets";
import Stars from "@/components/stars";
import { FaGithubAlt } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
import { TfiLinkedin } from "react-icons/tfi";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-black bg-linear-to-r from-indigo-500/10 via-violet-500/20 to-fuchsia-500/30 fixed overflow-hidden">
      <Stars />
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
      <div className="grid grid-cols-[30%_1fr_50px] h-full w-full items-center justify-center ps-32 pe-5 -mt-20 relative z-0">
        <div className="text-white">
          <h1 className="text-[60px] font-bold mb-5 font-poetsen">Thoraya Adel</h1>
          <div className="flex items-center gap-2 h-full relative">
            <div className="flex-1 space-y-3 ms-5">
              <p className="font-bold">Front End Engineer</p>
              <p className="max-w-[300px]">I build accessible, pixel-perfect digital experiences for the web.</p>
            </div>

            <div className="w-[1px] h-full bg-white me-5 absolute" />
            <div className="absolute -bottom-2 -left-[6.5px]
              border-l-[7px] border-l-transparent
              border-b-[10px] border-t-white
              border-r-[7px] border-r-transparent
            "></div>
          </div>
        </div>
        <div className="flex-1 w-full h-full justify-self-end m-auto relative">
          <div className="absolute z-40 w-full h-full text-cyan-950">
            <Planets />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-18 text-white">
          <PiReadCvLogo className="text-[35px] cursor-pointer hover:text-cyan-600 transition-all" />
          <FaGithubAlt className="text-[30px] cursor-pointer hover:text-cyan-600 transition-all" />
          <TfiLinkedin className="text-[28px] cursor-pointer hover:text-cyan-600 transition-all" />

        </div>
      </div>
    </main>
  );
}
