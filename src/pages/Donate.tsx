import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Shield, FileCheck, Leaf, HandHeart, Globe, Users, CheckCircle, Sparkles, CreditCard, Building2, MessageCircle, AlertCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroDonateImage from "@/assets/donate/hero-donate.jpg";
import whySupportImage from "@/assets/donate/why-support.jpg";
import contributeImage from "@/assets/donate/contribute.jpg";
import otherSupportImage from "@/assets/donate/other-support.jpg";

const Donate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden min-h-[60vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={heroDonateImage} 
              alt="Hands holding glowing green earth globe" 
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
                <Heart className="w-4 h-4 text-gold-light" />
                <span className="text-gold-light font-semibold text-sm tracking-wide uppercase">
                  Donate
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
                Support Climate Awareness & <span className="gold-text">Community Sustainability</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                Sarveshwar Seva Foundation welcomes voluntary support from individuals and organizations who wish to contribute toward climate awareness and community-led sustainability initiatives. Contributions help strengthen awareness programs, outreach efforts, and long-term environmental responsibility initiatives.
              </p>
              <p className="mt-6 text-white/80 text-base">
                Supporting the Foundation is entirely voluntary, and there are multiple ways to contribute beyond financial assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Why Support Our Work */}
        <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-purple/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-rose/15 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple/30 via-rose/30 to-coral/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={whySupportImage} 
                      alt="Community volunteers working on environmental project" 
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg drop-shadow-md">Making a Difference Together</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple/20 to-rose/20 border border-purple/30 mb-4">
                      <Sparkles className="w-4 h-4 text-purple" />
                      <span className="text-purple font-semibold text-sm tracking-wide uppercase">Why Support</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold vibrant-text mb-4">
                      Why Support Our Work
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Sarveshwar Seva Foundation works on awareness-driven environmental initiatives focused on climate action and eco-friendly living. Support received by the Foundation helps in:
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      "Conducting climate awareness and outreach activities",
                      "Promoting sustainable and eco-friendly lifestyle practices",
                      "Supporting community participation initiatives",
                      "Strengthening informational and engagement programs"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-purple/10 to-rose/10 border border-purple/20 hover:border-purple/40 transition-all duration-300 hover:-translate-y-1">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple to-rose flex items-center justify-center shrink-0 shadow-md">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-foreground font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple/10 to-rose/10 border border-purple/20">
                    <p className="text-muted-foreground text-sm">
                      All activities are carried out with a focus on <span className="text-purple font-semibold">long-term environmental responsibility</span> and <span className="text-rose font-semibold">public awareness</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Contributions Are Utilized */}
        <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-bl from-teal/15 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald/20 to-teal/20 border border-emerald/30 mb-4">
                <Leaf className="w-4 h-4 text-emerald" />
                <span className="text-emerald font-semibold text-sm tracking-wide uppercase">Fund Utilization</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold nature-text mb-4">
                How Contributions Are Utilized
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Voluntary contributions are used responsibly to support the Foundation's non-profit objectives, including:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: FileCheck, title: "Awareness Materials", desc: "Campaign materials and resources", gradient: "from-emerald to-teal" },
                { icon: Users, title: "Community Outreach", desc: "Engagement and outreach activities", gradient: "from-teal to-cyan" },
                { icon: HandHeart, title: "Program Support", desc: "Coordination and operational support", gradient: "from-cyan to-sky" },
                { icon: Shield, title: "Transparency", desc: "Compliance and reporting efforts", gradient: "from-sky to-purple" },
              ].map((item, index) => (
                <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-emerald/5 to-teal/5 border border-emerald/20 hover:border-emerald/40 transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald/10 via-teal/10 to-cyan/10 border border-emerald/20 max-w-3xl mx-auto text-center">
              <p className="text-emerald font-medium">
                The Foundation follows transparent practices to ensure responsible use of funds.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Contribute */}
        <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-purple/5 relative overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-bl from-gold/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-tr from-amber/15 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-amber/20 border border-gold/30 mb-4">
                      <Heart className="w-4 h-4 text-gold" />
                      <span className="text-gold font-semibold text-sm tracking-wide uppercase">Contribute</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold sunset-text mb-4">
                      Ways to Contribute
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      You may choose to support Sarveshwar Seva Foundation through one or more of the following options:
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: CreditCard, text: "Online Contribution", gradient: "from-gold to-amber" },
                      { icon: Building2, text: "Bank Transfer / Cheque", gradient: "from-amber to-coral" },
                      { icon: HandHeart, text: "Non-Monetary Support (volunteering, skills, or resources)", gradient: "from-coral to-rose" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-gold/10 to-amber/10 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-md`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-foreground font-medium">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-gold/10 to-amber/10 border border-gold/20">
                    <p className="text-muted-foreground">
                      Details for contribution can be shared upon request through the <Link to="/contact" className="text-gold font-semibold hover:underline">Contact page</Link>.
                    </p>
                  </div>
                </div>
                
                {/* Image */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-gold/30 via-amber/30 to-coral/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={contributeImage} 
                      alt="Open hands in giving gesture with nature background" 
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gold/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg drop-shadow-md">Every Contribution Counts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency & Compliance */}
        <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-emerald/20 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald/20 to-teal/20 border border-emerald/30 mb-4">
                  <Shield className="w-4 h-4 text-emerald" />
                  <span className="text-emerald font-semibold text-sm tracking-wide uppercase">Transparency</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold nature-text mb-4">
                  Transparency & Compliance
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Sarveshwar Seva Foundation is a registered non-profit organization and operates in compliance with applicable statutory and regulatory requirements.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
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
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald/10 via-teal/10 to-cyan/10 border border-emerald/20 text-center">
                <p className="text-muted-foreground">
                  Information related to governance, compliance, and transparency is made available to maintain <span className="text-emerald font-semibold">public trust</span> and <span className="text-teal font-semibold">accountability</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Note */}
        <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-purple/5 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-coral/20 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-coral/20 to-rose/20 border border-coral/30 mb-4">
                  <AlertCircle className="w-4 h-4 text-coral" />
                  <span className="text-coral font-semibold text-sm tracking-wide uppercase">Important Note</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold sunset-text">
                  Please Note
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  "Contributions are voluntary and non-refundable unless stated otherwise",
                  "The Donate page is not used as a landing page for advertisements",
                  "No commercial services or benefits are offered in return for contributions"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-coral/10 to-rose/10 border border-coral/20 hover:border-coral/40 transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-coral to-rose flex items-center justify-center shrink-0 shadow-md mt-0.5">
                      <AlertCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Ways to Support */}
        <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-cyan/5 relative overflow-hidden">
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-sky/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-bl from-cyan/15 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div className="relative group order-2 lg:order-1">
                  <div className="absolute -inset-4 bg-gradient-to-r from-sky/30 via-cyan/30 to-teal/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={otherSupportImage} 
                      alt="Volunteers in green shirts at community event" 
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg drop-shadow-md">Join Our Community</p>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky/20 to-cyan/20 border border-sky/30 mb-4">
                      <Users className="w-4 h-4 text-sky" />
                      <span className="text-sky font-semibold text-sm tracking-wide uppercase">Beyond Donations</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold ocean-text mb-4">
                      Other Ways to Support
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Financial support is only one way to contribute. Individuals and organizations may also support the Foundation by:
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      "Participating in awareness initiatives",
                      "Volunteering time and expertise",
                      "Sharing information and outreach materials"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-sky/10 to-cyan/10 border border-sky/20 hover:border-sky/40 transition-all duration-300 hover:-translate-y-1">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky to-cyan flex items-center justify-center shrink-0 shadow-md">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-foreground font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-sky/10 to-cyan/10 border border-sky/20">
                    <p className="text-sky font-medium">
                      Every form of participation helps strengthen collective impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Donation Queries */}
        <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-purple/5 relative overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-purple/15 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple/20 to-rose/20 border border-purple/30 mb-4">
                <MessageCircle className="w-4 h-4 text-purple" />
                <span className="text-purple font-semibold text-sm tracking-wide uppercase">Get in Touch</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold vibrant-text mb-6">
                Contact for Donation Queries
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                For contribution-related queries or to request donation details, please contact us through the official contact information provided on the Contact page.
              </p>
              
              <Link to="/contact">
                <Button variant="accent" size="xl" className="group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Contact Us
                </Button>
              </Link>
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
                <Heart className="w-10 h-10 text-white" />
              </div>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
                Through voluntary support and community participation, Sarveshwar Seva Foundation continues to promote climate awareness and sustainable living for long-term environmental well-being.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
