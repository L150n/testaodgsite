import { Button } from "@/components/ui/button";

const NewsSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 left-0 w-full h-full bg-primary/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="glass-card rounded-2xl overflow-hidden hover-lift shadow-large">
              <img 
                src="https://cdn.prod.website-files.com/687c67b395859f0d3a171f1b/687c6856cb080c80226a470b_e6cc6fb5-742d-4338-8c83-48ba7aa7f61c.avif"
                alt="Digital transformation process"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <div className="text-sm font-medium text-white/80 uppercase tracking-wide">
                Latest research & news
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Data insights. Ethical impact.
              </h2>
            </div>

            <Button 
              variant="secondary"
              size="lg" 
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
            >
              View updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;