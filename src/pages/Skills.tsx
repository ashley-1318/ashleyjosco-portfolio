import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Zap, Cpu } from 'lucide-react';
import AnimatedBackground from '@/components/effects/AnimatedBackground';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "text-primary",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 85 },
        { name: "SQL", level: 90 },
        { name: "R", level: 75 },
        { name: "C", level: 80 },
      ]
    },
    {
      icon: Database,
      title: "Machine Learning & AI",
      color: "text-secondary",
      skills: [
        { name: "Scikit-learn", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Supervised Learning", level: 90 },
        { name: "Unsupervised Learning", level: 85 },
        { name: "Natural Language Processing (NLP)", level: 80 },
      ]
    },
    {
      icon: Globe,
      title: "Tools & Frameworks",
      color: "text-accent",
      skills: [
        { name: "Pandas", level: 95 },
        { name: "Tableau", level: 90 },
        { name: "Power BI", level: 85 },
        { name: "Apache Hadoop", level: 75 },
        { name: "AWS", level: 80 },
      ]
    },
    {
      icon: Smartphone,
      title: "Version Control",
      color: "text-primary-glow",
      skills: [
        { name: "GitHub", level: 95 },
        { name: "GitLab", level: 85 },
        { name: "Git", level: 95 },
      ]
    },
    {
      icon: Zap,
      title: "Problem-Solving",
      color: "text-secondary-glow",
      skills: [
        { name: "Analytical Thinking", level: 95 },
        { name: "Critical Thinking", level: 90 },
        { name: "Decision-Making", level: 85 },
        { name: "Troubleshooting", level: 90 },
        { name: "Debugging", level: 85 },
      ]
    },
    {
      icon: Cpu,
      title: "Data Analysis",
      color: "text-accent-glow",
      skills: [
        { name: "Data Visualization", level: 90 },
        { name: "Statistical Analysis", level: 85 },
        { name: "Predictive Modeling", level: 85 },
        { name: "Data Cleaning", level: 90 },
        { name: "EDA", level: 90 },
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
            Technical <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My expertise across programming languages, machine learning, data analysis tools, and problem-solving methodologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.title}
                className="interactive-card p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-6">
                  <Icon className={`${category.color} mr-3`} size={32} />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-primary rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.5,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <motion.div
          className="mt-20 grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                3+
              </motion.div>
              <p className="text-muted-foreground">Years of Learning</p>
            </div>
            
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                5+
              </motion.div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                15+
              </motion.div>
              <p className="text-muted-foreground">Technologies Learned</p>
            </div>
            
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                10+
              </motion.div>
              <p className="text-muted-foreground">Certifications Earned</p>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;