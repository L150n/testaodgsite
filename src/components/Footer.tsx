import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Governance",
      links: ["Policies", "Compliance", "Privacy", "Security", "Ethics"]
    },
    {
      title: "Resources", 
      links: ["Guides", "Support", "Training", "Docs", "FAQs"]
    },
    {
      title: "Solutions",
      links: ["TRE", "Metaflo", "Integrations", "Registries", "AI/ML"]
    },
    {
      title: "Connect",
      links: ["Contact", "Team", "Events", "News", "Careers"]
    }
  ];

  const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" }
  ];

  return (
    <footer className="py-16 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-secondary" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Footer Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-muted-foreground mb-4 uppercase tracking-wide text-sm">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-8 border-t border-border">
          {/* Copyright */}
          <div className="text-muted-foreground text-center lg:text-left">
            <p>© 2025 All rights reserved.</p>
            <p className="font-semibold">Mail: aodg@amrita.edu</p>
            <p className="font-semibold">Extension No: 8176</p>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/644cb4e4-7e84-432d-8783-78779d3ac103.png"
              alt="Amrita Technologies Logo"
              className="w-24 h-24 object-contain"
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialIcons.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors group"
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;