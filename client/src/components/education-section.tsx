import { GraduationCap, Award, CheckCircle } from "lucide-react";

export default function EducationSection() {
  const certifications = [
    {name: "An Introduction to Generative AI", link:"https://skillsoft.digitalbadges.skillsoft.com/32d08efb-0862-4e9e-a3f6-498efac33993"},
    {name: "Artificial Intelligence and Machine Learning", link:"https://skillsoft.digitalbadges.skillsoft.com/b98dc3b6-4c2c-454b-9f45-aad3581f183b"},
    {name: "Case Studies in Prompt Engineering", link:"https://skillsoft.digitalbadges.skillsoft.com/04d090f8-20f0-45a2-98c7-a59064fb6501"},
    { name: "Deep Learning and Neural Networks", link: "https://skillsoft.digitalbadges.skillsoft.com/4b616640-7745-477e-8fbe-6747cdf4d208" },
    { name: "Exploring Prompt Engineering Techniques", link: "https://skillsoft.digitalbadges.skillsoft.com/489c75e4-dcd6-4c14-9bb8-af6dd8a57278" },
    { name: "Generative AI and Its Impact to Everyday Business", link: "https://skillsoft.digitalbadges.skillsoft.com/7dc06836-778c-4f08-869a-3f0a50245f27" },
    { name: "Leveraging AI as a Team Member", link: "https://skillsoft.digitalbadges.skillsoft.com/7a0d5bf5-2b0b-4d8e-969d-c7cf05087db1" },
    { name: "Navigating AI Ethical Challenges and Risks", link: "https://skillsoft.digitalbadges.skillsoft.com/c9a789ca-a111-4a09-8949-3974a23991f8" },
    { name: "NGINX CORE", link: "https://media.licdn.com/dms/document/media/v2/D4D2DAQETZ0EWYNWz2w/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1713447212097?e=1756339200&v=beta&t=rcuWfUZ2s4DMSWOHcSgIIw1hTV9ktcJXfPZm-dH_-JM" },
    { name: "Cybersecurity for Industrial Control Systems", link: "https://www.linkedin.com/company/us-department-of-homeland-security/" },
    { name: "AMCAT Certified Data Processing Specialist", link: "https://www.myamcat.com/certificate/1713296/data-processing-specialist/211" },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Education</h2>
          <p className="text-slate text-lg">Academic foundation and continuous learning</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md card-hover">
            <div className="text-accent-blue text-4xl mb-4">
              <GraduationCap className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Bachelor of Engineering</h3>
            <p className="text-accent-blue font-medium mb-2">Information Technology</p>
            <p className="text-slate mb-4">Graduated: December 2015</p>
            <p className="text-sm text-slate">
              Strong foundation in computer science fundamentals, software engineering principles, and information technology systems.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md card-hover">
            <div className="text-accent-blue text-4xl mb-4">
              <Award className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">Professional Certifications</h3>
            <ul className="text-slate space-y-2">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-2 flex-shrink-0" />
                  <a href={cert.link} target="_blank"><span>{cert.name}</span></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}