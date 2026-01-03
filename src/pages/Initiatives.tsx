import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Megaphone, Sprout, HandHeart, Globe, Users, BookOpen, ArrowRight, 
  Leaf, Heart, Target, Sparkles, CheckCircle, Award, TreePine,
  Sun, Recycle, MessageCircle, UserPlus, TrendingUp, Mail
} from "lucide-react";

// Import images
import climateAwarenessImg from "@/assets/initiatives/climate-awareness -1.png";
import greenLivingImg from "@/assets/initiatives/green-living.jpg";
import communitySustainabilityImg from "@/assets/initiatives/community-sustainabiliy-1.png";
import publicEngagementImg from "@/assets/initiatives/public-engagement.jpg";
import volunteerParticipationImg from "@/assets/initiatives/volunteer-participation-1.png";
import environmentalImpactImg from "@/assets/initiatives/environmental-impact.jpg";
import heroInitiativesImg from "@/assets/initiatives/hero-initiatives.jpg";

const Initiatives = () => {
  useEffect(() => {
    document.title = "Initiatives | Sarveshwar Seva Foundation";
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0">
            <img 
              src={heroInitiativesImg} 
              alt="Lush forest meeting ocean coastline" 
              className="w-full h-full object-cover scale-110 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple/40 via-transparent to-cyan/30" />
          </div>
          
          {/* Animated Decorative Elements */}
          <div className="absolute top-20 right-20 w-40 h-40 bg-gold/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 left-16 w-56 h-56 bg-coral/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan/25 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-1/4 right-16 w-24 h-24 bg-gold/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-emerald/20 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }} />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-light/60 rounded-full animate-float" style={{ animationDelay: '0s' }} />
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan/50 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-gold/60 rounded-full animate-float" style={{ animationDelay: '3s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-white/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-hero-pattern opacity-5" />
          
          {/* Content */}
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-4xl">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/20 backdrop-blur-md border border-gold/40 mb-8 animate-fade-in shadow-lg shadow-gold/10">
                <Sparkles className="w-5 h-5 text-gold-light animate-pulse" />
                <span className="text-gold-light font-semibold text-sm tracking-wider uppercase">
                  Our Initiatives
                </span>
              </div>
              
              {/* Animated Title */}
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Driving{" "}
                <span className="relative inline-block">
                  <span className="gold-text">Positive Change</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 4 150 2 298 8" stroke="url(#goldGradient)" strokeWidth="3" strokeLinecap="round" className="animate-[drawLine_1.5s_ease-out_0.8s_forwards]" style={{ strokeDasharray: 300, strokeDashoffset: 300 }} />
                    <defs>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F5C563" />
                        <stop offset="100%" stopColor="#E5A83B" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br />
                <span className="text-white/95">For Our Planet</span>
              </h1>
              
              {/* Animated Description */}
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Sarveshwar Seva Foundation undertakes awareness-driven initiatives focused on climate action and environmental responsibility.
              </p>
              
              {/* Stats Row */}
              <div className="flex flex-wrap gap-8 mb-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold text-gold-light mb-1">25+</div>
                  <div className="text-white/70 text-sm uppercase tracking-wide">Years Active</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold text-cyan mb-1">100+</div>
                  <div className="text-white/70 text-sm uppercase tracking-wide">Initiatives</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold text-coral mb-1">50K+</div>
                  <div className="text-white/70 text-sm uppercase tracking-wide">Lives Impacted</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-gold to-amber hover:from-gold-dark hover:to-gold text-white border-0 shadow-xl shadow-gold/30 hover:shadow-gold/50 transition-all duration-300 hover:-translate-y-1" size="lg">
                    <Mail className="w-5 h-5 mr-2" />
                    Get Involved
                  </Button>
                </Link>
                <Button variant="outline" className="border-white/40 text-white hover:bg-white/15 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300" size="lg">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/60 rounded-full animate-[scrollDown_1.5s_ease-in-out_infinite]" />
            </div>
          </div>
        </section>

        {/* Overview Note - matching InitiativesSection background */}
        <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-gold/15 to-coral/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-cyan/15 to-purple/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-cyan/10 to-purple/10 border border-primary/20 shadow-elevated">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  All initiatives are <span className="text-emerald font-semibold">non-commercial</span>, <span className="text-teal font-semibold">inclusive</span>, and aligned with <span className="text-cyan font-semibold">long-term environmental sustainability</span> goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Climate Awareness Initiatives */}
        <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-purple/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-coral/10 to-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
                <img 
                  src={climateAwarenessImg} 
                  alt="Climate awareness campaign with community members" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-gold/90 text-white text-sm font-semibold rounded-full">
                    Climate Education
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-amber/20 border border-gold/30 mb-6">
                  <Megaphone className="w-4 h-4 text-gold" />
                  <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">
                    Climate Awareness
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                  Climate Awareness <span className="rainbow-text">Initiatives</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  We conduct climate awareness initiatives to help individuals and communities better understand environmental challenges and the importance of responsible actions.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Globe, title: "Community Level", gradient: "from-gold to-amber" },
                    { icon: Heart, title: "Daily Responsibility", gradient: "from-coral to-rose" },
                    { icon: TreePine, title: "Long-term Impact", gradient: "from-emerald-bright to-teal" },
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-gold/10 to-amber/5 border border-gold/30 text-center group hover:-translate-y-1 transition-all">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.title}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple/10 to-cyan/10 border border-purple/20">
                  <p className="text-foreground text-sm">
                    The objective is to promote informed thinking and responsible environmental behavior through awareness and dialogue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Green Living Awareness Programs */}
        <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-emerald/15 to-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-cyan/15 to-purple/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald/20 to-teal/20 border border-emerald/30 mb-6">
                  <Sprout className="w-4 h-4 text-emerald" />
                  <span className="text-emerald font-semibold text-sm tracking-wide uppercase">
                    Green Living
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                  Green Living <span className="nature-text">Programs</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Our green living initiatives promote eco-friendly lifestyle practices that individuals and households can adopt in their everyday lives.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Recycle, title: "Reduce Waste", gradient: "from-emerald-bright to-teal" },
                    { icon: Sun, title: "Sustainable Habits", gradient: "from-gold to-amber" },
                    { icon: Leaf, title: "Mindful Resources", gradient: "from-cyan to-teal" },
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-emerald/10 to-teal/5 border border-emerald/30 text-center group hover:-translate-y-1 transition-all">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.title}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald/10 to-teal/10 border border-emerald/20">
                  <p className="text-foreground text-sm">
                    These programs emphasize practical awareness and voluntary adoption of environmentally responsible habits.
                  </p>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated group order-1 lg:order-2">
                <img 
                  src={greenLivingImg} 
                  alt="Sustainable green living home with solar panels" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-emerald/90 text-white text-sm font-semibold rounded-full">
                    Sustainable Living
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community-Led Sustainability Drives */}
        <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-purple/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-coral/10 to-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
                <img 
                  src={communitySustainabilityImg} 
                  alt="Community members planting trees together" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-coral/90 text-white text-sm font-semibold rounded-full">
                    Community Effort
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-coral/20 to-gold/20 border border-coral/30 mb-6">
                  <HandHeart className="w-4 h-4 text-coral" />
                  <span className="text-coral font-semibold text-sm tracking-wide uppercase">
                    Community Drives
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                  Community-Led <span className="vibrant-text">Sustainability</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Sarveshwar Seva Foundation supports community-driven efforts that promote shared responsibility for environmental well-being.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Users, title: "Participation", gradient: "from-coral to-rose" },
                    { icon: Heart, title: "Local Engagement", gradient: "from-rose to-purple" },
                    { icon: HandHeart, title: "Collaboration", gradient: "from-purple to-sky" },
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-coral/10 to-rose/5 border border-coral/30 text-center group hover:-translate-y-1 transition-all">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.title}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-r from-coral/10 to-rose/10 border border-coral/20">
                  <p className="text-foreground text-sm">
                    Community involvement is central to achieving meaningful and lasting environmental outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Public Engagement & Outreach */}
        <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-sky/15 to-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-purple/15 to-teal/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky/20 to-cyan/20 border border-sky/30 mb-6">
                  <MessageCircle className="w-4 h-4 text-sky" />
                  <span className="text-sky font-semibold text-sm tracking-wide uppercase">
                    Public Engagement
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                  Public Engagement & <span className="ocean-text">Outreach</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  We actively engage with communities through outreach activities that promote awareness and participation in environmental initiatives.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Users, title: "Awareness Sessions", gradient: "from-sky to-cyan" },
                    { icon: BookOpen, title: "Info Sharing", gradient: "from-cyan to-teal" },
                    { icon: Globe, title: "Local Collab", gradient: "from-teal to-emerald" },
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-sky/10 to-cyan/5 border border-sky/30 text-center group hover:-translate-y-1 transition-all">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.title}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-r from-sky/10 to-cyan/10 border border-sky/20">
                  <p className="text-foreground text-sm">
                    These activities are designed to create open platforms for learning, discussion, and participation.
                  </p>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated group order-1 lg:order-2">
                <img 
                  src={publicEngagementImg} 
                  alt="Public environmental awareness event" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-sky/90 text-white text-sm font-semibold rounded-full">
                    Public Outreach
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Participation */}
        <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-purple/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-coral/10 to-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
                <img 
                  src={volunteerParticipationImg} 
                  alt="Volunteers planting trees together" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-rose/90 text-white text-sm font-semibold rounded-full">
                    Volunteer Team
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose/20 to-coral/20 border border-rose/30 mb-6">
                  <UserPlus className="w-4 h-4 text-rose" />
                  <span className="text-rose font-semibold text-sm tracking-wide uppercase">
                    Volunteer Participation
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                  Volunteer <span className="sunset-text">Participation</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Volunteers play an important role in supporting our awareness and outreach initiatives. We encourage individuals to contribute time, skills, and ideas.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Target, title: "Support", gradient: "from-coral to-rose" },
                    { icon: Users, title: "Engagement", gradient: "from-rose to-purple" },
                    { icon: Heart, title: "Outreach", gradient: "from-purple to-sky" },
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-rose/10 to-coral/5 border border-rose/30 text-center group hover:-translate-y-1 transition-all">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.title}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-r from-rose/10 to-coral/10 border border-rose/20">
                  <p className="text-foreground text-sm">
                    Volunteering is open to individuals who share an interest in environmental responsibility and community well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact-Oriented Approach */}
        <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-emerald/15 to-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-gold/15 to-coral/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald/20 to-cyan/20 border border-emerald/30 mb-6">
                  <TrendingUp className="w-4 h-4 text-emerald" />
                  <span className="text-emerald font-semibold text-sm tracking-wide uppercase">
                    Our Impact
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                  Impact-Oriented <span className="nature-text">Approach</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  While our initiatives are awareness-focused, we continuously strive to improve effectiveness through responsible planning, participation, and transparency.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Target, title: "Long-term", gradient: "from-emerald-bright to-teal" },
                    { icon: Users, title: "Shared Responsibility", gradient: "from-teal to-cyan" },
                    { icon: CheckCircle, title: "Ethical Ops", gradient: "from-cyan to-sky" },
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-emerald/10 to-teal/5 border border-emerald/30 text-center group hover:-translate-y-1 transition-all">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.title}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald/10 to-teal/10 border border-emerald/20">
                  <p className="text-foreground text-sm">
                    Information related to activities and outcomes is shared to maintain accountability and trust.
                  </p>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated group order-1 lg:order-2">
                <img 
                  src={environmentalImpactImg} 
                  alt="Beautiful thriving forest at sunrise" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-emerald/90 text-white text-sm font-semibold rounded-full">
                    Environmental Impact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved CTA - matching WhyMattersSection style */}
        <section className="section-padding relative overflow-hidden bg-gradient-to-br from-purple/90 via-primary to-cyan/80">
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-coral/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-cyan/20 rounded-full blur-2xl animate-float" />
          
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-hero-pattern opacity-10" />
          
          <div className="container-custom relative z-10 text-primary-foreground">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 mb-6">
                <Award className="w-4 h-4 text-gold-light" />
                <span className="text-gold-light font-semibold text-sm tracking-wide uppercase">
                  Get Involved
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Get <span className="gold-text">Involved</span>
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                Individuals and organizations interested in environmental awareness and sustainable living are welcome to engage with Sarveshwar Seva Foundation through participation, volunteering, and collaboration.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-gold to-amber hover:from-gold-dark hover:to-gold text-white border-0 shadow-lg shadow-gold/25" size="lg">
                    Contact Us
                    <Mail className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/donate">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm" size="lg">
                    Support Our Cause
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Note */}
        <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-purple/5 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-purple/15 to-coral/10 rounded-full blur-3xl" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-gold/15 to-cyan/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple/15 via-primary/10 to-cyan/15 border border-purple/20 shadow-elevated">
                <Sparkles className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through awareness, community engagement, and responsible environmental practices, <span className="text-primary font-semibold">Sarveshwar Seva Foundation</span> continues to work toward a more <span className="text-coral font-semibold">sustainable</span> and <span className="text-cyan font-semibold">environmentally conscious future</span>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Initiatives;
