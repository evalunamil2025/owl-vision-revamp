import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
  buttons?: QuickReply[];
};

type QuickReply = {
  label: string;
  action: string;
  href?: string;
};

type FlowStep = "greeting" | "wait_name" | "main";

type Lang = "en" | "es";

const COPY = {
  en: {
    headerTitle: "Owlin — Your Virtual Assistant",
    online: "Online — Ready to help",
    welcomeBack: (n: string) => `Welcome back, ${n}! 👋 How can I help you today?`,
    askName: "Hi! I'm Owlin, your Bringas Insurance assistant. I'm here to help you find the perfect protection. First, may I ask, what is your name?",
    niceToMeet: (n: string) => `Nice to meet you, ${n}! 👋 How can I help you today?`,
    contactReply: (n: string) => `No problem, ${n}! Let me connect you with one of our experts right away. 🚀`,
    restartReply: (n: string) => `What else can I help you with, ${n}?`,
    personalReply: "Excellent! We have great personal coverage options. What type of insurance are you looking for?",
    businessReply: "Smart move protecting your business! What type of commercial coverage do you need?",
    quoteReply: "Let's get you covered! Taking you to the details now… ✨",
    fallback: (n: string) => `That's a great question, ${n}! For a detailed answer, please let me connect you with one of our experts.`,
    friend: "friend",
    placeholderName: "Type your name...",
    placeholderQuestion: "Type your question...",
    main: [
      { label: "🛡️ Personal Insurance", action: "personal" },
      { label: "🏢 Business Insurance", action: "business" },
      { label: "📞 Talk to an Agent", action: "contact", href: "/contact" },
    ] as QuickReply[],
    personal: [
      { label: "🚗 Auto Insurance", action: "service_auto", href: "/auto-insurance" },
      { label: "🏠 Home Insurance", action: "service_home", href: "/home-insurance" },
      { label: "❤️ Life Insurance", action: "service_life", href: "/life-insurance" },
      { label: "⬅️ Go Back", action: "restart" },
    ] as QuickReply[],
    business: [
      { label: "📋 General Liability", action: "service_gl", href: "/general-liability" },
      { label: "🚛 Commercial Auto", action: "service_ca", href: "/commercial-auto" },
      { label: "🏗️ Contractors", action: "service_contractors", href: "/contractors-insurance" },
      { label: "🏢 BOP", action: "service_bop", href: "/bop-insurance" },
      { label: "⬅️ Go Back", action: "restart" },
    ] as QuickReply[],
    services: {
      service_auto: { text: "Auto Insurance protects you against financial loss in the event of an accident or theft. We work with top carriers to find you the best rate!", href: "/auto-insurance" },
      service_home: { text: "Homeowners Insurance covers your home and belongings against damage, theft, and liability. Let us find the perfect policy for your family.", href: "/home-insurance" },
      service_life: { text: "Life Insurance provides financial security for your loved ones. We offer term, whole life, and universal options to fit your needs.", href: "/life-insurance" },
      service_gl: { text: "General Liability Insurance protects your business from third-party claims of bodily injury, property damage, and more.", href: "/general-liability" },
      service_ca: { text: "Commercial Auto Insurance covers vehicles used for business purposes, protecting your fleet and drivers on the road.", href: "/commercial-auto" },
      service_contractors: { text: "Contractors Insurance provides comprehensive coverage for construction professionals, from liability to tools and equipment.", href: "/contractors-insurance" },
      service_bop: { text: "A Business Owners Policy (BOP) bundles general liability and property insurance at a cost-effective rate for small businesses.", href: "/bop-insurance" },
    } as Record<string, { text: string; href: string }>,
    getQuote: "📝 Get a Quote",
    goBack: "⬅️ Go Back",
    startOver: "⬅️ Start Over",
    talkAgent: "📞 Talk to an Agent",
    callNow: "📞 Call Now: (425) 405-7111",
    officeOpenNudge: (n: string) => `Good news, ${n} — our office is open right now! 🎉 The fastest way to get a tailored answer is a quick call with one of our licensed agents. Tap below to call us instantly:`,
    officeClosedNudge: (n: string) => `Heads up, ${n}: our office is currently closed (Mon–Fri, 9am–6pm PT). Leave your question here and we'll follow up first thing — or tap below to schedule a callback.`,
  },
  es: {
    headerTitle: "Owlin — Tu Asistente Virtual",
    online: "En línea — Listo para ayudar",
    welcomeBack: (n: string) => `¡Bienvenido de nuevo, ${n}! 👋 ¿En qué puedo ayudarte hoy?`,
    askName: "¡Hola! Soy Owlin, tu asistente de Bringas Insurance. Estoy aquí para ayudarte a encontrar la protección perfecta. Primero, ¿cuál es tu nombre?",
    niceToMeet: (n: string) => `¡Mucho gusto, ${n}! 👋 ¿En qué puedo ayudarte hoy?`,
    contactReply: (n: string) => `¡Sin problema, ${n}! Te conecto con uno de nuestros expertos ahora mismo. 🚀`,
    restartReply: (n: string) => `¿En qué más puedo ayudarte, ${n}?`,
    personalReply: "¡Excelente! Tenemos grandes opciones de cobertura personal. ¿Qué tipo de seguro estás buscando?",
    businessReply: "¡Gran decisión proteger tu negocio! ¿Qué tipo de cobertura comercial necesitas?",
    quoteReply: "¡Vamos a protegerte! Te llevo a los detalles ahora… ✨",
    fallback: (n: string) => `¡Excelente pregunta, ${n}! Para una respuesta detallada, déjame conectarte con uno de nuestros expertos.`,
    friend: "amigo",
    placeholderName: "Escribe tu nombre...",
    placeholderQuestion: "Escribe tu pregunta...",
    main: [
      { label: "🛡️ Seguros Personales", action: "personal" },
      { label: "🏢 Seguros de Negocio", action: "business" },
      { label: "📞 Hablar con un Agente", action: "contact", href: "/contact" },
    ] as QuickReply[],
    personal: [
      { label: "🚗 Seguro de Auto", action: "service_auto", href: "/auto-insurance" },
      { label: "🏠 Seguro de Hogar", action: "service_home", href: "/home-insurance" },
      { label: "❤️ Seguro de Vida", action: "service_life", href: "/life-insurance" },
      { label: "🌊 Seguro de Inundación", action: "service_flood", href: "/flood-insurance" },
      { label: "⬅️ Volver", action: "restart" },
    ] as QuickReply[],
    business: [
      { label: "📋 Responsabilidad General", action: "service_gl", href: "/general-liability" },
      { label: "🚛 Auto Comercial", action: "service_ca", href: "/commercial-auto" },
      { label: "🏗️ Contratistas", action: "service_contractors", href: "/contractors-insurance" },
      { label: "🏢 BOP", action: "service_bop", href: "/bop-insurance" },
      { label: "⬅️ Volver", action: "restart" },
    ] as QuickReply[],
    services: {
      service_auto: { text: "El Seguro de Auto te protege contra pérdidas financieras en caso de accidente o robo. ¡Trabajamos con las mejores aseguradoras para conseguirte la mejor tarifa!", href: "/auto-insurance" },
      service_home: { text: "El Seguro de Hogar cubre tu casa y pertenencias contra daños, robo y responsabilidad. Déjanos encontrar la póliza perfecta para tu familia.", href: "/home-insurance" },
      service_life: { text: "El Seguro de Vida brinda seguridad financiera para tus seres queridos. Ofrecemos opciones de término, vida entera y universal para tus necesidades.", href: "/life-insurance" },
      service_flood: { text: "El Seguro de Inundación protege tu propiedad contra daños por inundación — las pólizas estándar de hogar no lo cubren. ¡No esperes a que sea tarde!", href: "/flood-insurance" },
      service_gl: { text: "El Seguro de Responsabilidad General protege a tu negocio de reclamos de terceros por lesiones, daños materiales y más.", href: "/general-liability" },
      service_ca: { text: "El Seguro de Auto Comercial cubre vehículos usados para negocios, protegiendo tu flota y conductores en la carretera.", href: "/commercial-auto" },
      service_contractors: { text: "El Seguro para Contratistas brinda cobertura integral para profesionales de la construcción, desde responsabilidad hasta herramientas y equipo.", href: "/contractors-insurance" },
      service_bop: { text: "Una Póliza de Dueño de Negocio (BOP) combina responsabilidad general y seguro de propiedad a una tarifa accesible para pequeñas empresas.", href: "/bop-insurance" },
    } as Record<string, { text: string; href: string }>,
    getQuote: "📝 Obtener Cotización",
    goBack: "⬅️ Volver",
    startOver: "⬅️ Empezar de nuevo",
    talkAgent: "📞 Hablar con un Agente",
    callNow: "📞 Llamar ahora: (425) 405-7111",
    officeOpenNudge: (n: string) => `¡Buenas noticias, ${n}! Nuestra oficina está abierta en este momento 🎉 La forma más rápida de obtener una respuesta personalizada es una llamada con uno de nuestros agentes licenciados. Toca abajo para llamarnos al instante:`,
    officeClosedNudge: (n: string) => `Atención, ${n}: nuestra oficina está cerrada por ahora (Lun–Vie, 9am–6pm PT). Déjanos tu pregunta y te contactamos a primera hora — o toca abajo para agendar una llamada.`,
  },
};

