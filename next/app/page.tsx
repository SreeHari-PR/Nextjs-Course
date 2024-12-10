'use client'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowBigRightDashIcon, Globe } from 'lucide-react'

export default function Home() {
  const router = useRouter()
  const handleLogin = () => {
    router.push('/dashboard')
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-blue-600 px-6 py-4">
        <div className="flex items-center gap-2 text-white">
          <Globe className="h-10 w-10"/>
          <span className="text-lg font-semibold">Acme</span>
        </div>
      </header>
      <main className="flex-1 px-6">
        <div className="mx-auto grid max-w-7xl gap-8 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to Acme.</h1>
              <p className="text-gray-500 md:text-xl">
                This is the example for the{" "}
                <Link href="#" className="text-blue-600 underline underline-offset-4">
                  Next.js Learn Course
                </Link>
                , brought to you by Vercel.
              </p>
            </div>
            <div>
              <button onClick={handleLogin} className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
                Login
                <span className="ml-2 h-4 w-4 flex items-center justify-center">
                  <ArrowBigRightDashIcon/>
                </span>
              </button>
            </div>
          </div>
          <div className="relative w-full min-h-[400px] flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
            <div className="absolute transform -rotate-12 translate-x-8 translate-y-4 shadow-2xl rounded-2xl overflow-hidden">
              <Image
                src="/next2.png"
                width={1000}
                height={760}
                alt="Screenshots of the dashboard project showing desktop version"
                className="w-full h-auto max-w-[300px] md:max-w-[400px]"
              />
            </div>
            <div className="absolute transform -rotate-6 translate-x-4 translate-y-2 shadow-2xl rounded-2xl overflow-hidden">
              <Image
                src="/next1.png"
                width={1000}
                height={760}
                alt="Screenshots of the dashboard project showing desktop version"
                className="w-full h-auto max-w-[300px] md:max-w-[400px]"
              />
            </div>
            <div className="absolute transform rotate-0 shadow-2xl rounded-2xl overflow-hidden">
              <Image
                src="/next2.png"
                width={1000}
                height={760}
                alt="Screenshots of the dashboard project showing desktop version"
                className="w-full h-auto max-w-[300px] md:max-w-[400px]"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

