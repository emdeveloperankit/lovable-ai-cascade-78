import { Phone, Lightbulb, Settings, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Discovery Call",
      description: "We analyze your needs & identify AI opportunities for maximum ROI."
    },
    {
      number: "02", 
      icon: Lightbulb,
      title: "AI Strategy",
      description: "Custom solution designed for your specific workflows and goals."
    },
    {
      number: "03",
      icon: Settings,
      title: "Setup & Training",
      description: "Deploy & train AI to match your business processes perfectly."
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Optimize",
      description: "Continuous improvements for maximum ROI and performance."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
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
    <section ref={ref} id="process" className="py-20 bg-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Our Proven 
            <span className="text-primary cyber-glow"> Process</span>
          </h2>
          <p className="text-lg md:text-xl text-cyber-blue max-w-2xl mx-auto">
            From consultation to deployment in 4 simple steps
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="cyber-card text-center relative"
              >
                {/* Step number */}
                <div className="text-6xl font-black text-primary/20 absolute top-2 left-4">
                  {step.number}
                </div>
                
                <div className="relative z-10 pt-8">
                  <step.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-cyber-blue">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <div className="cyber-container max-w-2xl mx-auto">
            <p className="text-lg text-primary font-bold mb-4">
              Ready to 10x your business with AI?
            </p>
            <button className="cyber-btn-primary">
              Schedule Your Discovery Call Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;