import { Button } from "@/components/ui/button";

const PlatformsSection = () => {
  const platforms = [
    {
      image: "https://cdn.prod.website-files.com/687c67b395859f0d3a171f1b/687c68562784720960bdcd44_d4a00de2-0a0f-4735-93f3-d6fd72c3b6b0.avif",
      category: "Governed access",
      title: "Trusted research environment",
      description: "Work with de-identified clinical data in a secure, compliant setting. Enable retrospective studies, AI/ML projects, and real-world evidence with privacy controls.",
      buttonText: "Discover"
    },
    {
      image: "https://cdn.prod.website-files.com/687c67b395859f0d3a171f1b/687c6856fe6ca6d3237f0dd3_2c0a826b-04b4-406b-9511-3eabbc640488.avif",
      category: "System integration",
      title: "Automated data pipelines",
      description: "Connect EMR, lab, and imaging data with secure APIs. Automate validation, cohort creation, and reporting for research-ready datasets.",
      buttonText: "Details"
    },
    {
      image: "https://cdn.prod.website-files.com/687c67b395859f0d3a171f1b/687c6856067ac9a5d6c1aaf0_fc27fcc0-f0fb-4dd2-9fe2-92723626b4f5.avif",
      category: "Registry workflows",
      title: "Custom registries & approvals",
      description: "Deploy disease registries with role-based workflows and multi-site approvals. Simplify data capture and maintenance for clinical studies.",
      buttonText: "Explore"
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-secondary" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Governed data. Impactful research. Securely.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our platforms empower ethical, compliant clinical research. Access secure data, integrate systems, 
            and streamline workflows—supporting every step of your research journey.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl hover-lift group">
              {/* Image */}
              <div className="aspect-[3/2] rounded-xl overflow-hidden mb-6 group-hover:scale-105 transition-transform">
                <img 
                  src={platform.image}
                  alt={platform.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-primary">{platform.category}</div>
                <h3 className="text-xl font-semibold">{platform.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {platform.description}
                </p>
                <Button 
                  variant="outline" 
                  className="glass border-primary/20 hover:bg-primary/10 mt-4"
                >
                  {platform.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;