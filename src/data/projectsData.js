const projects = [
  {
    id: 1,
    title: "Entry-Exit Surveillence system",
    description: "A computer vision system integrating person tracking, face recognition, and depth-based door detection to monitor entry and exit events accurately.",
    image: "/assets/surveillence.png",
    url: null,
    code: "https://github.com/saaranshgarg1/Entry-Exit-Surveillence-System",
    technologies: ["Python", "OpenCV", "YOLO", "Image Segmentation", "Face Recognition", "Depth Recognition"],
    featured: true,
    category: "Computer Vision"
  },
  {
    id: 2,
    title: "3D Gesture Control",
    description: "A web application that allows users to control 3D models using hand gestures. It uses mediapipe for real-time gesture recognition and three.js for rendering 3D graphics.",
    image: "/assets/3d-gest0-control.png",
    url: "https://saaranshgarg1.github.io/3d-gest-control",
    code: "https://github.com/saaranshgarg1/3d-gest-control",
    technologies: ["React", "three.js", "Mediapipe"],
    featured: true,
    category: "frontend"
  },
  {
    id: 3,
    title: "MNIST Digit Recognizer + Visualizer",
    description: "A web application that recognizes handwritten digits using a neural network. It includes a visualizer to show how the model processes the input and makes predictions.",
    image: "/assets/DigitsRecogn.png",
    url: "https://saaranshgarg1.github.io/DigitsRecogn/",
    code: "https://github.com/saaranshgarg1/DigitsRecogn",
    technologies: ["React.js", "Tensorflow.js"],
    featured: true,
    category: "AI"
  },
  {
    id: 4,
    title: "Rock-Paper-Scissors AI",
    description: "An interactive game where users can play Rock-Paper-Scissors against an AI. The AI learns from user inputs and improves its strategy over time.",
    image: "/assets/rps-ai.png",
    url: "https://agamw017.github.io/rps-ai/",
    code: "https://github.com/AgamW017/rps-ai",
    technologies: ["React.js", "Tensorflow.js", "Reinforcement Learning"],
    featured: false,
    category: "AI"
  }
];

export default projects;