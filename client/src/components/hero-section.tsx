import { Button } from "@/components/ui/button";
import { Badge } from "lucide-react";
import Photo from "../assets/Photo.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const techStack = ["React.js", "Node.js", "Angular", "TypeScript", "DevOps", "AI/ML"];

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-navy to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Senior Principal Software Engineer
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              10+ years of enterprise software development experience at Dell Technologies, leading scalable architecture and mentoring technical teams.
            </p>
            
            {/* Patent Achievement Badge */}
            <div className="mb-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="flex items-center mb-2">
                <Badge className="w-5 h-5 mr-2 text-yellow-300" />
                <span className="font-semibold text-yellow-300">Patent Achievement</span>
              </div>
              <p className="text-sm text-blue-100">
                Method and System for Micro frontend development and testing using virtualization
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-accent-blue hover:bg-blue-600 text-white px-6 py-3 font-semibold transition-colors"
              >
                Get in Touch
              </Button>
              <Button
                onClick={() => scrollToSection("experience")}
                variant="outline"
                className="border-2 border-white hover:bg-white hover:text-navy text-white px-6 py-3 font-semibold transition-colors bg-transparent"
              >
                View Experience
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            {/* <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
              alt="Professional software engineer"
              className="rounded-full w-96 h-96 object-cover mx-auto shadow-2xl border-8 border-white/20"
            /> */}
            <img

              src={Photo}
              alt="Professional software engineer"
              className="rounded-full w-96 h-96 object-cover mx-auto shadow-2xl border-8 border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}