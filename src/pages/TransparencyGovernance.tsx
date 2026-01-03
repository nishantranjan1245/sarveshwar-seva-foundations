import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Eye, Users, FileText, Shield, BarChart3, Heart, CheckCircle, Scale, Globe, Mail, MapPin, Sparkles, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import heroTransparency from "@/assets/transparency/hero-transparency.jpg";
import governanceBoard from "@/assets/transparency/transparency-governance-board-1.png";
import financialTransparency from "@/assets/transparency/financial-transparency.jpg";
import ethicalStandards from "@/assets/transparency/ethical-standards.jpg";
import stakeholderEngagement from "@/assets/transparency/trasparency-stakeholer-engagement- img.png";

const TransparencyGovernance = () => {
  useEffect(() => {
    document.title = "Transparency & Governance | Sarveshwar Seva Foundation";
  }, []);
  const boardMembers = [
    "Bajrang Lal Bagra",
    "Deepak Sodhani",
    "Vimal Chandra Sodhani",
    "Venkata Koteswara Rao Kappagantu"
  ];

  const decisionEmphasis = [
    "Ethical conduct and integrity",
    "Compliance with applicable laws",
    "Responsible use of resources",
    "Alignment with public-interest objectives"
  ];

  const financialPoints = [
    "Proper accounting and documentation",
    "Internal review of financial records",
    "Use of funds only for awareness and community initiatives",
    "Compliance with statutory reporting requirements"
  ];

  const compliancePoints = [
    "Corporate and organizational compliance",
    "FCRA regulations (where applicable)",
    "Statutory filings and disclosures",
    "Website and data protection policies"
  ];

  const ethicalPoints = [
    "Non-commercial and non-political operations",
    "Respectful and inclusive engagement",
    "Honest and accurate communication",
    "Responsible representation of initiatives and impact"
  ];

  const disclosurePoints = [
    "Legal & Compliance details",
    "Privacy Policy, Terms & Conditions, and Disclaimer",
    "Organizational information and activities"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Same as Homepage Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroTransparency} 
            alt="Transparency & Governance" 
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
            <span className="text-primary-foreground/95 text-sm font-semibold">Open & Accountable</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="rainbow-text">Transparency & Governance</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-6 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Our commitment to transparent operations and strong governance practices.
          </p>
        </div>
        
        {/* Scroll Indicator - Same as Homepage */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-7 h-12 rounded-full border-2 border-gold/60 flex items-start justify-center p-2 bg-gold/10">
            <div className="w-2 h-3 bg-gradient-to-b from-gold to-coral rounded-full" />
          </div>
        </div>
      </section>

      {/* Our Commitment to Transparency */}
      <section className="section-padding bg-gradient-to-br from-background via-gold/5 to-coral/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">Our Commitment</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              <span className="sunset-text">Commitment to Transparency</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sarveshwar Seva Foundation is committed to maintaining the highest standards of <span className="text-coral font-semibold">transparency</span>, <span className="text-coral font-semibold">accountability</span>, and <span className="text-coral font-semibold">ethical governance</span>. Transparency is fundamental to building trust with communities, partners, volunteers, and the public.
            </p>
            
            <p className="text-muted-foreground mt-4">
              This page outlines how the Foundation ensures responsible governance and openness in its operations.
            </p>
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-cyan/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                  <img 
                    src={governanceBoard} 
                    alt="Governance Structure" 
                    className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 md:-left-10 p-6 rounded-2xl bg-gradient-to-br from-coral via-rose to-purple text-primary-foreground shadow-elevated">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-6 h-6 text-gold-light" />
                    <span className="text-sm font-medium opacity-90">Board Members</span>
                  </div>
                  <div className="font-display text-4xl font-bold">4</div>
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">Governance Structure</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  <span className="rainbow-text">Board of Directors</span>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Sarveshwar Seva Foundation is governed by a Board of Directors responsible for providing strategic oversight, ensuring compliance with legal requirements, and guiding the Foundation's long-term vision.
                </p>
                
                <div className="p-6 rounded-xl bg-gradient-to-br from-rose/15 to-coral/5 border border-rose/40">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">Board Members</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {boardMembers.map((member, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose to-coral flex items-center justify-center">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{member}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mt-6 text-sm">
                  The Board oversees policy direction, governance standards, and adherence to the Foundation's objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision-Making & Oversight */}
      <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-gold/15 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-cyan/15 to-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-elevated p-8 md:p-12 bg-gradient-to-br from-primary/10 via-cyan/10 to-purple/10 border border-primary/20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-teal flex items-center justify-center mx-auto mb-6">
                <Scale className="w-8 h-8 text-white" />
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-amber/20 border border-gold/30 mb-6">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">Decision-Making</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                <span className="rainbow-text">Decision-Making & Oversight</span>
              </h2>
              
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                Key decisions related to programs, governance, and compliance are taken through structured internal processes. Oversight mechanisms are designed to ensure that all activities remain aligned with the Foundation's mission and statutory obligations.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {decisionEmphasis.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/50">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="section-padding bg-gradient-to-br from-background via-gold/5 to-coral/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                  <Sparkles className="w-4 h-4 text-coral" />
                  <span className="text-coral font-semibold text-sm tracking-wide uppercase">Financial Transparency</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  <span className="sunset-text">Financial Transparency</span>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Sarveshwar Seva Foundation follows responsible financial management practices to ensure that resources are utilized solely for non-profit objectives.
                </p>
                
                <div className="space-y-3">
                  {financialPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-gold/10 to-coral/5 border border-gold/20 hover:border-gold/40 transition-all duration-300 group hover:-translate-y-0.5">
                      <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-muted-foreground mt-6 text-sm">
                  Financial information is maintained in accordance with applicable laws and is available where required.
                </p>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated group">
                  <img 
                    src={financialTransparency} 
                    alt="Financial Transparency" 
                    className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                {/* Decorative rings */}
                <div className="absolute -top-6 -right-6 w-48 h-48 border-4 rounded-full" style={{ borderColor: 'hsl(42 95% 50% / 0.3)' }} />
                <div className="absolute -top-3 -right-3 w-48 h-48 border-2 rounded-full" style={{ borderColor: 'hsl(280 70% 55% / 0.2)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Accountability + Ethical Standards */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-cyan/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald/5 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                <Sparkles className="w-4 h-4 text-coral" />
                <span className="text-coral font-semibold text-sm tracking-wide uppercase">Our Standards</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                <span className="rainbow-text">Compliance & Ethics</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Compliance & Accountability */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-cyan/20 via-sky/15 to-purple/10 border border-cyan/30 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan to-sky flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Compliance & Accountability</h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  The Foundation adheres to all applicable legal and regulatory requirements, including:
                </p>
                
                <ul className="space-y-2">
                  {compliancePoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-muted-foreground text-sm mt-4">
                  Accountability is maintained through internal controls and responsible governance practices.
                </p>
              </div>
              
              {/* Ethical Standards */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-emerald/20 via-teal/15 to-cyan/10 border border-emerald/30 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-bright to-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Ethical Standards</h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Sarveshwar Seva Foundation operates with a strong ethical framework that guides its activities and interactions:
                </p>
                
                <ul className="space-y-2">
                  {ethicalPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-bright mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Disclosure */}
      <section className="section-padding bg-gradient-to-br from-background via-gold/5 to-coral/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                  <img 
                    src={ethicalStandards} 
                    alt="Public Disclosure" 
                    className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">Public Disclosure</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  <span className="rainbow-text">Public Disclosure</span>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  To promote openness, the Foundation provides access to key information through its website, including:
                </p>
                
                <div className="space-y-3 mb-6">
                  {disclosurePoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-purple/10 to-sky/5 border border-purple/20">
                      <Eye className="h-5 w-5 text-purple mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm">
                  This ensures that stakeholders can make informed decisions and engage with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Engagement */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-cyan/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                  <Sparkles className="w-4 h-4 text-coral" />
                  <span className="text-coral font-semibold text-sm tracking-wide uppercase">Engagement</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  <span className="sunset-text">Stakeholder Engagement</span>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Sarveshwar Seva Foundation values feedback and engagement from the public, communities, volunteers, and partners. Constructive feedback supports continuous improvement and responsible governance.
                </p>
                
                <div className="p-6 rounded-xl bg-gradient-to-br from-gold/15 to-amber/5 border border-gold/40 mb-6">
                  <p className="text-gold-dark">
                    Queries related to transparency and governance are welcomed through the Contact page.
                  </p>
                </div>
                
                <Link to="/contact">
                  <Button variant="default" size="lg" className="group bg-gradient-to-r from-coral to-rose hover:from-coral/90 hover:to-rose/90">
                    Contact Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated group">
                  <img 
                    src={stakeholderEngagement} 
                    alt="Stakeholder Engagement" 
                    className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                {/* Decorative rings */}
                <div className="absolute -top-6 -right-6 w-48 h-48 border-4 rounded-full" style={{ borderColor: 'hsl(42 95% 50% / 0.3)' }} />
                <div className="absolute -top-3 -right-3 w-48 h-48 border-2 rounded-full" style={{ borderColor: 'hsl(280 70% 55% / 0.2)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-br from-background via-gold/5 to-coral/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">Contact</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                <span className="sunset-text">Contact for Governance Matters</span>
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                For questions related to governance, transparency, or compliance, please contact:
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 p-6 rounded-xl bg-gradient-to-br from-purple/10 to-sky/5 border border-purple/20 hover:border-purple/40 transition-all duration-300 group hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple to-sky flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Email</div>
                  <a href="mailto:help@msarveshwarsevafoundation.org" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    help@msarveshwarsevafoundation.org
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-6 rounded-xl bg-gradient-to-br from-gold/10 to-coral/5 border border-gold/20 hover:border-gold/40 transition-all duration-300 group hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold to-coral flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Registered Address</div>
                  <p className="text-sm font-medium text-foreground">
                    34, Sachhidanand Nagar, Annapurna Road,<br />
                    Indore, Madhya Pradesh, India – 452009
                  </p>
                </div>
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
                Sarveshwar Seva Foundation remains committed to transparent governance, ethical conduct, and accountability in all its activities. These principles guide our efforts to promote climate awareness and community-led sustainability responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TransparencyGovernance;