const uid = () => Math.random().toString(36).slice(2, 9);

// Office hours: Mon–Fri, 9am–6pm Pacific Time
const isOfficeHours = (): boolean => {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      weekday: "short",
      hour: "numeric",
      hour12: false,
    }).formatToParts(new Date());
    const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
    const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10);
    const isWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(weekday);
    return isWeekday && hour >= 9 && hour < 18;
  } catch {
    return false;
  }
};

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="flex items-end gap-2 mb-3"
  >
    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00a651] to-[#00c853] flex items-center justify-center flex-shrink-0">
      <Bot className="w-4 h-4 text-white" />
    </div>
    <div className="bg-green-50 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-green-400"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  </motion.div>
);

const InsuranceChatbot = () => {
  const { i18n } = useTranslation();
  const lang: Lang = i18n.language?.startsWith("es") ? "es" : "en";
  const t = COPY[lang];

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [flowStep, setFlowStep] = useState<FlowStep>("greeting");
  const [userName, setUserName] = useState<string>(() => {
    return localStorage.getItem("owlin_user_name") || "";
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const initRef = useRef(false);

  const scrollToBottom = () => {
    setTimeout(() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }), 50);
  };

  const addBotMessage = (text: string, buttons?: QuickReply[], delay = 1200): Promise<void> => {
    return new Promise((resolve) => {
      setTyping(true);
      scrollToBottom();
      setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [...prev, { id: uid(), role: "bot", text, buttons }]);
        scrollToBottom();
        resolve();
      }, delay);
    });
  };

  // Reset chat when language changes
  useEffect(() => {
    initRef.current = false;
    setMessages([]);
    setFlowStep("greeting");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => {
    if (open && !initRef.current) {
      initRef.current = true;
      const officeOpen = isOfficeHours();
      const callBtn: QuickReply = { label: t.callNow, action: "call", href: "tel:+14254057111" };
      if (userName) {
        setFlowStep("main");
        const main = officeOpen ? [callBtn, ...t.main] : t.main;
        addBotMessage(t.welcomeBack(userName), main, 800).then(() => {
          if (officeOpen) {
            addBotMessage(t.officeOpenNudge(userName), [callBtn], 900);
          } else {
            addBotMessage(t.officeClosedNudge(userName), undefined, 900);
          }
        });
      } else {
        setFlowStep("wait_name");
        addBotMessage(t.askName, undefined, 1000);
      }
    }
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleAction = (action: string, label: string, href?: string) => {
    setMessages((prev) => [...prev, { id: uid(), role: "user", text: label }]);
    scrollToBottom();

    if (action === "call" && href) {
      window.location.href = href;
      return;
    }

    if (action === "contact" && href) {
      addBotMessage(t.contactReply(userName || t.friend));
      setTimeout(() => { setOpen(false); navigate(href); }, 1800);
      return;
    }

    if (action === "restart") {
      addBotMessage(t.restartReply(userName || t.friend), t.main);
      return;
    }

    if (action === "personal") {
      addBotMessage(t.personalReply, t.personal);
      return;
    }

    if (action === "business") {
      addBotMessage(t.businessReply, t.business);
      return;
    }

    const info = t.services[action];
    if (info) {
      addBotMessage(info.text, [
        { label: t.getQuote, action: "goto_quote", href: info.href },
        { label: t.goBack, action: "restart" },
      ]);
      return;
    }

    if (action === "goto_quote" && href) {
      addBotMessage(t.quoteReply);
      setTimeout(() => { setOpen(false); navigate(href); }, 1500);
    }
  };

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { id: uid(), role: "user", text }]);
    setInput("");
    scrollToBottom();

    if (flowStep === "wait_name") {
      const name = text.split(" ")[0];
      setUserName(name);
      localStorage.setItem("owlin_user_name", name);
      setFlowStep("main");
      const officeOpen = isOfficeHours();
      const callBtn: QuickReply = { label: t.callNow, action: "call", href: "tel:+14254057111" };
      const main = officeOpen ? [callBtn, ...t.main] : t.main;
      await addBotMessage(t.niceToMeet(name), main, 1200);
      if (officeOpen) {
        addBotMessage(t.officeOpenNudge(name), [callBtn], 900);
      } else {
        addBotMessage(t.officeClosedNudge(name), undefined, 900);
      }
      return;
    }

    addBotMessage(
      t.fallback(userName || t.friend),
      [
        { label: t.talkAgent, action: "contact", href: "/contact" },
        { label: t.startOver, action: "restart" },
      ],
      1200
    );
  };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-[100] w-16 h-16 rounded-full bg-[#00a651] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
          >
            <span className="absolute inset-0 rounded-full bg-[#00a651]/30 animate-ping" />
            <MessageSquare className="w-7 h-7 relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 40, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 40 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-[100] w-[92vw] sm:w-[400px] h-[75vh] sm:h-[560px] rounded-3xl overflow-hidden shadow-[0_25px_60px_-12px_rgba(0,166,81,0.35)] flex flex-col bg-white/95 backdrop-blur-lg border border-white/20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#00a651] to-[#00c853] p-4 flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm">{t.headerTitle}</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-white/70 text-xs">{t.online}</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-1">
              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex mb-3 ${msg.role === "user" ? "justify-end" : "items-end gap-2"}`}
                  >
                    {msg.role === "bot" && (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00a651] to-[#00c853] flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className="flex flex-col gap-2 max-w-[80%]">
                      <div
                        className={`px-4 py-2.5 text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-[#015093] text-white rounded-2xl rounded-br-sm"
                            : "bg-green-50 text-slate-700 rounded-2xl rounded-bl-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.buttons && (
                        <div className="flex flex-wrap gap-1.5">
                          {msg.buttons.map((btn) => (
                            <button
                              key={btn.label}
                              onClick={() => handleAction(btn.action, btn.label, btn.href)}
                              className="px-3 py-1.5 text-xs font-semibold rounded-full border border-[#00a651]/20 text-[#00a651] bg-white hover:bg-[#00a651] hover:text-white transition-all flex items-center gap-1 shadow-sm"
                            >
                              {btn.label}
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <AnimatePresence>{typing && <TypingIndicator />}</AnimatePresence>
            </div>

            {/* Input */}
            <div className="p-3 border-t border-slate-100 flex-shrink-0">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={flowStep === "wait_name" ? t.placeholderName : t.placeholderQuestion}
                  className="flex-1 px-4 py-2.5 text-sm rounded-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#00a651]/40 focus:ring-2 focus:ring-[#00a651]/10 transition-all"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full bg-[#00a651] text-white flex items-center justify-center hover:bg-[#00c853] transition-colors shadow-md"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InsuranceChatbot;
