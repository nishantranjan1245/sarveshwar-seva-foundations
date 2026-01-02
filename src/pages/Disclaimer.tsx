import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AlertTriangle, Info, Shield, Globe, Link, Users, RefreshCw, Mail, MapPin, FileText, CheckCircle, XCircle, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";

import heroDisclaimer from "@/assets/disclaimer/hero-disclaimer.jpg";
import informationPurpose from "@/assets/disclaimer/information-purpose.jpg";
import voluntaryParticipation from "@/assets/disclaimer/voluntary-participation.jpg";
import contactDisclaimer from "@/assets/disclaimer/contact-disclaimer.jpg";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Same as Homepage Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroDisclaimer} 
            alt="Disclaimer - Transparency and Trust" 
            className="w-full h-full object-cover"
          />
          {/* Multi-color gradient overlay - Same as Homepage */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple/80 via-primary/75 to-cyan/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-hero-pattern opacity-15" />
        </div>
        
        {/* Decorative Elements - Same as Homepage */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-gold/30 to-coral/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan/30 to-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-rose/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gold/25 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Badge - Same style as Homepage */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/25 to-coral/20 backdrop-blur-sm border border-gold/40 mb-8 animate-fade-in shadow-lg">
            <Sparkles className="w-4 h-4 text-gold-light" />
            <span className="text-primary-foreground/95 text-sm font-semibold">Important Notice</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="rainbow-text">Disclaimer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Please read this disclaimer carefully before using our website and services.
          </p>
          
          <p className="text-primary-foreground/70 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <strong>Last Updated:</strong> January 2026
          </p>
        </div>
        
        {/* Scroll Indicator - Same as Homepage */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-7 h-12 rounded-full border-2 border-gold/60 flex items-start justify-center p-2 bg-gold/10">
            <div className="w-2 h-3 bg-gradient-to-b from-gold to-coral rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction - Same style as About Section */}
      <section className="section-padding bg-gradient-to-br from-background via-gold/5 to-coral/5 relative overflow-hidden">
        {/* Background decorations - Same as About Section */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The information provided on the website of <span className="text-coral font-semibold">Sarveshwar Seva Foundation</span> ("Foundation", "we", "our", "us") is for general informational and awareness purposes only. By accessing and using this website, you acknowledge and agree to the terms of this Disclaimer.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 - Informational Purpose Only */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-cyan/5 relative overflow-hidden">
        {/* Decorative Elements - Same as Focus Areas */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                  <img 
                    src={informationPurpose} 
                    alt="Informational Purpose" 
                    className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">Section 1</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  <span className="sunset-text">Informational Purpose Only</span>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  All content available on this website, including text, articles, resources, updates, and other materials, is intended solely to promote climate awareness, green living, and community participation.
                </p>
                
                <div className="p-6 rounded-xl bg-gradient-to-br from-cyan/20 via-sky/15 to-purple/10 border border-cyan/30">
                  <h3 className="font-semibold text-foreground mb-4">The information provided:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-coral mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Does not constitute professional, legal, technical, or expert advice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-coral mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Should not be relied upon as a substitute for professional guidance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-bright mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Is shared for general awareness and understanding only</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 & 3 - No Guarantees & Limitation of Liability */}
      <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-gold/15 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-cyan/15 to-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* No Guarantees */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-gold/15 to-amber/5 backdrop-blur-sm border border-gold/40 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-amber flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                
                <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">Section 2</span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 mt-2">No Guarantees or Representations</h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Sarveshwar Seva Foundation makes no representations or warranties regarding:
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Accuracy, completeness, or reliability of the information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Outcomes or results from the use of information shared</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Continuous availability or error-free operation of the website</span>
                  </li>
                </ul>
                
                <div className="p-3 rounded-lg bg-gold/10 border border-gold/20">
                  <p className="text-gold-dark text-sm font-medium">All content is provided on an "as is" basis.</p>
                </div>
              </div>
              
              {/* Limitation of Liability */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-rose/15 to-coral/5 backdrop-blur-sm border border-rose/40 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose to-coral flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                
                <span className="text-rose font-semibold text-sm tracking-wide uppercase">Section 3</span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 mt-2">Limitation of Liability</h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Sarveshwar Seva Foundation shall not be held liable for any direct, indirect, incidental, or consequential loss or damage arising from:
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-rose mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Use or inability to use this website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-rose mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Reliance on information published on the website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-rose mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Errors, omissions, or inaccuracies in content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-rose mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Technical issues, interruptions, or external factors</span>
                  </li>
                </ul>
                
                <div className="p-3 rounded-lg bg-rose/10 border border-rose/20">
                  <p className="text-rose text-sm font-medium">Use of the website is at the user's own discretion and risk.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 & 5 - External Links & No Endorsement */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-cyan/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald/5 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* External Links */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-sky/15 to-cyan/5 backdrop-blur-sm border border-sky/40 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky to-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <Link className="w-6 h-6 text-white" />
                </div>
                
                <span className="text-sky font-semibold text-sm tracking-wide uppercase">Section 4</span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 mt-2">External Links Disclaimer</h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  This website may include links to external websites or social media platforms for informational or reference purposes. Sarveshwar Seva Foundation does not control or endorse the content, accuracy, or policies of external websites.
                </p>
                
                <div className="p-3 rounded-lg bg-sky/10 border border-sky/20">
                  <p className="text-sky text-sm">Users are encouraged to review the terms and privacy policies of any third-party sites they visit.</p>
                </div>
              </div>
              
              {/* No Endorsement */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-emerald/15 to-teal/5 backdrop-blur-sm border border-emerald/40 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-bright to-teal flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                
                <span className="text-emerald-bright font-semibold text-sm tracking-wide uppercase">Section 5</span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 mt-2">No Endorsement</h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  References to external organizations, resources, or platforms on this website do not constitute endorsement or recommendation by Sarveshwar Seva Foundation unless explicitly stated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Voluntary Participation */}
      <section className="section-padding bg-gradient-to-br from-background via-gold/5 to-coral/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                  <Sparkles className="w-4 h-4 text-coral" />
                  <span className="text-coral font-semibold text-sm tracking-wide uppercase">Section 6</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  <span className="rainbow-text">Voluntary Participation</span>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Any participation, volunteering, or engagement with activities mentioned on this website is voluntary. The Foundation does not guarantee specific outcomes, benefits, or experiences resulting from participation.
                </p>
                
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-gold/10 to-coral/5 border border-gold/20 hover:border-gold/40 transition-all duration-300 group hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-coral flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Community Engagement</div>
                    <div className="text-sm text-muted-foreground">Your involvement is entirely at your own discretion</div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated group">
                  <img 
                    src={voluntaryParticipation} 
                    alt="Voluntary Participation" 
                    className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                {/* Decorative rings - Same as About Section */}
                <div className="absolute -top-6 -right-6 w-48 h-48 border-4 rounded-full" style={{ borderColor: 'hsl(42 95% 50% / 0.3)' }} />
                <div className="absolute -top-3 -right-3 w-48 h-48 border-2 rounded-full" style={{ borderColor: 'hsl(280 70% 55% / 0.2)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Changes to Disclaimer */}
      <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-gold/15 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-cyan/15 to-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-elevated p-8 bg-gradient-to-br from-primary/10 via-cyan/10 to-purple/10 border border-primary/20 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">Section 7</span>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6 mt-2">
                <span className="rainbow-text">Changes to Disclaimer</span>
              </h2>
              
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Sarveshwar Seva Foundation reserves the right to update or modify this Disclaimer at any time without prior notice. Changes will be effective immediately upon being posted on this page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 - Contact Information */}
      <section className="section-padding bg-gradient-to-br from-background via-gold/5 to-coral/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated group">
                  <img 
                    src={contactDisclaimer} 
                    alt="Contact Us" 
                    className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">Section 8</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  <span className="sunset-text">Contact Information</span>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  For questions or concerns related to this Disclaimer, please contact:
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-purple/10 to-sky/5 border border-purple/20 hover:border-purple/40 transition-all duration-300 group hover:-translate-y-0.5">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple to-sky flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Email</div>
                      <a href="mailto:help@msarveshwarsevafoundation.org" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        help@msarveshwarsevafoundation.org
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-gold/10 to-coral/5 border border-gold/20 hover:border-gold/40 transition-all duration-300 group hover:-translate-y-0.5">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-coral flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Address</div>
                      <p className="text-sm font-medium text-foreground">
                        34, Sachhidanand Nagar, Annapurna Road,<br />
                        Indore, Madhya Pradesh, India – 452009
                      </p>
                    </div>
                  </div>
                </div>
                
                <RouterLink to="/contact">
                  <Button variant="default" size="lg" className="group bg-gradient-to-r from-coral to-rose hover:from-coral/90 hover:to-rose/90">
                    Contact Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-cyan/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-elevated p-8 md:p-12 bg-gradient-to-br from-primary/10 via-cyan/10 to-purple/10 border border-primary/20 text-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
                <span className="rainbow-text">Closing Statement</span>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Sarveshwar Seva Foundation is committed to transparency and responsible communication. This Disclaimer is intended to clarify the scope and limitations of information shared through our website.
              </p>
              
              <p className="text-sm text-muted-foreground mt-8">
                <strong>Last Updated:</strong> January 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;
