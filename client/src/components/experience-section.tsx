export default function ExperienceSection() {
  const experiences = [
    {
      period: "December 2021 - Present",
      title: "Senior Principal Software Engineer",
      company: "Dell Technologies",
      location: "Bangalore, India",
      duration: "3+ years",
      description: "Leading enterprise software architecture and development initiatives. Promoted to Senior Principal Engineer in 2024. Design and implement scalable solutions for enterprise-level applications. Mentor technical teams and drive innovation in software development practices including DevOps automation and AI/ML integration.",
      technologies: ["React", "Node.js", "Microservices", "DevOps", "AI/ML", "Cloud Architecture", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      isRight: false
    },
    {
      period: "September 2019 - December 2021",
      title: "Senior Full Stack Developer",
      company: "ViMo Software Development Pvt Ltd",
      location: "Bangalore, India",
      duration: "2 years 3 months",
      description: "Develop high-quality software design and architecture. Identify, prioritize and execute tasks in the software development life cycle. Develop tools and applications by producing clean, efficient code. Automate tasks through appropriate tools and scripting.",
      technologies: ["React", "Node.js", "MongoDB", "Material UI"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      isRight: true
    },
    {
      period: "October 2018 - August 2019",
      title: "Senior Software Engineer",
      company: "Persistent Systems Limited",
      location: "Bangalore, India",
      duration: "10 months",
      description: "Worked at Intuit & Carousell Bangalore. (On client Location). Developed high-quality software design and architecture. Identify, prioritize and execute tasks in the software development life cycle. Develop tools and applications by producing clean, efficient code.",
      technologies: ["Node.js", "Angular 8", "TypeScript", "MongoDB"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      isRight: false
    },
    {
      period: "February 2018 - October 2018",
      title: "Senior Software Engineer",
      company: "Above Solution",
      location: "Bangalore, India",
      duration: "8 months",
      description: "Developed high-quality software design and architecture. Identify, prioritize and execute tasks in the software development life cycle. Develop tools and applications by producing clean, efficient code. Automate tasks through appropriate tools and scripting.",
      technologies: ["React", "AWS Lambda", "API Gateway", "MongoDB"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      isRight: true
    },
    {
      period: "January 2017 - January 2018",
      title: "Software Engineer",
      company: "Global Edge Software Pvt. Ltd",
      location: "Bangalore, India",
      duration: "1 year",
      description: "NodeJS (Full-Stack), IoT, Good in end-to-end application development. Execute the full software development life cycle (SDLC). Develop flowcharts, layouts and documentation to identify requirements and solutions.",
      technologies: ["Node.js", "Sails.js", "MQTT", "Socket.io"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      isRight: false
    },
    {
      period: "October 2015 - December 2016",
      title: "Jr. Software Engineer",
      company: "Dream Tekis Pvt. Ltd",
      location: "Bangalore, India",
      duration: "1 year 2 months",
      description: "Execute the full software development life cycle (SDLC). Develop flowcharts, layouts and documentation to identify requirements and solutions. Develop tools and applications by producing clean, efficient code. Troubleshoot, debug and upgrade existing systems.",
      technologies: ["PHP", "Laravel", "CouchBase DB", "iOS"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      isRight: true
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Job History</h2>
          <p className="text-slate text-lg">A journey through my career progression and key achievements</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 md:items-center ${exp.isRight ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`timeline-item ${exp.isRight ? 'md:col-start-2' : 'md:text-right'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                    <div className="text-sm text-accent-blue font-semibold mb-2">{exp.period}</div>
                    <h3 className="text-xl font-bold text-navy mb-2">{exp.title}</h3>
                    <p className="text-accent-blue font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-600 mb-1">{exp.duration} | {exp.location}</p>
                    <p className="text-slate mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="bg-blue-100 text-accent-blue px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`hidden md:block ${exp.isRight ? 'md:col-start-1' : ''}`}>
                  <img 
                    src={exp.image} 
                    alt={`${exp.company} workspace`} 
                    className="rounded-xl shadow-lg w-full h-64 object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}