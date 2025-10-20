import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="aspect-square bg-gradient-primary rounded-2xl p-1">
                <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                  <span className="text-6xl">👋</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate designer and developer with a love for creating
                beautiful, functional digital experiences. With years of experience
                in the field, I've worked on projects ranging from small startups
                to large-scale applications.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines clean code, thoughtful design, and a deep
                understanding of user needs. I believe in building products that
                not only look great but also solve real problems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new design trends,
                contributing to open-source projects, or enjoying a good cup of
                coffee while sketching new ideas.
              </p>

              <Button
                variant="outline"
                className="border-border hover:bg-secondary mt-4"
              >
                <Download className="mr-2" size={18} />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
