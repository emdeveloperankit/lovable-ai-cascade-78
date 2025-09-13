import { Mic, MessageSquare, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const services = [{
    icon: Mic,
    title: "🔊 AI Voice Agents",
    emoji: "🎤",
    description: "Handle calls, qualify leads, and book meetings automatically",
    features: ["24/7 phone support", "Human-like natural conversations", "Lead qualification & scoring", "Appointment booking automation"]
  }, {
    icon: MessageSquare,
    title: "💬 AI Chatbots", 
    emoji: "💬",
    description: "24/7 support across Website, WhatsApp, Instagram, and Facebook",
    features: ["Multi-platform integration", "Automated sales & customer support", "Instant and accurate responses", "Lead capture & nurturing"]
  }, {
    icon: Zap,
    title: "⚡ AI Automations",
    emoji: "⚡",
    description: "Automated email & SMS follow-ups, CRM workflows & integrations",
    features: ["Automated email & SMS sequences", "CRM workflows & integrations", "Data management & processing", "Workflow optimization"]
  }];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const featureVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };
  return <section ref={ref} id="services" className="py-20 bg-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 50
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Our AI 
            <span className="text-primary cyber-glow"> Services</span>
          </h2>
          <p className="text-lg md:text-xl text-cyber-blue max-w-2xl mx-auto">
            We provide done-for-you AI systems tailored to your business needs
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => <motion.div key={index} variants={cardVariants} className="cyber-card group">
              <div className="text-center mb-6">
                
                <service.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-cyber-blue text-base md:text-lg">
                  {service.description}
                </p>
              </div>
              
              <motion.div className="space-y-3">
                {service.features.map((feature, featureIndex) => <motion.div key={featureIndex} variants={featureVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{
              delay: 0.5 + featureIndex * 0.1
            }} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-cyber-blue">{feature}</span>
                  </motion.div>)}
              </motion.div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default Services;