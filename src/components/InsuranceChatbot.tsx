import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

const PERSONAL_OPTIONS: QuickReply[] = [
  { label: "🚗 Auto Insurance", action: "service_auto", href: "/auto-insurance" },
  { label: "🏠 Home Insurance", action: "service_home", href: "/home-insurance" },
  { label: "❤️ Life Insurance", action: "service_life", href: "/life-insurance" },
  { label: "🌊 Flood Insurance", action: "service_flood", href: "/flood-insurance" },
  { label: "⬅️ Go Back", action: "restart" },
];

const BUSINESS_OPTIONS: QuickReply[] = [
  { label: "📋 General Liability", action: "service_gl", href: "/general-liability" },
  { label: "🚛 Commercial Auto", action: "service_ca", href: "/commercial-auto" },
  { label: "🏗️ Contractors", action: "service_contractors", href: "/contractors-insurance" },
  { label: "🏢 BOP", action: "service_bop", href: "/bop-insurance" },
  { label: "⬅️ Go Back", action: "restart" },
];

const SERVICE_INFO: Record<string, { text: string; href: string }> = {
  service_auto: { text: "Auto Insurance protects you against financial loss in the event of an accident or theft. We work with top carriers to find you the best rate!", href: "/auto-insurance" },
  service_home: { text: "Homeowners Insurance covers your home and belongings against damage, theft, and liability. Let us find the perfect policy for your family.", href: "/home-insurance" },
  service_life: { text: "Life Insurance provides financial security for your loved ones. We offer term, whole life, and universal options to fit your needs.", href: "/life-insurance" },
  service_flood: { text: "Flood Insurance protects your property from flood damage — standard homeowners policies don't cover it. Don't wait until it's too late!", href: "/flood-insurance" },
  service_gl: { text: "General Liability Insurance protects your business from third-party claims of bodily injury, property damage, and more.", href: "/general-liability" },
  service_ca: { text: "Commercial Auto Insurance covers vehicles used for business purposes, protecting your fleet and drivers on the road.", href: "/commercial-auto" },
  service_contractors: { text: "Contractors Insurance provides comprehensive coverage for construction professionals, from liability to tools and equipment.", href: "/contractors-insurance" },
  service_bop: { text: "A Business Owners Policy (BOP) bundles general liability and property insurance at a cost-effective rate for small businesses.", href: "/bop-insurance" },
};

const MAIN_BUTTONS: QuickReply[] = [
  { label: "🛡️ Personal Insurance", action: "personal" },
  { label: "🏢 Business Insurance", action: "business" },
  { label: "📞 Talk to an Agent", action: "contact", href: "/contact" },
];

const uid = () => Math.random().toString(36).slice(2, 9);

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

  useEffect(() => {
    if (open && !initRef.current) {
      initRef.current = true;
      if (userName) {
        setFlowStep("main");
        addBotMessage(
          `Welcome back, ${userName}! 👋 How can I help you today?`,
          MAIN_BUTTONS,
          800
        );
      } else {
        setFlowStep("wait_name");
        addBotMessage(
          "Hi! I'm Owlin, your Bringas Insurance assistant. I'm here to help you find the perfect protection. First, may I ask, what is your name?",
          undefined,
          1000
        );
      }
    }
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const handleAction = (action: string, label: string, href?: string) => {
    setMessages((prev) => [...prev, { id: uid(), role: "user", text: label }]);
    scrollToBottom();

    if (action === "contact" && href) {
      addBotMessage(`No problem, ${userName || "friend"}! Let me connect you with one of our experts right away. 🚀`);
      setTimeout(() => { setOpen(false); navigate(href); }, 1800);
      return;
    }

    if (action === "restart") {
      addBotMessage(`What else can I help you with, ${userName || "friend"}?`, MAIN_BUTTONS);
      return;
    }

    if (action === "personal") {
      addBotMessage("Excellent! We have great personal coverage options. What type of insurance are you looking for?", PERSONAL_OPTIONS);
      return;
    }

    if (action === "business") {
      addBotMessage("Smart move protecting your business! What type of commercial coverage do you need?", BUSINESS_OPTIONS);
      return;
    }

    const info = SERVICE_INFO[action];
    if (info) {
      addBotMessage(info.text, [
        { label: "📝 Get a Quote", action: "goto_quote", href: info.href },
        { label: "⬅️ Go Back", action: "restart" },
      ]);
      return;
    }

    if (action === "goto_quote" && href) {
      addBotMessage("Let's get you covered! Taking you to the details now… ✨");
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
      await addBotMessage(`Nice to meet you, ${name}! 👋 How can I help you today?`, MAIN_BUTTONS, 1200);
      return;
    }

    addBotMessage(
      `That's a great question, ${userName || "friend"}! For a detailed answer, please let me connect you with one of our experts.`,
      [
        { label: "📞 Talk to an Agent", action: "contact", href: "/contact" },
        { label: "⬅️ Start Over", action: "restart" },
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
                <h3 className="text-white font-bold text-sm">Owlin — Your Virtual Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-white/70 text-xs">Online — Ready to help</span>
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
                  placeholder={flowStep === "wait_name" ? "Type your name..." : "Type your question..."}
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
