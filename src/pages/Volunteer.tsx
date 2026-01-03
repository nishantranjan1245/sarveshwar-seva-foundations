import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Users, Heart, Calendar, ArrowRight, Sparkles, HandHeart, Globe, Award, MessageSquare, Megaphone, ClipboardList, GraduationCap, Home, Clock, CheckCircle, Leaf, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroVolunteer from "@/assets/volunteer/hero-volunteer.jpg";
import awarenessOutreach from "@/assets/volunteer/awareness-outreach.jpg";
import communityParticipation from "@/assets/volunteer/community-participation.jpg";
import contentSupport from "@/assets/volunteer/content-support.jpg";
import eventAssistance from "@/assets/volunteer/event-assistance.jpg";

const Volunteer = () => {
  useEffect(() => {
    document.title = "Volunteer | Sarveshwar Seva Foundation";
  }, []);
  const volunteerAreas = [
    {
      icon: Megaphone,
      title: "Awareness & Outreach Support",
      description: "Volunteers may assist in spreading awareness about climate responsibility and green living through community engagement and outreach activities.",
      image: awarenessOutreach,
      gradient: "from-cyan/20 via-sky/15 to-purple/10",
      iconGradient: "from-cyan to-sky",
      borderColor: "border-cyan/30"
    },
    {
      icon: Users,
      title: "Community Participation Activities",
      description: "Volunteers can support community-led initiatives focused on environmental cleanliness, sustainability awareness, and responsible practices.",
      image: communityParticipation,
      gradient: "from-gold/20 via-coral/15 to-rose/10",
      iconGradient: "from-gold to-coral",
      borderColor: "border-gold/30"
    },
    {
      icon: MessageSquare,
      title: "Content & Information Support",
      description: "Individuals with interest in communication, writing, or documentation may contribute to awareness content, informational resources, or outreach material.",
      image: contentSupport,
      gradient: "from-emerald/20 via-teal/15 to-cyan/10",
      iconGradient: "from-emerald-bright to-teal",
      borderColor: "border-emerald/30"
    },
    {
      icon: ClipboardList,
      title: "Event & Activity Assistance",
      description: "Volunteers may help in organizing and supporting awareness sessions, community meetings, or participation activities related to environmental sustainability.",
      image: eventAssistance,
      gradient: "from-purple/20 via-rose/15 to-coral/10",
      iconGradient: "from-purple to-rose",
      borderColor: "border-purple/30"
    }
  ];

  const whyVolunteer = [
    "Contribute to climate and environmental awareness",
    "Support community-led sustainability initiatives",
    "Participate in meaningful environmental engagement",
    "Share knowledge and responsible practices within communities"
  ];

  const whoCanVolunteer = [
    { icon: GraduationCap, text: "Students and working professionals" },
    { icon: Home, text: "Community members and local groups" },
    { icon: Leaf, text: "Individuals interested in sustainability and environmental responsibility" }
  ];

  const commitmentTypes = [
    { icon: Calendar, text: "Short-term or activity-based" },
    { icon: Clock, text: "Ongoing, depending on initiatives" },
    { icon: CheckCircle, text: "Flexible, based on availability" }
  ];

  const principles = [
    "Awareness and community-focused activities only",
    "No commercial or paid roles",
    "No political or policy advocacy",
    "Respectful, inclusive, and ethical participation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Matching Homepage */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroVolunteer} 
            alt="Volunteer team group photo" 
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
            {/* Badge - Same style as Homepage */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/25 to-coral/20 backdrop-blur-sm border border-gold/40 mb-8 animate-fade-in shadow-lg">
              <Heart className="w-4 h-4 text-gold-light" />
              <span className="text-primary-foreground/95 text-sm font-semibold">
                Be a Part of Climate Awareness & Green Action
              </span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up">
              Volunteer{" "}
              <span className="relative inline-block">
                <span className="rainbow-text">With Us</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="url(#rainbow-underline-vol)" strokeWidth="4" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="rainbow-underline-vol" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="hsl(16 90% 60%)" />
                      <stop offset="33%" stopColor="hsl(42 95% 55%)" />
                      <stop offset="66%" stopColor="hsl(155 85% 50%)" />
                      <stop offset="100%" stopColor="hsl(280 70% 55%)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Sarveshwar Seva Foundation welcomes individuals who wish to contribute time, skills, and effort toward promoting climate awareness and environmentally responsible living.
            </p>

            <p className="text-md text-primary-foreground/75 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Volunteering is voluntary, inclusive, and focused on public awareness rather than commercial or political activities.
            </p>

            {/* CTAs - Same style as Homepage */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group bg-gradient-to-r from-gold via-coral to-rose hover:from-gold/90 hover:via-coral/90 hover:to-rose/90 shadow-gold">
                  Join as Volunteer
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/initiatives">
                <Button variant="hero-outline" size="xl" className="border-2 border-white/40 hover:bg-white/10 hover:border-white/60">
                  <Users className="w-5 h-5" />
                  View Initiatives
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Same as Homepage */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-7 h-12 rounded-full border-2 border-gold/60 flex items-start justify-center p-2 bg-gold/10">
            <div className="w-2 h-3 bg-gradient-to-b from-gold to-coral rounded-full" />
          </div>
        </div>
      </section>

      {/* Why Volunteer Section - Matching Focus Areas style */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-cyan/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald/5 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
              <Sparkles className="w-4 h-4 text-coral" />
              <span className="text-coral font-semibold text-sm tracking-wide uppercase">
                Why Join Us
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Why Volunteer With <span className="rainbow-text">Sarveshwar Seva</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Volunteers play an important role in supporting awareness initiatives and community engagement efforts. Volunteering is centered on participation, learning, and collective responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyVolunteer.map((reason, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gold/20 via-coral/15 to-rose/10 rounded-3xl p-6 border border-gold/30 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-coral flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <span className="relative text-foreground font-medium text-lg">{reason}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Areas Section - Matching Focus Areas style */}
      <section className="section-padding bg-gradient-to-br from-background via-emerald/5 to-secondary/30 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-br from-emerald/10 to-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple/10 to-rose/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald/20 to-teal/20 border border-emerald/30 mb-6">
              <HandHeart className="w-4 h-4 text-emerald-bright" />
              <span className="text-emerald-bright font-semibold text-sm tracking-wide uppercase">
                Contribution Areas
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Areas Where Volunteers Can <span className="sunset-text">Contribute</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Join us in various roles that match your interests and availability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {volunteerAreas.map((area, index) => (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br ${area.gradient} rounded-3xl overflow-hidden border ${area.borderColor} hover:shadow-elevated transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${area.iconGradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <div className="relative p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Volunteer Section */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-purple/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan/15 to-sky/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple/10 to-rose/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan/20 to-sky/20 border border-cyan/30 mb-6">
                  <Users className="w-4 h-4 text-cyan" />
                  <span className="text-cyan font-semibold text-sm tracking-wide uppercase">
                    Open to All
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  Who Can <span className="ocean-text">Volunteer</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Sarveshwar Seva Foundation welcomes volunteers from diverse backgrounds who share an interest in environmental awareness and community participation. No specific technical background is required. Participation is based on interest, availability, and alignment with the Foundation's values.
                </p>

                <div className="space-y-4">
                  {whoCanVolunteer.map((item, index) => (
                    <div 
                      key={index}
                      className="group flex items-center gap-4 bg-gradient-to-br from-cyan/20 via-sky/15 to-purple/10 rounded-2xl p-4 border border-cyan/30 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-sky flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-gold/20 via-coral/15 to-rose/10 border border-gold/30 rounded-3xl p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/30 to-coral/20 border border-gold/40 mb-4">
                  <Clock className="w-4 h-4 text-gold" />
                  <span className="text-gold font-semibold text-sm tracking-wide uppercase">
                    Flexible Options
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Volunteer Commitment
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Foundation values responsible participation and clear communication regarding volunteer roles. Volunteering opportunities may be:
                </p>

                <div className="space-y-3">
                  {commitmentTypes.map((type, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 bg-gradient-to-r from-gold/10 to-coral/10 rounded-xl p-4 border border-gold/20"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-coral flex items-center justify-center shadow-md">
                        <type.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{type.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="section-padding bg-gradient-to-br from-background via-rose/5 to-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-rose/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose/20 to-coral/20 border border-rose/30 mb-6">
              <Globe className="w-4 h-4 text-rose" />
              <span className="text-rose font-semibold text-sm tracking-wide uppercase">
                Get Started
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              How to <span className="sunset-text">Get Started</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              If you are interested in volunteering with Sarveshwar Seva Foundation, please reach out through the Contact page with a brief introduction and your area of interest. Our team will review your message and share relevant participation opportunities as appropriate.
            </p>

            <Link to="/contact">
              <Button variant="hero" size="xl" className="group bg-gradient-to-r from-gold via-coral to-rose hover:from-gold/90 hover:via-coral/90 hover:to-rose/90 shadow-gold">
                Contact Us to Volunteer
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteer Principles */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-purple/5 relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-violet/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-gradient-to-br from-emerald/10 to-teal/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple/20 to-violet/20 border border-purple/30 mb-6">
                <Leaf className="w-4 h-4 text-purple" />
                <span className="text-purple font-semibold text-sm tracking-wide uppercase">
                  Our Values
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Volunteer <span className="rainbow-text">Principles</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All volunteer engagement follows these principles:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-purple/20 via-rose/15 to-coral/10 rounded-3xl p-6 border border-purple/30 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-purple to-violet flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="relative text-foreground font-medium">{principle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Note CTA */}
      <section className="section-padding bg-gradient-to-br from-coral/10 via-background to-gold/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/15 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-rose/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative bg-gradient-to-br from-gold/20 via-coral/15 to-rose/10 border border-gold/30 rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-coral flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <HandHeart className="w-10 h-10 text-white" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Closing Note
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  Through volunteering, individuals can contribute meaningfully to climate awareness and community sustainability efforts while supporting a shared vision of environmental responsibility.
                </p>
                <Link to="/contact">
                  <Button variant="hero" size="xl" className="group bg-gradient-to-r from-gold via-coral to-rose hover:from-gold/90 hover:via-coral/90 hover:to-rose/90 shadow-gold">
                    Join Our Volunteer Community
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Volunteer;
