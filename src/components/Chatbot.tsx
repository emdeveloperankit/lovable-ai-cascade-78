import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm AgenticMode's AI assistant. I can help you learn about our AI Voice Agents, Chatbots, and Automations. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const agenticModeKnowledge = {
    services: {
      "ai voice agents": "🔊 Our AI Voice Agents handle calls 24/7, qualify leads automatically, and book meetings with human-like conversations. They provide phone support, natural conversations, lead qualification & scoring, and appointment booking automation. Setup takes just days, not months!",
      "voice ai": "🔊 Our AI Voice Agents handle calls 24/7, qualify leads automatically, and book meetings with human-like conversations. They provide phone support, natural conversations, lead qualification & scoring, and appointment booking automation. Setup takes just days, not months!",
      "ai chatbots": "💬 Our AI Chatbots provide 24/7 support across websites, WhatsApp, Instagram, and Facebook. They handle automated sales & customer support with instant and accurate responses, plus lead capture & nurturing across all platforms.",
      "chatbots": "💬 Our AI Chatbots provide 24/7 support across websites, WhatsApp, Instagram, and Facebook. They handle automated sales & customer support with instant and accurate responses, plus lead capture & nurturing across all platforms.",
      "ai automations": "⚡ Our AI Automations handle automated email & SMS sequences, CRM workflows & integrations, data management & processing, and workflow optimization. Save 50+ hours monthly while boosting efficiency!",
      "automations": "⚡ Our AI Automations handle automated email & SMS sequences, CRM workflows & integrations, data management & processing, and workflow optimization. Save 50+ hours monthly while boosting efficiency!"
    },
    whyChoose: {
      "fast setup": "🚀 Fast Setup - Launch in days, not months. Get your AI systems running quickly with our streamlined deployment process.",
      "human-like": "🗣 Human-like AI - Conversations that feel natural. Advanced AI that understands context and speaks like a real person.",
      "results": "📈 Results-Oriented - More leads, sales, and efficiency. Proven track record of increasing conversions and customer engagement.",
      "secure": "🔒 Secure & Reliable - Enterprise-grade security with 99.9% uptime guarantee for your peace of mind."
    },
    process: "Our proven process is simple: 1️⃣ Discovery Call - We analyze your needs & identify AI opportunities 2️⃣ AI Strategy - Custom solution designed for your workflows 3️⃣ Setup & Training - Deploy & train AI to match your business 4️⃣ Launch & Optimize - Continuous improvements for maximum ROI. From start to finish in days!",
    results: "Our clients see amazing results: ✅ +300% more leads captured with chatbots ✅ 40% higher booking rates with voice AI ✅ 50+ hours saved monthly with automations. Real businesses, real results!",
    faq: {
      "setup time": "Setup typically takes 3-5 business days from consultation to launch. We handle all the technical work while you focus on your business. No technical skills required!",
      "natural": "Yes! Our AI uses advanced natural language processing. Most customers can't tell they're talking to AI - it's that natural and human-like!",
      "platforms": "We integrate with websites, WhatsApp, Instagram, Facebook, phone systems, HubSpot, Salesforce, and most CRM platforms.",
      "technical": "No technical skills needed! We handle everything - setup, training, and maintenance. You get an easy dashboard to manage your AI systems.",
      "complex": "Our AI handles 80-90% of inquiries automatically. For complex issues, it seamlessly transfers to humans with full conversation context.",
      "security": "Absolutely! We use enterprise-grade encryption and are SOC 2 compliant. Your data is completely secure and never shared with third parties.",
      "industries": "AgenticMode works with healthcare, real estate, e-commerce, professional services, SaaS, and many other industries. Our AI adapts to any business model!"
    },
    pricing: "AgenticMode offers custom pricing tailored to your specific business needs. We don't believe in one-size-fits-all pricing - it's based on your business size, goals, and requirements. Our three main service teams are: 🔊 AI Voice Agents Team, 💬 AI Chatbot Experts, and ⚡ Automation Specialists. Contact us for a personalized proposal and free consultation! 📅 Book instantly: https://calendly.com/ankitcodex9",
    contact: "Ready to get started? Here are all the ways to reach us:\n\n📞 **Call us directly**: 9540856059\n💬 **WhatsApp**: https://wa.me/919540856059 (for instant responses)\n📅 **Schedule a call**: https://calendly.com/ankitcodex9\n✉️ **Email**: hello@agenticmode.com\n\nOur experts will analyze your business and recommend the best AI solution with no commitment required!",
    availability: "We're available to help you:\n\n⏰ **Business Hours**: Monday - Friday, 9 AM - 6 PM (IST)\n📱 **WhatsApp**: 24/7 for quick questions\n📞 **Phone Support**: Business hours\n📅 **Scheduled Calls**: Available 7 days a week\n💬 **Email**: Responses within 24 hours\n\nFor urgent needs, WhatsApp is your fastest option!",
    whatsapp: "💬 **WhatsApp us instantly**: https://wa.me/919540856059\n\nWe're available 24/7 on WhatsApp for:\n• Quick questions about our services\n• Pricing inquiries\n• Technical support\n• Scheduling consultations\n• Follow-ups on your projects\n\nJust click the link and start chatting - we'll respond quickly!",
    calendly: "📅 **Book your free consultation**: https://calendly.com/ankitcodex9\n\nSchedule a personalized call to discuss:\n• Your specific business needs\n• AI opportunities in your industry\n• Custom solutions and pricing\n• Implementation timeline\n• ROI projections\n\nPick any time that works for you - we're flexible with scheduling!",
    about: "AgenticMode specializes in AI solutions that save time and boost conversions. We design and deploy AI-powered chatbots, voice agents, and automations that scale your business 10x faster. We handle everything from strategy to deployment - you focus on growth!"
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Check if the query is related to AgenticMode's business
    const agenticModeKeywords = [
      'agenticmode', 'ai', 'voice', 'chatbot', 'automation', 'service', 'setup', 
      'pricing', 'contact', 'book', 'consultation', 'hello', 'hi', 'help', 
      'process', 'results', 'security', 'platform', 'industry', 'technical', 
      'natural', 'complex', 'cost', 'why', 'fast', 'human-like', 'secure',
      'whatsapp', 'instagram', 'facebook', 'crm', 'lead', 'call', 'phone',
      'email', 'sms', 'workflow', 'business', 'scale', 'efficiency', 'available',
      'availability', 'calendly', 'schedule', 'appointment', 'when', 'time',
      'hours', 'support', 'reach', 'connect', 'urgent'
    ];
    
    const isRelevantQuery = agenticModeKeywords.some(keyword => message.includes(keyword));
    
    if (!isRelevantQuery) {
      return "I can only help with questions about AgenticMode's AI solutions. Ask me about our AI Voice Agents, Chatbots, Automations, setup process, pricing, results, or how to get started with AI for your business!";
    }

    // Greetings
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! Welcome to AgenticMode. I can help you learn about our AI Voice Agents, Chatbots, and Automations that scale businesses 10x faster. What would you like to know?";
    }

    // Services queries
    if (message.includes("service") || message.includes("what do you do") || message.includes("offer")) {
      return "AgenticMode offers 3 main AI services:\n\n🔊 AI Voice Agents - Handle calls & book meetings 24/7\n💬 AI Chatbots - Multi-platform support (Website, WhatsApp, Instagram, Facebook)\n⚡ AI Automations - Email/SMS workflows & CRM integration\n\nWhich service interests you most?";
    }

    // Specific service queries
    if (message.includes("voice") || message.includes("call") || message.includes("phone")) {
      return agenticModeKnowledge.services["ai voice agents"];
    }
    
    if (message.includes("chatbot") || message.includes("chat") || message.includes("whatsapp") || message.includes("instagram") || message.includes("facebook")) {
      return agenticModeKnowledge.services["ai chatbots"];
    }
    
    if (message.includes("automation") || message.includes("workflow") || message.includes("email") || message.includes("sms")) {
      return agenticModeKnowledge.services["ai automations"];
    }

    // Why choose queries
    if (message.includes("why") || message.includes("choose") || message.includes("benefit") || message.includes("advantage")) {
      return "Why Choose AgenticMode:\n\n🚀 Fast Setup - Launch in days, not months\n🗣 Human-like AI - Conversations that feel natural\n📈 Results-Oriented - More leads, sales, and efficiency\n🔒 Secure & Reliable - Enterprise-grade security\n\nWe combine cutting-edge AI technology with proven results!";
    }

    // Process queries
    if (message.includes("process") || message.includes("how it works") || message.includes("steps") || message.includes("how do you")) {
      return agenticModeKnowledge.process;
    }

    // Results queries
    if (message.includes("result") || message.includes("success") || message.includes("case") || message.includes("testimonial") || message.includes("proof")) {
      return agenticModeKnowledge.results;
    }

    // Pricing queries
    if (message.includes("price") || message.includes("cost") || message.includes("pricing") || message.includes("plan") || message.includes("fee")) {
      return agenticModeKnowledge.pricing;
    }

    // FAQ queries
    if (message.includes("setup") || message.includes("how long")) {
      return agenticModeKnowledge.faq["setup time"];
    }
    
    if (message.includes("natural") || message.includes("human") || message.includes("sound")) {
      return agenticModeKnowledge.faq["natural"];
    }
    
    if (message.includes("platform") || message.includes("integrate") || message.includes("crm")) {
      return agenticModeKnowledge.faq["platforms"];
    }
    
    if (message.includes("technical") || message.includes("skill") || message.includes("difficult")) {
      return agenticModeKnowledge.faq["technical"];
    }
    
    if (message.includes("complex") || message.includes("handle")) {
      return agenticModeKnowledge.faq["complex"];
    }
    
    if (message.includes("security") || message.includes("secure") || message.includes("safe") || message.includes("data")) {
      return agenticModeKnowledge.faq["security"];
    }
    
    if (message.includes("industry") || message.includes("business type") || message.includes("healthcare") || message.includes("real estate") || message.includes("ecommerce")) {
      return agenticModeKnowledge.faq["industries"];
    }

    // WhatsApp queries
    if (message.includes("whatsapp") || message.includes("whats app") || message.includes("chat") || message.includes("message")) {
      return agenticModeKnowledge.whatsapp;
    }

    // Calendly/Scheduling queries
    if (message.includes("schedule") || message.includes("book") || message.includes("calendly") || message.includes("appointment") || message.includes("call") || message.includes("consultation")) {
      return agenticModeKnowledge.calendly;
    }

    // Availability queries
    if (message.includes("available") || message.includes("availability") || message.includes("hours") || message.includes("when") || message.includes("time") || message.includes("support")) {
      return agenticModeKnowledge.availability;
    }

    // Contact queries
    if (message.includes("contact") || message.includes("reach") || message.includes("connect") || message.includes("email") || message.includes("get started")) {
      return agenticModeKnowledge.contact;
    }

    // About AgenticMode
    if (message.includes("about") || message.includes("agenticmode") || message.includes("company") || message.includes("who are you")) {
      return agenticModeKnowledge.about;
    }

    // Default response for AgenticMode-related queries
    return "I'm here to help you learn about AgenticMode's AI solutions! You can ask me about:\n\n• Our AI Voice Agents, Chatbots & Automations\n• Setup process & timeline\n• Pricing & consultation\n• Results & success stories\n• Technical details & security\n• Contact information & availability\n• WhatsApp & Calendly booking\n• How to get started\n\nWhat specific aspect interests you most?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate API delay for better UX
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center ${
          isOpen ? 'bg-accent' : 'bg-primary'
        }`}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-16 right-4 md:bottom-24 md:right-6 z-40 w-72 md:w-80 lg:w-96 h-80 md:h-96 bg-surface border border-primary/30 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-3 md:p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm md:text-base">AgenticMode Assistant</h3>
                <p className="text-xs opacity-90">Ask me about our AI solutions</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-foreground/20 p-1 rounded"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <ScrollArea ref={scrollAreaRef} className="flex-1 p-3 md:p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-2 md:p-3 rounded-lg text-xs md:text-sm ${
                        message.isUser
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-background text-foreground border border-primary/20'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <p className={`text-xs mt-1 opacity-70 ${message.isUser ? 'text-right' : 'text-left'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-background text-foreground border border-primary/20 p-3 rounded-lg">
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-3 md:p-4 border-t border-primary/20">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our AI services..."
                  className="flex-1 cyber-input text-xs md:text-sm"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="cyber-btn-primary px-2 md:px-3"
                >
                  <Send size={14} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;