import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, cardVariants } from '../utils/animations';

const Projects = () => {
  const projects = [
    {
      title: "Patient Collections Platform - 304% Revenue Increase",
      description: "Led development of reactive microservices using Spring WebFlux, Kotlin, and Apache Kafka for revenue cycle management. Consolidated preservice patient access functions including insurance verification, benefits review, and prior authorization. Achieved 304% increase in upfront collections within first year.",
      image: "/davidsonhomes-demo.png",
      technologies: ["Spring WebFlux", "Kotlin", "Apache Kafka", "Microservices", "Healthcare RCM"],
      liveUrl: "https://www.cognizant.com/us/en/case-studies/health-system-quadruples-patient-collections"
    },
    {
      title: "Azure OpenAI EdTech Platform - 80% Efficiency Gain",
      description: "Engineered AI-powered private GPT platform using Azure OpenAI and Spring Boot. Built intelligent tutor and instructor assistant bots that transformed HR resume processing with 80% efficiency improvement. Integrated Azure Cognitive Services for advanced NLP capabilities.",
      image: "/hotel-royal-demo.png",
      technologies: ["Azure OpenAI", "Spring Boot", "GPT", "NLP", "Azure Cognitive Services"],
      liveUrl: "https://www.cognizant.com/us/en/case-studies/edtech-openai-student-success"
    },
    {
      title: "Global Banking Messaging Platform Modernization",
      description: "Modernized enterprise banking messaging platform using Spring Integration and Apache Kafka. Eliminated $120K+ in annual licensing fees while achieving 10x faster message throughput. Implemented event-driven architecture for real-time processing of banking transactions.",
      image: "/hermitage-demo.png",
      technologies: ["Spring Integration", "Apache Kafka", "Event-Driven", "Microservices", "Banking"],
      liveUrl: "https://www.cognizant.com/us/en/case-studies/global-banking-messaging-platform"
    },
    {
      title: "Healthcare Claims Processing Automation",
      description: "Architected intelligent claims processing system using Spring Boot microservices and RPA. Improved auto-adjudication rate from 59% to 87% and payment accuracy from 93% to 99%. Delivered $30M in savings over three years processing 3.5M+ claims monthly.",
      image: "/offorte-demo.png",
      technologies: ["Spring Boot", "RPA", "Java EE", "PostgreSQL", "Healthcare Claims"],
      liveUrl: "https://www.cognizant.com/us/en/case-studies/claims-processing-automation-drives-efficiencies"
    },
    {
      title: "Regional Health System Digital Transformation",
      description: "Led digital transformation using Adobe Experience Manager (AEM), Java, Spring Boot, Angular, and React.js. Modernized patient portal and provider systems resulting in 10x mobile app downloads and 175% conversion rate improvement. Enhanced patient engagement across all digital touchpoints.",
      image: "/davidsonhomes-demo.png",
      technologies: ["AEM", "Spring Boot", "Angular", "React", "Digital Health"],
      liveUrl: "https://www.perficient.com/success-stories/prominent-health-system"
    },
    {
      title: "Healthcare Technical Debt Elimination",
      description: "Modernized legacy enrollment system for PacificSource health plan using Spring Boot and cloud-native architecture. Reduced member enrollment confirmation from days to 24 hours. Decommissioned custom code saving countless programming hours and enabling staff to focus on strategic initiatives.",
      image: "/hotel-royal-demo.png",
      technologies: ["Spring Boot", "Cloud Migration", "Legacy Modernization", "PostgreSQL"],
      liveUrl: "https://www.cognizant.com/us/en/case-studies/healthcare-technical-debt"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="section-content">
        <motion.h2 
          className="section-title"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Transformative enterprise solutions delivering measurable business impact
        </motion.p>
        
        <motion.div 
          className="projects-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Project image removed per request */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex} 
                      className="tech-tag"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                    View Case Study
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
