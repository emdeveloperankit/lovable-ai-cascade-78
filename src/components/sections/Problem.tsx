import { AlertTriangle, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const problems = [{
    icon: Clock,
    title: "Slow Response Times",
    emoji: "⏳",
    description: "Missed leads due to delays in communication and manual processes"
  }, {
    icon: DollarSign,
    title: "High Operational Costs",
    emoji: "💸",
    description: "Paying staff for repetitive tasks AI can handle automatically"
  }, {
    icon: AlertTriangle,
    title: "Limited Scalability",
    emoji: "🚫",
    description: "Growth requires hiring more people, not smarter systems"
  }];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
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
  return <section ref={ref} id="problem" className="py-20 bg-background overflow-hidden">
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
            The Challenges Businesses Face
            <span className="text-primary cyber-glow block"> Without AI</span>
          </h2>
          <p className="text-lg md:text-xl text-cyber-blue max-w-2xl mx-auto text-yellow-300">
            These problems are slowing down your business and costing growth opportunities
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {problems.map((problem, index) => <motion.div key={index} variants={itemVariants} className="cyber-card text-center group">
              
              <problem.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-cyber-blue text-sm md:text-base">
                {problem.description}
              </p>
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
        delay: 0.8
      }} className="text-center mt-12">
          <div className="cyber-container max-w-2xl mx-auto">
            <p className="text-lg text-primary font-bold">
              With AgenticMode AI solutions, you get speed, automation, and intelligence
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Problem;