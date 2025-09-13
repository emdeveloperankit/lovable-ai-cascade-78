import { Check, Star, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const services = [{
    name: "AI Voice Agents Team",
    icon: "🔊",
    description: "Build & deploy human-like call agents for your business",
    features: ["Handle calls & qualify leads automatically", "24/7 phone support coverage", "Natural conversation flows", "Appointment booking automation", "Lead scoring & qualification"],
    popular: false,
    cta: "Contact for Pricing"
  }, {
    name: "AI Chatbot Experts",
    icon: "💬",
    description: "Integrate smart chatbots into all your platforms",
    features: ["Multi-platform integration (Website, WhatsApp, Instagram, Facebook)", "Automated sales & customer support", "Instant and accurate responses", "Lead capture & nurturing", "Custom conversation flows"],
    popular: true,
    cta: "Get Custom Quote"
  }, {
    name: "Automation Specialists",
    icon: "⚡",
    description: "Optimize workflows & CRM with intelligent AI systems",
    features: ["Automated email & SMS sequences", "CRM workflows & integrations", "Data processing & management", "Workflow optimization", "Custom API integrations"],
    popular: false,
    cta: "Book Free Consultation"
  }];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
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
  return <section ref={ref} id="pricing" className="py-20 bg-surface overflow-hidden">
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
            Our Team & 
            <span className="text-primary cyber-glow"> Custom Pricing</span>
          </h2>
          <p className="text-lg md:text-xl text-cyber-blue max-w-2xl mx-auto">
            Every solution is customized for your business. We don't believe in one-size-fits-all pricing.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => <motion.div key={index} variants={cardVariants} className={`cyber-card relative ${service.popular ? 'border-accent mt-6' : ''}`}>
              {service.popular && <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={isInView ? {
            opacity: 1,
            scale: 1
          } : {
            opacity: 0,
            scale: 0.8
          }} transition={{
            delay: 0.3
          }} className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  
                </motion.div>}

              <div className="text-center mb-6">
                <div className="text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="text-cyber-blue text-sm">
                  {service.description}
                </p>
              </div>

              <motion.div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => <motion.div key={featureIndex} variants={featureVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{
              delay: 0.5 + featureIndex * 0.1
            }} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-cyber-blue">{feature}</span>
                  </motion.div>)}
              </motion.div>

              <div className="text-center">
                <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className={service.popular ? 'cyber-btn-primary w-full' : 'cyber-btn-secondary w-full'}>
                  {service.cta}
                </motion.button>
              </div>
            </motion.div>)}
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.6,
        delay: 1.0
      }} className="text-center mt-12">
          <div className="cyber-container max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Crown className="w-6 h-6 text-primary mr-2" />
              <p className="text-lg text-primary font-bold">
                Custom Pricing Tailored to Your Needs
              </p>
            </div>
            <p className="text-cyber-blue">
              Pricing is based on your business size, needs, and goals. Contact us for a personalized proposal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Pricing;