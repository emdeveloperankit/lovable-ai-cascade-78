import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Voice Agents", href: "#services" },
        { name: "AI Chatbots", href: "#services" },
        { name: "AI Automations", href: "#services" },
        { name: "Custom AI Solutions", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Process", href: "#process" },
        { name: "Case Studies", href: "#results" },
        { name: "FAQ", href: "#faq" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Get Quote", href: "#contact" },
        { name: "Support", href: "#contact" },
        { name: "Pricing", href: "#pricing" },
        { name: "Book Consultation", href: "#contact" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/agenticmode" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/agenticmode" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/agenticmode" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/agenticmode" }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="bg-surface-dark border-t border-primary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="text-3xl font-black text-primary cyber-glow mb-4">
              AGENTICMODE
            </div>
            <p className="text-cyber-blue mb-6 text-sm leading-relaxed">
              We design and deploy AI-powered chatbots, voice agents, and automations that save time and boost conversions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-cyber-blue text-sm">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                hello@agenticmode.com
              </div>
              <div className="flex items-center text-cyber-blue text-sm">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                📞 9540856059
              </div>
              <div className="flex items-center text-cyber-blue text-sm">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                San Francisco, CA
              </div>
              <div className="mt-4">
                <a 
                  href="https://calendly.com/ankitcodex9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cyber-btn-primary text-sm px-4 py-2 inline-block mr-2 mb-2"
                >
                  📅 Schedule a Call
                </a>
                <a 
                  href="https://wa.me/919540856059" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cyber-btn-secondary text-sm px-4 py-2 inline-block"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
            >
              <h3 className="text-foreground font-bold mb-4 text-lg">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-cyber-blue hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/20"
        >
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <motion.button
                key={social.name}
                onClick={() => scrollToSection(social.href)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-surface border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <social.icon className="w-5 h-5" />
              </motion.button>
            ))}
          </div>
          <div className="text-cyber-blue text-sm text-center md:text-right">
            <p>&copy; 2024 AgenticMode. All rights reserved.</p>
            <p className="mt-1">Powered by AI • Built for Scale</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;