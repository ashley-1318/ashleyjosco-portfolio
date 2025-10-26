import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, Home, User, Code, Mail, FileText, MessageSquare, Github, Star, Award, Briefcase, Sparkles, Trophy } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/projects', label: 'Projects', icon: Code },
    { path: '/skills', label: 'Skills', icon: Star },
    { path: '/experience', label: 'Internship', icon: Briefcase },
    { path: '/certifications', label: 'Certifications', icon: Award },
    { path: '/patent', label: 'Patent', icon: MessageSquare },
    { path: '/leetcode', label: 'LeetCode', icon: Trophy },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-lg border-b border-card-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Link to="/" className="text-2xl font-bold gradient-text">
                Portfolio
              </Link>
              <div className="absolute -inset-2 bg-gradient-primary opacity-0 rounded-lg blur transition-opacity duration-300 hover:opacity-20" />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'bg-primary text-primary-foreground shadow-glow'
                          : 'text-foreground hover:bg-card hover:text-primary'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-card border border-card-border hover:border-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.95,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 lg:hidden"
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-lg" />
        <div className="absolute top-20 left-4 right-4 bg-card border border-card-border rounded-xl p-6 shadow-elegant">
          <div className="space-y-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-glow'
                        : 'text-foreground hover:bg-muted hover:text-primary'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;