import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X, FileText, Shield, Database, Bot, Workflow, Brain } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ServicesDropdown = () => (
    <DropdownMenuContent className="w-[800px] glass-card border-0 p-6">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">Governance</h3>
          <div className="space-y-3">
            <a href="#" className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
              <FileText className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <div className="font-medium">Policy guidance</div>
                <div className="text-sm text-muted-foreground">Ethical data use standards.</div>
              </div>
            </a>
            <a href="#" className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
              <Shield className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <div className="font-medium">Compliance help</div>
                <div className="text-sm text-muted-foreground">Support for regulations.</div>
              </div>
            </a>
            <a href="#" className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
              <Database className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <div className="font-medium">Privacy controls</div>
                <div className="text-sm text-muted-foreground">Safeguarding patient data.</div>
              </div>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">Research tools</h3>
          <div className="space-y-3">
            <a href="#" className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
              <Shield className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <div className="font-medium">Secure workspace</div>
                <div className="text-sm text-muted-foreground">Protected researcher access.</div>
              </div>
            </a>
            <a href="#" className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
              <Database className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <div className="font-medium">Registries</div>
                <div className="text-sm text-muted-foreground">Efficient data capture.</div>
              </div>
            </a>
            <a href="#" className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
              <Workflow className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <div className="font-medium">Workflow tools</div>
                <div className="text-sm text-muted-foreground">Streamlined approvals.</div>
              </div>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">AI & analytics</h3>
          <div className="space-y-3">
            <a href="#" className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
              <Bot className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <div className="font-medium">AI/ML tools</div>
                <div className="text-sm text-muted-foreground">Responsible AI resources.</div>
              </div>
            </a>
            <a href="#" className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
              <Database className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <div className="font-medium">Data pipelines</div>
                <div className="text-sm text-muted-foreground">Integration and management.</div>
              </div>
            </a>
            <a href="#" className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
              <Brain className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <div className="font-medium">Training</div>
                <div className="text-sm text-muted-foreground">Workshops and support.</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-border">
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Secure data. Trusted research.</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Access clinical data and tools for compliant, impactful research.
          </p>
          <Button variant="outline" className="group">
            Discover
            <ChevronDown className="ml-2 h-4 w-4 rotate-[-90deg] transition-transform" />
          </Button>
        </div>
      </div>
    </DropdownMenuContent>
  );

  const HelpDropdown = () => (
    <DropdownMenuContent className="w-48 glass-card border-0">
      <div className="p-2">
        <a href="#" className="flex items-center w-full p-2 rounded-lg hover:bg-accent/50 transition-colors">
          Support
        </a>
        <a href="#" className="flex items-center w-full p-2 rounded-lg hover:bg-accent/50 transition-colors">
          FAQs
        </a>
      </div>
    </DropdownMenuContent>
  );

  return (
    <nav className="glass fixed top-0 left-0 right-0 z-50 border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.prod.website-files.com/687c67b395859f0d3a171f1b/687c7cff7d1362f24d13e4b1_amrita-vidyalayam-logo-png_seeklogo-519997.png"
              alt="Amrita Logo"
              className="h-8 w-8"
            />
            <span className="text-lg font-semibold text-foreground">Amrita Office of Data Governance</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <ServicesDropdown />
            </DropdownMenu>

            <a href="#" className="hover:text-primary transition-colors">Overview</a>
            <a href="#" className="hover:text-primary transition-colors">Updates</a>
            <a href="https://research.amritahospitals.org/aodg-client-feedback-form/new" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Feedback</a>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors">
                Login
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 glass-card border-0">
                <div className="p-2">
                  <a href="https://research.amritahospitals.org/app/research-tools" target="_blank" rel="noopener noreferrer" className="flex items-center w-full p-2 rounded-lg hover:bg-accent/50 transition-colors">
                    Research
                  </a>
                  <a href="https://research-int.amritahospitals.org/app" target="_blank" rel="noopener noreferrer" className="flex items-center w-full p-2 rounded-lg hover:bg-accent/50 transition-colors">
                    Research INT
                  </a>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors">
                Help
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <HelpDropdown />
            </DropdownMenu>

            <Button asChild className="bg-gradient-primary shadow-soft hover:shadow-medium transition-all">
              <a href="https://research.amritahospitals.org/his-data-request/new" target="_blank" rel="noopener noreferrer">
                Request Access
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <div className="space-y-4">
              <a href="#" className="block hover:text-primary transition-colors">Services</a>
              <a href="#" className="block hover:text-primary transition-colors">Overview</a>
              <a href="#" className="block hover:text-primary transition-colors">Updates</a>
              <a href="#" className="block hover:text-primary transition-colors">Help</a>
              <Button className="w-full bg-gradient-primary">Request access</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;