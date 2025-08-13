import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative max-w-6xl mx-auto">
          {/* Background image with overlay */}
          <div className="glass-card rounded-3xl overflow-hidden relative">
            <img 
              src="https://cdn.prod.website-files.com/687c67b395859f0d3a171f1b/687c68569dd0ec3f0bcbeb90_fe057c9f-4225-4b01-857d-293f6348cfb0.avif"
              alt="High-tech control room"
              className="w-full h-[400px] object-cover opacity-60"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white space-y-8 max-w-3xl px-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Advance ethical, secure data research
                </h2>
                
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-large text-lg px-8 py-4"
                >
                  Contact us
                </Button>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
            <div className="absolute bottom-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;