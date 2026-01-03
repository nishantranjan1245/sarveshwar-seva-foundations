import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, Globe, Shield, Users, Heart, Link, AlertTriangle, Scale, RefreshCw, Gavel, Phone, CheckCircle, ArrowRight, Mail, MapPin } from "lucide-react";
import heroTerms from "@/assets/terms/hero-terms.jpg";
import websiteUse from "@/assets/terms/website-use.jpg";
import donations from "@/assets/terms/donations.jpg";
import contactSupport from "@/assets/terms/contact-support.jpg";

const TermsConditions = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | Sarveshwar Seva Foundation";
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Same as Homepage */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroTerms} 
            alt="Terms and Conditions" 
            className="w-full h-full object-cover"
          />
          {/* Multi-color gradient overlay - same as homepage */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple/80 via-primary/75 to-cyan/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-hero-pattern opacity-15" />
        </div>
        
        {/* Decorative Elements - More vibrant like homepage */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-gold/30 to-coral/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan/30 to-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-rose/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gold/25 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Badge - same as homepage */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/25 to-coral/20 backdrop-blur-sm border border-gold/40 mb-8 animate-fade-in shadow-lg">
            <FileText className="h-5 w-5 text-gold-light" />
            <span className="text-primary-foreground/95 text-sm font-semibold">Legal Agreement</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 animate-fade-in leading-tight" style={{ animationDelay: '0.2s' }}>
            <span className="text-primary-foreground">Terms &</span>
            <br />
            <span className="relative inline-block">
              <span className="rainbow-text">Conditions</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="url(#rainbow-underline-terms)" strokeWidth="4" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="rainbow-underline-terms" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="hsl(16 90% 60%)" />
                    <stop offset="33%" stopColor="hsl(42 95% 55%)" />
                    <stop offset="66%" stopColor="hsl(155 85% 50%)" />
                    <stop offset="100%" stopColor="hsl(280 70% 55%)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Please read these terms carefully before using our website and services
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-primary-foreground/70 text-sm">
              <strong className="text-gold-light">Last Updated:</strong> January 2026
            </p>
          </div>
        </div>
        
        {/* Scroll indicator - same as homepage */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-7 h-12 rounded-full border-2 border-gold/60 flex items-start justify-center p-2 bg-gold/10">
            <div className="w-2 h-3 bg-gradient-to-b from-gold to-coral rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-background via-purple-950/10 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-cyan-500/10 border border-purple-500/20 rounded-3xl p-10 backdrop-blur-sm">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Welcome to the website of <span className="text-purple-400 font-semibold">Sarveshwar Seva Foundation</span> ("Foundation", "we", "our", "us"). By accessing or using this website, you agree to comply with and be bound by the following Terms & Conditions. If you do not agree with these terms, please do not use this website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Purpose of Website */}
      <section className="py-20 bg-gradient-to-b from-background via-gold-950/10 to-background relative overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-coral-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-coral-500/20 rounded-3xl blur-2xl" />
                <img 
                  src={websiteUse} 
                  alt="Website Purpose" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-coral-600 shadow-lg">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold">
                    <span className="gold-text">1. Purpose of the Website</span>
                  </h2>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  This website is operated by Sarveshwar Seva Foundation, a registered non-profit organization. The purpose of this website is to:
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Share information about the Foundation and its initiatives",
                    "Promote climate awareness and green living",
                    "Provide general information related to community participation and volunteering"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-gradient-to-br from-amber-500 to-coral-600 mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <p className="text-sm text-muted-foreground italic">
                    The website is intended for informational and awareness purposes only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Use of Website Content */}
      <section className="py-20 bg-gradient-to-b from-background via-cyan-950/10 to-background relative overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-600 shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                <span className="ocean-text">2. Use of Website Content</span>
              </h2>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                All content on this website, including text, graphics, logos, images, and other material, is the property of Sarveshwar Seva Foundation unless otherwise stated.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl">
                  <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" /> You may:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <ArrowRight className="h-4 w-4 text-emerald-400 mt-0.5" />
                      View and read content for personal, non-commercial use
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <ArrowRight className="h-4 w-4 text-emerald-400 mt-0.5" />
                      Share content with appropriate credit to the Foundation
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-rose-500/10 to-coral-500/10 border border-rose-500/20 rounded-2xl">
                  <h3 className="text-lg font-bold text-rose-400 mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" /> You may not:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <ArrowRight className="h-4 w-4 text-rose-400 mt-0.5" />
                      Use website content for commercial purposes
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <ArrowRight className="h-4 w-4 text-rose-400 mt-0.5" />
                      Modify, reproduce, or distribute content without prior written permission
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <ArrowRight className="h-4 w-4 text-rose-400 mt-0.5" />
                      Use content in a manner that misrepresents the Foundation or its objectives
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: User Conduct */}
      <section className="py-20 bg-gradient-to-b from-background via-purple-950/10 to-background relative overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                <span className="rainbow-text">3. User Conduct</span>
              </h2>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
              <p className="text-muted-foreground mb-6">While using this website, you agree not to:</p>
              
              <ul className="space-y-4">
                {[
                  "Engage in unlawful, misleading, or harmful activities",
                  "Attempt to gain unauthorized access to the website or its systems",
                  "Submit false, misleading, or inappropriate information through forms",
                  "Interfere with the website's operation or security"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-purple-500/5 border border-purple-500/10 rounded-xl">
                    <div className="p-1 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 mt-0.5">
                      <AlertTriangle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-sm text-muted-foreground mt-6 italic">
                The Foundation reserves the right to restrict access in case of misuse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Forms and Submissions */}
      <section className="py-20 bg-gradient-to-b from-background via-emerald-950/10 to-background relative overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                <span className="nature-text">4. Forms and Submissions</span>
              </h2>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8">
              <p className="text-muted-foreground mb-6">
                Information submitted through contact, volunteer, or other forms must be accurate and lawful. By submitting information, you:
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-muted-foreground">Confirm that the information provided is correct to the best of your knowledge</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-muted-foreground">Grant the Foundation permission to use the information solely to respond to your inquiry</span>
                </li>
              </ul>
              
              <p className="text-sm text-muted-foreground italic">
                Personal information is handled in accordance with our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Donations */}
      <section className="py-20 bg-gradient-to-b from-background via-gold-950/10 to-background relative overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-rose-600 shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold">
                    <span className="sunset-text">5. Donations</span>
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Donations made to Sarveshwar Seva Foundation are voluntary. The Foundation does not guarantee any specific outcome, benefit, or service in exchange for donations.
                  </p>
                  
                  <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
                    <h3 className="text-lg font-bold text-amber-400 mb-4">Unless stated otherwise:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2" />
                        <span className="text-muted-foreground">Donations are non-refundable</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2" />
                        <span className="text-muted-foreground">Donations do not constitute a contractual obligation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-rose-500/20 rounded-3xl blur-2xl" />
                <img 
                  src={donations} 
                  alt="Donations" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: External Links */}
      <section className="py-20 bg-gradient-to-b from-background via-cyan-950/10 to-background relative overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                <Link className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                <span className="ocean-text">6. External Links</span>
              </h2>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8">
              <p className="text-muted-foreground leading-relaxed">
                This website may contain links to external websites or social media platforms for informational purposes. Sarveshwar Seva Foundation does not control and is not responsible for the content, policies, or practices of third-party websites.
              </p>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Accessing external links is at the user's own discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Disclaimer of Warranties */}
      <section className="py-20 bg-gradient-to-b from-background via-rose-950/10 to-background relative overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-500 to-coral-600 shadow-lg">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                <span className="sunset-text">7. Disclaimer of Warranties</span>
              </h2>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-rose-500/20 rounded-3xl p-8">
              <p className="text-muted-foreground mb-6">
                The website and its content are provided on an "as is" basis. Sarveshwar Seva Foundation does not make any warranties regarding:
              </p>
              
              <ul className="space-y-3">
                {[
                  "Accuracy or completeness of information",
                  "Availability or uninterrupted access to the website",
                  "Suitability of information for specific purposes"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Limitation of Liability */}
      <section className="py-20 bg-gradient-to-b from-background via-purple-950/10 to-background relative overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                <span className="rainbow-text">8. Limitation of Liability</span>
              </h2>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
              <p className="text-muted-foreground mb-6">
                Sarveshwar Seva Foundation shall not be liable for any direct or indirect loss, damage, or inconvenience arising from:
              </p>
              
              <ul className="space-y-3">
                {[
                  "Use or inability to use this website",
                  "Reliance on information provided on the website",
                  "Technical issues, errors, or interruptions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Changes to Terms */}
      <section className="py-20 bg-gradient-to-b from-background via-emerald-950/10 to-background relative overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                <RefreshCw className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                <span className="nature-text">9. Changes to Terms & Conditions</span>
              </h2>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8">
              <p className="text-muted-foreground mb-4">
                The Foundation may update these Terms & Conditions at any time without prior notice. Changes will be effective immediately upon being posted on this page.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Continued use of the website constitutes acceptance of the updated terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Governing Law */}
      <section className="py-20 bg-gradient-to-b from-background via-amber-950/10 to-background relative overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg">
                <Gavel className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                <span className="gold-text">10. Governing Law</span>
              </h2>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-8">
              <p className="text-muted-foreground">
                These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of the courts located in <span className="text-amber-400 font-semibold">Madhya Pradesh, India</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Contact Information */}
      <section className="py-20 bg-gradient-to-b from-background via-cyan-950/10 to-background relative overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
                <img 
                  src={contactSupport} 
                  alt="Contact Support" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 shadow-lg">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold">
                    <span className="ocean-text">11. Contact Information</span>
                  </h2>
                </div>
                
                <p className="text-muted-foreground mb-8">
                  For questions regarding these Terms & Conditions, please contact:
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:help@msarveshwarsevafoundation.org" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        help@msarveshwarsevafoundation.org
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        34, Sachhidanand Nagar, Annapurna Road,<br />
                        Indore, Madhya Pradesh, India – 452009
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 via-violet-900/20 to-cyan-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.2),transparent_70%)]" />
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <Scale className="h-5 w-5 text-cyan-400" />
              <span className="text-white/90 text-sm font-medium">Closing Statement</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <span className="rainbow-text">Thank You for Your Trust</span>
            </h2>
            
            <p className="text-xl text-white/80 leading-relaxed">
              Sarveshwar Seva Foundation appreciates your visit and engagement. These Terms & Conditions are intended to ensure transparency, responsible use, and trust for all users.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
