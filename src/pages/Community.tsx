import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Users, Heart, MessageCircle, ArrowRight, Sparkles, Globe, TreeDeciduous, HandHeart, GraduationCap, Home, Leaf, CheckCircle, Handshake, TrendingUp, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroCommunity from "@/assets/community/hero-community.jpg";
import localAwareness from "@/assets/community/local-awareness.jpg";
import engagementDialogue from "@/assets/community/engagement-dialogue.jpg";
import greenInitiatives from "@/assets/community/green-initiatives.jpg";
import collaboration from "@/assets/community/collaboration.jpg";

const Community = () => {
  useEffect(() => {
    document.title = "Community | Sarveshwar Seva Foundation";
  }, []);
  const whyMatters = [
    { icon: TreePine, text: "Build awareness at a local level", gradient: "from-coral to-gold" },
    { icon: Heart, text: "Encourage shared responsibility for environmental care", gradient: "from-rose to-purple" },
    { icon: Users, text: "Promote sustainable habits within neighborhoods and groups", gradient: "from-cyan to-teal" },
    { icon: Handshake, text: "Strengthen cooperation and trust among community members", gradient: "from-gold to-amber" }
  ];

  const participationForms = [
    {
      icon: Sparkles,
      title: "Local Awareness Activities",
      description: "Community members may participate in awareness-focused activities that promote understanding of climate responsibility and sustainable practices within local areas.",
      image: localAwareness,
      gradient: "from-gold to-amber",
      bgGradient: "from-gold/15 to-amber/5",
      borderColor: "border-gold/40"
    },
    {
      icon: MessageCircle,
      title: "Community Engagement & Dialogue",
      description: "Open discussions, meetings, and informal interactions help communities share perspectives, experiences, and ideas related to environmental responsibility and green living.",
      image: engagementDialogue,
      gradient: "from-rose to-coral",
      bgGradient: "from-rose/15 to-coral/5",
      borderColor: "border-rose/40"
    },
    {
      icon: TreeDeciduous,
      title: "Collective Green Initiatives",
      description: "Participation may include supporting community-driven efforts focused on cleanliness, environmental care, and awareness around sustainable habits.",
      image: greenInitiatives,
      gradient: "from-emerald-bright to-teal",
      bgGradient: "from-emerald/15 to-teal/5",
      borderColor: "border-emerald/40"
    },
    {
      icon: Handshake,
      title: "Collaboration With Local Groups",
      description: "Sarveshwar Seva Foundation encourages collaboration with resident groups, community organizations, and local institutions to support shared environmental awareness goals.",
      image: collaboration,
      gradient: "from-sky to-cyan",
      bgGradient: "from-sky/15 to-cyan/5",
      borderColor: "border-sky/40"
    }
  ];

  const whoCanParticipate = [
    { icon: Home, text: "Local residents and community members", gradient: "from-coral to-rose", bgGradient: "from-coral/10 to-rose/5", borderColor: "border-coral/30" },
    { icon: Users, text: "Youth groups and citizen collectives", gradient: "from-purple to-sky", bgGradient: "from-purple/10 to-sky/5", borderColor: "border-purple/30" },
    { icon: Handshake, text: "Resident associations and local organizations", gradient: "from-cyan to-teal", bgGradient: "from-cyan/10 to-teal/5", borderColor: "border-cyan/30" },
    { icon: Leaf, text: "Individuals interested in environmental awareness", gradient: "from-gold to-amber", bgGradient: "from-gold/10 to-amber/5", borderColor: "border-gold/30" }
  ];

  const principles = [
    { text: "Awareness and engagement-focused", gradient: "from-coral to-gold" },
    { text: "Non-commercial and voluntary", gradient: "from-rose to-purple" },
    { text: "Non-political and non-advocacy", gradient: "from-cyan to-teal" },
    { text: "Inclusive, respectful, and transparent", gradient: "from-purple to-sky" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Matching Homepage */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroCommunity} 
            alt="Community gathering for environmental awareness" 
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
              <Users className="w-4 h-4 text-gold-light" />
              <span className="text-primary-foreground/95 text-sm font-semibold">
                Working Together for Climate Awareness & Sustainability
              </span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up">
              Community{" "}
              <span className="relative inline-block">
                <span className="rainbow-text">Participation</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="url(#rainbow-underline-comm)" strokeWidth="4" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="rainbow-underline-comm" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="hsl(16 90% 60%)" />
                      <stop offset="33%" stopColor="hsl(42 95% 55%)" />
                      <stop offset="66%" stopColor="hsl(155 85% 50%)" />
                      <stop offset="100%" stopColor="hsl(280 70% 55%)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-6 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Community participation is central to the work of Sarveshwar Seva Foundation. We believe that meaningful environmental awareness and sustainable living practices are most effective when communities actively participate and take shared responsibility.
            </p>

            <p className="text-md text-primary-foreground/75 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Our community participation efforts focus on encouraging involvement, dialogue, and collective action around climate awareness and eco-friendly living.
            </p>

            {/* CTAs - Same style as Homepage */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group bg-gradient-to-r from-gold via-coral to-rose hover:from-gold/90 hover:via-coral/90 hover:to-rose/90 shadow-gold">
                  Join Our Community
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/volunteer">
                <Button variant="hero-outline" size="xl" className="border-2 border-white/40 hover:bg-white/10 hover:border-white/60">
                  <Heart className="w-5 h-5" />
                  Volunteer With Us
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

      {/* Why Community Participation Matters - Like WhyMattersSection */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-purple/90 via-primary to-cyan/80">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-coral/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan/20 rounded-full blur-2xl animate-float" />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10 text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 mb-6">
              <Sparkles className="w-4 h-4 text-gold-light" />
              <span className="text-gold-light font-semibold text-sm tracking-wide uppercase">
                The Importance
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Why Community Participation{" "}
              <span className="gold-text">Matters</span>
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-12 max-w-3xl mx-auto">
              Environmental challenges affect everyone, and long-term solutions require collective understanding and involvement. Through participation, individuals become active contributors to environmental responsibility rather than passive observers.
            </p>

            {/* Impact Points */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {whyMatters.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-coral/20 to-gold/10 border border-coral/30 backdrop-blur-sm hover:from-coral/30 hover:to-gold/20 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-primary-foreground/90 text-sm leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-primary-foreground/85 leading-relaxed max-w-2xl mx-auto">
              Community participation helps build awareness at a local level and strengthens cooperation and trust among community members.
            </p>
          </div>
        </div>
      </section>

      {/* Forms of Community Participation - Like InitiativesSection */}
      <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-gold/15 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-cyan/15 to-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {participationForms.map((form, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${form.bgGradient} backdrop-blur-sm border ${form.borderColor} hover:shadow-lg transition-all duration-300 group hover:-translate-y-1`}
                >
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={form.image} 
                      alt={form.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${form.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md -mt-10 relative z-10`}>
                      <form.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {form.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {form.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-amber/20 border border-gold/30 mb-6">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">
                  Ways to Participate
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Forms of{" "}
                <span className="rainbow-text">Participation</span>
              </h2>

              {/* Decorative Box */}
              <div className="rounded-2xl overflow-hidden shadow-elevated mb-6 p-8 bg-gradient-to-br from-primary/10 via-cyan/10 to-purple/10 border border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">Community Impact</h3>
                    <p className="text-sm text-muted-foreground">Together we make a difference</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 rounded-xl bg-background/50">
                    <div className="font-display text-2xl font-bold text-primary">100+</div>
                    <div className="text-xs text-muted-foreground">Activities</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-background/50">
                    <div className="font-display text-2xl font-bold text-coral">50+</div>
                    <div className="text-xs text-muted-foreground">Communities</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-background/50">
                    <div className="font-display text-2xl font-bold text-cyan">1000+</div>
                    <div className="text-xs text-muted-foreground">Members</div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Sarveshwar Seva Foundation offers multiple ways for individuals and groups to participate in environmental awareness initiatives, from local activities to collaborative partnerships.
              </p>

              <Link to="/contact">
                <Button variant="default" size="lg" className="group bg-gradient-to-r from-primary to-teal hover:from-primary/90 hover:to-teal/90">
                  Get Involved
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Participate - Like GetInvolvedSection */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-purple/5 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-coral/10 to-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-coral/20 to-gold/20 border border-coral/30 mb-6">
                <Sparkles className="w-4 h-4 text-coral" />
                <span className="text-coral font-semibold text-sm tracking-wide uppercase">
                  Open to Everyone
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Who Can{" "}
                <span className="vibrant-text">Participate</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Community participation is open to everyone. No specific background or expertise is required. Participation is based on interest, willingness, and alignment with the Foundation's awareness-focused objectives.
              </p>

              <Link to="/contact">
                <Button variant="accent" size="lg" className="group bg-gradient-to-r from-coral to-rose hover:from-coral/90 hover:to-rose/90">
                  Connect With Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Right side - Cards */}
            <div className="space-y-5">
              {/* Featured Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated p-8 bg-gradient-to-br from-purple/15 via-primary/10 to-cyan/15 border border-purple/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-coral to-rose flex items-center justify-center shadow-lg">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">Everyone Welcome</h3>
                    <p className="text-sm text-muted-foreground">Join hands for a sustainable future</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 p-4 rounded-xl bg-background/60 text-center">
                    <div className="font-display text-2xl font-bold text-coral">All</div>
                    <div className="text-xs text-muted-foreground">Ages</div>
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-background/60 text-center">
                    <div className="font-display text-2xl font-bold text-purple">No</div>
                    <div className="text-xs text-muted-foreground">Experience Needed</div>
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-background/60 text-center">
                    <div className="font-display text-2xl font-bold text-cyan">Free</div>
                    <div className="text-xs text-muted-foreground">To Join</div>
                  </div>
                </div>
              </div>

              {/* Options */}
              {whoCanParticipate.map((option, index) => (
                <div
                  key={index}
                  className={`flex gap-5 p-5 rounded-xl bg-gradient-to-r ${option.bgGradient} border ${option.borderColor} hover:shadow-lg transition-all duration-300 group hover:-translate-y-0.5`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center">
                    <p className="text-foreground font-medium leading-relaxed">
                      {option.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Participation Principles - Like FocusAreasSection */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-cyan/5 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald/5 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
              <Sparkles className="w-4 h-4 text-coral" />
              <span className="text-coral font-semibold text-sm tracking-wide uppercase">
                Our Values
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Participation <span className="rainbow-text">Principles</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All community participation initiatives follow these principles to maintain trust and ensure meaningful engagement.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gold/20 via-coral/15 to-rose/10 rounded-3xl p-6 border border-gold/30 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 overflow-hidden text-center"
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${principle.gradient} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <p className="relative text-foreground font-medium">
                  {principle.text}
                </p>
              </div>
            ))}
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
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Closing Note
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  Through active community participation, Sarveshwar Seva Foundation seeks to foster shared environmental responsibility and encourage sustainable practices that contribute to long-term ecological well-being.
                </p>
                <Link to="/contact">
                  <Button variant="hero" size="xl" className="group bg-gradient-to-r from-gold via-coral to-rose hover:from-gold/90 hover:via-coral/90 hover:to-rose/90 shadow-gold">
                    Be Part of Our Community
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

export default Community;
