import { motion } from 'framer-motion';
import { FileText, Lightbulb, Shield, Users, Github } from 'lucide-react';
import AnimatedBackground from '@/components/effects/AnimatedBackground';

const Patent = () => {
  const patentFeatures = [
    {
      icon: Lightbulb,
      title: "AI-Powered Innovation",
      description: "Leverages artificial intelligence for intelligent medication management and automated dispensing decisions."
    },
    {
      icon: Shield,
      title: "Biometric Security",
      description: "Advanced biometric and RFID authentication ensures secure access and prevents unauthorized medication access."
    },
    {
      icon: Users,
      title: "Healthcare Accessibility",
      description: "Designed to improve medication accessibility and reduce human error in healthcare delivery systems."
    },
    {
      icon: FileText,
      title: "Smart Inventory",
      description: "Real-time inventory management with automated restocking alerts and medication tracking capabilities."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Patent <span className="gradient-text">Innovation</span>
          </h1>
          <div className="flex justify-center mb-4">
            <a
              href="https://github.com/ashley-1318/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-gray-900 hover:bg-gray-800 text-white transition"
              title="View on GitHub"
            >
              <Github size={20} />
              <span className="hidden sm:inline">View on GitHub</span>
            </a>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pioneering healthcare technology through innovative AI-based solutions for medication management.
          </p>
        </motion.div>

        {/* Main Patent Card */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="interactive-card p-8 lg:p-12">
            <div className="text-center mb-8">
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FileText className="text-white" size={40} />
              </motion.div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                AI-Based Smart Medication Dispensing System
              </h2>
              
              <div className="flex justify-center items-center space-x-6 text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Application No:</span>
                  <span className="font-mono text-primary">202541041230</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Status:</span>
                  <span className="text-secondary">Filed</span>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-muted-foreground leading-relaxed">
                Developed and filed a patent for an innovative AI-powered automated drug dispensing system. 
                This system is designed to streamline medication delivery through prescription scanning, 
                biometric/RFID authentication, and real-time inventory management. The primary goals are to 
                improve accuracy, reduce human error, and enhance accessibility in healthcare services.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {patentFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="interactive-card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                whileHover={{ y: -10 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Innovation Impact */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-8">
            Innovation <span className="gradient-text">Impact</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="interactive-card p-6">
              <motion.div
                className="text-3xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                95%
              </motion.div>
              <p className="text-muted-foreground">Error Reduction</p>
            </div>
            
            <div className="interactive-card p-6">
              <motion.div
                className="text-3xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                24/7
              </motion.div>
              <p className="text-muted-foreground">Automated Access</p>
            </div>
            
            <div className="interactive-card p-6">
              <motion.div
                className="text-3xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                100%
              </motion.div>
              <p className="text-muted-foreground">Secure Authentication</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Patent;