import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from './Router';
import aurexLogo from '../public/AurexLong.png';

interface HeaderProps {
  onRegisterClick: () => void;
}

export default function Header({ onRegisterClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState<Page>('home');

  // 👇 detect hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      setActivePage(hash || 'home');
    };

    handleHashChange(); // on refresh
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: Page) => {
    window.location.hash = page;
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkClass = (page: Page) =>
    `transition-colors ${
      activePage === page
        ? 'text-aurex-accent font-semibold'
        : 'text-slate-700 hover:text-aurex-accent'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 bg-aurex-background shadow-sm z-50 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('home')}>
            <img src={aurexLogo} alt="Aurex Ventures Logo" className="h-14 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigate('home')} className={linkClass('home')}>Home</button>
            <button onClick={() => navigate('services')} className={linkClass('services')}>Services</button>
            <button onClick={() => navigate('team')} className={linkClass('team')}>Team</button>
            <button onClick={() => navigate('events')} className={linkClass('events')}>Events</button>
            <button onClick={() => navigate('contact')} className={linkClass('contact')}>Contact</button>

            <button
              onClick={onRegisterClick}
              className="bg-aurex-primary text-white px-6 py-2 rounded-lg hover:bg-aurex-primarySoft transition-colors font-medium"
            >
              Register
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-aurex-background border-t border-slate-200">
            <button onClick={() => navigate('home')} className={linkClass('home')}>Home</button>
            <button onClick={() => navigate('services')} className={linkClass('services')}>Services</button>
            <button onClick={() => navigate('team')} className={linkClass('team')}>Team</button>
            <button onClick={() => navigate('events')} className={linkClass('events')}>Events</button>
            <button onClick={() => navigate('contact')} className={linkClass('contact')}>Contact</button>

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
