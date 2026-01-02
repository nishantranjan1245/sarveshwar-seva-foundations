import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HandHeart, Users, CalendarDays, ArrowRight, Sparkles, Heart, Star, Zap } from "lucide-react";

const involvementOptions = [
  {
    icon: HandHeart,
    title: "Volunteer",
    description: "Join our team of dedicated volunteers making a difference in communities.",
    gradient: "from-coral via-rose to-purple",
    bgGradient: "from-coral/15 via-rose/10 to-purple/5",
    borderColor: "border-coral/40",
    shadowColor: "shadow-coral/20",
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Participate in local awareness campaigns and sustainability workshops.",
    gradient: "from-purple via-sky to-cyan",
    bgGradient: "from-purple/15 via-sky/10 to-cyan/5",
    borderColor: "border-purple/40",
    shadowColor: "shadow-purple/20",
  },
  {
    icon: CalendarDays,
    title: "Ongoing Programs",
    description: "Engage with our regular programs focused on environmental education.",
    gradient: "from-cyan via-teal to-emerald-bright",
    bgGradient: "from-cyan/15 via-teal/10 to-emerald/5",
    borderColor: "border-cyan/40",
    shadowColor: "shadow-cyan/20",
  },
];

const GetInvolvedSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary/60 via-background to-purple/8 relative overflow-hidden">
      {/* Decorative Elements - Enhanced */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-coral/15 to-gold/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple/15 to-cyan/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-rose/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gold/15 rounded-full blur-xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content - Enhanced */}
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-coral/25 via-gold/20 to-rose/15 border border-coral/40 mb-6 shadow-lg shadow-coral/10">
              <Heart className="w-5 h-5 text-coral animate-pulse" />
              <span className="text-coral font-bold text-sm tracking-wide uppercase">
                Join Us
              </span>
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Get Involved in{" "}
              <span className="vibrant-text drop-shadow-sm">Positive Change</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Positive environmental change is most effective when communities participate together. Individuals and organizations can engage with our work by volunteering and supporting community-based sustainability efforts.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              There are multiple ways to contribute beyond financial support, and every form of participation strengthens collective impact.
            </p>

            <Link to="/contact">
              <Button variant="accent" size="lg" className="group bg-gradient-to-r from-coral via-rose to-purple hover:from-coral/90 hover:via-rose/90 hover:to-purple/90 shadow-xl shadow-coral/20 hover:shadow-coral/40 hover:scale-105 transition-all duration-300">
                <Zap className="w-4 h-4 mr-1" />
                Learn How to Get Involved
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right side - Decorative Card + Options - Enhanced */}
          <div className="space-y-5">
            {/* Featured Card - Enhanced */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple/20 p-8 bg-gradient-to-br from-purple/20 via-primary/15 to-cyan/20 border-2 border-purple/30 hover:border-purple/50 transition-all duration-300">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gold/20 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan/20 to-transparent rounded-tr-full" />
              
              <div className="flex items-center gap-4 mb-5 relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-coral via-rose to-purple flex items-center justify-center shadow-xl shadow-coral/30">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">Together, We Grow</h3>
                  <p className="text-sm text-muted-foreground">Join hands for a sustainable future</p>
                </div>
                <Star className="w-6 h-6 text-gold absolute top-0 right-0 animate-pulse" />
              </div>
              <div className="flex gap-3 relative">
                <div className="flex-1 p-4 rounded-xl bg-background/70 hover:bg-background/90 text-center group transition-colors">
                  <div className="font-display text-2xl font-bold sunset-text group-hover:scale-110 transition-transform">500+</div>
                  <div className="text-xs text-muted-foreground font-semibold">Volunteers</div>
                </div>
                <div className="flex-1 p-4 rounded-xl bg-background/70 hover:bg-background/90 text-center group transition-colors">
                  <div className="font-display text-2xl font-bold vibrant-text group-hover:scale-110 transition-transform">200+</div>
                  <div className="text-xs text-muted-foreground font-semibold">Events</div>
                </div>
                <div className="flex-1 p-4 rounded-xl bg-background/70 hover:bg-background/90 text-center group transition-colors">
                  <div className="font-display text-2xl font-bold ocean-text group-hover:scale-110 transition-transform">50+</div>
                  <div className="text-xs text-muted-foreground font-semibold">Communities</div>
                </div>
              </div>
            </div>

            {/* Options - Enhanced */}
            {involvementOptions.map((option, index) => (
              <div
                key={option.title}
                className={`flex gap-5 p-6 rounded-2xl bg-gradient-to-r ${option.bgGradient} border-2 ${option.borderColor} hover:shadow-2xl ${option.shadowColor} transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
                  <option.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;