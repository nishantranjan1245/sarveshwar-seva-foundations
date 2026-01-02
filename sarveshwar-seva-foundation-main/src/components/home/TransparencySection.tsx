import { Shield, FileText, Eye, Sparkles, Star, Award } from "lucide-react";

const transparencyItems = [
  {
    icon: Shield,
    title: "Statutory Compliance",
    description: "Registered under Indian law with full regulatory compliance and governance standards.",
    gradient: "from-purple via-sky to-cyan",
    bgGradient: "from-purple/15 via-sky/10 to-cyan/5",
    borderColor: "border-purple/40",
    shadowColor: "shadow-purple/20",
  },
  {
    icon: FileText,
    title: "Documented Activities",
    description: "All organizational activities are documented and available for stakeholder review.",
    gradient: "from-gold via-coral to-rose",
    bgGradient: "from-gold/15 via-coral/10 to-rose/5",
    borderColor: "border-gold/40",
    shadowColor: "shadow-gold/20",
  },
  {
    icon: Eye,
    title: "Public Accountability",
    description: "Maintaining public trust through open governance and credible operations.",
    gradient: "from-cyan via-teal to-emerald-bright",
    bgGradient: "from-cyan/15 via-teal/10 to-emerald/5",
    borderColor: "border-cyan/40",
    shadowColor: "shadow-cyan/20",
  },
];

const TransparencySection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-purple/8 to-secondary/40 relative overflow-hidden">
      {/* Decorative Elements - Enhanced */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple/15 to-rose/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-br from-gold/15 to-coral/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-emerald/10 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header - Enhanced */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple/25 via-sky/20 to-cyan/15 border border-purple/40 mb-6 shadow-lg shadow-purple/10">
              <Award className="w-5 h-5 text-purple animate-pulse" />
              <span className="text-purple font-bold text-sm tracking-wide uppercase">
                Our Commitment
              </span>
              <Sparkles className="w-4 h-4 text-sky" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Transparency &{" "}
              <span className="ocean-text drop-shadow-sm">Governance</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-lg">
              Sarveshwar Seva Foundation operates with a strong commitment to transparency, accountability, and statutory compliance.
            </p>
          </div>

          {/* Trust Indicators - Enhanced */}
          <div className="grid md:grid-cols-3 gap-6">
            {transparencyItems.map((item, index) => (
              <div 
                key={item.title}
                className={`text-center p-8 rounded-3xl bg-gradient-to-br ${item.bgGradient} border-2 ${item.borderColor} hover:shadow-2xl ${item.shadowColor} transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full" />

                <div className={`relative w-18 h-18 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                  <item.icon className="w-9 h-9 text-white" />
                  <Star className="absolute -top-1 -right-1 w-5 h-5 text-gold animate-pulse" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;