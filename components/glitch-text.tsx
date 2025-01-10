'use client'

interface GlitchTextProps {
  children: React.ReactNode
  className?: string
}

export function GlitchText({ children, className = "" }: GlitchTextProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative inline-block">
        <span className="absolute inset-0 text-[#ff00ff] animate-glitch-1 clip-text">
          {children}
        </span>
        <span className="absolute inset-0 text-[#00ffff] animate-glitch-2 clip-text">
          {children}
        </span>
        <span className="relative text-white">{children}</span>
      </span>
    </div>
  )
}

