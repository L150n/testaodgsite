import { Shield, Users, Sparkles, MessageCircle } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure research environment",
      description: "Access de-identified data with privacy safeguards, audit trails, and export controls for compliant research."
    },
    {
      icon: Users,
      title: "Registry automation",
      description: "Quickly launch disease registries with role-based workflows, data validation, and integration with clinical systems."
    },
    {
      icon: Sparkles,
      title: "Data pipelines & integration",
      description: "Deliver research-ready datasets with structured pipelines, metadata management, and advanced cohort tools."
    },
    {
      icon: MessageCircle,
      title: "AI/ML research support",
      description: "Enable responsible AI research with governed model training, workshops, and real-time guidance for clinicians."
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-secondary" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Enabling ethical, impactful clinical research
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Supporting secure, compliant research with robust governance, technical infrastructure, 
            and expert guidance for clinicians and investigators.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-2xl hover-lift group"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;