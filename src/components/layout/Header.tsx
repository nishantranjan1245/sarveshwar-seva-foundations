import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "Climate Awareness", href: "/climate-awareness" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/30">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="Sarveshwar Seva Foundation" 
                className="w-14 h-14 object-contain group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 via-emerald-400/20 to-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            </div>
            <div>
              <span className="font-display text-base sm:text-lg font-bold leading-tight block bg-gradient-to-r from-orange-500 via-amber-500 via-emerald-500 via-teal-500 to-blue-500 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:via-amber-400 group-hover:via-emerald-400 group-hover:via-teal-400 group-hover:to-blue-400 transition-all duration-300">
                Sarveshwar Seva
              </span>
              <span className="block text-center font-sans text-[12px] sm:text-[13px] 
uppercase tracking-[0.35em] text-muted-foreground leading-none mt-1">
  <b>Foundation</b>
</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-4 py-2 rounded-xl text-base font-semibold transition-all duration-300 ${
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary font-bold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {link.name}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                )}
              </Link>
            ))}
          </nav>

          {/* Donate Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Link to="/donate" className="hidden sm:block">
              <Button variant="accent" size="default" className="group">
                <Sparkles className="w-4 h-4" />
                Donate
              </Button>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/30 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
                <Button variant="accent" className="w-full mt-2">
                  <Sparkles className="w-4 h-4" />
                  Donate
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
