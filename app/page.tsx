import Image from 'next/image'
import Temp from "@/components/Temp"
import Link from 'next/link'
export default function Home() {
  return (
    <div className='relative overflow-hidden h-screen w-screen'>
      <img
        src="/goldenStars.gif"
        // width={2000}
        // height={5000}
        // fill
        // objectPosition='center'
        alt="Background"
        className="absolute w-full h-full object-cover brightness-50 -z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      />
      <div className="flex flex-col items-center justify-center p-20 h-screen w-screen overflow-hidden relative">
        <div className="fixed bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-between p-4 w-[80%] md:w-[55%] h-14 rounded-full bg-black text-white border border-white">
          <h1 className="text-lg font-extrabold">CyberAakash</h1>
          <div className="flex gap-4 items-center justify-center text-xs">
            <Link href="https://www.github.com/CyberAakash" target="_blank">
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/cyberaakash/"
              target="_blank"
            >
              Linked-in
            </Link>
            <Link href="https://cyberaakash.vercel.app" target="_blank">
              Portfolio
            </Link>
          </div>
        </div>
        <Temp />
      </div>
    </div>
  );
}
