import { Cloud, Leaf, Users, Sparkles, Star, Target } from "lucide-react";

const focusAreas = [
  {
    icon: Cloud,
    title: "Climate Awareness",
    description:
      "We promote awareness around climate-related challenges and their impact on communities and daily life, encouraging informed and responsible environmental actions.",
    gradient: "from-cyan/25 via-sky/20 to-purple/15",
    iconGradient: "from-cyan via-sky to-purple",
    borderColor: "border-cyan/40",
    shadowColor: "shadow-cyan/20",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Lifestyles",
    description:
      "Our initiatives highlight practical, everyday habits that support sustainability, responsible resource use, and reduced environmental impact.",
    gradient: "from-emerald/25 via-teal/20 to-cyan/15",
    iconGradient: "from-emerald-bright via-teal to-cyan",
    borderColor: "border-emerald/40",
    shadowColor: "shadow-emerald/20",
  },
  {
    icon: Users,
    title: "Community-Led Sustainability",
    description:
      "We encourage community participation and collaboration, recognizing that long-term environmental progress is achieved through collective responsibility.",
    gradient: "from-gold/25 via-coral/20 to-rose/15",
    iconGradient: "from-gold via-coral to-rose",
    borderColor: "border-gold/40",
    shadowColor: "shadow-gold/20",
  },
];

const FocusAreasSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary/60 via-background to-cyan/8 relative overflow-hidden">
      {/* Decorative Elements - Enhanced */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-gold/15 to-coral/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan/15 to-purple/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-rose/15 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-sky/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: "3s" }} />

      <div className="container-custom relative z-10">
        {/* Header - Enhanced */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/25 via-coral/20 to-rose/15 border border-gold/40 mb-6 shadow-lg shadow-gold/10">
            <Target className="w-4 h-4 text-coral" />
            <span className="text-coral font-bold text-sm tracking-wide uppercase">
              What We Do
            </span>
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Our Core <span className="rainbow-text drop-shadow-sm">Focus Areas</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Through focused initiatives, we address key environmental challenges and empower communities to take meaningful action.
          </p>
        </div>

        {/* Cards - Enhanced */}
        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className={`group relative bg-gradient-to-br ${area.gradient} rounded-3xl p-8 border-2 ${area.borderColor} hover:shadow-2xl ${area.shadowColor} transition-all duration-500 hover:-translate-y-3 overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent" />
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full" />

              <div className={`relative w-18 h-18 rounded-2xl bg-gradient-to-br ${area.iconGradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
                <area.icon className="w-9 h-9 text-white" />
                <div className="absolute -top-1 -right-1">
                  <Star className="w-4 h-4 text-gold animate-pulse" />
                </div>
              </div>
              <h3 className="relative font-display text-xl font-bold text-foreground mb-4">
                {area.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;