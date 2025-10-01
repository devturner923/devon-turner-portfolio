import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section education">
      <div className="section-content">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Formal academic foundation in computer science
        </p>

        <div className="skill-category" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="fas fa-graduation-cap"></i>
            Bachelor of Science in Computer Science
          </h3>
          <div style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
            Louisiana State University (LSU)
          </div>
          <div style={{ color: '#3b82f6', fontWeight: 600 }}>
            Sep 2010 – May 2014
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;


