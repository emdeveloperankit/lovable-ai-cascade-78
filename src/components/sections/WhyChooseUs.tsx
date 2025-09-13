import { Rocket, Bot, Target, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Rocket,
      title: "Fast Setup",
      subtitle: "Launch in days, not months",
      description: "Get your AI systems running quickly with our streamlined deployment process."
    },
    {
      icon: Bot,
      title: "Human-like AI", 
      subtitle: "Conversations that feel natural",
      description: "Advanced AI that understands context and speaks like a real person."
    },
    {
      icon: Target,
      title: "Results-Oriented",
      subtitle: "More leads, sales, and efficiency",
      description: "Proven track record of increasing conversions and customer engagement."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      subtitle: "Enterprise-grade security",
      description: "Bank-level security with 99.9% uptime guarantee for your peace of mind."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Why Choose 
            <span className="text-primary cyber-glow"> AgenticMode</span>
          </h2>
          <p className="text-lg md:text-xl text-cyber-blue max-w-2xl mx-auto">
            We combine cutting-edge AI technology with proven results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="cyber-card text-center group"
            >
              <div className="mb-6">
                <feature.icon className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  🚀 {feature.title}
                </h3>
                <div className="text-primary font-semibold mb-3 text-sm md:text-base">
                  {feature.subtitle}
                </div>
                <p className="text-cyber-blue text-xs md:text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-12"
        >
          <div className="cyber-container max-w-3xl mx-auto">
            <p className="text-lg text-primary font-bold">
              Ready to see how AI can transform your business?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;