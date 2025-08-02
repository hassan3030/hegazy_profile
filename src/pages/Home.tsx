import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import professionalPortrait from "@/assets/p1.jpg";
import professionalPortrait2 from "@/assets/p2.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your Trusted
                <span className="block text-primary-glow">Financial Partner</span>
                <span className="block text-primary-glow">Mahnoud Hegazy</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Certified Public Accountant with 8+ years of experience in financial management, 
                tax planning, and business consulting. Let's grow your business together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" variant="secondary" className="group">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" onClick={() => {window.alert("اقفل يا محمود ي عرص")}} variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center animate-scale-in">
              <div className="relative">
                <img
                  src={professionalPortrait}
                  alt="Professional portrait"
                  className="w-80 h-80 object-cover rounded-2xl shadow-elegant"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-glow rounded-full blur-xl opacity-60"></div>
              </div>
              <div className="relative">
                <img
                  src={professionalPortrait2}
                  alt="Professional portrait"
                  className="w-80 h-80 object-cover rounded-2xl shadow-elegant"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-glow rounded-full blur-xl opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "8+", label: "Years Experience" },
              { number: "200+", label: "Clients Served" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive accounting solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Consulting",
                description: "Strategic financial planning and business growth advisory services",
                icon: "📊"
              },
              {
                title: "Tax Planning",
                description: "Comprehensive tax strategy and compliance management",
                icon: "📋"
              },
              {
                title: "Audit & Assurance",
                description: "Thorough financial audits and risk assessment services",
                icon: "🔍"
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Finances?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help streamline your accounting processes and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}