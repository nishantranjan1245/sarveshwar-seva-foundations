import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Bell, Megaphone, Users, Leaf, ArrowRight, Sparkles, BookOpen, Heart, MessageCircle, Globe, Calendar, CheckCircle } from "lucide-react";
import heroImage from "@/assets/sustainability/hero-sustainability.jpg";
import initiativeImage from "@/assets/sustainability/initiative-updates.jpg";
import environmentalImage from "@/assets/sustainability/environmental-notes.jpg";
import communityImage from "@/assets/sustainability/community-engagement.jpg";
import announcementsImage from "@/assets/sustainability/announcements.jpg";

const SustainabilityUpdates = () => {
  useEffect(() => {
    document.title = "Sustainability Updates | Sarveshwar Seva Foundation";
  }, []);
  const updateTypes = [
    {
      icon: Megaphone,
      title: "Initiative Updates",
      description: "Information about awareness initiatives, outreach activities, and community engagement efforts related to climate awareness and green living.",
      examples: [
        "Awareness campaigns conducted",
        "Community participation activities",
        "Outreach and engagement highlights"
      ],
      gradient: "from-emerald-bright to-teal",
      bgGradient: "from-emerald/20 via-teal/15 to-cyan/10",
      borderColor: "border-emerald/30",
      image: initiativeImage
    },
    {
      icon: Leaf,
      title: "Environmental Awareness Notes",
      description: "General updates that share observations or insights related to sustainability and environmental responsibility.",
      examples: [
        "Seasonal environmental awareness messages",
        "Observations on sustainable living practices",
        "Community-level environmental responsibility updates"
      ],
      gradient: "from-cyan to-sky",
      bgGradient: "from-cyan/20 via-sky/15 to-purple/10",
      borderColor: "border-cyan/30",
      image: environmentalImage
    },
    {
      icon: Users,
      title: "Community Engagement Highlights",
      description: "Updates that reflect participation and collaboration with individuals, groups, or communities in sustainability-related activities.",
      examples: [
        "Community involvement in green initiatives",
        "Volunteer participation highlights",
        "Collaborative awareness efforts"
      ],
      gradient: "from-gold to-coral",
      bgGradient: "from-gold/20 via-coral/15 to-rose/10",
      borderColor: "border-gold/30",
      image: communityImage
    },
    {
      icon: Bell,
      title: "Informational Announcements",
      description: "Non-commercial announcements related to the Foundation's environmental awareness efforts and informational initiatives.",
      examples: [
        "Awareness-focused announcements",
        "General updates on activities and programs",
        "Public information related to sustainability initiatives"
      ],
      gradient: "from-coral to-rose",
      bgGradient: "from-coral/20 via-rose/15 to-purple/10",
      borderColor: "border-coral/30",
      image: announcementsImage
    }
  ];

  const purposes = [
    { icon: Megaphone, text: "Share updates on awareness initiatives and activities", gradient: "from-gold to-coral" },
    { icon: Globe, text: "Highlight general sustainability-related observations", gradient: "from-cyan to-sky" },
    { icon: Users, text: "Inform communities about ongoing environmental engagement", gradient: "from-emerald-bright to-teal" },
    { icon: CheckCircle, text: "Maintain transparency in organizational activities", gradient: "from-purple to-sky" }
  ];

  const updatePrinciples = [
    "Informational and awareness-based",
    "No political, policy, or advocacy content",
    "No commercial promotion or endorsements",
    "Clear, factual, and community-focused language"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Sustainability Updates" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple/80 via-primary/75 to-cyan/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-hero-pattern opacity-15" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-gold/30 to-coral/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan/30 to-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-rose/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gold/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/25 to-coral/20 backdrop-blur-sm border border-gold/40 mb-8 animate-fade-in shadow-lg">
            <Sparkles className="h-4 w-4 text-gold-light" />
            <span className="text-primary-foreground/95 text-sm font-semibold">Stay Informed</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Sustainability{" "}
            <span className="relative inline-block">
              <span className="rainbow-text">Updates</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="url(#rainbow-underline-updates)" strokeWidth="4" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="rainbow-underline-updates" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="hsl(16 90% 60%)" />
                    <stop offset="33%" stopColor="hsl(42 95% 55%)" />
                    <stop offset="66%" stopColor="hsl(155 85% 50%)" />
                    <stop offset="100%" stopColor="hsl(280 70% 55%)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Recent developments, activities, and informational updates related to environmental awareness 
            and sustainable living initiatives.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-gradient-to-br from-background via-gold/5 to-coral/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">
                Overview
              </span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              About This <span className="sunset-text">Section</span>
            </h2>
            
            <div className="bg-gradient-to-br from-purple/10 to-sky/5 border border-purple/20 rounded-2xl p-8 shadow-xl">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Sustainability Updates section shares recent developments, activities, and informational updates 
                related to environmental awareness and sustainable living initiatives undertaken or supported by 
                Sarveshwar Seva Foundation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This section is intended to keep communities informed about ongoing efforts, general environmental 
                observations, and awareness-related activities, without promoting commercial services or political viewpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-cyan/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald/5 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
              <Sparkles className="w-4 h-4 text-coral" />
              <span className="text-coral font-semibold text-sm tracking-wide uppercase">
                Our Mission
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Purpose of This <span className="rainbow-text">Section</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Environmental sustainability is an ongoing effort that evolves over time. The Sustainability Updates 
              section aims to keep communities informed and engaged.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {purposes.map((purpose, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-cyan/20 via-sky/15 to-purple/10 rounded-3xl p-6 border border-cyan/30 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${purpose.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <purpose.icon className="h-7 w-7 text-white" />
                </div>
                <p className="relative text-foreground font-medium">{purpose.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            All updates are shared for awareness and informational purposes only.
          </p>
        </div>
      </section>

      {/* Types of Updates Section with Images */}
      <section className="section-padding bg-gradient-to-br from-background via-purple/5 to-cyan/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-coral/10 to-rose/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan/20 to-purple/20 border border-cyan/30 mb-6">
              <BookOpen className="h-4 w-4 text-cyan" />
              <span className="text-cyan font-semibold text-sm tracking-wide uppercase">Update Categories</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Types of Updates <span className="ocean-text">Shared</span>
            </h2>
          </div>

          <div className="space-y-12">
            {updateTypes.map((update, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-elevated group">
                    <img 
                      src={update.image} 
                      alt={update.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${update.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-300`} />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className={`bg-gradient-to-br ${update.bgGradient} border ${update.borderColor} rounded-3xl p-8 backdrop-blur-sm hover:shadow-elevated transition-all duration-500 hover:-translate-y-1`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${update.gradient} flex items-center justify-center shadow-lg`}>
                        <update.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-foreground">{update.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">{update.description}</p>
                    
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-foreground">Examples include:</p>
                      {update.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${update.gradient}`} />
                          <span className="text-muted-foreground">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Update Principles Section */}
      <section className="section-padding bg-gradient-to-br from-gold/5 via-coral/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.1),transparent_60%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-coral/20 to-rose/20 border border-coral/30 mb-6">
                <Heart className="h-4 w-4 text-coral" />
                <span className="text-coral font-semibold text-sm tracking-wide uppercase">Our Standards</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Update <span className="sunset-text">Principles</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                All sustainability updates published by Sarveshwar Seva Foundation follow these principles:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {updatePrinciples.map((principle, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gold/10 to-coral/5 border border-gold/20 rounded-xl p-5 hover:border-gold/40 transition-all duration-300 flex items-center gap-3 hover:-translate-y-0.5 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-coral flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-foreground">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frequency Section */}
      <section className="section-padding bg-gradient-to-br from-background via-cyan/5 to-purple/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple/10 to-sky/5 border border-purple/20 hover:border-purple/40 transition-all duration-300 rounded-2xl p-8 md:p-12 group hover:-translate-y-0.5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple to-sky flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Frequency of Updates</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sustainability updates are shared periodically based on activities, initiatives, and relevant awareness themes. 
                The Foundation prioritizes accuracy, relevance, and clarity over volume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Participation Section */}
      <section className="section-padding bg-gradient-to-br from-coral/5 via-rose/5 to-background relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald/20 to-teal/20 border border-emerald/30 mb-6">
              <MessageCircle className="h-4 w-4 text-emerald-bright" />
              <span className="text-emerald-bright font-semibold text-sm tracking-wide uppercase">Get Involved</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Community <span className="rainbow-text">Participation</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Readers are encouraged to stay informed and engage responsibly with sustainability-related initiatives 
              within their communities. For participation or collaboration inquiries, please refer to the Contact page.
            </p>
            
            <Link to="/contact">
              <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold via-coral to-rose text-white font-semibold hover:from-gold/90 hover:via-coral/90 hover:to-rose/90 transition-all duration-300 shadow-lg hover:shadow-gold/25">
                Contact Us
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing Note Section */}
      <section className="section-padding bg-gradient-to-br from-purple/10 via-primary/10 to-cyan/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(280,70,55,0.15),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-coral via-rose to-purple text-primary-foreground rounded-3xl p-8 md:p-12 text-center shadow-elevated">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/20 mb-6 shadow-lg">
                <Bell className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                Closing Note
              </h2>
              
              <p className="text-lg text-white/90 leading-relaxed">
                Through regular updates and transparent communication, Sarveshwar Seva Foundation seeks to keep 
                communities informed and engaged in environmental awareness and sustainability efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SustainabilityUpdates;
