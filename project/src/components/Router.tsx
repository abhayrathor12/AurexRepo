import { Routes, Route } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";

import MainLayout from "../layouts/MainLayout";
import BlankLayout from "../layouts/BlankLayout";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Team from "../pages/Team";
import Events from "../pages/Events";
import Contact from "../pages/Contact";
import StartupRegistration from "../pages/StartupRegistration";
import InvestorRegistration from "../pages/InvestorRegistration";
import StartupRegistrationPage from "./events/popupevent";
import WebinarRegistrationPage from "../pages/Webinar";

export default function Router() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* MAIN LAYOUT */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/startup-registration" element={<StartupRegistration />} />
          <Route path="/investor-registration" element={<InvestorRegistration />} />
        </Route>

        {/* BLANK LAYOUT */}
        <Route element={<BlankLayout />}>
          <Route
            path="/event-registration"
            element={<StartupRegistrationPage />}
          />
          <Route
            path="/Webinar-Registration"
            element={<WebinarRegistrationPage />}
          />
        </Route>

      </Routes>
    </>
  );
}