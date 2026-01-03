import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Lock, Eye, FileText, Users, Globe, Cookie, Link2, Baby, Edit, Mail, MapPin, Sparkles, CheckCircle } from "lucide-react";

import heroPrivacy from "@/assets/privacy/hero-privacy.jpg";
import dataSecurity from "@/assets/privacy/data-security.jpg";
import contactSupport from "@/assets/privacy/contact-support.jpg";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Sarveshwar Seva Foundation";
  }, []);
  const sections = [
    {
      number: "1",
      icon: FileText,
      title: "Information We Collect",
      gradient: "from-gold to-amber",
      content: [
        "Name",
        "Email address",
        "Phone number (if provided)",
        "Information submitted through contact or volunteer forms"
      ],
      note: "We do not collect sensitive personal data unless explicitly required and voluntarily provided."
    },
    {
      number: "2",
      icon: Eye,
      title: "How We Use Information",
      gradient: "from-coral to-rose",
      content: [
        "Responding to inquiries and messages",
        "Communicating about initiatives, volunteering, or participation",
        "Improving website content and user experience",
        "Maintaining records for transparency and accountability"
      ],
      note: "We do not use personal information for commercial marketing purposes."
    },
    {
      number: "3",
      icon: Cookie,
      title: "Cookies and Analytics",
      gradient: "from-cyan to-sky",
      content: [
        "Do not collect personally identifiable information",
        "Are used only to improve website functionality and performance"
      ],
      intro: "Our website may use basic cookies or analytics tools to understand general website usage patterns, such as page visits and traffic sources. These tools:",
      note: "You may choose to disable cookies through your browser settings."
    },
    {
      number: "4",
      icon: Users,
      title: "Information Sharing",
      gradient: "from-purple to-violet",
      content: [
        "When required by law or regulatory authorities",
        "To protect the rights, safety, or integrity of the Foundation",
        "With trusted service providers strictly for website or communication support"
      ],
      intro: "Sarveshwar Seva Foundation does not sell, rent, or trade personal information to third parties. Information may be shared only:",
      note: "All such sharing is limited and controlled."
    },
    {
      number: "5",
      icon: Lock,
      title: "Data Security",
      gradient: "from-emerald-bright to-teal",
      content: [],
      intro: "We take reasonable measures to protect personal information from unauthorized access, misuse, or disclosure. While no online system is completely secure, we strive to maintain appropriate safeguards."
    },
    {
      number: "6",
      icon: Link2,
      title: "External Links",
      gradient: "from-rose to-coral",
      content: [],
      intro: "Our website may contain links to external websites or social media platforms. Sarveshwar Seva Foundation is not responsible for the privacy practices or content of external sites. Users are encouraged to review the privacy policies of those websites separately."
    },
    {
      number: "7",
      icon: Baby,
      title: "Children's Privacy",
      gradient: "from-sky to-cyan",
      content: [],
      intro: "Our website is intended for general audiences. We do not knowingly collect personal information from children without appropriate consent. If such information is identified, we will take steps to remove it."
    },
    {
      number: "8",
      icon: Edit,
      title: "Your Rights",
      gradient: "from-gold to-coral",
      content: [
        "Access or correct your personal information",
        "Request deletion of information submitted through the website"
      ],
      intro: "You may request to:",
      note: "Such requests can be made using the contact information provided below."
    },
    {
      number: "9",
      icon: FileText,
      title: "Changes to This Privacy Policy",
      gradient: "from-purple to-rose",
      content: [],
      intro: "Sarveshwar Seva Foundation may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Matching Homepage */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroPrivacy} 
            alt="Professional team discussing privacy and data protection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple/80 via-primary/75 to-cyan/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-hero-pattern opacity-15" />
        </div>
        
        {/* Decorative Elements - Same as Homepage */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-gold/30 to-coral/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan/30 to-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-rose/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gold/25 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        
        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/25 to-coral/20 backdrop-blur-sm border border-gold/40 mb-8 shadow-lg animate-fade-in">
              <Shield className="w-4 h-4 text-gold-light" />
              <span className="text-primary-foreground/95 text-sm font-semibold">Your Privacy Matters</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up">
              Privacy{" "}
              <span className="relative inline-block">
                <span className="rainbow-text">Policy</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="url(#rainbow-underline-privacy)" strokeWidth="4" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="rainbow-underline-privacy" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="hsl(16 90% 60%)" />
                      <stop offset="33%" stopColor="hsl(42 95% 55%)" />
                      <stop offset="66%" stopColor="hsl(155 85% 50%)" />
                      <stop offset="100%" stopColor="hsl(280 70% 55%)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Sarveshwar Seva Foundation ("we", "our", "us") is committed to protecting the privacy of visitors, volunteers, and individuals who interact with our website and services.
            </p>
            
            <p className="text-primary-foreground/70 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Last Updated: January 2026
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-7 h-12 rounded-full border-2 border-gold/60 flex items-start justify-center p-2 bg-gold/10">
            <div className="w-2 h-3 bg-gradient-to-b from-gold to-coral rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-cyan/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-gold/15 to-coral/10 border border-gold/30 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                  <Sparkles className="w-4 h-4 text-coral" />
                  <span className="text-coral font-semibold text-sm tracking-wide uppercase">
                    Introduction
                  </span>
                </div>
                <p className="text-foreground leading-relaxed text-lg mb-4">
                  This Privacy Policy explains how we collect, use, and safeguard information when you visit our website.
                </p>
                <p className="text-muted-foreground">
                  By using this website, you agree to the practices described in this Privacy Policy.
                </p>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
                <img 
                  src={dataSecurity} 
                  alt="Data security and privacy protection"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-teal flex items-center justify-center shadow-lg">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">Your Data is Protected</h3>
                      <p className="text-sm text-muted-foreground">We prioritize your privacy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding bg-gradient-to-br from-background via-purple-950/10 to-secondary/30 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-rose/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${section.gradient} group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <section.icon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-foreground">
                    {section.number}. {section.title}
                  </h2>
                </div>
                
                {section.intro && (
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {section.intro}
                  </p>
                )}
                
                {section.content.length > 0 && (
                  <ul className="space-y-3 mb-4">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${section.gradient} mt-2 flex-shrink-0`} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {section.note && (
                  <p className="text-sm text-foreground/70 italic bg-gradient-to-r from-gold/10 to-coral/5 rounded-lg p-3 border border-gold/20">
                    {section.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-purple/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-coral/10 to-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-coral/20 to-gold/20 border border-coral/30 mb-4">
                <Sparkles className="w-4 h-4 text-coral" />
                <span className="text-coral font-semibold text-sm tracking-wide uppercase">
                  Section 10
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Contact <span className="sunset-text">Information</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
                <img 
                  src={contactSupport} 
                  alt="Customer support representative"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-coral to-rose flex items-center justify-center shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">We're Here to Help</h3>
                      <p className="text-sm text-muted-foreground">Reach out anytime</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple/15 via-primary/10 to-cyan/15 border border-purple/20 rounded-2xl p-8">
                <p className="text-muted-foreground mb-6">
                  For questions or concerns regarding this Privacy Policy or data handling practices, please contact:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-background/50 rounded-xl p-5 border border-border/30 group hover:border-gold/30 transition-all duration-300">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-gold to-coral shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:help@msarveshwarsevafoundation.org" className="text-coral hover:text-gold transition-colors">
                        help@msarveshwarsevafoundation.org
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-background/50 rounded-xl p-5 border border-border/30 group hover:border-cyan/30 transition-all duration-300">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan to-teal shadow-md group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground text-sm">
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
      <section className="section-padding bg-gradient-to-br from-coral/10 via-background to-gold/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/15 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-rose/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gold/20 via-coral/15 to-rose/10 border border-gold/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-coral flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Closing Statement
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Sarveshwar Seva Foundation values transparency and respects the privacy of individuals who engage with our work. This Privacy Policy reflects our commitment to responsible data handling and public trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
