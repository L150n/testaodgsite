import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Ethical data.
                </span>
                <br />
                <span className="text-foreground">Impactful research.</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Securely.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Empowering clinical research with secure, compliant data access, robust governance, 
                and expert support for healthcare innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary shadow-medium hover:shadow-large transition-all text-lg px-8 py-3">
                Start now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card border-primary/20 hover:bg-primary/10 text-lg px-8 py-3"
              >
                Discover more
              </Button>
            </div>
          </div>

          {/* Hero Images */}
          <div className="relative">
            <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[600px]">
              {/* Main large image */}
              <div className="col-span-4 row-span-6 glass-card rounded-2xl overflow-hidden hover-lift">
                <img 
                  src="https://cdn.prod.website-files.com/687c67b395859f0d3a171f1b/687c68564b20f7b99b251517_58815abb-25a4-42ce-aabe-c4d8949c8b07.avif"
                  alt="Team discussion for HR tech"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small circular image */}
              <div className="col-span-2 row-span-2 glass-card rounded-2xl overflow-hidden hover-lift shadow-large">
                <img 
                  src="https://cdn.prod.website-files.com/687c67b395859f0d3a171f1b/687c6856db6148ebcc89a4f6_d2550c12-4da5-43b5-9050-250e7cc614c7.avif"
                  alt="Medical team collaborating"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom rectangular image */}
              <div className="col-span-2 row-span-3 col-start-5 row-start-3 glass-card rounded-2xl overflow-hidden hover-lift shadow-large">
                <img 
                  src="https://cdn.prod.website-files.com/687c67b395859f0d3a171f1b/687c68562784720960bdcd44_d4a00de2-0a0f-4735-93f3-d6fd72c3b6b0.avif"
                  alt="Biotech research process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-bounce" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;