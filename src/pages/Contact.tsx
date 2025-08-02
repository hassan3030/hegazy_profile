import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "", 
      phone: "",
      subject: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@youraccountant.com",
      action: "mailto:contact@youraccountant.com"
    },
    {
      icon: Phone, 
      title: "Phone",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New York, NY",
      action: null
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 9AM-6PM",
      action: null
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-bounce-in">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Ready to optimize your financial operations? Let's discuss how I can help 
            your business achieve its financial goals. I'm here to answer your questions 
            and provide expert guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="p-8 bg-gradient-card shadow-card animate-scale-in">
              <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center animate-slide-right">
                <MessageSquare className="w-6 h-6 mr-3 text-accent animate-float" />
                {t('contact.form.title') || 'Send a Message'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    <Label htmlFor="name">{t('contact.form.name')}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-background hover-scale"
                    />
                  </div>
                  <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <Label htmlFor="email">{t('contact.form.email')}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background hover-scale"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can I help you?"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your accounting needs, questions, or how I can assist your business..."
                    required
                    rows={6}
                    className="bg-background resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-scale-in">
            <Card className="p-8 bg-gradient-card shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{info.title}</h3>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Contact Options */}
            <Card className="p-8 bg-gradient-card shadow-card">
              <h3 className="text-xl font-semibold text-primary mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full justify-start text-left"
                  asChild
                >
                  <a href="mailto:contact@youraccountant.com">
                    <Mail className="w-5 h-5 mr-3" />
                    Send Email
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full justify-start text-left"
                  asChild
                >
                  <a href="tel:+15551234567">
                    <Phone className="w-5 h-5 mr-3" />
                    Call Now
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full justify-start text-left"
                  asChild
                >
                  <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-5 h-5 mr-3" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </Card>

            {/* Response Time */}
            <Card className="p-6 bg-primary text-primary-foreground">
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-3 text-primary-glow" />
                <h3 className="font-semibold mb-2">Quick Response Guarantee</h3>
                <p className="text-sm text-primary-foreground/90">
                  I typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call directly.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-semibold text-primary mb-4">Ready to Start?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Take the first step towards optimizing your financial operations. 
              Schedule a free consultation to discuss your specific needs and goals.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Schedule Free Consultation
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}