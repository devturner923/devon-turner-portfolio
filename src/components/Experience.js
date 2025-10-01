import React from 'react';

const Experience = () => {
  const experiences = [
    {
      date: "May 2022 - Present",
      title: "Senior Java Full Stack Developer",
      company: "Cognizant",
      description: "Led development of reactive microservices using Spring WebFlux, Kotlin, and Apache Kafka, boosting patient collections by 304%. Engineered AI-powered GPT platform with Azure OpenAI improving HR efficiency by 80%. Modernized global banking messaging platform achieving 10x faster throughput and eliminating $120K+ in annual licensing fees."
    },
    {
      date: "Jul 2019 - Apr 2022",
      title: "Senior Java Full Stack Developer",
      company: "Perficient",
      description: "Architected scalable Sitecore XP/Commerce platform with Spring Boot microservices driving 206% sales increase for Resideo. Led digital transformation for regional health system using AEM, Java, Angular, and React.js resulting in 10x app downloads. Improved supply chain transparency by 40% using event-driven architecture with Kafka."
    },
    {
      date: "Oct 2017 - Jun 2019",
      title: "Full Stack Java Developer",
      company: "The Innovia Group LLC",
      description: "Developed Community Cloud platform using Java, Spring Boot, Hibernate, and PostgreSQL serving 50K+ users. Reduced API response times by 20% and increased user engagement by 35%. Migrated legacy SOAP services to modern RESTful APIs and GraphQL improving system maintainability by 30%."
    },
    {
      date: "Jul 2014 - Aug 2017",
      title: "Java Developer",
      company: "Agilink Technologies",
      description: "Delivered Oil & Gas Operations Management Portal using Java 8, Spring MVC, and Hibernate improving field data processing by 40%. Architected secure Financial Services Client Portal with Spring Security, OAuth2, and JWT. Integrated legacy EHR systems via SOAP/REST APIs for unified practice management."
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="section-content">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          10+ years architecting enterprise solutions across healthcare, finance, and digital commerce
        </p>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-date">{exp.date}</div>
              <div className="experience-title">{exp.title}</div>
              <div className="experience-company">{exp.company}</div>
              <div className="experience-description">{exp.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

