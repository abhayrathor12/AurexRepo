interface ReadyCTAProps {
  onRegisterClick: () => void;
}

export function ServicesReadyCTA({ onRegisterClick }: ReadyCTAProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 text-blue-100">
          Let us help you navigate funding, compliance, and growth with confidence
        </p>
        <button
          onClick={onRegisterClick}
          className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-blue-50 transition-all font-bold text-lg shadow-xl"
        >
          Register With Us Today
        </button>
      </div>
    </section>
  );
}


