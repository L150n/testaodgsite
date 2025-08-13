const FAQSection = () => {
  const faqs = [
    {
      question: "What does data governance mean?",
      answer: "Data governance sets the rules for secure, ethical, and compliant management of clinical data. It covers privacy, access, and quality to support research and healthcare."
    },
    {
      question: "Who is allowed to access data?",
      answer: "Only approved clinicians and researchers with ethics clearance can access de-identified data. All access is monitored to protect privacy and meet legal standards."
    },
    {
      question: "How is patient privacy maintained?",
      answer: "Patient data is de-identified for research. Audit trails, export controls, and compliance with DPDP Act and ICMR guidelines ensure privacy and security."
    },
    {
      question: "What is a Trusted Research Environment?",
      answer: "A Trusted Research Environment (TRE) is a secure platform for analyzing de-identified clinical data. It offers controlled access, audit logs, and compliance tools."
    },
    {
      question: "How can I request data access?",
      answer: "Submit your study protocol and ethics approval. Each request is reviewed for compliance, and our team guides you through secure data access steps."
    },
    {
      question: "What help is available for researchers?",
      answer: "We provide training, support with ethics submissions, technical help for data integration, and ongoing guidance for responsible clinical data use."
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-secondary" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
            FAQ: Data governance essentials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your data, governed with care
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Answers to key questions on secure, ethical, and compliant use of clinical data 
            for research and healthcare improvement.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;