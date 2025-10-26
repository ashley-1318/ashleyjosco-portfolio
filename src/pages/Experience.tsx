import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import AnimatedBackground from '@/components/effects/AnimatedBackground';

const Experience = () => {
  const experiences = [
    {
      company: "Expoys Data Labs",
      role: "Diabetes Prediction Using Machine Learning",
      period: "2024",
      description: "Developed a predictive model for early-stage diabetes detection. Utilized ML algorithms for risk assessment and generated actionable insights.",
      achievements: [
        "Built machine learning models for diabetes risk prediction",
        "Implemented data preprocessing and feature engineering",
        "Generated actionable insights for healthcare professionals",
        "Improved early detection accuracy through advanced algorithms"
      ]
    },
    {
      company: "NoviTech R&D Private Limited",
      role: "Full Stack Development Intern",
      period: "2024",
      description: "Gained practical experience in both frontend and backend technologies. Contributed to real-world projects under the mentorship of industry professionals.",
      achievements: [
        "Developed full-stack web applications using modern technologies",
        "Collaborated with senior developers on production projects",
        "Gained hands-on experience in both frontend and backend development",
        "Contributed to real-world software solutions"
      ]
    },
    {
      company: "Accenture North America",
      role: "Data Analyst Virtual Internship",
      period: "2024",
      description: "Analyzed 7 datasets to identify key content trends. Applied data cleaning, exploratory data analysis (EDA), and data visualization techniques to present findings.",
      achievements: [
        "Analyzed 7 comprehensive datasets for content trend identification",
        "Performed advanced data cleaning and preprocessing",
        "Conducted exploratory data analysis (EDA) on large datasets",
        "Created compelling data visualizations to communicate insights"
      ]
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
            Internships <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through internships and projects that shaped my expertise in data science and AI.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="interactive-card p-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-xl text-primary font-semibold mb-2">
                      {exp.company}
                    </h4>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="space-y-3">
                <h5 className="font-semibold text-foreground">Key Achievements:</h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (achIndex * 0.1) + 0.4 }}
                    >
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;