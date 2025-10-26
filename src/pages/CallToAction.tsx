import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedBackground from '@/components/effects/AnimatedBackground';

const CallToAction = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="mx-auto text-primary" size={64} />
          </motion.div>
          
          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Build Something
            <br />
            <span className="gradient-text">Amazing Together?</span>
          </motion.h1>
          
          <motion.p
            className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's transform your ideas into exceptional digital experiences that captivate users and drive results.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="group relative overflow-hidden px-8 py-4 text-lg">
                <Link to="/contact" className="flex items-center space-x-3">
                  <Zap size={24} />
                  <span>Contact Me</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" asChild size="lg" className="group px-8 py-4 text-lg border-primary/50 hover:border-primary">
                <Link to="/projects" className="flex items-center space-x-3">
                  <span>View My Work</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="group"
              whileHover={{ y: -5 }}
            >
              <div className="interactive-card p-8 text-center h-full">
                <div className="text-4xl mb-4 group-hover:animate-pulse-glow">💼</div>
                <h3 className="text-xl font-bold mb-2 text-primary">Freelance Projects</h3>
                <p className="text-muted-foreground">
                  Custom web applications tailored to your specific needs and requirements.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="group"
              whileHover={{ y: -5 }}
            >
              <div className="interactive-card p-8 text-center h-full">
                <div className="text-4xl mb-4 group-hover:animate-pulse-glow">🤝</div>
                <h3 className="text-xl font-bold mb-2 text-secondary">Full-time Opportunities</h3>
                <p className="text-muted-foreground">
                  Open to exciting full-time positions with innovative companies and teams.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="group"
              whileHover={{ y: -5 }}
            >
              <div className="interactive-card p-8 text-center h-full">
                <div className="text-4xl mb-4 group-hover:animate-pulse-glow">🎯</div>
                <h3 className="text-xl font-bold mb-2 text-accent">Consulting</h3>
                <p className="text-muted-foreground">
                  Strategic technical consulting to help optimize your development processes.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;