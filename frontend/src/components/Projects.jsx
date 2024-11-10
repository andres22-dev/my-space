import React from 'react';


const ProjectCard = ({ title, description, link }) => {

  return(
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
    </div>
  
  )
  
  }

const Projects = () => {

  const projects = [
    { title: 'Proyecto 1', description: 'Descripción breve', link: '#' },
    { title: 'Proyecto 2', description: 'Descripción breve', link: '#' },
  ];

  return (
    <section id="projects">
      <h2>Mis Proyectos</h2>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
    
}
  
export default Projects