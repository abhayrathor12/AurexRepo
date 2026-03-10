import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./components/Router";
import RegistrationModal from "./components/RegistrationModal";
import EventPopup from "./components/EventPopup";

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

    window.addEventListener("openRegisterModal", handleOpenRegisterModal);
    window.addEventListener("openEventPopup", handleOpenEventPopup);

    return () => {
      window.removeEventListener("openRegisterModal", handleOpenRegisterModal);
      window.removeEventListener("openEventPopup", handleOpenEventPopup);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-aurex-background text-slate-800">

        <Router />

        <EventPopup
          isOpen={isEventPopupOpen}
          onClose={() => setIsEventPopupOpen(false)}
        />

        <RegistrationModal
          isOpen={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
        />

      </div>
    </BrowserRouter>
  );
}

export default App;