import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in modern web development technologies including React, Next.js, TypeScript, Node.js, and various backend technologies. I'm always learning and adapting to new tools and frameworks to deliver the best solutions.",
    },
    {
      question: "Can I collaborate with you on a project?",
      answer:
        "Absolutely! I'm always open to interesting collaborations. Whether it's a short-term project or a long-term partnership, feel free to reach out through the contact form or via email to discuss your ideas.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. A simple landing page might take 1-2 weeks, while a full-stack application could take 2-3 months. I always provide realistic timelines after understanding the project requirements.",
    },
    {
      question: "Do you offer maintenance and support?",
      answer:
        "Yes! I offer ongoing maintenance and support packages for projects I've developed. This includes bug fixes, updates, and feature enhancements to keep your application running smoothly.",
    },
    {
      question: "What's your development process?",
      answer:
        "I follow an agile approach with clear communication at every stage. The process typically includes: discovery and planning, design mockups, development with regular updates, testing, deployment, and post-launch support.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            Frequently Asked{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Everything you need to know about working with me
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
