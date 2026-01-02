import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Sparkles, Star, Zap } from "lucide-react";
import heroImage from "@/assets/hero-forest.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lush green forest with sunlight rays - representing hope and sustainability"
          className="w-full h-full object-cover"
        />
        {/* Multi-color gradient overlay - More vibrant */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple/85 via-primary/80 to-cyan/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-rose/20 via-transparent to-gold/20" />
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      </div>

      {/* Decorative Elements - More vibrant and numerous */}
      <div className="absolute top-10 left-5 w-80 h-80 bg-gradient-to-br from-gold/40 to-coral/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-5 w-[500px] h-[500px] bg-gradient-to-br from-cyan/35 to-purple/25 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-rose/30 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gold/35 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-emerald/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-sky/30 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold/60 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-24 pb-16 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold/30 via-coral/25 to-rose/20 backdrop-blur-md border border-gold/50 mb-8 animate-fade-in shadow-xl shadow-gold/20">
            <Sparkles className="w-5 h-5 text-gold-light animate-pulse" />
            <span className="text-primary-foreground font-semibold text-sm md:text-base">
              Empowering Sustainable Communities Since 1999
            </span>
            <Star className="w-4 h-4 text-coral hidden sm:block" />
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Climate Action Starts With{" "}
            <span className="relative inline-block">
              <span className="rainbow-text drop-shadow-lg">Awareness</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="url(#rainbow-underline)" strokeWidth="5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="rainbow-underline" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="hsl(16 90% 65%)" />
                    <stop offset="25%" stopColor="hsl(42 95% 60%)" />
                    <stop offset="50%" stopColor="hsl(155 85% 55%)" />
                    <stop offset="75%" stopColor="hsl(195 90% 55%)" />
                    <stop offset="100%" stopColor="hsl(280 70% 60%)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/95 leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-up drop-shadow-sm" style={{ animationDelay: "0.2s" }}>
            Building Sustainable Communities for a Greener Future. We promote climate awareness and eco-friendly practices through community participation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/initiatives">
              <Button variant="hero" size="xl" className="group bg-gradient-to-r from-gold via-coral to-rose hover:from-gold/90 hover:via-coral/90 hover:to-rose/90 shadow-xl shadow-gold/30 hover:shadow-gold/50 transition-all duration-300 hover:scale-105">
                <Zap className="w-5 h-5 mr-1" />
                Explore Our Initiatives
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl" className="border-2 border-white/50 hover:bg-white/15 hover:border-white/70 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <Users className="w-5 h-5" />
                Get Involved
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-10 border-t border-primary-foreground/25 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
              <div className="text-center group cursor-pointer">
                <div className="font-display text-4xl md:text-6xl font-bold sunset-text mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">25+</div>
                <div className="text-sm md:text-base text-primary-foreground/80 font-medium">Years of Impact</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="font-display text-4xl md:text-6xl font-bold rainbow-text mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">50K+</div>
                <div className="text-sm md:text-base text-primary-foreground/80 font-medium">Lives Touched</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="font-display text-4xl md:text-6xl font-bold ocean-text mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">100+</div>
                <div className="text-sm md:text-base text-primary-foreground/80 font-medium">Initiatives</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 rounded-full border-2 border-gold/70 flex items-start justify-center p-2 bg-gradient-to-b from-gold/20 to-coral/20 backdrop-blur-sm shadow-lg">
          <div className="w-2.5 h-4 bg-gradient-to-b from-gold via-coral to-rose rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;