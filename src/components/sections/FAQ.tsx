import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQ = () => {
  const faqs = [{
    question: "How long does setup take?",
    answer: "Typically 3-5 business days from initial consultation to full deployment. We handle all the technical setup while you focus on your business."
  }, {
    question: "Do the AI agents sound natural?",
    answer: "Yes! Our AI uses advanced natural language processing to have human-like conversations. Most customers can't tell they're talking to AI."
  }, {
    question: "What platforms do you support?",
    answer: "We integrate with websites, WhatsApp, Instagram, Facebook Messenger, phone systems, and most popular CRM platforms like HubSpot, Salesforce, and more."
  }, {
    question: "Do I need technical skills?",
    answer: "Not at all! We handle the entire setup and provide an easy-to-use dashboard. You can update responses and view analytics without any technical knowledge."
  }, {
    question: "Can AI handle complex customer inquiries?",
    answer: "Our AI handles 80-90% of inquiries automatically. For complex issues, it seamlessly transfers to human agents with full conversation context."
  }, {
    question: "Is my customer data secure?",
    answer: "Absolutely. We use enterprise-grade encryption and are SOC 2 compliant. Your data is stored securely and never shared with third parties."
  }, {
    question: "Which industries do you work with?",
    answer: "We serve healthcare, real estate, e-commerce, professional services, SaaS, and many other industries. Our AI adapts to any business model."
  }];
  return <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Frequently Asked 
            <span className="text-primary cyber-glow"> Questions</span>
          </h2>
          <p className="text-xl text-cyber-blue max-w-2xl mx-auto">
            Everything you need to know about our AI solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="cyber-container">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border-primary/20">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary font-bold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-cyber-blue">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="cyber-container max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-cyber-blue mb-6">
              Our AI experts are here to guide you. Get personalized answers to your specific questions.
            </p>
            <button className="cyber-btn-primary mr-4" onClick={() => {
            const element = document.querySelector('#contact');
            if (element) element.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              Book a Free Call
            </button>
            <button onClick={() => {
            const element = document.querySelector('#contact');
            if (element) element.scrollIntoView({
              behavior: 'smooth'
            });
          }} className="cyber-btn-secondary bg-lime-500 hover:bg-lime-400 text-slate-950">Whatsapp us</button>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQ;