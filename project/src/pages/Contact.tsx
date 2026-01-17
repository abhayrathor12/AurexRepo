import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { ContactHero } from '../components/contact/Hero';
import { ContactInfoAndFormSection } from '../components/contact/InfoAndForm';
import { ContactRegisterCardsSection } from '../components/contact/RegisterCards';
import { ContactFooterNoteSection } from '../components/contact/FooterNote';

export default function Contact() {
  const openRegister = () => {
    const event = new CustomEvent('openRegisterModal');
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen pt-2">
      <ContactHero />
      <ContactInfoAndFormSection />
      {/* <ContactRegisterCardsSection onRegisterClick={openRegister} /> */}
      {/* <ContactFooterNoteSection /> */}
    </div>
  );
}
