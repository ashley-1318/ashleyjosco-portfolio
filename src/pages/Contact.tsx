import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import AnimatedBackground from '@/components/effects/AnimatedBackground';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ashleyjosco18@gmail.com",
      href: "mailto:ashleyjosco18@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9043840276",
      href: "tel:9043840276"
    },
    {
      icon: MapPin,
      label: "LinkedIn",
      value: "www.linkedin.com/in/ashley-josco-c",
      href: "https://www.linkedin.com/in/ashley-josco-c"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/ashley-1318", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ashley-josco-c", label: "LinkedIn" },

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
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="interactive-card p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@example.com" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input placeholder="Project Discussion" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  rows={6}
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full group relative overflow-hidden"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Send size={20} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </span>
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Contact Information */}
            <div className="interactive-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-secondary">Contact Information</h2>
              
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted transition-colors group"
                      whileHover={{ x: 10 }}
                    >
                      <Icon className="text-primary group-hover:text-secondary transition-colors" size={24} />
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="interactive-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-accent">Follow Me</h2>
              
              <div className="grid grid-cols-5 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="group relative p-3 bg-muted rounded-lg hover:bg-primary transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Icon className="group-hover:text-primary-foreground transition-colors" size={20} />
                      <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-lg blur transition-opacity duration-300" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability card removed as requested */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;