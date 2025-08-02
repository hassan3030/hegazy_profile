import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, Shield, Users, Brain, MessageSquare } from "lucide-react";

export default function Skills() {
  const technicalSkills = [
    { name: "Financial Analysis", level: 95, icon: TrendingUp },
    { name: "Tax Preparation", level: 90, icon: Calculator },
    { name: "Audit & Compliance", level: 88, icon: Shield },
    { name: "QuickBooks", level: 92, icon: Calculator },
    { name: "Excel Advanced", level: 96, icon: Calculator },
    { name: "Financial Reporting", level: 94, icon: TrendingUp },
  ];

  const softSkills = [
    { name: "Client Communication", level: 95, icon: MessageSquare },
    { name: "Problem Solving", level: 92, icon: Brain },
    { name: "Team Leadership", level: 85, icon: Users },
    { name: "Project Management", level: 88, icon: Users },
    { name: "Strategic Thinking", level: 90, icon: Brain },
    { name: "Attention to Detail", level: 98, icon: Shield },
  ];

  const certifications = [
    "Certified Public Accountant (CPA)",
    "QuickBooks ProAdvisor Certification",
    "Microsoft Excel Expert Certification",
    "Financial Planning & Analysis Certificate",
    "Tax Preparation Professional License",
    "Business Valuation Certification"
  ];

  const software = [
    "QuickBooks Pro/Enterprise",
    "Microsoft Excel (Advanced)",
    "SAP Financial Modules",
    "Xero Accounting Software",
    "TaxSlayer Pro",
    "Sage 50 Accounting",
    "Peachtree Complete",
    "Microsoft Power BI"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive skillset built through years of hands-on experience and continuous learning 
            in the dynamic field of accounting and finance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <Card className="p-8 bg-gradient-card shadow-card animate-slide-up">
            <h2 className="text-2xl font-semibold text-primary mb-8 flex items-center">
              <Calculator className="w-6 h-6 mr-3 text-accent" />
              Technical Skills
            </h2>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <skill.icon className="w-4 h-4 mr-2 text-accent" />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          {/* Soft Skills */}
          <Card className="p-8 bg-gradient-card shadow-card animate-scale-in">
            <h2 className="text-2xl font-semibold text-primary mb-8 flex items-center">
              <Users className="w-6 h-6 mr-3 text-accent" />
              Soft Skills
            </h2>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <skill.icon className="w-4 h-4 mr-2 text-accent" />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <Card className="p-8 bg-gradient-card shadow-card animate-fade-in">
            <h2 className="text-2xl font-semibold text-primary mb-8 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-accent" />
              Certifications & Licenses
            </h2>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div 
                  key={cert} 
                  className="flex items-center p-3 bg-muted/30 rounded-lg hover:bg-accent/10 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Software Proficiency */}
          <Card className="p-8 bg-gradient-card shadow-card animate-slide-up">
            <h2 className="text-2xl font-semibold text-primary mb-8 flex items-center">
              <Brain className="w-6 h-6 mr-3 text-accent" />
              Software Proficiency
            </h2>
            <div className="flex flex-wrap gap-3">
              {software.map((tool, index) => (
                <Badge 
                  key={tool} 
                  variant="secondary" 
                  className="text-sm py-2 px-4 hover:bg-accent/20 transition-colors cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Skills Summary */}
        <Card className="mt-12 p-8 bg-primary text-primary-foreground animate-fade-in">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Skills Summary</h2>
            <p className="text-lg text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              My diverse skillset combines deep technical expertise in accounting and finance with strong 
              interpersonal abilities. I excel at translating complex financial data into clear, actionable 
              insights that drive business decisions. With proficiency in industry-leading software and 
              a commitment to staying current with evolving regulations and best practices, I deliver 
              comprehensive solutions that meet the unique needs of each client.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}