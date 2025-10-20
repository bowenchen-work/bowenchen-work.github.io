import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-accent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-primary text-sm md:text-base font-medium mb-4 tracking-wider uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to my portfolio
            </motion.p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Designer & Developer crafting beautiful digital experiences
            </p>

            <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
              I blend creativity with code to build intuitive, user-centered designs
              that make a difference.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <button
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              className="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
              aria-label="Scroll down"
            >
              <ArrowDown size={32} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
