const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.215-.058-.33-.244-.444-.215-.13-2.262-1.16-2.463-1.16zM16.062 28.825c-2.292 0-4.54-.602-6.5-1.74l-7.27 1.91 1.94-7.165a13.05 13.05 0 0 1-1.93-6.86c0-7.165 5.59-13.005 12.46-13.005 3.32 0 6.45 1.31 8.71 3.62a12.78 12.78 0 0 1 3.65 9.395c0 7.165-6.06 12.46-12.93 12.46h-.13zm0-23.7c-5.79 0-10.5 4.71-10.5 10.5 0 2.21.69 4.34 2 6.15l-1.31 4.84 4.97-1.32c1.71 1.16 3.71 1.78 5.78 1.78h.04c5.79 0 10.74-4.93 10.74-10.74 0-2.86-1.21-5.55-3.24-7.6-2.04-2.04-4.74-3.16-7.61-3.16z"/>
  </svg>
);

const WhatsAppButton = () => {
  const phone = "14254057111";
  const message = encodeURIComponent("Hello! I'd like more information about Bringas Insurance.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-[60] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <WhatsAppIcon className="w-8 h-8 relative z-10" />
    </a>
  );
};

export default WhatsAppButton;
