import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, ArrowRight, Leaf, Sparkles, Star, Heart, Zap } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-gold/8 relative overflow-hidden">
      {/* Decorative Elements - Enhanced */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-br from-gold/20 to-coral/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-purple/20 to-cyan/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-10 w-40 h-40 bg-rose/15 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-emerald/15 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center bg-background/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-border/60 relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple/10 to-transparent rounded-tl-full" />
            
            {/* Left - Contact Info - Enhanced */}
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/25 via-coral/20 to-rose/15 border border-gold/40 mb-6 shadow-lg shadow-gold/10">
                <Heart className="w-5 h-5 text-gold animate-pulse" />
                <span className="text-gold-dark font-bold text-sm tracking-wide uppercase">
                  Get in Touch
                </span>
                <Sparkles className="w-4 h-4 text-coral" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                Contact &{" "}
                <span className="sunset-text drop-shadow-sm">Connect</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                We welcome collaboration, participation, and dialogue related to climate awareness and sustainable living.
              </p>

              <div className="space-y-5">
                <div className="flex gap-4 group p-4 rounded-2xl hover:bg-coral/5 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-coral via-rose to-purple flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl shadow-coral/30">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground mb-1">Address</div>
                    <div className="text-sm text-muted-foreground">
                      34, Sachhidanand Nagar, Annapurna Road,<br />
                      Indore, Madhya Pradesh, India – 452009
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 group p-4 rounded-2xl hover:bg-cyan/5 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky via-cyan to-teal flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl shadow-cyan/30">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground mb-1">Email</div>
                    <a
                      href="mailto:help@msarveshwarsevafoundation.org"
                      className="text-sm text-primary hover:text-coral transition-colors font-medium"
                    >
                      help@msarveshwarsevafoundation.org
                    </a>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="inline-block mt-8">
                <Button variant="default" size="lg" className="group bg-gradient-to-r from-coral via-rose to-purple hover:from-coral/90 hover:via-rose/90 hover:to-purple/90 shadow-xl shadow-coral/20 hover:shadow-coral/40 hover:scale-105 transition-all duration-300">
                  <Zap className="w-4 h-4 mr-1" />
                  Send a Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Right - Closing Note - Enhanced */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple via-primary to-cyan text-primary-foreground relative overflow-hidden shadow-2xl">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gold/25 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-coral/25 rounded-full blur-xl animate-float" />
              
              {/* Floating particles */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-gold/60 rounded-full animate-float"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${30 + i * 15}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold via-coral to-rose flex items-center justify-center mb-6 shadow-xl shadow-gold/30">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="font-display text-2xl font-bold">
                    Our Vision
                  </h3>
                  <Star className="w-5 h-5 text-gold animate-pulse" />
                </div>
                <p className="text-primary-foreground/95 leading-relaxed text-lg">
                  Through awareness, responsible choices, and community participation, we strive to contribute to a more sustainable and environmentally conscious future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;