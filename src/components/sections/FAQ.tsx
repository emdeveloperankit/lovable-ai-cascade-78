import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to set up AI for my business?",
      answer: "Setup typically takes 3-5 business days from consultation to launch. We handle all the technical work while you focus on your business. No technical skills required!"
    },
    {
      question: "Will the AI sound natural and human-like?",
      answer: "Yes! Our AI uses advanced natural language processing. Most customers can't tell they're talking to AI - it's that natural and human-like. We train it specifically for your business tone and style."
    },
    {
      question: "What platforms do you integrate with?",
      answer: "We integrate with websites, WhatsApp, Instagram, Facebook, phone systems, HubSpot, Salesforce, and most CRM platforms. If you have a specific platform, we can likely integrate with it."
    },
    {
      question: "Do I need technical skills to manage this?",
      answer: "No technical skills needed! We handle everything - setup, training, and maintenance. You get an easy dashboard to manage your AI systems and see analytics."
    },
    {
      question: "What happens with complex inquiries?",
      answer: "Our AI handles 80-90% of inquiries automatically. For complex issues, it seamlessly transfers to humans with full conversation context, so nothing is lost."
    },
    {
      question: "How secure is my data?",
      answer: "Absolutely secure! We use enterprise-grade encryption and are SOC 2 compliant. Your data is completely secure and never shared with third parties."
    },
    {
      question: "What industries do you work with?",
      answer: "AgenticMode works with healthcare, real estate, e-commerce, professional services, SaaS, and many other industries. Our AI adapts to any business model!"
    },
    {
      question: "How much does it cost?",
      answer: "We offer custom pricing tailored to your specific business needs. It's based on your business size, goals, and requirements. Contact us for a personalized proposal and free consultation!"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-6">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Everything you need to know about our AI solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="feature-card border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline text-foreground font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-muted leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;