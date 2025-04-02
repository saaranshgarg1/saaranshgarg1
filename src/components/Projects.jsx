import { useState, useEffect } from 'react';
import './Projects.css';
import projects from '../data/projectsData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 200) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on first render
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openProjectModal = (project) => {
    setActiveProject(project);
    // Stop body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setActiveProject(null);
    // Restore body scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  // Get unique categories from projects
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fadeIn' : ''}`}>My Projects</h2>
        
        <div className={`filter-buttons ${isVisible ? 'fadeIn' : ''}`} style={{animationDelay: '0.2s'}}>
          {categories.map(category => (
            <button 
              key={category}
              className={filter === category ? 'active' : ''} 
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${isVisible ? 'fadeIn' : ''}`}
              style={{animationDelay: `${0.2 + index * 0.1}s`}}
              onClick={() => openProjectModal(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span>View Project</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Use the shared ProjectModal component */}
      {activeProject && (
        <ProjectModal 
          project={activeProject} 
          onClose={closeProjectModal} 
        />
      )}
    </section>
  );
};

export default Projects;
