import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const results = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      metric: "+300%",
      title: "More Leads Captured",
      description: "AI chatbots automatically qualify and capture leads 24/7",
      case: "E-commerce Client"
    },
    {
      icon: <Users className="w-8 h-8" />,
      metric: "40%",
      title: "Higher Booking Rates", 
      description: "Voice AI handles objections and books more appointments",
      case: "Real Estate Agency"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      metric: "50+",
      title: "Hours Saved Monthly",
      description: "Automated workflows handle repetitive tasks perfectly",
      case: "Healthcare Practice"
    }
  ];

  return (
    <section id="results" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-6">
            PROVEN RESULTS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Real Businesses, Real Results
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            See how our AI solutions transformed businesses like yours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card text-center"
            >
              <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center text-primary mx-auto mb-6">
                {result.icon}
              </div>
              
              <div className="stats-number text-4xl mb-2 text-primary">
                {result.metric}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {result.title}
              </h3>
              
              <p className="text-text-muted mb-4 leading-relaxed">
                {result.description}
              </p>
              
              <div className="text-sm text-primary font-medium">
                {result.case}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a 
            href="https://calendly.com/ankitcodex9" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="btn-primary text-lg px-8 py-4">
              Get Your Custom Case Study
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;