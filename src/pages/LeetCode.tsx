import { motion } from 'framer-motion';
import { Code2, Trophy, Target, TrendingUp, Award, ExternalLink, CheckCircle2, Clock } from 'lucide-react';
import AnimatedBackground from '@/components/effects/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const LeetCode = () => {
  const [stats, setStats] = useState({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    ranking: 0,
    loading: true
  });

  // LeetCode profile URL
  const profileUrl = "https://leetcode.com/u/AshleyJosco18/";

  // Fetch LeetCode stats (you can update these manually or integrate with LeetCode API)
  useEffect(() => {
    // Simulated stats - replace with actual API call if available
    setTimeout(() => {
      setStats({
        totalSolved: 50, // Update with your actual stats
        easySolved: 35,
        mediumSolved: 10,
        hardSolved: 4,
        ranking: 2264287, // Update with your actual ranking
        loading: false
      });
    }, 500);
  }, []);

  const achievements = [
    {
      icon: Trophy,
      title: "Consistency Streak",
      description: "Regular problem-solving practice demonstrates dedication to algorithmic thinking.",
      color: "text-yellow-500"
    },
    {
      icon: Target,
      title: "Problem Diversity",
      description: "Tackled problems across various difficulty levels and data structure categories.",
      color: "text-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Steady improvement in problem-solving skills and algorithmic knowledge.",
      color: "text-green-500"
    },
    {
      icon: CheckCircle2,
      title: "Quality Solutions",
      description: "Focus on writing clean, efficient, and well-optimized code solutions.",
      color: "text-purple-500"
    }
  ];

  const skillCategories = [
    { name: "Arrays & Strings", level: 85 },
    { name: "Dynamic Programming", level: 70 },
    { name: "Trees & Graphs", level: 75 },
    { name: "Hash Tables", level: 80 },
    { name: "Two Pointers", level: 78 },
    { name: "Sliding Window", level: 72 },
    { name: "Binary Search", level: 68 },
    { name: "Backtracking", level: 65 }
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
            LeetCode <span className="gradient-text">Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Continuous growth through algorithmic problem-solving and competitive programming.
          </p>
          <Button asChild size="lg" className="shadow-glow">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Code2 size={20} />
              View LeetCode Profile
              <ExternalLink size={16} />
            </a>
          </Button>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="interactive-card p-6 text-center"
              whileHover={{ y: -10 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="text-4xl font-bold mb-2 gradient-text">
                {stats.loading ? '...' : stats.totalSolved}
              </h3>
              <p className="text-muted-foreground">Total Problems Solved</p>
            </motion.div>

            <motion.div
              className="interactive-card p-6 text-center"
              whileHover={{ y: -10 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                <CheckCircle2 className="text-green-500" size={32} />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-green-500">
                {stats.loading ? '...' : stats.easySolved}
              </h3>
              <p className="text-muted-foreground">Easy Problems</p>
            </motion.div>

            <motion.div
              className="interactive-card p-6 text-center"
              whileHover={{ y: -10 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-4">
                <Target className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-yellow-500">
                {stats.loading ? '...' : stats.mediumSolved}
              </h3>
              <p className="text-muted-foreground">Medium Problems</p>
            </motion.div>

            <motion.div
              className="interactive-card p-6 text-center"
              whileHover={{ y: -10 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                <TrendingUp className="text-red-500" size={32} />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-red-500">
                {stats.loading ? '...' : stats.hardSolved}
              </h3>
              <p className="text-muted-foreground">Hard Problems</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  className="interactive-card p-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`mt-1 ${achievement.color}`}>
                      <Icon size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Problem-Solving Skills */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Problem-Solving <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="interactive-card p-8">
            <div className="space-y-6">
              {skillCategories.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.05 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see my problem-solving approach in action?
          </p>
          <Button asChild size="lg" variant="outline" className="shadow-glow">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Award size={20} />
              Explore My Solutions
              <ExternalLink size={16} />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default LeetCode;
