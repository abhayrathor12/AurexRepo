import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import { Router } from './components/Router';
import EventPopup from './components/EventPopup';

function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isEventPopupOpen, setIsEventPopupOpen] = useState(false);

  useEffect(() => {
    const handleOpenRegisterModal = () => {
      setIsRegisterModalOpen(true);
    };

    const handleOpenEventPopup = () => {
      setIsEventPopupOpen(true);
    };

    window.addEventListener('openRegisterModal', handleOpenRegisterModal);
    window.addEventListener('openEventPopup', handleOpenEventPopup);

    return () => {
      window.removeEventListener('openRegisterModal', handleOpenRegisterModal);
      window.removeEventListener('openEventPopup', handleOpenEventPopup);
    };
  }, []);

  return (
    <div className="min-h-screen bg-aurex-background text-slate-800">
      <Header onRegisterClick={() => setIsRegisterModalOpen(true)} />

      {/* 🔥 Handles scroll + hash navigation */}
      <Router />

      <Footer />

      {/* 🔔 Event Popup */}
      <EventPopup
        isOpen={isEventPopupOpen}
        onClose={() => setIsEventPopupOpen(false)}
      />

      {/* 📝 Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </div>
  );
}

export default App;
