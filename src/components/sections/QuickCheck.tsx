import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const QuickCheck = () => {
  const checkItems = [
    "Running a 5-figure agency?",
    "Want tailored AI-infrastructure workflows for sales, marketing, or ops?",
    "Ready for a done-for-you AI system?"
  ];

  return (
    <section className="py-24 bg-surface/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-16">
            Quick Check - Is This For You?
          </h2>

          <div className="space-y-6">
            {checkItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-xl text-text-muted text-left">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickCheck;