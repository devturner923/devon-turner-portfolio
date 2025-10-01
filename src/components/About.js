import React from 'react';

const About = () => {
  const skills = [
    'Java', 'Spring Boot', 'Kotlin', 'Microservices', 'React', 'Angular',
    'AWS', 'Azure', 'Kubernetes', 'Kafka', 'PostgreSQL', 'AI/ML'
  ];

  return (
    <section id="about" className="section about">
      <div className="section-content">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          "Elegant solutions stem from deep understanding."
        </p>
        
        <div className="about-content" style={{ gridTemplateColumns: '1fr' }}>
          <div className="about-text">
            <h3>Enterprise Architect & Full-Stack Developer</h3>
            <p>
              With 10+ years of experience architecting enterprise applications, I specialize in 
              building cloud-native microservices and modernizing legacy systems. My work has driven 
              304% revenue increases, eliminated $120K+ in licensing costs, and transformed digital 
              experiences for healthcare, finance, and e-commerce clients.
            </p>
            <p>
              My expertise spans the full Java ecosystem—Spring Boot, Spring WebFlux, Hibernate—combined 
              with modern frontend frameworks like React and Angular. I architect secure, scalable solutions 
              using AWS, Azure, Kubernetes, and event-driven architectures with Apache Kafka.
            </p>
            <p>
              I'm passionate about integrating AI/ML into enterprise applications, having built GPT-powered 
              platforms that improved efficiency by 80%. I believe in mentoring teams, fostering technical 
              excellence, and delivering solutions that create measurable business impact.
            </p>
            
            <div className="about-skills">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          {/* Removed about image per request */}
        </div>
      </div>
    </section>
  );
};

export default About;

