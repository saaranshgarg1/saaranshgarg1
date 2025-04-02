import { useEffect, useState, useCallback } from 'react';
import './Hero.css';
import projects from '../data/projectsData';
import ProjectModal from './ProjectModal';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeProject, setActiveProject] = useState(null);
    
    // Filter only featured projects for the hero slideshow
    const featuredProjects = projects.filter(project => project.featured);
    
    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => 
            prev === featuredProjects.length - 1 ? 0 : prev + 1
        );
    }, [featuredProjects.length]);

    const prevSlide = () => {
        setCurrentSlide(prev => 
            prev === 0 ? featuredProjects.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        setIsVisible(true);
        
        // Auto-rotate slides
        const interval = setInterval(() => {
            nextSlide();
        }, 7000);
        
        return () => clearInterval(interval);
    }, [nextSlide]);

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

    return (
        <section id="hero" className="hero">
            <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
                <div className="hero-text">
                    <p className="hero-intro">Hi, my name is</p>
                    <h1 className="hero-title">
                        <span className="name">Saaransh Garg</span>
                        <br />
                        <span className="tagline">I build AI-driven web solutions.</span>
                    </h1>
                    <p className="hero-subtitle">
                        I'm an undergraduate student pursuing a B.Tech in Artificial Intelligence and Data Engineering (AIDE) at IIT Ropar. Passionate about AI and web technologies, I love building innovative and efficient applications that solve real-world problems.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="primary-btn">View My Work</a>
                        <a href="#contact" className="outline-btn">Contact Me</a>
                    </div>
                </div>
                
                <div className="hero-slideshow">
                    <div className="slideshow-container">
                        <div className="slides-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {featuredProjects.map((project, index) => (
                                <div 
                                    key={project.id} 
                                    className="slide"
                                    onClick={() => openProjectModal(project)}
                                >
                                    <div className="slide-image">
                                        <img src={project.image} alt={project.title} />
                                        <div className="slide-overlay">
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                            <div className="slide-technologies">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="slide-tech-tag">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="slideshow-controls">
                            <button 
                                className="slide-control" 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevSlide();
                                }}
                            >
                                <span className="arrow-left">&#10094;</span>
                            </button>
                            <div className="slide-indicators">
                                {featuredProjects.map((_, index) => (
                                    <span 
                                        key={index} 
                                        className={`slide-indicator ${currentSlide === index ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentSlide(index);
                                        }}
                                    ></span>
                                ))}
                            </div>
                            <button 
                                className="slide-control" 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextSlide();
                                }}
                            >
                                <span className="arrow-right">&#10095;</span>
                            </button>
                        </div>
                    </div>
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

export default Hero;
