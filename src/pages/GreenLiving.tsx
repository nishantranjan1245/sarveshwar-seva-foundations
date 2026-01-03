import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Leaf, Recycle, Droplets, TreeDeciduous, ArrowRight, Lightbulb, Users, Sparkles, BookOpen, Heart, MessageCircle, CheckCircle } from "lucide-react";
import heroImage from "@/assets/green-living/hero-green-living.jpg";
import sustainableHabitsImage from "@/assets/green-living/sustainable-habits.jpg";
import wasteReductionImage from "@/assets/green-living/waste-reduction.jpg";
import conservationImage from "@/assets/green-living/conservation.jpg";
import communityGreenImage from "@/assets/green-living/community-green.jpg";

const GreenLiving = () => {
  useEffect(() => {
    document.title = "Green Living | Sarveshwar Seva Foundation";
  }, []);
  const resourceCategories = [
    {
      icon: Leaf,
      title: "Sustainable Daily Habits",
      description: "This section highlights simple lifestyle practices that can help reduce environmental impact.",
      topics: [
        "Reducing waste in everyday life",
        "Responsible use of water and energy",
        "Mindful consumption and reuse"
      ],
      gradient: "from-emerald-bright to-teal",
      bgGradient: "from-emerald/20 via-teal/15 to-cyan/10",
      borderColor: "border-emerald/30",
      image: sustainableHabitsImage
    },
    {
      icon: Recycle,
      title: "Waste Reduction & Responsible Consumption",
      description: "Resources in this category focus on awareness around minimizing waste and adopting responsible consumption habits.",
      topics: [
        "Importance of waste segregation",
        "Reducing single-use materials",
        "Encouraging reuse and recycling practices"
      ],
      gradient: "from-cyan to-sky",
      bgGradient: "from-cyan/20 via-sky/15 to-purple/10",
      borderColor: "border-cyan/30",
      image: wasteReductionImage
    },
    {
      icon: TreeDeciduous,
      title: "Conservation & Environmental Care",
      description: "These resources aim to raise awareness about conserving natural resources and caring for the environment.",
      topics: [
        "Conservation of water and natural resources",
        "Importance of biodiversity and green spaces",
        "Responsible interaction with the natural environment"
      ],
      gradient: "from-gold to-coral",
      bgGradient: "from-gold/20 via-coral/15 to-rose/10",
      borderColor: "border-gold/30",
      image: conservationImage
    },
    {
      icon: Users,
      title: "Community & Green Living",
      description: "This category focuses on the role of communities in promoting sustainable living practices.",
      topics: [
        "Community-led green initiatives",
        "Shared responsibility for clean surroundings",
        "Collective participation in sustainability efforts"
      ],
      gradient: "from-coral to-rose",
      bgGradient: "from-coral/20 via-rose/15 to-purple/10",
      borderColor: "border-coral/30",
      image: communityGreenImage
    }
  ];

  const purposes = [
    { icon: Lightbulb, text: "Promote eco-friendly thinking in daily life", gradient: "from-gold to-coral" },
    { icon: Droplets, text: "Encourage responsible use of natural resources", gradient: "from-cyan to-sky" },
    { icon: Leaf, text: "Support sustainable lifestyle awareness", gradient: "from-emerald-bright to-teal" },
    { icon: Users, text: "Foster environmentally conscious communities", gradient: "from-purple to-sky" }
  ];

  const howToUse = [
    "Reflect on their daily habits",
    "Adopt practices that align with environmental responsibility",
    "Share awareness within their communities",
    "Participate in local sustainability efforts"
  ];

  const contentPrinciples = [
    "Awareness-based and informational",
    "No commercial promotion or endorsements",
    "No technical, medical, or educational claims",
    "Neutral, inclusive, and accessible language"
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
            alt="Green Living" 
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
            <span className="text-primary-foreground/95 text-sm font-semibold">Sustainable Lifestyle</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Green Living{" "}
            <span className="relative inline-block">
              <span className="rainbow-text">Resources</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="url(#rainbow-underline-green)" strokeWidth="4" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="rainbow-underline-green" x1="0" y1="0" x2="200" y2="0">
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
            Practical information and awareness-oriented guidance that encourages environmentally responsible living 
            through everyday habits and choices.
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
              About This <span className="sunset-text">Resource</span>
            </h2>
            
            <div className="bg-gradient-to-br from-purple/10 to-sky/5 border border-purple/20 rounded-2xl p-8 shadow-xl">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Green Living Resources section is designed to share practical information and awareness-oriented 
                guidance that encourages environmentally responsible living. These resources focus on everyday habits 
                and choices that support sustainability, conservation, and reduced environmental impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                All content shared here is informational, non-commercial, and intended to support public awareness 
                around eco-friendly lifestyles.
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
              Purpose of This <span className="rainbow-text">Resource</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Adopting environmentally responsible habits begins with awareness. This section aims to help individuals 
              and communities understand how small, mindful actions can contribute to long-term environmental sustainability.
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
        </div>
      </section>

      {/* Resource Categories Section with Images */}
      <section className="section-padding bg-gradient-to-br from-background via-purple/5 to-cyan/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-coral/10 to-rose/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan/20 to-purple/20 border border-cyan/30 mb-6">
              <BookOpen className="h-4 w-4 text-cyan" />
              <span className="text-cyan font-semibold text-sm tracking-wide uppercase">Explore Topics</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Resource <span className="ocean-text">Categories</span>
            </h2>
          </div>

          <div className="space-y-12">
            {resourceCategories.map((category, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-elevated group">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-300`} />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className={`bg-gradient-to-br ${category.bgGradient} border ${category.borderColor} rounded-3xl p-8 backdrop-blur-sm hover:shadow-elevated transition-all duration-500 hover:-translate-y-1`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}>
                        <category.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-foreground">{category.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
                    
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-foreground">Topics may include:</p>
                      {category.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`} />
                          <span className="text-muted-foreground">{topic}</span>
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

      {/* How to Use Section */}
      <section className="section-padding bg-gradient-to-br from-background via-cyan/5 to-purple/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple/20 to-sky/20 border border-purple/30 mb-6">
                <BookOpen className="h-4 w-4 text-purple" />
                <span className="text-purple font-semibold text-sm tracking-wide uppercase">Guidance</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                How to Use These <span className="ocean-text">Resources</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                The information provided in this section is intended for general awareness and guidance. Readers are encouraged to:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {howToUse.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-gradient-to-br from-purple/10 to-sky/5 border border-purple/20 rounded-xl p-5 hover:border-purple/40 transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple to-sky flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Principles Section */}
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
                Content <span className="sunset-text">Principles</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                All Green Living Resources published by Sarveshwar Seva Foundation follow these principles:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {contentPrinciples.map((principle, index) => (
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

      {/* Feedback Section */}
      <section className="section-padding bg-gradient-to-br from-coral/5 via-rose/5 to-background relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald/20 to-teal/20 border border-emerald/30 mb-6">
              <MessageCircle className="h-4 w-4 text-emerald-bright" />
              <span className="text-emerald-bright font-semibold text-sm tracking-wide uppercase">Get Involved</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Feedback & <span className="rainbow-text">Suggestions</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We welcome suggestions and feedback on green living topics that may help expand this resource section. 
              To share ideas or feedback, please reach out through the Contact page.
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
                <Leaf className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                Closing Note
              </h2>
              
              <p className="text-lg text-white/90 leading-relaxed">
                Through awareness, responsible choices, and shared participation, green living can become 
                a part of everyday life and contribute to a more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GreenLiving;
