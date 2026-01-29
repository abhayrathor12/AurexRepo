import { useState, useEffect } from 'react';

import Home from '../pages/Home';
import Services from '../pages/Services';
import Team from '../pages/Team';
import Events from '../pages/Events';
import Contact from '../pages/Contact';
import StartupRegistration from '../pages/StartupRegistration';
import InvestorRegistration from '../pages/InvestorRegistration';

export type Page =
  | 'home'
  | 'services'
  | 'team'
  | 'events'
  | 'contact'
  | 'startup-registration'
  | 'investor-registration';

export function Router() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.slice(1);
      const hash = rawHash.startsWith('/')
        ? rawHash.slice(1)
        : rawHash;
    
      if (
        [
          'home',
          'services',
          'team',
          'events',
          'contact',
          'startup-registration',
          'investor-registration',
        ].includes(hash as Page)
      ) {
        setCurrentPage(hash as Page);
      } else {
        setCurrentPage('home');
      }
    
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    

    handleHashChange(); // run on refresh
    window.addEventListener('hashchange', handleHashChange);

    return () =>
      window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: Page) => {
    window.location.hash = page;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'services':
        return <Services />;
      case 'team':
        return <Team />;
      case 'events':
        return <Events />;
      case 'contact':
        return <Contact />;
      case 'startup-registration':
        return <StartupRegistration />;
      case 'investor-registration':
        return <InvestorRegistration />;
      default:
        return <Home />;
    }
  };

  return <>{renderPage()}</>;
}

export function useNavigate() {
  return (page: Page) => {
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}
