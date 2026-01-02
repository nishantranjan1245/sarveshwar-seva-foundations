import { TrendingUp, Heart, TreePine, Sparkles, Star, Zap } from "lucide-react";

const WhyMattersSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-purple/95 via-primary to-cyan/85">
      {/* Decorative Elements - Enhanced */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-gold/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-coral/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan/30 rounded-full blur-2xl animate-float" />
      <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-rose/25 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-gold/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-20 left-20 w-20 h-20 bg-emerald/20 rounded-full blur-xl animate-float" style={{ animationDelay: "3s" }} />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-15" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gold/50 rounded-full animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${5 + i}s`
            }}
          />
        ))}
      </div>
      
      <div className="container-custom relative z-10 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header - Enhanced */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/30 via-coral/25 to-rose/20 border border-gold/40 mb-6 shadow-xl shadow-gold/20">
            <Zap className="w-5 h-5 text-gold-light animate-pulse" />
            <span className="text-gold-light font-bold text-sm tracking-wide uppercase">
              The Importance
            </span>
            <Sparkles className="w-4 h-4 text-coral" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 drop-shadow-lg">
            Why Climate Awareness{" "}
            <span className="gold-text">Matters</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/95 leading-relaxed mb-12 max-w-3xl mx-auto">
            Environmental challenges affect ecosystems, livelihoods, and future generations. Awareness plays a critical role in helping people understand these challenges and adopt responsible behaviors.
          </p>

          {/* Impact Points - Enhanced */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-coral/25 via-gold/20 to-amber/15 border-2 border-coral/40 backdrop-blur-sm hover:from-coral/35 hover:via-gold/30 hover:to-amber/25 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-coral/20 relative overflow-hidden">
              {/* Shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-coral via-gold to-amber flex items-center justify-center mx-auto mb-5 shadow-xl shadow-coral/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Ecosystem Protection</h3>
              <p className="text-primary-foreground/85 text-sm leading-relaxed">
                Preserving biodiversity and natural habitats for future generations through conscious action.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-rose/25 via-purple/20 to-sky/15 border-2 border-rose/40 backdrop-blur-sm hover:from-rose/35 hover:via-purple/30 hover:to-sky/25 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose/20 relative overflow-hidden">
              {/* Shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose via-purple to-sky flex items-center justify-center mx-auto mb-5 shadow-xl shadow-rose/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Healthier Communities</h3>
              <p className="text-primary-foreground/85 text-sm leading-relaxed">
                Clean air, water, and sustainable practices lead to improved public health outcomes.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan/25 via-teal/20 to-emerald/15 border-2 border-cyan/40 backdrop-blur-sm hover:from-cyan/35 hover:via-teal/30 hover:to-emerald/25 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan/20 relative overflow-hidden">
              {/* Shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan via-teal to-emerald-bright flex items-center justify-center mx-auto mb-5 shadow-xl shadow-cyan/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Sustainable Growth</h3>
              <p className="text-primary-foreground/85 text-sm leading-relaxed">
                Balancing development with environmental responsibility ensures long-term prosperity.
              </p>
            </div>
          </div>

          <p className="text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto text-lg flex items-center justify-center gap-2">
            <Star className="w-5 h-5 text-gold" />
            By promoting environmental awareness and sustainable habits, Sarveshwar Seva Foundation contributes to building communities that value conservation and long-term ecological balance.
            <Star className="w-5 h-5 text-gold" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyMattersSection;