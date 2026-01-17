import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import { Router } from './components/Router';


function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenRegisterModal = () => {
      setIsRegisterModalOpen(true);
    };

    window.addEventListener('openRegisterModal', handleOpenRegisterModal);
    return () => {
      window.removeEventListener('openRegisterModal', handleOpenRegisterModal);
    };
  }, []);

  return (
    <div className="min-h-screen bg-aurex-background text-slate-800">
      <Header onRegisterClick={() => setIsRegisterModalOpen(true)} />

      {/* 🔥 Handles scroll + hash navigation */}

      <Router />

      <Footer />

      <RegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </div>
  );
}

export default App;
