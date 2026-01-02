import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Megaphone, Sprout, HandHeart, Globe, Sparkles, Zap, TrendingUp } from "lucide-react";

const initiatives = [
  {
    icon: Megaphone,
    title: "Climate Awareness Campaigns",
    description: "Educating communities about climate challenges and sustainable solutions through workshops and outreach programs.",
    gradient: "from-gold via-amber to-coral",
    bgGradient: "from-gold/20 via-amber/15 to-coral/10",
    borderColor: "border-gold/50",
    shadowColor: "shadow-gold/20",
  },
  {
    icon: Sprout,
    title: "Green Living Outreach",
    description: "Promoting practical eco-friendly habits and sustainable lifestyle choices for everyday living.",
    gradient: "from-emerald-bright via-teal to-cyan",
    bgGradient: "from-emerald/20 via-teal/15 to-cyan/10",
    borderColor: "border-emerald/50",
    shadowColor: "shadow-emerald/20",
  },
  {
    icon: HandHeart,
    title: "Community Engagement",
    description: "Building networks of environmentally conscious individuals working together for positive change.",
    gradient: "from-rose via-coral to-gold",
    bgGradient: "from-rose/20 via-coral/15 to-gold/10",
    borderColor: "border-rose/50",
    shadowColor: "shadow-rose/20",
  },
  {
    icon: Globe,
    title: "Public Awareness Activities",
    description: "Organizing events and campaigns that bring environmental issues to public attention.",
    gradient: "from-sky via-cyan to-teal",
    bgGradient: "from-sky/20 via-cyan/15 to-teal/10",
    borderColor: "border-sky/50",
    shadowColor: "shadow-sky/20",
  },
];

const InitiativesSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-secondary/40 to-cyan/8 relative overflow-hidden">
      {/* Decorative Elements - Enhanced */}
      <div className="absolute top-5 left-5 w-72 h-72 bg-gradient-to-br from-gold/20 to-coral/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-5 right-5 w-80 h-80 bg-gradient-to-br from-cyan/20 to-purple/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-rose/15 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-emerald/15 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Initiative Cards - Enhanced */}
          <div className="grid sm:grid-cols-2 gap-5">
            {initiatives.map((initiative, index) => (
              <div
                key={initiative.title}
                className={`p-6 rounded-2xl bg-gradient-to-br ${initiative.bgGradient} backdrop-blur-sm border-2 ${initiative.borderColor} hover:shadow-2xl ${initiative.shadowColor} transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${initiative.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
                  <initiative.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {initiative.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right - Content - Enhanced */}
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/25 via-amber/20 to-coral/15 border border-gold/40 mb-6 shadow-lg shadow-gold/10">
              <Zap className="w-4 h-4 text-gold animate-pulse" />
              <span className="text-gold-dark font-bold text-sm tracking-wide uppercase">
                Our Work
              </span>
              <Sparkles className="w-4 h-4 text-coral" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Making a{" "}
              <span className="rainbow-text drop-shadow-sm">Real Difference</span>{" "}
              in Communities
            </h2>

            {/* Decorative Box - Enhanced */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 mb-6 p-8 bg-gradient-to-br from-primary/15 via-cyan/15 to-purple/15 border-2 border-primary/30 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/20 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan/20 to-transparent rounded-tr-full" />
              
              <div className="flex items-center gap-4 mb-4 relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary via-teal to-cyan flex items-center justify-center shadow-xl shadow-primary/30">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">Our Impact</h3>
                  <p className="text-sm text-muted-foreground">Making sustainable change happen</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 relative">
                <div className="text-center p-4 rounded-xl bg-background/70 hover:bg-background/90 transition-colors group">
                  <div className="font-display text-3xl font-bold sunset-text group-hover:scale-110 transition-transform">25+</div>
                  <div className="text-xs text-muted-foreground font-semibold">Years</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/70 hover:bg-background/90 transition-colors group">
                  <div className="font-display text-3xl font-bold rainbow-text group-hover:scale-110 transition-transform">50K+</div>
                  <div className="text-xs text-muted-foreground font-semibold">Lives</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/70 hover:bg-background/90 transition-colors group">
                  <div className="font-display text-3xl font-bold ocean-text group-hover:scale-110 transition-transform">100+</div>
                  <div className="text-xs text-muted-foreground font-semibold">Projects</div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Sarveshwar Seva Foundation undertakes awareness-based initiatives designed to engage individuals and communities in sustainable practices.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              All initiatives are designed to be inclusive, informative, and focused on long-term impact.
            </p>

            <Link to="/initiatives">
              <Button variant="default" size="lg" className="group bg-gradient-to-r from-primary via-teal to-cyan hover:from-primary/90 hover:via-teal/90 hover:to-cyan/90 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
                <Sparkles className="w-4 h-4 mr-1" />
                View All Initiatives
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;