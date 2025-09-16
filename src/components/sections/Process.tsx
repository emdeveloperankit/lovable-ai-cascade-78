import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, Settings, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      step: "01",
      title: "Discovery Call",
      description: "We analyze your needs & identify AI opportunities in your workflow"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      step: "02", 
      title: "AI Strategy",
      description: "Custom solution designed specifically for your business operations"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      step: "03",
      title: "Setup & Training", 
      description: "Deploy & train AI to match your business requirements perfectly"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      step: "04",
      title: "Launch & Optimize",
      description: "Continuous improvements and optimization for maximum ROI"
    }
  ];

  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-6">
            OUR PROVEN PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            How We Transform Your Business
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            From consultation to launch in just days, not months
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card text-center relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>
              
              <div className="w-16 h-16 bg-surface rounded-lg flex items-center justify-center text-primary mx-auto mb-4 mt-4">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              
              <p className="text-text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;