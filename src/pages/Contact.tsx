import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Send, Shield, Clock, Eye, Heart, Users, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import heroContact from "@/assets/contact/hero-contact-new.jpg";
import communityConnect from "@/assets/contact/community-connect-new.jpg";
import transparencyImg from "@/assets/contact/transparency.jpg";
import volunteeringImg from "@/assets/contact/volunteering.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject || !formData.message.trim()) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, subject and message are required.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll review your message and respond as appropriate.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          {/* Background Image with Parallax */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${heroContact})` }}
          >
            {/* Multi-color gradient overlay - same as home hero */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple/80 via-primary/75 to-cyan/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-hero-pattern opacity-15" />
          </div>
          
          {/* Decorative Elements - Same vibrant style as home */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-gold/30 to-coral/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan/30 to-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-rose/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gold/25 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
          
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gold/50 rounded-full animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`
              }}
            />
          ))}
          
          <div className="container-custom relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              {/* Badge - Gold gradient like home */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/25 to-coral/20 backdrop-blur-sm border border-gold/40 mb-8 animate-fade-in shadow-lg">
                <Sparkles className="w-4 h-4 text-gold-light" />
                <span className="text-primary-foreground/95 text-sm font-semibold">
                  Contact Us
                </span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Get in{" "}
                <span className="relative inline-block">
                  <span className="rainbow-text">Touch</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 120 12" fill="none">
                    <path d="M2 10C30 2 90 2 118 10" stroke="url(#rainbow-underline-contact)" strokeWidth="4" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="rainbow-underline-contact" x1="0" y1="0" x2="120" y2="0">
                        <stop offset="0%" stopColor="hsl(16 90% 60%)" />
                        <stop offset="33%" stopColor="hsl(42 95% 55%)" />
                        <stop offset="66%" stopColor="hsl(155 85% 50%)" />
                        <stop offset="100%" stopColor="hsl(280 70% 55%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Sarveshwar Seva Foundation welcomes communication from individuals, community groups, and organizations interested in climate awareness and sustainable living.
              </p>
              <p className="text-base text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto mt-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                For general inquiries, collaboration opportunities, or participation-related questions, please use the contact details or the form below.
              </p>
            </div>
          </div>
          
          {/* Scroll indicator - Gold themed */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-7 h-12 rounded-full border-2 border-gold/60 flex items-start justify-center p-2 bg-gold/10">
              <div className="w-2 h-3 bg-gradient-to-b from-gold to-coral rounded-full" />
            </div>
          </div>
        </section>

        {/* Community Connection Image Section */}
        <section className="py-16 bg-gradient-to-br from-background via-gold/5 to-coral/5 relative overflow-hidden">
          {/* Background decorations - Same as home */}
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-coral/20 to-purple/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative overflow-hidden rounded-3xl shadow-elevated">
                  <img 
                    src={communityConnect} 
                    alt="Community coming together for environmental causes" 
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay like home */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple/60 via-transparent to-transparent" />
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-coral flex items-center justify-center shadow-gold">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-display font-semibold text-lg">Community First</p>
                        <p className="text-white/80 text-sm">Together for a greener future</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative rings like home */}
                <div className="absolute -top-6 -right-6 w-48 h-48 border-4 rounded-full" style={{ borderColor: 'hsl(42 95% 50% / 0.3)' }} />
                <div className="absolute -top-3 -right-3 w-48 h-48 border-2 rounded-full" style={{ borderColor: 'hsl(280 70% 55% / 0.2)' }} />
              </div>
              
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-gold-dark font-semibold text-sm tracking-wide uppercase">
                    Connect With Us
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Connect With Our{" "}
                  <span className="sunset-text">Community</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Whether you're an individual passionate about environmental causes, a community group seeking collaboration, or an organization looking to partner with us, we're here to listen and work together.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-cyan/10 to-sky/5 border border-cyan/20 hover:border-cyan/40 transition-all duration-300 group hover:-translate-y-0.5">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan to-sky flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Quick Response</p>
                      <p className="text-sm text-muted-foreground">We aim to respond within 48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-gold/10 to-coral/5 border border-gold/20 hover:border-gold/40 transition-all duration-300 group hover:-translate-y-0.5">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-coral flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Open Dialogue</p>
                      <p className="text-sm text-muted-foreground">All inquiries are welcome</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-cyan/5 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald/5 rounded-full blur-2xl" />
          
          <div className="container-custom relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-coral/20 border border-gold/30 mb-6">
                <Sparkles className="w-4 h-4 text-coral" />
                <span className="text-coral font-semibold text-sm tracking-wide uppercase">
                  Reach Out
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Contact <span className="rainbow-text">Form</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Please fill out the form below, and our team will review your message and respond as appropriate.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-purple/10 via-sky/5 to-cyan/10 rounded-3xl p-6 md:p-8 border border-purple/20 hover:border-purple/40 transition-all duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name <span className="text-coral">*</span>
                      </label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        maxLength={100}
                        className="bg-background/80 border-border/50 focus:border-purple/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address <span className="text-coral">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        maxLength={255}
                        className="bg-background/80 border-border/50 focus:border-purple/50"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number <span className="text-muted-foreground text-xs">(optional)</span>
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        maxLength={20}
                        className="bg-background/80 border-border/50 focus:border-purple/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject <span className="text-coral">*</span>
                      </label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                        required
                      >
                        <SelectTrigger className="bg-background/80 border-border/50 focus:border-purple/50">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="volunteering">Volunteering & Participation</SelectItem>
                          <SelectItem value="collaboration">Collaboration / Partnership</SelectItem>
                          <SelectItem value="media">Media & Information</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message <span className="text-coral">*</span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your inquiry in detail..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      maxLength={1000}
                      className="bg-background/80 border-border/50 focus:border-purple/50 resize-none"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {formData.message.length}/1000 characters
                    </p>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full sm:w-auto bg-gradient-to-r from-coral to-rose hover:from-coral/90 hover:to-rose/90 shadow-coral">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Contact <span className="ocean-text">Information</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-5 rounded-xl bg-gradient-to-br from-emerald/10 via-teal/5 to-cyan/10 border border-emerald/20 hover:border-emerald/40 transition-all duration-300 group hover:-translate-y-0.5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-bright to-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Registered Address</div>
                      <div className="text-sm text-muted-foreground">
                        34, Sachhidanand Nagar, Annapurna Road,<br />
                        Indore, Madhya Pradesh, India – 452009
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-xl bg-gradient-to-br from-gold/10 via-coral/5 to-rose/10 border border-gold/20 hover:border-gold/40 transition-all duration-300 group hover:-translate-y-0.5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-coral flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-gold">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Email</div>
                      <a
                        href="mailto:help@msarveshwarsevafoundation.org"
                        className="text-sm text-coral hover:text-coral-light transition-colors"
                      >
                        help@msarveshwarsevafoundation.org
                      </a>
                    </div>
                  </div>
                </div>

                {/* Privacy Notice */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-cyan/10 to-sky/5 border border-cyan/20">
                  <div className="flex gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan to-sky flex items-center justify-center shrink-0 shadow-md">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                      Privacy Notice
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your contact details will be used only to respond to your inquiry. Sarveshwar Seva Foundation respects your privacy and does not share personal information with third parties.
                  </p>
                </div>

                {/* Office Communication Note */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-gold/10 to-amber/5 border border-gold/20">
                  <div className="flex gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-amber flex items-center justify-center shrink-0 shadow-gold">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                      Office Communication Note
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All messages received through this form are treated as official communication. Response times may vary based on the nature of the inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency & Volunteering Section with Images */}
        <section className="section-padding bg-gradient-to-br from-background via-purple/5 to-rose/5 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple/10 to-rose/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Transparency Statement with Image */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple/10 via-sky/5 to-cyan/10 border border-purple/20 hover:border-purple/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={transparencyImg} 
                    alt="Transparency and openness" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  {/* Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="absolute top-4 left-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple to-sky flex items-center justify-center shadow-purple">
                      <Eye className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Transparency <span className="ocean-text">Statement</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Sarveshwar Seva Foundation operates as a registered non-profit organization and maintains transparency in communication and operations. This contact form is provided to ensure openness, accessibility, and public trust.
                  </p>
                </div>
              </div>

              {/* Volunteering CTA with Image */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold/10 via-coral/5 to-rose/10 border border-gold/20 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={volunteeringImg} 
                    alt="Volunteers planting trees together" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  {/* Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="absolute top-4 left-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral via-rose to-purple flex items-center justify-center shadow-coral">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Interested in <span className="sunset-text">Volunteering?</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Join our network of dedicated volunteers and make a real difference in your community. We welcome individuals from all backgrounds who share our commitment to environmental sustainability.
                  </p>
                  <Button className="bg-gradient-to-r from-gold via-coral to-rose hover:from-gold/90 hover:via-coral/90 hover:to-rose/90 shadow-gold group-hover:shadow-lg transition-all">
                    Become a Volunteer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-16 bg-gradient-to-r from-gold/5 via-coral/5 to-purple/5 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-gold/10 to-coral/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-coral via-rose to-purple flex items-center justify-center animate-pulse-glow shadow-coral">
                  <Heart className="w-10 h-10 text-white" />
                </div>
              </div>
              <p className="text-xl md:text-2xl font-display font-medium text-foreground leading-relaxed mb-2">
                We appreciate your interest in{" "}
                <span className="rainbow-text">climate awareness</span>{" "}
                and community-led sustainability initiatives.
              </p>
              <p className="text-muted-foreground text-lg">
                Together, we can make a difference.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
