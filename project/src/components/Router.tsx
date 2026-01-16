import { useState, useEffect } from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Team from '../pages/Team';
import Events from '../pages/Events';
import Contact from '../pages/Contact';

export type Page = 'home' | 'services' | 'team' | 'events' | 'contact';

export function Router() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) as Page;

      if (['home', 'services', 'team', 'events', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }

      // 👇 FORCE SCROLL TO TOP ON REFRESH & HASH CHANGE
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    handleHashChange(); // runs on refresh
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
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
