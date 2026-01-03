import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, FileCheck, Target, Eye, Heart, Leaf, Users, Globe, Mail, MapPin, CheckCircle, Award, Scale, Sparkles } from "lucide-react";
import heroAboutImage from "@/assets/about/hero-about.jpg";
import communityActionImage from "@/assets/about/community-action-1.png";
import missionVisionImage from "@/assets/about/mission-vision.jpg";
import governanceImage from "@/assets/about/governance.jpg";
import commitmentImage from "@/assets/about/commitment.jpg";

const About = () => {
  useEffect(() => {
    document.title = "About | Sarveshwar Seva Foundation";
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden min-h-[60vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={heroAboutImage} 
              alt="Lush green forest with morning mist" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple/85 via-primary/80 to-cyan/75"></div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-coral/30 to-rose/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-sky/20 to-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan/20 rounded-full blur-2xl animate-float" />
          
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-hero-pattern opacity-10" />
          
          <div className="container-custom relative z-10 text-primary-foreground">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-gold-light" />
                <span className="text-gold-light font-semibold text-sm tracking-wide uppercase">
                  About Us
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
                Who We <span className="gold-text">Are</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                Sarveshwar Seva Foundation is a registered non-profit organization dedicated to promoting climate action and green awareness through responsible environmental practices and community participation. Established in 1999, the Foundation works with a long-term vision of sustainability, transparency, and public engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Our Purpose */}
        <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-purple/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-rose/15 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple/20 to-rose/20 border border-purple/30 mb-4">
                  <Target className="w-4 h-4 text-purple" />
                  <span className="text-purple font-semibold text-sm tracking-wide uppercase">Our Purpose</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold vibrant-text">
                  Why We Exist
                </h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-purple/10 to-rose/10 border border-purple/20 hover:border-purple/40 transition-all duration-300 hover:-translate-y-1">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Environmental challenges require informed, collective action. Sarveshwar Seva Foundation exists to support this need by spreading awareness, encouraging responsible choices, and fostering community-led participation in sustainability efforts.
                    </p>
                  </div>
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-rose/10 to-coral/10 border border-rose/20 hover:border-rose/40 transition-all duration-300 hover:-translate-y-1">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      We believe that awareness is the first step toward meaningful environmental change and that lasting impact is achieved through shared responsibility.
                    </p>
                  </div>
                </div>
                
                {/* Community Action Image */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple/30 via-rose/30 to-coral/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={communityActionImage} 
                      alt="Community volunteers planting trees together" 
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg drop-shadow-md">Community-Led Action</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-bl from-teal/15 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald/20 to-teal/20 border border-emerald/30 mb-4">
                <Leaf className="w-4 h-4 text-emerald" />
                <span className="text-emerald font-semibold text-sm tracking-wide uppercase">What We Do</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold nature-text mb-4">
                Our Focus Areas
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                The Foundation undertakes awareness-driven initiatives that promote sustainable thinking and environmentally responsible behavior.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Globe, title: "Climate Awareness", desc: "Environmental responsibility education", gradient: "from-emerald to-teal" },
                { icon: Leaf, title: "Eco-Friendly Lifestyles", desc: "Promoting sustainable living", gradient: "from-teal to-cyan" },
                { icon: Users, title: "Community Initiatives", desc: "Community-led sustainability", gradient: "from-cyan to-sky" },
                { icon: Heart, title: "Public Engagement", desc: "Awareness and participation", gradient: "from-sky to-purple" },
              ].map((item, index) => (
                <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-emerald/5 to-teal/5 border border-emerald/20 hover:border-emerald/40 transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald/10 via-teal/10 to-cyan/10 border border-emerald/20 max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground">
                All activities are designed to be <span className="text-emerald font-semibold">inclusive</span>, <span className="text-teal font-semibold">non-commercial</span>, and focused on <span className="text-cyan font-semibold">long-term environmental well-being</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-purple/5 relative overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-bl from-gold/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-tr from-amber/15 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-amber/20 border border-gold/30 mb-4">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-gold font-semibold text-sm tracking-wide uppercase">Our Approach</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold sunset-text mb-4">
                How We Work
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Sarveshwar Seva Foundation follows an awareness-first approach supported by transparency and accountability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: CheckCircle, title: "Clear Communication", desc: "Clear and factual communication in all our initiatives" },
                { icon: Users, title: "Community Collaboration", desc: "Community participation and collaborative efforts" },
                { icon: Shield, title: "Ethical Operations", desc: "Responsible and ethical operations at all levels" },
                { icon: Scale, title: "Regulatory Compliance", desc: "Compliance with statutory and regulatory requirements" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gold/10 to-amber/10 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-amber flex items-center justify-center shrink-0 shadow-md">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-gold/10 to-amber/10 border border-gold/20 max-w-2xl mx-auto text-center">
              <p className="text-gold font-medium">
                This approach ensures credibility, trust, and long-term effectiveness.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-sky/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-bl from-cyan/15 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Mission Vision Image */}
                <div className="relative group order-2 lg:order-1">
                  <div className="absolute -inset-4 bg-gradient-to-r from-sky/30 via-cyan/30 to-teal/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={missionVisionImage} 
                      alt="Hands holding a small plant seedling" 
                      className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg drop-shadow-md">Nurturing Growth & Sustainability</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-sky/10 to-cyan/10 border border-sky/20 hover:border-sky/40 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky to-cyan flex items-center justify-center mb-6 shadow-md">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="font-display text-2xl font-bold ocean-text mb-4">Our Mission</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To promote climate-conscious thinking and sustainable lifestyles through information-driven initiatives and community engagement, empowering individuals to adopt environmentally responsible practices.
                    </p>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan/10 to-teal/10 border border-cyan/20 hover:border-cyan/40 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan to-teal flex items-center justify-center mb-6 shadow-md">
                      <Eye className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="font-display text-2xl font-bold nature-text mb-4">Our Vision</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      A world where communities are informed, engaged, and empowered to live sustainably, contributing to a cleaner, greener, and more equitable future for all generations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Status & Compliance */}
        <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-purple/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-emerald/20 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald/20 to-teal/20 border border-emerald/30 mb-4">
                  <Shield className="w-4 h-4 text-emerald" />
                  <span className="text-emerald font-semibold text-sm tracking-wide uppercase">Legal Status</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold nature-text mb-4">
                  Legal Status & Compliance
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Sarveshwar Seva Foundation is legally registered and operates in compliance with applicable laws and regulations in India.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald/10 to-teal/10 border border-emerald/20 hover:border-emerald/40 transition-all duration-300 text-center hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald to-teal flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">CIN</div>
                  <div className="text-sm font-semibold text-emerald">U80211MP1999NPL013905</div>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-teal/10 to-cyan/10 border border-teal/20 hover:border-teal/40 transition-all duration-300 text-center hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal to-cyan flex items-center justify-center mx-auto mb-4 shadow-md">
                    <FileCheck className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">FCRA Registration</div>
                  <div className="text-sm font-semibold text-teal">063300165</div>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan/10 to-sky/10 border border-cyan/20 hover:border-cyan/40 transition-all duration-300 text-center hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan to-sky flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Established</div>
                  <div className="text-sm font-semibold text-cyan">14 December 1999</div>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald/10 via-teal/10 to-cyan/10 border border-emerald/20 text-center">
                <p className="text-muted-foreground">
                  These registrations reflect the Foundation's commitment to <span className="text-emerald font-semibold">lawful operations</span>, <span className="text-teal font-semibold">transparency</span>, and <span className="text-cyan font-semibold">responsible governance</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Governance & Transparency */}
        <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-coral/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-rose/15 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-coral/20 to-rose/20 border border-coral/30 mb-4">
                    <Eye className="w-4 h-4 text-coral" />
                    <span className="text-coral font-semibold text-sm tracking-wide uppercase">Governance</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold sunset-text mb-6">
                    Governance & Transparency
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    The Foundation follows transparent governance practices and maintains accountability in its activities and operations. Information related to compliance, governance, and organizational functioning is made available to ensure public trust.
                  </p>
                  <p className="text-coral font-medium">
                    Sarveshwar Seva Foundation believes that transparency is essential for building confidence among communities, partners, and supporters.
                  </p>
                </div>
                
                {/* Governance Image */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-coral/30 via-rose/30 to-gold/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={governanceImage} 
                      alt="Professional team meeting discussing sustainability projects" 
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coral/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg drop-shadow-md">Transparent Operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-purple/5 relative overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tl from-rose/15 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Commitment Image */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple/30 via-rose/30 to-gold/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={commitmentImage} 
                      alt="Beautiful sunrise over green hills" 
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg drop-shadow-md">A Brighter Future Awaits</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-center lg:text-left mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple/20 to-rose/20 border border-purple/30 mb-4">
                      <Heart className="w-4 h-4 text-purple" />
                      <span className="text-purple font-semibold text-sm tracking-wide uppercase">Our Commitment</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold vibrant-text">
                      What We Promise
                    </h2>
                  </div>

                  <div className="grid gap-4">
                    {[
                      { text: "Promoting climate awareness responsibly", gradient: "from-purple to-rose" },
                      { text: "Encouraging sustainable and eco-friendly habits", gradient: "from-rose to-coral" },
                      { text: "Supporting community-driven environmental efforts", gradient: "from-coral to-gold" },
                      { text: "Operating with integrity, transparency, and accountability", gradient: "from-gold to-amber" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-purple/10 to-rose/10 border border-purple/20 hover:border-purple/40 transition-all duration-300 hover:-translate-y-1">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-md`}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-foreground font-medium">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-purple/10 via-rose/10 to-coral/10 border border-purple/20">
                    <p className="text-muted-foreground text-sm">
                      Our work is guided by the belief that <span className="text-purple font-semibold">informed communities</span> play a vital role in protecting the environment for <span className="text-rose font-semibold">present and future generations</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-sky/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-teal/15 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky/20 to-teal/20 border border-sky/30 mb-4">
                <Mail className="w-4 h-4 text-sky" />
                <span className="text-sky font-semibold text-sm tracking-wide uppercase">Get in Touch</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold ocean-text mb-8">
                Contact Information
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-sky/10 to-teal/10 border border-sky/20 hover:border-sky/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky to-teal flex items-center justify-center mx-auto mb-4 shadow-md">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Registered Address</h3>
                  <p className="text-muted-foreground text-sm">
                    34, Sachhidanand Nagar, Annapurna Road,<br />
                    Indore, Madhya Pradesh, India – 452009
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-teal/10 to-cyan/10 border border-teal/20 hover:border-teal/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal to-cyan flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a href="mailto:help@msarveshwarsevafoundation.org" className="text-teal hover:text-cyan transition-colors text-sm">
                    help@msarveshwarsevafoundation.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="section-padding relative overflow-hidden bg-gradient-to-br from-purple/90 via-primary to-cyan/80">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-coral/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-sky/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-hero-pattern opacity-10" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-amber flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
                Through awareness, responsible practices, and community participation, Sarveshwar Seva Foundation strives to contribute to a more sustainable and environmentally conscious society.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
