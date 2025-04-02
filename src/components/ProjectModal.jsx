import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  
  return (
    <div className="project-modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h3>{project.title}</h3>
        <div className="project-frame-container">
          {project.url && (
            <iframe 
              src={project.url}
              title={project.title}
              allow="camera; microphone; fullscreen"
              className="project-frame"
              sandbox="allow-scripts allow-same-origin"
            />
          )}
          {!project.url && (
            <img src={project.image} alt={project.title} className="project-frame" />
          )}
        </div>
        <p>{project.description}</p>
        <div className="project-tech modal-tech">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="modal-actions">
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="primary-btn">
            Live Demo
          </a>)}
          <a href={project.code} target="_blank" rel="noopener noreferrer" className="outline-btn">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
