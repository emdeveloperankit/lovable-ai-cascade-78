import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-dark opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Header pills */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <div className="-bottom-2.5 ">
              ✨ AI AGENTS THAT WORKS
            </div>
            
            
          </motion.div>

          {/* Main headline */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          delay: 0.2
        }} className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-tight">
              We Implement AI Systems
              <br />
              <span className="gradient-text">Into Your Business</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-xl text-text-muted max-w-3xl mx-auto mb-12">
            Automating Business Workflows with AI, Custom-Built for Your Operations
          </motion.p>

          {/* Step indicator */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="mb-8">
            <div className="section-tag">
              Step 1 of 2: Watch Video
            </div>
          </motion.div>

          {/* Video placeholder */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          delay: 0.8
        }} className="max-w-4xl mx-auto mb-12">
            <div className="feature-card group cursor-pointer">
              <div className="aspect-video bg-gradient-dark rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-brand opacity-10" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-2xl font-semibold text-foreground">
                    See How AI Transforms Your Business
                  </p>
                  <p className="text-text-muted mt-2">
                    Watch real examples of AI automation in action
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1
        }} className="mb-8">
            <a href="https://calendly.com/ankitcodex9" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary text-lg px-12 py-4">
                Step 2 of 2 - Schedule Your Discovery Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>

          {/* Bottom text */}
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 1.2
        }} className="text-text-muted text-sm">
            ⚠️ Spots are limited and get filled quickly
          </motion.p>
        </div>
      </div>
    </section>;
};
export default Hero;