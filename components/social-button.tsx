import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SocialButtonProps {
  href: string
  className?: string
  children: React.ReactNode
}

export function SocialButton({ href, className, children }: SocialButtonProps) {
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "relative overflow-hidden group bg-black/20 backdrop-blur-sm border-[#ff00ff]/20 hover:bg-black/40 hover:border-[#ff00ff]/40",
        className
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        {children}
      </a>
    </Button>
  )
}

