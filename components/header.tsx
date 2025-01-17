import { RiTelegramLine } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { XIcon as BrandX } from 'lucide-react'
import {GlitchText} from '../components/glitch-text'; // Assume this is a custom component
import {SocialButton} from '../components/social-button'; // Assume this is a custom component

const Header = () => {
  return (
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
  );
};

export default Header;
