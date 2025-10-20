import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online shopping experience with seamless checkout and inventory management",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛍️",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative workspace for teams to organize and track their projects efficiently",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      image: "✅",
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather data visualization with interactive maps and forecasts",
      tech: ["React", "Weather API", "Chart.js", "Tailwind"],
      image: "🌤️",
      github: "#",
      live: "#",
    },
    {
      title: "Social Media App",
      description: "Connect with friends, share moments, and discover new content in real-time",
      tech: ["React Native", "Firebase", "Redux", "Socket.io"],
      image: "💬",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="work" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Card className="group bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden hover:shadow-card">
                  <div className="p-8">
                    <div className="aspect-video bg-gradient-primary rounded-lg mb-6 flex items-center justify-center text-6xl">
                      {project.image}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
