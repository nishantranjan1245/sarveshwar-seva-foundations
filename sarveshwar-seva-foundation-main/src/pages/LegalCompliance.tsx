import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Scale, Building, FileCheck, Shield, Award, BookOpen, Users, Globe, Mail, MapPin, Sparkles, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import heroLegal from "@/assets/legal/hero-legal.jpg";
import legalIdentity from "@/assets/legal/legal-identity.jpg";
import governance from "@/assets/legal/governance.jpg";
import financialTransparency from "@/assets/legal/financial-transparency.jpg";
import contactLegal from "@/assets/legal/contact-legal.jpg";

const LegalCompliance = () => {
  const boardMembers = [
    "Bajrang Lal Bagra",
    "Deepak Sodhani",
    "Vimal Chandra Sodhani",
    "Venkata Koteswara Rao Kappagantu"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Same as Homepage Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroLegal} 
            alt="Legal & Compliance - Trust and Transparency" 
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
            <span className="text-primary-foreground/95 text-sm font-semibold">Regulatory Compliance</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="rainbow-text">Legal & Compliance</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-6 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Sarveshwar Seva Foundation is a registered non-profit organization operating in accordance with applicable laws and regulations of India.
          </p>
        </div>
        
        {/* Scroll Indicator - Same as Homepage */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-7 h-12 rounded-full border-2 border-gold/60 flex items-start justify-center p-2 bg-gold/10">
            <div className="w-2 h-3 bg-gradient-to-b from-gold to-coral rounded-full" />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-gradient-to-br from-background via-gold/5 to-coral/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">Overview</span>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Foundation is committed to <span className="text-coral font-semibold">transparency</span>, <span className="text-coral font-semibold">accountability</span>, and <span className="text-coral font-semibold">ethical governance</span> in all its activities. This page provides key legal, registration, and compliance-related information to ensure public trust and regulatory clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Identity Section */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-cyan/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                  <img 
                    src={legalIdentity} 
                    alt="Legal Identity" 
                    className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                {/* Floating stat card - Same as About Section */}
                <div className="absolute -bottom-6 -left-6 md:-left-10 p-6 rounded-2xl bg-gradient-to-br from-coral via-rose to-purple text-primary-foreground shadow-elevated">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-6 h-6 text-gold-light" />
                    <span className="text-sm font-medium opacity-90">Established</span>
                  </div>
                  <div className="font-display text-4xl font-bold">1999</div>
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">Legal Identity</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  <span className="sunset-text">Legally Recognized</span> Entity
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Sarveshwar Seva Foundation is legally constituted and recognized under Indian law. The Foundation operates as a non-profit entity and does not engage in commercial activities.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-purple/10 to-sky/5 border border-purple/20 hover:border-purple/40 transition-all duration-300 group hover:-translate-y-0.5">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple to-sky flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Organization Name</div>
                      <div className="text-sm font-medium text-foreground">Sarveshwar Seva Foundation</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-gold/10 to-coral/5 border border-gold/20 hover:border-gold/40 transition-all duration-300 group hover:-translate-y-0.5">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-coral flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">CIN</div>
                      <div className="text-sm font-medium text-foreground">U80211MP1999NPL013905</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-cyan/10 to-sky/5 border border-cyan/20 hover:border-cyan/40 transition-all duration-300 group hover:-translate-y-0.5">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan to-sky flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <FileCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Date of Incorporation</div>
                      <div className="text-sm font-medium text-foreground">14 December 1999</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FCRA Compliance Section */}
      <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-gold/15 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-cyan/15 to-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-elevated p-8 md:p-12 bg-gradient-to-br from-primary/10 via-cyan/10 to-purple/10 border border-primary/20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-teal flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-amber/20 border border-gold/30 mb-6">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">FCRA Compliance</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                <span className="rainbow-text">FCRA Registration</span>
              </h2>
              
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                Sarveshwar Seva Foundation is registered under the Foreign Contribution (Regulation) Act, 2010 (FCRA). The Foundation complies with all applicable FCRA regulations, including reporting and utilization requirements, wherever foreign contributions are received and utilized.
              </p>
              
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-br from-gold/15 to-amber/5 border border-gold/40">
                <FileCheck className="w-6 h-6 text-gold" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">FCRA Registration Number</div>
                  <div className="text-xl font-bold text-foreground">063300165</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Management Section */}
      <section className="section-padding bg-gradient-to-br from-background via-gold/5 to-coral/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                  <Sparkles className="w-4 h-4 text-coral" />
                  <span className="text-coral font-semibold text-sm tracking-wide uppercase">Governance</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  <span className="rainbow-text">Governance & Management</span>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The Foundation follows structured governance practices to ensure responsible decision-making and oversight. The Board provides strategic guidance and ensures that the Foundation's activities remain aligned with its objectives and legal obligations.
                </p>
                
                <div className="p-6 rounded-xl bg-gradient-to-br from-rose/15 to-coral/5 border border-rose/40">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">Board of Directors</h3>
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
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated group">
                  <img 
                    src={governance} 
                    alt="Governance & Management" 
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

      {/* Statutory Compliance & Financial Transparency */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-cyan/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                <Sparkles className="w-4 h-4 text-coral" />
                <span className="text-coral font-semibold text-sm tracking-wide uppercase">Compliance Framework</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Our <span className="rainbow-text">Commitment</span> to Compliance
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Statutory Compliance */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-cyan/20 via-sky/15 to-purple/10 border border-cyan/30 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan to-sky flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Statutory Compliance</h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Sarveshwar Seva Foundation adheres to applicable statutory and regulatory requirements, including but not limited to:
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Corporate and organizational compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Financial record-keeping and reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Regulatory disclosures as required by law</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Ethical and responsible operational practices</span>
                  </li>
                </ul>
              </div>
              
              {/* Financial Transparency */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-emerald/20 via-teal/15 to-cyan/10 border border-emerald/30 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-bright to-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Financial Transparency</h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  The Foundation is committed to responsible financial management. Funds received are utilized solely for furthering the Foundation's non-profit objectives.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-bright mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Proper accounting and documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-bright mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Use of funds for awareness and community initiatives only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-bright mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Transparency in financial reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website & Policy Compliance */}
      <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-gold/15 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-cyan/15 to-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-amber/20 border border-gold/30 mb-6">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">Website Policies</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                <span className="sunset-text">Website & Policy Compliance</span>
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Sarveshwar Seva Foundation maintains clear and accessible policies governing the use of its website and interactions with users.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/privacy-policy" className="p-6 rounded-xl bg-gradient-to-br from-gold/15 to-amber/5 border border-gold/40 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-amber flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">Privacy Policy</h3>
              </Link>
              
              <Link to="/terms-conditions" className="p-6 rounded-xl bg-gradient-to-br from-rose/15 to-coral/5 border border-rose/40 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose to-coral flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">Terms & Conditions</h3>
              </Link>
              
              <Link to="/disclaimer" className="p-6 rounded-xl bg-gradient-to-br from-sky/15 to-cyan/5 border border-sky/40 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky to-cyan flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">Disclaimer</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Commercial & Non-Political Nature */}
      <section className="section-padding bg-gradient-to-br from-background via-gold/5 to-coral/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                  <img 
                    src={financialTransparency} 
                    alt="Non-Commercial Nature" 
                    className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">Our Nature</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  <span className="rainbow-text">Non-Commercial & Non-Political</span>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The Foundation maintains strict adherence to its non-profit objectives.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-purple/10 to-sky/5 border border-purple/20">
                    <XCircle className="h-5 w-5 text-coral mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Does not operate for profit</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-gold/10 to-coral/5 border border-gold/20">
                    <XCircle className="h-5 w-5 text-coral mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Does not provide paid services</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-cyan/10 to-sky/5 border border-cyan/20">
                    <XCircle className="h-5 w-5 text-coral mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Does not engage in political activity or policy advocacy</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-emerald/10 to-teal/5 border border-emerald/20">
                    <CheckCircle className="h-5 w-5 text-emerald-bright mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">All activities are awareness-focused and aligned with public interest objectives</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-cyan/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">Contact</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  <span className="sunset-text">Legal & Compliance Queries</span>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  For queries related to legal status, compliance, or governance, please contact:
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
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Registered Address</div>
                      <p className="text-sm font-medium text-foreground">
                        34, Sachhidanand Nagar, Annapurna Road,<br />
                        Indore, Madhya Pradesh, India – 452009
                      </p>
                    </div>
                  </div>
                </div>
                
                <Link to="/contact">
                  <Button variant="default" size="lg" className="group bg-gradient-to-r from-coral to-rose hover:from-coral/90 hover:to-rose/90">
                    Contact Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated group">
                  <img 
                    src={contactLegal} 
                    alt="Contact for Legal Queries" 
                    className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section-padding bg-gradient-to-br from-background via-gold/5 to-coral/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-elevated p-8 md:p-12 bg-gradient-to-br from-primary/10 via-cyan/10 to-purple/10 border border-primary/20 text-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
                <span className="rainbow-text">Closing Statement</span>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Sarveshwar Seva Foundation remains committed to lawful operations, transparent governance, and responsible environmental awareness initiatives. This Legal & Compliance page reflects our dedication to accountability and public trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalCompliance;
