import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: "Services",
    href: "#services"
  }, {
    name: "Process",
    href: "#process"
  }, {
    name: "Results",
    href: "#results"
  }, {
    name: "Pricing",
    href: "#pricing"
  }, {
    name: "FAQ",
    href: "#faq"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }} className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.2
        }} className="text-2xl font-bold text-primary text-glow">
            AGENTICMODE
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => <motion.button key={item.name} initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3 + index * 0.1
          }} onClick={() => scrollToSection(item.href)} className="text-neutral-light hover:text-primary transition-colors duration-300 font-medium">
                {item.name}
              </motion.button>)}
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.8
          }}>
              <a 
                href="https://calendly.com/ankitcodex9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="modern-btn-primary">Book a call</Button>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.3
          }} onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: "auto"
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="md:hidden overflow-hidden">
              <div className="modern-container mt-4 mb-4">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, index) => <motion.button key={item.name} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1
              }} onClick={() => scrollToSection(item.href)} className="text-left text-neutral-light hover:text-primary transition-colors duration-300 font-medium py-2">
                      {item.name}
                    </motion.button>)}
                  <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.6
              }} className="pt-4">
                    <a 
                      href="https://calendly.com/ankitcodex9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="modern-btn-primary w-full">
                        Book a Call
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </motion.nav>;
};
export default Navbar;