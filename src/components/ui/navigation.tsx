import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/hooks/useLanguage";

const navItems = [
  { name: "nav.home", href: "/" },
  { name: "nav.about", href: "/about" },
  { name: "nav.skills", href: "/skills" },
  { name: "nav.experience", href: "/experience" },
  { name: "nav.contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary animate-bounce-in">
            {t('HEGAZY.com') || 'HEGAZY.com'}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-foreground/80 hover:text-primary transition-colors duration-200 relative animate-slide-down",
                  location.pathname === item.href && "text-primary"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {t(item.name)}
                {location.pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-glow rounded-full animate-scale-in" />
                )}
              </Link>
            ))}
            
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover-scale"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
              
              {/* Language Toggle */}
              <Button 
                variant="outline" 
                size="sm" 
                onClick={toggleLanguage}
                className="hover-scale"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === 'en' ? 'عربي' : 'EN'}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-slide-down">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-foreground/80 hover:text-primary transition-colors duration-200 px-4 py-2 animate-slide-right",
                    location.pathname === item.href && "text-primary bg-secondary/50 rounded-md"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.name)}
                </Link>
              ))}
              <div className="px-4 pt-2 space-y-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-full justify-start"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-4 h-4 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 mr-2" />
                      Dark Mode
                    </>
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={toggleLanguage}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'العربية' : 'English'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}