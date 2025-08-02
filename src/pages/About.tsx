import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about numbers, driven by results, and committed to helping businesses 
            achieve financial excellence through strategic accounting solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Biography */}
          <div className="space-y-8 animate-slide-up">
            <Card className="p-8 bg-gradient-card shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-accent" />
                My Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 8 years of experience in the accounting field, I've had the privilege 
                  of working with diverse businesses ranging from startups to established corporations. 
                  My journey began with a deep fascination for numbers and their ability to tell 
                  compelling business stories.
                </p>
                <p>
                  I hold a Bachelor's degree in Accounting and Finance, along with my CPA certification. 
                  Throughout my career, I've specialized in financial analysis, tax planning, and 
                  strategic business consulting, helping clients optimize their financial operations 
                  and achieve sustainable growth.
                </p>
                <p>
                  What drives me most is the opportunity to transform complex financial data into 
                  actionable insights that empower business owners to make informed decisions. 
                  I believe that every number has a story, and every business has untapped potential.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-accent" />
                Career Goals
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My mission is to become a trusted financial partner for businesses seeking 
                  sustainable growth and financial optimization. I aim to continue expanding 
                  my expertise in emerging financial technologies and industry best practices.
                </p>
                <p>
                  In the next five years, I plan to establish a comprehensive accounting consultancy 
                  that specializes in digital transformation for small and medium enterprises, 
                  helping them leverage technology for better financial management.
                </p>
              </div>
            </Card>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8 animate-scale-in">
            <Card className="p-8 bg-gradient-card shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-accent" />
                Education
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-semibold text-primary">Master of Business Administration</h3>
                  <p className="text-muted-foreground">University of Excellence • 2018</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Specialization in Financial Management and Strategic Planning
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-semibold text-primary">Bachelor of Accounting & Finance</h3>
                  <p className="text-muted-foreground">Business University • 2016</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Magna Cum Laude, Dean's List for 4 consecutive semesters
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-accent" />
                Certifications & Awards
              </h2>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-sm py-2 px-3">CPA Certified</Badge>
                  <Badge variant="secondary" className="text-sm py-2 px-3">QuickBooks ProAdvisor</Badge>
                  <Badge variant="secondary" className="text-sm py-2 px-3">Excel Expert</Badge>
                  <Badge variant="secondary" className="text-sm py-2 px-3">Financial Planning</Badge>
                </div>
                <div className="space-y-3 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-primary">Excellence in Client Service Award</span>
                    <span className="text-xs text-muted-foreground">2023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-primary">Top Performer Recognition</span>
                    <span className="text-xs text-muted-foreground">2022</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-primary">Young Professional of the Year</span>
                    <span className="text-xs text-muted-foreground">2021</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Values */}
            <Card className="p-8 bg-gradient-card shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-6">Core Values</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Integrity",
                  "Accuracy", 
                  "Innovation",
                  "Excellence",
                  "Transparency",
                  "Growth",
                  "Reliability",
                  "Partnership"
                ].map((value, index) => (
                  <div 
                    key={value} 
                    className="text-center p-3 bg-muted/50 rounded-lg hover:bg-accent/10 transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-sm font-medium text-primary">{value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}