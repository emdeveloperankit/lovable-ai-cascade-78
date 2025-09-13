import { TrendingUp, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const results = [
    {
      icon: TrendingUp,
      metric: "+300%",
      title: "More leads captured",
      description: "with AI chatbot",
      details: "E-commerce client increased lead capture by implementing 24/7 AI support on their website."
    },
    {
      icon: Users,
      metric: "40%",
      title: "Higher call booking rate",
      description: "using voice AI",
      details: "Healthcare practice improved appointment bookings with natural voice AI assistant."
    },
    {
      icon: Clock,
      metric: "50+",
      title: "Hours saved per month",
      description: "with automations",
      details: "Real estate agency automated follow-ups and client communication workflows."
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
    <section ref={ref} id="results" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Proven 
            <span className="text-primary cyber-glow"> Results</span>
          </h2>
          <p className="text-lg md:text-xl text-cyber-blue max-w-2xl mx-auto">
            Real success stories from businesses that chose AgenticMode
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {results.map((result, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="cyber-card text-center group"
            >
              <div className="mb-6">
                <result.icon className="w-16 h-16 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                
                <div className="text-5xl font-black text-primary cyber-glow mb-2">
                  {result.metric}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {result.title}
                </h3>
                
                <p className="text-cyber-blue font-semibold mb-4">
                  {result.description}
                </p>
                
                <p className="text-sm text-cyber-blue">
                  {result.details}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="cyber-container max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-lg text-primary font-semibold mb-6">
              "AgenticMode transformed how we handle leads. Our sales team now closes faster and smarter." 
              - CEO, Real Estate Agency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/ankitcodex9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-btn-primary inline-block"
              >
                Book Free Consultation
              </a>
              <a 
                href="https://wa.me/919540856059" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-btn-secondary inline-block"
              >
                WhatsApp for Results
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;