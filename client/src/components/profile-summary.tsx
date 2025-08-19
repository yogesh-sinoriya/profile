import { Code, Users, Cloud, Wifi, Settings, Rocket } from "lucide-react";

export default function ProfileSummary() {
  const summaryItems = [
    {
      icon: Code,
      title: "Full Stack Expertise",
      description: "10+ years of experience in ReactJs, Angular, Node.js, and modern web technologies"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Strong leadership skills with experience managing and influencing team members"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Hands-on experience with AWS, Docker, Jenkins, and CI/CD practices"
    },
    {
      icon: Wifi,
      title: "IoT Solutions",
      description: "Expertise in MQTT protocols, IoT device management, and message queues"
    },
    {
      icon: Settings,
      title: "Architecture Design",
      description: "Strong knowledge of Microservices, design patterns, end-to-end project design"
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "Focus on scalability, readability, and standards compliance in code development"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Profile Summary</h2>
          <p className="text-slate text-lg max-w-3xl mx-auto">
            Experienced full-stack developer with expertise in modern web technologies and IoT solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {summaryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-xl card-hover">
                <div className="text-accent-blue text-3xl mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-slate">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}