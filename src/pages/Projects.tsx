import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedBackground from '@/components/effects/AnimatedBackground';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Based CCTV Network for Crowd Management",
      description: "Built an AI-powered system for real-time crowd density analysis. This system improved crowd detection accuracy by 30% using computer vision and machine learning algorithms.",
      image: "🎥",
      tech: ["Python", "OpenCV", "TensorFlow", "YOLO"],
      githubUrl: "https://github.com/ashley-1318/AI-Crowd-Management",
      featured: true
    },
    {
      id: 2,
      title: "Wearable Sleep Monitoring Device",
      description: "Designed and conceptualized a wristwatch for monitoring sleep patterns and detecting sleep apnea. Integrates biometric sensors with AI-powered analysis.",
      image: "⌚",
      tech: ["IoT Sensors", "Machine Learning", "Python", "Data Analytics"],
      githubUrl: "https://github.com/ashley-1318/Wearable-Sleep-Monitoring-and-Therapeutic-Device",
      featured: true
    },
    {
      id: 3,
      title: "Handwritten OCR System",
      description: "Developed an AI-driven text recognition system capable of converting handwritten text into digital format. Presented at ICEACS-24 conference.",
      image: "📝",
      tech: ["Python", "TensorFlow", "OpenCV", "Neural Networks"],
      githubUrl: "https://github.com/ashley-1318/Handwritten-Optical-Character-Recognition-OCR-system.",
      featured: true
    },
    {
      id: 4,
      title: "AI-Based Electricity Demand and Peak Load Forecasting for the Tamil Nadu Power Grid",
      description: "Developed an advanced AI system for predicting electricity demand and peak load forecasting specifically for Tamil Nadu's power grid. Implemented machine learning algorithms to optimize energy distribution and improve grid efficiency.",
      image: "⚡",
      tech: ["Python", "Machine Learning", "Time Series Analysis", "Power Systems"],
      githubUrl: "https://github.com/ashley-1318/AI-Electricity-Demand-Forecast",
      featured: true
    },
    //{
      //id: 4,
      //title: "Diabetes Prediction Model",
      //description: "Developed a predictive model for early-stage diabetes detection. Utilized ML algorithms for risk assessment and generated actionable insights.",
      //image: "🏥",
      //tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      //liveUrl: "#",
      //githubUrl: "#",
      //featured: false
    //},
    {
      id: 5,
      title: "Smart Medication Dispensing System",
      description: "Patent-pending innovation for automated drug dispensing with AI-powered prescription scanning, biometric authentication, and inventory management.",
      image: "💊",
      tech: ["AI/ML", "Biometric Systems", "RFID", "IoT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for exploratory data analysis with multiple visualization options and statistical insights for content trend analysis.",
      image: "📊",
      tech: ["Python", "Tableau", "Power BI", "Data Visualization"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
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
            Academic & Personal <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative projects spanning AI, machine learning, IoT, and healthcare technology solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-primary">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="interactive-card p-8 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl group-hover:animate-pulse-glow">
                      {project.image}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.liveUrl} className="flex items-center space-x-1">
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} className="flex items-center space-x-1">
                          <Github size={16} />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-sm font-medium border border-card-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-secondary">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="interactive-card p-6 h-full">
                  <div className="text-4xl mb-4 group-hover:animate-pulse-glow">
                    {project.image}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.liveUrl} className="flex items-center justify-center space-x-1">
                        <Play size={14} />
                        <span>Demo</span>
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.githubUrl} className="flex items-center justify-center space-x-1">
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;