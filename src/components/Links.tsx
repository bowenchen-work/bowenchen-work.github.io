import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Links = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
      color: "hover:text-[#6e5494]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-[#0077b5]",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/yourusername",
      color: "hover:text-[#1da1f2]",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <section id="links" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Find me on these platforms or drop me an email
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:border-primary hover:shadow-glow ${link.color}`}
              >
                <link.icon className="w-12 h-12 mx-auto mb-4 text-muted-foreground group-hover:scale-110 transition-transform duration-300" />
                <p className="font-medium text-foreground">{link.name}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Links;
