import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-forest-dark to-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />

      {/* Main Footer Content */}
      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Section 1 - Foundation Info */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Sarveshwar Seva Foundation" 
                  className="w-16 h-16 object-contain group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/30 via-emerald-400/30 to-blue-400/30 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              </div>
              <div>
                <span className="font-display text-lg font-bold leading-tight block bg-gradient-to-r from-orange-400 via-amber-400 via-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent group-hover:from-orange-300 group-hover:via-amber-300 group-hover:via-emerald-300 group-hover:via-teal-300 group-hover:to-blue-300 transition-all duration-300">
                  Sarveshwar Seva
                </span>
                <span className="text-xs text-amber-300 font-bold tracking-widest">
                  FOUNDATION
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 max-w-sm">
              Sarveshwar Seva Foundation is a non-profit organization working on climate action and green awareness to promote eco-friendly lifestyles and community-led sustainability initiatives.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/30 hover:scale-110 transition-all duration-300 border border-primary-foreground/10 hover:border-gold/30"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Section 2 - Main Pages */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-light" />
              Main Pages
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Initiatives", "Contact", "Donate"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-gold-light text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 - Resources */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-light" />
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Climate Awareness", href: "/climate-awareness" },
                { name: "Green Living", href: "/green-living" },
                { name: "Sustainability Updates", href: "/sustainability-updates" },
                { name: "Volunteer With Us", href: "/volunteer" },
                { name: "Community", href: "/community" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/80 hover:text-gold-light text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 - Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-display font-semibold text-lg mb-5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-light" />
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-gold-light" />
                <span>34, Sachhidanand Nagar, Annapurna Road, Indore, MP, India – 452009</span>
              </div>
              <div className="flex gap-3 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4 shrink-0 text-gold-light" />
                <a href="mailto:help@msarveshwarsevafoundation.org" className="hover:text-gold-light transition-colors">
                  help@msarveshwarsevafoundation.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Legal Links */}
      <div className="border-t border-primary-foreground/10 relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright - Left */}
            <p className="text-sm text-primary-foreground/60 order-2 md:order-1">
              © 1999–2026 Sarveshwar Seva Foundation. All rights reserved.
            </p>
            {/* Legal Links - Right */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 order-1 md:order-2">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms-conditions" },
                { name: "Disclaimer", href: "/disclaimer" },
                { name: "Legal & Compliance", href: "/legal-compliance" },
                { name: "Transparency & Governance", href: "/transparency-governance" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-xs text-primary-foreground/60 hover:text-gold-light transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
