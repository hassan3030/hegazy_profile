import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Award } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Financial Consultant",
      company: "Premier Accounting Group",
      location: "New York, NY",
      duration: "2021 - Present",
      type: "Full-time",
      description: "Lead financial consulting projects for mid-market companies, specializing in financial restructuring, tax optimization, and strategic planning. Manage a portfolio of 25+ clients with combined revenue exceeding $50M.",
      achievements: [
        "Increased client cost savings by an average of 18% through strategic tax planning",
        "Led financial due diligence for 12 M&A transactions totaling $120M",
        "Implemented automated reporting systems reducing processing time by 40%",
        "Mentored and developed 5 junior consultants"
      ],
      skills: ["Financial Analysis", "Tax Planning", "M&A", "Team Leadership"]
    },
    {
      title: "Senior Accountant",
      company: "Global Finance Solutions",
      location: "New York, NY", 
      duration: "2019 - 2021",
      type: "Full-time",
      description: "Managed comprehensive accounting operations for diverse client portfolio including manufacturing, retail, and service industries. Specialized in complex tax matters and regulatory compliance.",
      achievements: [
        "Managed full-cycle accounting for 40+ small to medium businesses",
        "Achieved 98% accuracy rate in tax return preparation",
        "Reduced month-end closing time by 35% through process optimization",
        "Maintained 100% compliance with all regulatory requirements"
      ],
      skills: ["Financial Reporting", "Tax Compliance", "Process Improvement", "Client Relations"]
    },
    {
      title: "Tax Specialist",
      company: "Regional CPA Firm",
      location: "Buffalo, NY",
      duration: "2017 - 2019", 
      type: "Full-time",
      description: "Specialized in individual and business tax preparation, with focus on complex tax situations including multi-state filings, estate planning, and international tax matters.",
      achievements: [
        "Prepared 200+ individual and business tax returns annually",
        "Developed expertise in multi-state tax compliance",
        "Assisted in IRS audit defense for 15+ clients with 100% success rate",
        "Earned QuickBooks ProAdvisor certification"
      ],
      skills: ["Tax Preparation", "Audit Support", "QuickBooks", "Client Communication"]
    },
    {
      title: "Junior Accountant",
      company: "Smith & Associates CPA",
      location: "Rochester, NY",
      duration: "2016 - 2017",
      type: "Full-time",
      description: "Entry-level position focusing on bookkeeping, accounts payable/receivable, and basic financial statement preparation. Strong foundation in fundamental accounting principles.",
      achievements: [
        "Maintained accurate books for 20+ small business clients",
        "Assisted in preparation of monthly financial statements",
        "Implemented digital filing system improving document retrieval by 60%",
        "Completed CPA exam requirements"
      ],
      skills: ["Bookkeeping", "Financial Statements", "Data Entry", "File Management"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Professional Experience</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A progressive career journey showcasing growth, expertise development, and consistent 
            delivery of exceptional results across diverse accounting and finance roles.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative flex items-start mb-12 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-accent rounded-full shadow-glow">
                  <Building className="w-8 h-8 text-accent-foreground" />
                </div>
                
                {/* Content */}
                <Card className="ml-8 flex-1 p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <Building className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="mb-4">{exp.type}</Badge>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-3">Core Skills Applied</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <Card className="mt-16 p-8 bg-primary text-primary-foreground animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4">Career Highlights</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-glow mb-2">8+</div>
              <div className="text-primary-foreground/90">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-glow mb-2">200+</div>
              <div className="text-primary-foreground/90">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-glow mb-2">$170M+</div>
              <div className="text-primary-foreground/90">Transaction Value Managed</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}