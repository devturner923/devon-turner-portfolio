import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Java & JVM Languages",
      icon: "fas fa-code",
      skills: ["Java 8-21", "Kotlin", "Scala", "Spring Boot", "Spring WebFlux", "Spring Security", "Hibernate", "Quarkus", "Micronaut"]
    },
    {
      title: "Frontend Development",
      icon: "fas fa-laptop-code",
      skills: ["React.js", "Angular 12+", "TypeScript", "JavaScript", "HTML5", "CSS3", "AngularJS", "Responsive Design"]
    },
    {
      title: "Cloud & Infrastructure",
      icon: "fas fa-cloud",
      skills: ["AWS (EKS, Lambda, SQS/SNS)", "Azure", "Google Cloud", "Docker", "Kubernetes", "Helm", "OpenShift", "Terraform"]
    },
    {
      title: "Data & Messaging",
      icon: "fas fa-database",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Apache Kafka", "Spring Data", "JPA", "SQL"]
    },
    {
      title: "AI & Machine Learning",
      icon: "fas fa-brain",
      skills: ["Azure OpenAI", "TensorFlow", "Azure Cognitive Services", "GPT Integration", "ML Model Integration", "Python"]
    },
    {
      title: "DevOps & Tools",
      icon: "fas fa-tools",
      skills: ["Jenkins", "GitLab CI/CD", "Maven", "Gradle", "JUnit", "Mockito", "Selenium", "SonarQube", "Ansible"]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="section-content">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Enterprise-grade technologies I leverage to build scalable, high-performance solutions
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>
                <i className={category.icon}></i>
                {category.title}
              </h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

