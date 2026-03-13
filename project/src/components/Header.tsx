import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import aurexLogo from "../public/AurexLong.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const activePage = location.pathname;

  const goTo = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openRegisterModal = () => {
    window.dispatchEvent(new Event("openRegisterModal"));
  };

  // ────────────────────────────────────────────────────────────

  const linkClass = (path: string) =>
    `transition-colors ${activePage === path
      ? "text-aurex-accent font-semibold"
      : "text-slate-700 hover:text-aurex-accent"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 bg-aurex-background shadow-sm z-50 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => goTo("/")}
          >
            <img
              src={aurexLogo}
              alt="Aurex Ventures Logo"
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => goTo("/")} className={linkClass("/")}>
              Home
            </button>
            <button
              onClick={() => goTo("/services")}
              className={linkClass("/services")}
            >
              Services
            </button>
            <button
              onClick={() => goTo("/team")}
              className={linkClass("/team")}
            >
              Team
            </button>
            <button
              onClick={() => goTo("/events")}
              className={linkClass("/events")}
            >
              Events
            </button>
            <button
              onClick={() => goTo("/contact")}
              className={linkClass("/contact")}
            >
              Contact
            </button>

            {/* Event Registration */}
            <button
              onClick={() => goTo("/event-registration")}
              className={`${linkClass(
                "/event-registration"
              )} border border-aurex-accent px-4 py-1.5 rounded-lg hover:bg-aurex-accent hover:text-white transition-all`}
            >
              Event Registration
            </button>



            {/* Register */}
            <button
              onClick={openRegisterModal}
              className="bg-aurex-primary text-white px-6 py-2 rounded-lg hover:bg-aurex-primarySoft transition-colors font-medium"
            >
              Register
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col py-4 bg-aurex-background border-t border-slate-200">
            <button
              onClick={() => goTo("/")}
              className={`${linkClass("/")} w-full text-left px-4 py-2`}
            >
              Home
            </button>
            <button
              onClick={() => goTo("/services")}
              className={`${linkClass("/services")} w-full text-left px-4 py-2`}
            >
              Services
            </button>
            <button
              onClick={() => goTo("/team")}
              className={`${linkClass("/team")} w-full text-left px-4 py-2`}
            >
              Team
            </button>
            <button
              onClick={() => goTo("/events")}
              className={`${linkClass("/events")} w-full text-left px-4 py-2`}
            >
              Events
            </button>
            <button
              onClick={() => goTo("/contact")}
              className={`${linkClass("/contact")} w-full text-left px-4 py-2`}
            >
              Contact
            </button>
            <button
              onClick={() => goTo("/event-registration")}
              className={`${linkClass(
                "/event-registration"
              )} w-full text-left px-4 py-2 font-medium`}
            >
              Event Registration
            </button>



            <button
              onClick={() => {
                openRegisterModal();
                setIsMenuOpen(false);
              }}
              className="mt-4 mx-4 bg-aurex-primary text-white px-6 py-2 rounded-lg hover:bg-aurex-primarySoft transition-colors font-medium"
            >
              Register
            </button>
          </div>
        )}

        {/* ──────────────────────────────────────────────────────────────────────── */}
      </nav>
    </header>
  );
}