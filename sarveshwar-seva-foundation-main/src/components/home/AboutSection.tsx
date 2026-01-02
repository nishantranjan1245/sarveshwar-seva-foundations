import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, FileCheck, ArrowRight, Award, Sparkles, Star, Heart } from "lucide-react";
import aboutImage from "@/assets/about-community.jpg";

const AboutSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-gold/8 to-coral/8 relative overflow-hidden">
      {/* Background decorations - Enhanced */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple/5 via-transparent to-cyan/5" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-br from-gold/20 to-coral/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple/20 to-cyan/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-rose/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-emerald/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/25 via-coral/20 to-rose/15 border border-gold/40 mb-6 shadow-lg shadow-gold/10">
              <Sparkles className="w-5 h-5 text-gold animate-pulse" />
              <span className="text-gold-dark font-bold text-sm tracking-wide uppercase">
                About the Foundation
              </span>
              <Star className="w-4 h-4 text-coral" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Building a{" "}
              <span className="sunset-text drop-shadow-sm">Sustainable Future</span>{" "}
              Since 1999
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Sarveshwar Seva Foundation is a registered non-profit organization established in 1999 with a long-term commitment to social responsibility and environmental awareness. The Foundation works to promote climate-conscious thinking and sustainable lifestyles.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our approach emphasizes awareness, participation, and transparency. We believe that informed communities are better equipped to adopt environmentally responsible practices.
            </p>

            {/* Registration Details - Enhanced */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-br from-purple/15 via-sky/10 to-cyan/5 border border-purple/30 hover:border-purple/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-purple/10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple via-sky to-cyan flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-purple/30">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1 font-semibold">CIN</div>
                  <div className="text-sm font-bold text-foreground">U80211MP1999NPL013905</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-br from-gold/15 via-coral/10 to-rose/5 border border-gold/30 hover:border-gold/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold via-coral to-rose flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-gold/30">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1 font-semibold">FCRA No.</div>
                  <div className="text-sm font-bold text-foreground">063300165</div>
                </div>
              </div>
            </div>

            <Link to="/about">
              <Button variant="default" size="lg" className="group bg-gradient-to-r from-coral via-rose to-purple hover:from-coral/90 hover:via-rose/90 hover:to-purple/90 shadow-xl shadow-coral/20 hover:shadow-coral/40 hover:scale-105 transition-all duration-300">
                <Heart className="w-4 h-4 mr-1" />
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Image - Enhanced */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple/20 group">
              <img
                src={aboutImage}
                alt="Community volunteers planting trees together for a greener future"
                className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay gradient - More vibrant */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple/50 via-rose/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-cyan/10" />
              {/* Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
            
            {/* Floating stat card - Enhanced */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 p-6 rounded-2xl bg-gradient-to-br from-coral via-rose to-purple text-primary-foreground shadow-2xl shadow-coral/30 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-7 h-7 text-gold-light animate-pulse" />
                <span className="text-sm font-semibold opacity-90">Established</span>
              </div>
              <div className="font-display text-5xl font-bold">1999</div>
            </div>

            {/* Decorative rings - Enhanced */}
            <div className="absolute -top-6 -right-6 w-56 h-56 border-4 rounded-full animate-spin-slow" style={{ borderColor: 'hsl(42 95% 55% / 0.4)', animationDuration: '20s' }} />
            <div className="absolute -top-3 -right-3 w-56 h-56 border-2 rounded-full animate-spin-slow" style={{ borderColor: 'hsl(280 70% 55% / 0.3)', animationDuration: '15s', animationDirection: 'reverse' }} />
            <div className="absolute -top-10 -right-10 w-56 h-56 border rounded-full" style={{ borderColor: 'hsl(155 85% 50% / 0.2)' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;