import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Youtube } from "lucide-react";

const OutboundSystems = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin className="w-8 h-8" />, url: "#" },
    { name: "Instagram", icon: <Instagram className="w-8 h-8" />, url: "#" },
    { name: "YouTube", icon: <Youtube className="w-8 h-8" />, url: "#" },
    { name: "TikTok", icon: <span className="text-2xl font-bold">T</span>, url: "#" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Social media icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-12 mb-16"
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-surface rounded-lg flex items-center justify-center text-primary mb-3 hover:bg-surface-light transition-colors">
                  {social.icon}
                </div>
                <p className="text-text-muted text-sm font-medium">
                  {social.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="pill-button mb-8">
              ✨ WANT OUTBOUND SYSTEMS?
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-black text-foreground leading-tight mb-6">
              We Build AI Outbound Systems
              <br />
              <span className="gradient-text">That Fill Your Calendar</span>
            </h2>
            <p className="text-xl text-text-muted max-w-4xl mx-auto">
              DFY AI outreach across Email, LinkedIn, DMs & more, so you can close 20-30+
              <br />
              qualified calls per month without ads or in-house SDRs
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://calendly.com/ankitcodex9" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="btn-primary text-lg px-12 py-4">
                Book Your Free AI Strategy Call
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OutboundSystems;