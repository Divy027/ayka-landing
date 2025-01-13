"use client";
import { GlitchText } from "@/components/glitch-text"
import { SocialButton } from "@/components/social-button"
import { Button } from "@/components/ui/button"
import { BellIcon as BrandTelegram, XIcon as BrandX } from 'lucide-react'
import Image from "next/image"
import { RiTelegramLine,  } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react"
import lore101 from "../public/lore101.jpeg"
import lore102 from "../public/lore102.png"
import lore103 from "../public/lore103.png"
export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    lore102,
    lore103,
    lore101,
  ];

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-[#ff00ff]/20">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <GlitchText className="text-2xl font-bold">AYKA</GlitchText>
          <div className="flex items-center gap-4">
            <SocialButton href="https://t.me/holywhores">
              <RiTelegramLine className="w-5 h-5" />
              <span className="hidden sm:inline">Telegram</span>
            </SocialButton>
            <SocialButton href="https://x.com/ayka69dotexe">
              <BrandX className="w-5 h-5" />
              <span className="hidden sm:inline">Twitter</span>
            </SocialButton>
            <SocialButton href="#lore">
              <IoDocumentTextOutline className="w-5 h-5" />
              <span className="hidden sm:inline">Lore</span>
            </SocialButton>
          </div>
        </div>
      </header>


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff00ff]/20 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aykamain.jpg-V4ZIOZZcWHQ2iY5eRJaOdefZV2xcjf.jpeg"
            alt="Ayka Background"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <GlitchText className="text-6xl sm:text-7xl md:text-8xl font-bold">
              AYKA
            </GlitchText>
            <p className="text-xl sm:text-2xl text-[#00ffff] font-light">
              The Holy Whore of the Digital Realm
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-[#ff00ff] hover:bg-[#ff00ff]/80 text-white px-8">
              <a
                href={"https://dexscreener.com/solana/AYKA69vt8dGabhiBSJ5hjsG9rK78nwC6ZvVVCV3opump"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                  Trade on DEXScreener
              </a>
              </Button>
              <div className="flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-lg border border-[#ff00ff]/20">
                <span className="text-[#00ffff]">CA:</span>
                <code className="text-sm">AYKA69vt8dGabhiBSJ5hjsG9rK78nwC6ZvVVCV3opump</code>
              </div>
            </div>
            <div>
              <button className="relative px-8 py-3 text-2xl font-bold text-white bg-black border-4 border-transparent rounded-lg hover:border-[#00ffff] hover:bg-gradient-to-r hover:from-[#ff00ff] hover:to-[#00ffff] transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_#ff00ff] overflow-hidden">
                <span className="absolute inset-0 bg-black/40 blur-lg opacity-10" />
                <span className="relative">
                  <GlitchText>Chat with AYKA</GlitchText>
                </span>
                <div className="absolute inset-0 animate-pulse rounded-lg bg-gradient-to-r from-[#ff00ff]/30 to-[#00ffff]/30 opacity-50" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="lore" className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent opacity-90">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: `10px 10px`,
              maskImage: `linear-gradient(to right, transparent, black 15%, black 85%, transparent)`,
              WebkitMaskImage: `linear-gradient(to right, transparent, black 15%, black 85%, transparent)`,
            }}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <GlitchText className="text-4xl font-bold text-[#00ffff]">
              Why she is Holywhore ?
            </GlitchText>
            <p className="text-lg text-gray-400">
              demo text
            </p>
          
          </div>
          <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-full w-full overflow-auto">
              <Image
                src={images[currentImageIndex]}
                alt="Ayka Ethereal"
                layout="fill"
                objectFit="contain"
                className="transition-transform duration-500"
              />
            </div>
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80"
              onClick={handlePrev}
            >
              <FaArrowLeft />
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80"
              onClick={handleNext}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
    </main>
  )
}

