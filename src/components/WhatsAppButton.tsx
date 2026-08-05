import owlinAvatar from "@/assets/owlin-avatar.png.asset.json";


const WhatsAppButton = () => {
  const phone = "14254057111";
  const message = encodeURIComponent("Hello! I'd like more information about Bringas Insurance.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-[60] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 overflow-hidden"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <img
        src={owlinAvatar.url}
        alt="Owlin"
        className="w-full h-full object-cover relative z-10"
      />
    </a>
  );
};

export default WhatsAppButton;
