import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <div className="cyber-container">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl md:text-8xl font-black text-primary cyber-glow mb-6"
          >
            404
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-4"
          >
            Page Not Found
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-cyber-blue text-lg mb-8"
          >
            The page you're looking for doesn't exist or has been moved to a different location.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/">
              <Button className="cyber-btn-primary flex items-center gap-2">
                <Home size={18} />
                Back to Home
              </Button>
            </Link>
            
            <Button 
              onClick={() => window.history.back()} 
              className="cyber-btn-secondary flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              Go Back
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-cyber-blue text-sm mb-4">
              Need help? Contact our AI experts:
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a 
                href="https://calendly.com/ankitcodex9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-btn-primary text-sm px-4 py-2 inline-block"
              >
                📅 Schedule a Call
              </a>
              <a 
                href="https://wa.me/919540856059" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-btn-secondary text-sm px-4 py-2 inline-block"
              >
                💬 WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
