import { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
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

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fadeIn' : ''}`}>About Me</h2>

        <div className="about-content">
          <div className={`about-text ${isVisible ? 'fadeIn' : ''}`} style={{ animationDelay: '0.2s' }}>
            <p>I'm an undergraduate student at IIT Ropar, pursuing a B.Tech in Artificial Intelligence and Data Engineering (AIDE). Passionate about AI and web technologies, I love building scalable applications that solve real-world problems.</p>
            <p>Beyond academics, I'm an avid competitive programmer, actively participating in Codeforces and coding contests to refine my problem-solving skills. I enjoy tackling complex algorithms and contributing to open-source projects, collaborating with the tech community to build innovative solutions.</p>
            <p>Skilled in Python, JavaScript, React.js, and TensorFlow.js, I thrive in dynamic environments where I can apply my expertise to AI-driven applications and interactive web platforms.</p>
            <p>When I'm not coding, I explore my creative side through origami, appreciating the precision and logic it shares with programming. Always eager to learn and innovate, I love discussing AI trends, working on exciting projects, and pushing boundaries in tech.</p>
            <p>Let's connect and create something amazing! 🚀</p>
          </div>

          <div className={`about-image ${isVisible ? 'fadeIn' : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className="image-wrapper">
              <img src="https://avatars.githubusercontent.com/u/68538240?v=4" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
