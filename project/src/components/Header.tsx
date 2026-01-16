import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from './Router';

interface HeaderProps {
  onRegisterClick: () => void;
}
import aurexLogo from '../public/AurexLong.png';
export default function Header({ onRegisterClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = (page: Page) => {
    window.location.hash = page;
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-aurex-background shadow-sm z-50 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate('home')}
        >
          <img
            src={aurexLogo}   // change this to your actual file name
            alt="Aurex Ventures Logo"
            className="h-14 w-auto"
          />
        </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-aurex-primary transition-colors">Home</a>
            <a href="#services" className="text-slate-700 hover:text-aurex-primary transition-colors">Services</a>
            <a href="#team" className="text-slate-700 hover:text-aurex-primary transition-colors">Team</a>
            <a href="#events" className="text-slate-700 hover:text-aurex-primary transition-colors">Events</a>
            <a href="#contact" className="text-slate-700 hover:text-aurex-primary transition-colors">Contact</a>
            <button
              onClick={onRegisterClick}
              className="bg-aurex-primary text-white px-6 py-2 rounded-lg hover:bg-aurex-primarySoft transition-colors font-medium"
            >
              Register
            </button>
          </div>

          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-aurex-background border-t border-slate-200">
            <a href="#home" className="block text-slate-700 hover:text-aurex-primary" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#services" className="block text-slate-700 hover:text-aurex-primary" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#team" className="block text-slate-700 hover:text-aurex-primary" onClick={() => setIsMenuOpen(false)}>Team</a>
            <a href="#events" className="block text-slate-700 hover:text-aurex-primary" onClick={() => setIsMenuOpen(false)}>Events</a>
            <a href="#contact" className="block text-slate-700 hover:text-aurex-primary" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <button
              onClick={() => {
                onRegisterClick();
                setIsMenuOpen(false);
              }}
              className="w-full bg-aurex-primary text-white px-6 py-2 rounded-lg hover:bg-aurex-primarySoft transition-colors font-medium"
            >
              Register
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
