import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Leaf, BookOpen, Users, Globe, Heart, MessageCircle, ArrowRight, Lightbulb, Recycle, TreeDeciduous, Sparkles } from "lucide-react";
import heroImage from "@/assets/climate/hero-climate.jpg";
import understandingImage from "@/assets/climate/understanding-climate.jpg";
import sustainableLivingImage from "@/assets/climate/sustainable-living.jpg";
import communityImage from "@/assets/climate/community-environment.jpg";
import awarenessImage from "@/assets/climate/environmental-awareness.jpg";

const ClimateAwareness = () => {
  const articleCategories = [
    {
      icon: Globe,
      title: "Understanding Climate Change",
      description: "Articles in this category focus on explaining climate-related concepts in simple and accessible language, helping readers understand environmental changes and their broader implications.",
      topics: [
        "What climate change means for communities",
        "Human activities and environmental impact",
        "Long-term environmental challenges"
      ],
      gradient: "from-cyan to-sky",
      bgGradient: "from-cyan/20 via-sky/15 to-purple/10",
      borderColor: "border-cyan/30",
      image: understandingImage
    },
    {
      icon: Recycle,
      title: "Sustainable Living & Green Habits",
      description: "This section highlights awareness around everyday lifestyle choices that can support sustainability and reduce environmental impact.",
      topics: [
        "Responsible consumption and waste reduction",
        "Eco-friendly daily practices",
        "Conservation of natural resources"
      ],
      gradient: "from-emerald-bright to-teal",
      bgGradient: "from-emerald/20 via-teal/15 to-cyan/10",
      borderColor: "border-emerald/30",
      image: sustainableLivingImage
    },
    {
      icon: Users,
      title: "Community & Environment",
      description: "These articles explore the role of communities in environmental responsibility and the importance of collective action.",
      topics: [
        "Community-led sustainability initiatives",
        "Local environmental responsibility",
        "Shared participation for environmental well-being"
      ],
      gradient: "from-gold to-coral",
      bgGradient: "from-gold/20 via-coral/15 to-rose/10",
      borderColor: "border-gold/30",
      image: communityImage
    },
    {
      icon: Heart,
      title: "Environmental Awareness & Responsibility",
      description: "This category focuses on general awareness related to environmental care, ethics, and responsibility toward nature.",
      topics: [
        "Importance of environmental awareness",
        "Individual responsibility toward the environment",
        "Long-term thinking for future generations"
      ],
      gradient: "from-coral to-rose",
      bgGradient: "from-coral/20 via-rose/15 to-purple/10",
      borderColor: "border-coral/30",
      image: awarenessImage
    }
  ];

  const contentPrinciples = [
    "Informational and awareness-based content",
    "No political or policy advocacy",
    "No commercial or promotional material",
    "No technical, medical, or educational claims",
    "Accessible language for a general audience"
  ];

  const purposes = [
    { icon: Lightbulb, text: "Improve public understanding of climate-related issues", gradient: "from-gold to-coral" },
    { icon: TreeDeciduous, text: "Promote environmentally responsible thinking", gradient: "from-emerald-bright to-teal" },
    { icon: Recycle, text: "Encourage sustainable and eco-friendly practices", gradient: "from-cyan to-sky" },
    { icon: Users, text: "Support informed community participation", gradient: "from-purple to-sky" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Same as homepage */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Climate Awareness" 
            className="w-full h-full object-cover"
          />
          {/* Multi-color gradient overlay - same as homepage */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple/80 via-primary/75 to-cyan/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-hero-pattern opacity-15" />
        </div>
        
        {/* Decorative Elements - Same vibrant colors as homepage */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-gold/30 to-coral/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan/30 to-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-rose/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gold/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/25 to-coral/20 backdrop-blur-sm border border-gold/40 mb-8 animate-fade-in shadow-lg">
            <Sparkles className="h-4 w-4 text-gold-light" />
            <span className="text-primary-foreground/95 text-sm font-semibold">Knowledge & Awareness</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Climate Awareness{" "}
            <span className="relative inline-block">
              <span className="rainbow-text">Articles</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="url(#rainbow-underline-climate)" strokeWidth="4" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="rainbow-underline-climate" x1="0" y1="0" x2="200" y2="0">
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
            An informational resource developed by Sarveshwar Seva Foundation to share knowledge, 
            perspectives, and general awareness related to climate change, environmental responsibility, 
            and sustainable living.
          </p>
        </div>
      </section>

      {/* Overview Section - Same gradient as About section */}
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
                The Climate Awareness Articles section is an informational resource developed by Sarveshwar Seva Foundation 
                to share knowledge, perspectives, and general awareness related to climate change, environmental responsibility, 
                and sustainable living.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The content published here is intended to encourage informed thinking and responsible environmental behavior 
                at an individual and community level. All articles are awareness-focused, non-commercial, and written for the general public.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section - Same gradient as Focus Areas */}
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
              Environmental challenges are complex and long-term. Awareness plays a critical role in helping 
              communities understand these challenges and adopt environmentally responsible habits.
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

      {/* Article Categories Section */}
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
              Article <span className="ocean-text">Categories</span>
            </h2>
          </div>

          <div className="space-y-12">
            {articleCategories.map((category, index) => (
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
                All Climate Awareness Articles published by Sarveshwar Seva Foundation follow these principles:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* Use of Information Section */}
      <section className="section-padding bg-gradient-to-br from-background via-cyan/5 to-purple/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple/10 to-sky/5 border border-purple/20 hover:border-purple/40 transition-all duration-300 rounded-2xl p-8 md:p-12 group hover:-translate-y-0.5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple to-sky flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Use of Information</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The information provided through these articles is intended for general awareness only. 
                Readers are encouraged to use this content as a starting point for understanding environmental 
                issues and to engage responsibly with sustainability-related practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution & Feedback Section */}
      <section className="section-padding bg-gradient-to-br from-coral/5 via-rose/5 to-background relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald/20 to-teal/20 border border-emerald/30 mb-6">
              <MessageCircle className="h-4 w-4 text-emerald-bright" />
              <span className="text-emerald-bright font-semibold text-sm tracking-wide uppercase">Get Involved</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Contribution & <span className="rainbow-text">Feedback</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Sarveshwar Seva Foundation welcomes constructive feedback and suggestions related to climate awareness topics. 
              If you would like to suggest a topic or share feedback, please contact us through the Contact page.
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
                Through responsible information sharing and awareness-building, Sarveshwar Seva Foundation 
                seeks to support informed communities and promote environmentally conscious thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClimateAwareness;
