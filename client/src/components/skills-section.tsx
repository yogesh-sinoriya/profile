import { useEffect, useRef, useState } from "react";
import { Container, GitBranch, Code2, Workflow, Terminal, Cloud, Bot, Settings } from "lucide-react";

export default function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "React.js", level: 92 },
    { name: "Angular", level: 85 },
    { name: "DevOps & CI/CD", level: 88 },
    { name: "Kubernetes", level: 82 },
    { name: "AI/ML & Data Science", level: 85 },
    { name: "MongoDB", level: 88 }
  ];

  const tools = [
    { name: "Docker", icon: Container },
    { name: "Jenkins", icon: Workflow },
    { name: "Git", icon: GitBranch },
    { name: "AI/ML Tools", icon: Bot },
    { name: "DevOps", icon: Settings },
    { name: "AWS", icon: Cloud }
  ];

  const industries = [
    "IoT", "Automotive", "Logistics", "Medical", "Banking", "Insurance"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-white" ref={skillsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Technical Skills</h2>
          <p className="text-slate text-lg">Expertise across the full technology stack</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-8">Core Technologies</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate font-medium">{skill.name}</span>
                    <span className="text-accent-blue font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="skill-bar bg-accent-blue h-2 rounded-full" 
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%' 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-8">Tools & Platforms</h3>
            <div className="grid grid-cols-2 gap-6">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div key={tool.name} className="text-center p-4 bg-gray-50 rounded-lg card-hover">
                    <div className="text-accent-blue text-3xl mb-3 flex justify-center">
                      <Icon />
                    </div>
                    <h4 className="font-semibold text-navy">{tool.name}</h4>
                  </div>
                );
              })}
            </div>

            {/* Industry Experience */}
            <div className="mt-8">
              <h4 className="text-lg font-bold text-navy mb-4">Industry Experience</h4>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span 
                    key={industry} 
                    className="bg-blue-100 text-accent-blue px-3 py-1 rounded-full text-sm"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}