import { motion } from "framer-motion";
import { CheckCircle, Bot, Calendar, TrendingUp, Settings } from "lucide-react";

const AboutBenefits = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Next-Gen AI System",
      description: "Our AI finds and books meetings for you. No complicated stuff - it just works."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Booking Machine",
      description: "Consistently generate 30-120 FREE quality appointments monthly with our AI system."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scale Without Chaos",
      description: "The same AI system that helped agencies hit 7-figures in 12 months"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Done For You (DFY)",
      description: "We run everything end-to-end. We do the work, you see the results."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="section-tag mb-6">
            LIMITED SPOTS AVAILABLE
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            What You'll Discover On Call:
          </h2>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-surface rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="stats-number mb-2">3</div>
              <p className="text-text-muted font-medium uppercase tracking-wider">
                AI EXPERT PARTNERS
              </p>
            </div>
            <div>
              <div className="stats-number mb-2">200+</div>
              <p className="text-text-muted font-medium uppercase tracking-wider">
                MEETINGS BOOKED
              </p>
            </div>
            <div>
              <div className="stats-number mb-2">50+</div>
              <p className="text-text-muted font-medium uppercase tracking-wider">
                CLIENT SERVED
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBenefits;