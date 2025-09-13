import { Button } from "@/components/ui/button";
import { Mic, Bot, Zap } from "lucide-react";
import { motion } from "framer-motion";
import TypewriterText from "@/components/TypewriterText";
const Hero = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 0.6,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };
  return <section className="min-h-screen gradient-cyber flex items-center justify-center relative overflow-hidden pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div variants={textVariants} initial="hidden" animate="visible" className="mb-6 md:mb-8">
          <motion.h1 variants={childVariants} className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 text-foreground">
            <TypewriterText text="AI Agents That Scale Your" speed={100} className="block" />
            <motion.span variants={childVariants} className="text-primary cyber-glow block mt-2">
              <TypewriterText text="Business 10x Faster" delay={2000} speed={80} />
            </motion.span>
          </motion.h1>
          <motion.p variants={childVariants} className="text-base md:text-xl lg:text-2xl text-cyber-blue max-w-4xl mx-auto leading-relaxed">
            <TypewriterText text="We design and deploy AI-powered chatbots, voice agents, and automations that save time and boost conversions." delay={4000} speed={30} />
          </motion.p>
        </motion.div>

        <motion.div variants={textVariants} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
          <motion.div variants={childVariants}>
            <Button className="cyber-btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-slate-950">
              Book Free AI Consultation
            </Button>
          </motion.div>
          <motion.div variants={childVariants}>
            <Button className="cyber-btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              See AI in Action
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating icons */}
        <motion.div variants={iconVariants} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
          <motion.div variants={childVariants} className="cyber-card p-4">
            <Mic className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 bg-inherit" />
            <p className="text-xs md:text-sm text-lime-400 font-semibold">Voice AI</p>
          </motion.div>
          <motion.div variants={childVariants} className="cyber-card p-4">
            <Bot className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
            <p className="text-xs md:text-sm text-lime-400 font-semibold">Chatbots</p>
          </motion.div>
          <motion.div variants={childVariants} className="cyber-card p-4">
            <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
            <p className="text-xs md:text-sm text-lime-400 font-semibold">Automations</p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1]
      }} transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/10 rounded-full blur-3xl" />
        <motion.div animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.1, 0.15, 0.1]
      }} transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }} className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl" />
      </div>
    </section>;
};
export default Hero;