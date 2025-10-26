import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '@/components/effects/ParticlesBackground';
import AnimatedBackground from '@/components/effects/AnimatedBackground';
import FloatingIcons from '@/components/three/FloatingIcons';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <AnimatedBackground />
      <ParticlesBackground />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-6xl lg:text-8xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">Ashley</span>
              <br />
              <span className="text-foreground">Josco</span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-muted-foreground max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Aspiring Data Scientist & AI Enthusiast leveraging machine learning and data analytics to solve complex problems and drive data-driven insights.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button asChild className="group relative overflow-hidden">
                <Link to="/contact" className="flex items-center space-x-2">
                  <Mail size={20} />
                  <span>Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="group">
                <a
                  href="https://drive.google.com/file/d/1lgTfuS6K0KAtanh_O5Z8UipNhnq4HGMI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              className="flex space-x-6 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                <span>B.Tech AI & Data Science</span>
              </div>
              <div className="flex items-center space-x-2">
                {/*<div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
                <span>Seeking Data Science Opportunities</span>*/}
              </div>
            </motion.div>
          </motion.div>
          
          {/* 3D Scene */}
          <motion.div
            className="h-96 lg:h-[500px] relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-10 blur-3xl" />
            <div className="relative z-10 h-full rounded-2xl overflow-hidden border border-card-border bg-card/50 backdrop-blur-sm">
              <FloatingIcons />
            </div>
          </motion.div>
        </div>
        
        {/* About Section */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="gradient-text">About Me</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I am a passionate and driven B.Tech student in Artificial Intelligence & Data Science at SRM TRP Engineering College. 
              My fascination with the power of data has led me to pursue a career where I can apply my expertise in machine learning, 
              data analytics, and visualization to uncover meaningful insights and solve real-world challenges.
            </motion.p>
            
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I believe in a meticulous and analytical approach to problem-solving. Whether it's developing predictive models 
              or performing exploratory data analysis, I am committed to delivering accurate and impactful results. I am constantly 
              learning and exploring new technologies to stay at the forefront of the ever-evolving field of data science.
            </motion.p>
            
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I am actively seeking opportunities in data science, AI, or business intelligence where I can contribute my skills 
              in predictive modeling, statistical analysis, and problem-solving to a dynamic team.
            </motion.p>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-muted-foreground" size={24} />
      </motion.div>
    </div>
  );
};

export default Hero;