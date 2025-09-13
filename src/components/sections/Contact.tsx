import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Calendar } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Book Your Free 
            <span className="text-primary cyber-glow"> AI Consultation</span>
          </h2>
            <p className="text-lg text-cyber-blue max-w-2xl mx-auto">
              Ready to see how AI can transform your business? Let's discuss your specific needs.
            </p>
        </div>

        

        {/* Get Started Today */}
        <div className="text-center mt-16">
          <div className="cyber-container max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Get Started Today 🚀
            </h3>
            <p className="text-lg text-foreground mb-8">
              Ready to see how AI can transform your business? Let's connect:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Call Directly */}
              <div className="cyber-card text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2">📱 Call Us Directly</h4>
                <a href="tel:9540856059" className="text-2xl font-black text-primary cyber-glow hover:text-accent transition-colors mb-4 block">
                  📞 9540856059
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

              {/* Schedule Call */}
              <div className="cyber-card text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2">📅 Schedule a Call</h4>
                <p className="text-cyber-blue mb-4">Pick a time that works best for you:</p>
                <a 
                  href="https://calendly.com/ankitcodex9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cyber-btn-primary inline-block"
                >
                  👉 Book Your Strategy Call
                </a>
              </div>
            </div>

            <p className="text-lg text-primary font-semibold">
              ⚡ No forms, no waiting — just real conversations.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;