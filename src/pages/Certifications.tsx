import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import AnimatedBackground from '@/components/effects/AnimatedBackground';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "Great Learning",
      year: "2024",
      description: "Comprehensive course covering Python programming fundamentals for data science applications.",
      skills: ["Python Programming", "Data Structures", "NumPy", "Pandas"]
    },
    {
      title: "Exploratory Data Analysis",
      issuer: "Infosys Springboard",
      year: "2024",
      description: "Advanced techniques for exploring and understanding datasets through statistical analysis.",
      skills: ["Data Exploration", "Statistical Analysis", "Data Visualization", "Pattern Recognition"]
    },
    {
      title: "Data Analytics & Visualization",
      issuer: "Accenture",
      year: "2024",
      description: "Practical skills in analyzing large datasets and creating compelling visualizations.",
      skills: ["Data Analytics", "Tableau", "Power BI", "Dashboard Creation"]
    },
    {
      title: "Cybersecurity Analyst Simulation",
      issuer: "Tata",
      year: "2024",
      description: "Hands-on experience in cybersecurity analysis and threat detection methodologies.",
      skills: ["Threat Analysis", "Security Assessment", "Risk Management", "Incident Response"]
    },
    {
      title: "Journey to Cloud Course",
      issuer: "IBM SkillBuild",
      year: "2024",
      description: "Comprehensive introduction to cloud computing concepts and IBM Cloud services.",
      skills: ["Cloud Computing", "IBM Cloud", "DevOps", "Infrastructure Management"]
    },
    {
      title: "AI/ML Bootcamp",
      issuer: "GeeksforGeeks - SRM Institute of Science and Technology Trichy",
      year: "2024",
      description: "Intensive bootcamp covering artificial intelligence and machine learning fundamentals.",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "AI Algorithms"]
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
            Certifications & <span className="gradient-text">Achievements</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning journey through professional certifications and specialized training programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="interactive-card p-6 h-full flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="mt-1">
                  <Award className="text-primary" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-semibold">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {cert.year}
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                {cert.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-foreground mb-3">Skills Gained:</h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05) + 0.5 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group">
                  <span>View Certificate</span>
                  <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="interactive-card p-6">
              <motion.div
                className="text-3xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                6+
              </motion.div>
              <p className="text-muted-foreground">Professional Certifications</p>
            </div>
            
            <div className="interactive-card p-6">
              <motion.div
                className="text-3xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                20+
              </motion.div>
              <p className="text-muted-foreground">Skills Acquired</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;