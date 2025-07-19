import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, ExternalLink, Code, Globe, Users, Clock, Target, Lightbulb, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('classic_bw'); // 'light' or 'classic_bw'
  
  // Ref for the canvas element
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // --- Particle Dots Effect ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
      x: null,
      y: null,
      radius: 150 // Area of attraction
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    let particlesArray = [];

    class Particle {
      constructor(x, y, size, color, weight) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.weight = weight; // How much it's affected by the cursor
        this.baseX = this.x;
        this.baseY = this.y;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Calculate distance from mouse
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        
        // The force is stronger the closer the particle is to the mouse
        let force = (mouse.radius - distance) / mouse.radius;
        if (force < 0) force = 0;

        // Apply the force towards the mouse
        let directionX = forceDirectionX * force * this.weight;
        let directionY = forceDirectionY * force * this.weight;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // If outside the radius, gently return to base position
          if (this.x !== this.baseX) {
            let dx_base = this.x - this.baseX;
            this.x -= dx_base / 10;
          }
          if (this.y !== this.baseY) {
            let dy_base = this.y - this.baseY;
            this.y -= dy_base / 10;
          }
        }
      }
    }

    function init() {
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 1.5) + 1;
        let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
        let color = 'rgba(200, 200, 200, 0.4)';
        let weight = 1 + Math.random() * 2;
        particlesArray.push(new Particle(x, y, size, color, weight));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        mouse.radius = 150;
        init();
    }
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };

  }, []); // Empty array ensures this effect runs only once on mount.


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'classic_bw' : 'light');
  };

  const projects = [
    {
  "title": "Handwritten Digit Recognition - Neural Network from Scratch",
  "description": "A neural network-based system to recognize handwritten digits (MNIST) using custom-built models with 0, 1, and 2 hidden layers. Designed to explore learning behavior through visualizations and mathematical understanding.",
  "tech": ["Python", "TensorFlow", "NumPy", "Matplotlib", "Seaborn", "Maths"],
  "link": "https://github.com/akshat16206/HWNR", 
  "features": [
    "Built neural networks with 0, 1, and 2 hidden layers to compare accuracy and learning",
    "Used TensorFlow for model building and training",
    "Applied NumPy and math for data manipulation and matrix operations",
    "Visualized training performance using Matplotlib and Seaborn",
    "Explored how model depth impacts learning and generalization"
  ]
},
{
  "title": "Stock Price Forecasting with Chronos-T5-Tiny",
  "description": "A time-series forecasting project that predicts future stock prices using the Chronos-T5-Tiny model. Combines financial data processing with advanced transformer-based prediction to visualize potential trends in market behavior.",
  "tech": ["Python", "Chronos-T5-Tiny", "yfinance", "Pandas", "Matplotlib", "Torch", "Transformers", "Accelerate", "Scikit-learn"],
  "link": "https://github.com/akshat16206/qtm", 
  "features": [
    "Downloaded real historical stock data using yfinance",
    "Preprocessed and scaled data using pandas and scikit-learn",
    "Used Chronos-T5-Tiny with PyTorch and Accelerate for future prediction",
    "Predicted next 5-day prices with probabilistic sampling",
    "Visualized actual vs predicted prices using matplotlib"
  ]
},
   {
  title: "Idea Capture AI - Offline Voice-to-Text Notebook",
  description: "A fully offline AI assistant that captures your spoken ideas, transcribes them using whisper.cpp, summarizes them with llama.cpp + Mistral, and saves them in a searchable local notebook.",
  tech: ["Python", "whisper.cpp", "llama.cpp", "Mistral 7B", "JSON"],
  link: "https://github.com/akshat16206/idea-capture-ai",
  features: [
    "Real-time voice recording with Python and sounddevice",
    "Offline transcription using whisper.cpp (no internet/API)",
    "Summarization using local LLM (llama.cpp + Mistral)",
    "Ideas auto-saved into JSON with timestamp and summary",
    "Search interface to retrieve ideas via keywords"
  ]
},
    {
      title: "AI-ChatBot - Python Project",
      description: "A terminal-based AI chatbot integrating OpenAI and Anthropic APIs with enhanced information retrieval capabilities through Wikipedia and DuckDuckGo integration.",
      tech: ["Python", "LangChain", "OpenAI API", "Anthropic API"],
      link: "https://github.com/akshat16206/AI-chat-box",
      features: [
        "Modular chatbot architecture using LangChain",
        "Multi-API support (OpenAI & Anthropic)",
        "Wikipedia and DuckDuckGo tool integration",
        "Secure environment-based API configuration",
        "Command-line interface design"
      ]
    },
    {
      title: "Ethereum ToDo List - Decentralized Application",
      description: "A full-stack decentralized ToDo List dApp built with Solidity, Truffle, and Web3.js. Users can manage tasks on the Ethereum blockchain with MetaMask integration.",
      tech: ["Solidity", "Truffle", "Web3.js", "MetaMask", "Ganache", "HTML/CSS"],
      link: "https://github.com/akshat16206/eth-to-do-list",
      features: [
        "Immutable task storage on Ethereum blockchain",
        "MetaMask wallet integration for secure transactions",
        "Local blockchain development with Ganache",
        "Responsive frontend design",
        "Full-stack dApp development experience"
      ]
    },
    {
      title: "Blockchain Simulation - Python Project",
      description: "A Python-based blockchain simulator demonstrating core blockchain concepts including blocks, hashing, and proof-of-work for data integrity and security.",
      tech: ["Python", "SHA-256", "Cryptography"],
      link: "https://github.com/akshat16206/blockchain-stimulation",
      features: [
        "SHA-256 hashing implementation",
        "Proof-of-work consensus mechanism",
        "Block linking and chain validation",
        "Data tampering detection demo",
        "Educational blockchain model"
      ]
    },
    {
      title: "Cyber Threat Detector - Python Project",
      description: "An AI-powered cybersecurity tool that detects real-time threats and uses blockchain technology for secure, anonymous vulnerability reporting.",
      tech: ["Python", "Machine Learning", "Blockchain", "AI"],
      link: "https://github.com/akshat16206/hackathon",
      features: [
        "Real-time cyber threat detection",
        "Machine learning pattern recognition",
        "Suspicious activity identification",
        "Blockchain-based secure reporting",
        "AI-driven security analysis"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "C", "C++", "JavaScript", "TypeScript", "SQL", "PostgreSQL", "Solidity", "Rust","JSON"],
    "Frameworks & Libraries": ["React", "Flask", "Django", "LangChain", "Tkinter","LLM","Pandas","Numpy","Seaborn","Matplotlib","Tensorflow","ScikitLearn"],
    "Tools & Technologies": ["Docker", "AWS","Data Analytics","Truffle", "Ganache", "Git","kubernetes","Keras","TensorBoard","Jupyter Notebook","Pyenv","Rest API"],
    "Specialized Skills": [ "Machine Learning", "LLM Integration", "Smart Contracts", "Web3","DeepLearning","Neural Networks","Mathematics with Applications in Finance","Natural Language Processing (NLP)","Generative AI","Model Evaluation and Improvement","Speech Recognition","Blockchain Development"]
  };

  const softSkills = [
    { name: "Collaboration", icon: Users },
    { name: "Problem-solving", icon: Lightbulb },
    { name: "Communication", icon: Globe },
    { name: "Time Management", icon: Clock },
    { name: "Result-oriented", icon: Target },
    { name: "Creativity", icon: Code }
  ];

  const GlobalStyles = () => (
    <style>{`
      /* --- GLOBAL STYLES --- */
      
      #particle-canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        pointer-events: none;
      }
      
      /* Ensure main content appears above the particle canvas */
      nav, section, footer {
        position: relative;
        z-index: 2;
      }

      /* Texture Overlay Effect */
      .bg-texture-overlay::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-image: url('http://googleusercontent.com/file_content/0');
        background-repeat: repeat;
        opacity: 0.04; 
        pointer-events: none;
        z-index: 0; /* Behind canvas and content */
      }
      
      /* Apply classic font to all headings, regardless of theme */
      h1, h2, h3, h4 {
        font-family: 'Georgia', 'Times New Roman', serif;
      }

      /* --- CLASSIC B&W THEME --- */
      .theme-classic-bw {
        background: #212121;
        color: #f0f0f0;
        font-family: 'Georgia', serif;
      }
      .theme-classic-bw #particle-canvas {
        /* Optional: make particles slightly different on dark theme */
        /* For now, they will have the same color */
      }
      /* Increase texture opacity for dark theme */
      .theme-classic-bw.bg-texture-overlay::before {
        opacity: 0.08;
      }
      .theme-classic-bw .text-black-800 { color: #ffffff; }
      .theme-classic-bw .text-black-700 { color: #e0e0e0; }
      .theme-classic-bw .text-black-600 { color: #b0b0b0; }
      .theme-classic-bw .text-black-500 { color: #888888; }
      .theme-classic-bw .bg-white\\/90 { background-color: rgba(10, 10, 10, 0.8); backdrop-filter: blur(10px); border-bottom: 1px solid #333; }
      .theme-classic-bw .bg-white, .theme-classic-bw .bg-white\\/30 { background-color: #333; }
      .theme-classic-bw .shadow-xl { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3); }
      .theme-classic-bw .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3); }
      .theme-classic-bw a, .theme-classic-bw button { color: #f0f0f0; }
      .theme-classic-bw .hover\\:text-black-700:hover { color: #ffffff; }
      .theme-classic-bw .bg-black-600 { background-color: #f0f0f0; color: #111; }
      .theme-classic-bw .bg-black-600:hover { background-color: #cccccc; }
      .theme-classic-bw .bg-black-100 { background-color: #444; }
      .theme-classic-bw .border-black-200 { border-color: #555; }
      .theme-classic-bw .bg-black-400 { background-color: #666; }
      .theme-classic-bw .text-white { color: #111; }
      .theme-classic-bw .w-32.h-32.bg-gradient-to-br { background: linear-gradient(to br, #eee, #999); }
    `}</style>
  );

  return (
    <div className={`${theme === 'classic_bw' ? 'theme-classic-bw' : 'bg-gradient-to-br from-black-50 via-yellow-50 to-orange-50'} bg-texture-overlay`}>
      <canvas ref={canvasRef} id="particle-canvas" />
      <GlobalStyles />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-black-800">Akshat Gupta</div>
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${activeSection === section ? 'text-black-700 font-semibold' : 'text-black-600 hover:text-black-700'}`}
                >
                  {section}
                </button>
              ))}
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black-200 transition-colors">
                {theme === 'light' ? <Moon className="w-5 h-5 text-black-700" /> : <Sun className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-black-800 mb-4">
              Akshat <span className="text-black-600">Gupta</span>
            </h1>
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="text-right">
                <h2 className="text-2xl md:text-3xl text-black-700 font-light">DeepLearning</h2>
                <p className="text-black-600">Enthusiast</p>
              </div>
              <div className="w-32 h-32 bg-gradient-to-br from-black to-white rounded-full flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl md:text-3xl text-black-700 font-light">Generative AI</h2>
                <p className="text-black-600">Developer & Innovator</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-black-700 mb-8 max-w-3xl mx-auto">
            CS Major student skilled in DeepLearning, AI development, Neural Networks, Model training,Blockchain Development, Data Management.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/akshat16206" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6 text-black-700" />
            </a>
            <a href="https://www.linkedin.com/in/hermits/" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6 text-black-700" />
            </a>
            <a href="https://x.com/akshat8036" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Twitter className="w-6 h-6 text-black-700" />
            </a>
            <a href="https://www.instagram.com/a_kshat007/" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Instagram className="w-6 h-6 text-black-700" />
            </a>
          </div>
          
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-black-600 text-black px-8 py-3 rounded-full font-semibold hover:bg-black-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black-800 text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-black-800 mb-4">Education</h3>
                <div className="border-l-4 border-black-400 pl-6">
                  <h4 className="text-xl font-semibold text-black-700">Bachelor of Technology - Computer Science Engineering</h4>
                  <p className="text-black-600">Madhav Institute of Technology & Science</p>
                  <p className="text-black-500">Madhya Pradesh, India • Sept 2024 - Present</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-black-800 mb-6">Who I Am</h3>
              <p className="text-black-700 mb-4 leading-relaxed">
                I'm a passionate Computer Science Engineering student with a deep fascination for Deep DeepLearning, LLMs, blockchain technology and artificial intelligence. My journey in tech is driven by a desire to create innovative solutions that bridge the gap between traditional development and cutting-edge technologies.
              </p>
              <p className="text-black-700 mb-6 leading-relaxed">
                From building Neural Networks with hidden layers to making decentralized applications on Ethereum and developing AI-powered chatbots and cybersecurity tools, I enjoy exploring the intersection of different technologies to create meaningful projects that solve real-world problems.
              </p>
              
              <h4 className="text-xl font-semibold text-black-800 mb-4">Soft Skills</h4>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-md">
                      <IconComponent className="w-5 h-5 text-black-600" />
                      <span className="text-black-700 font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black-800 text-center mb-16">My Work</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-black-800">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-6 h-6 text-black-600 cursor-pointer hover:text-black-700" />
                  </a>
                </div>
                
                <p className="text-black-700 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black-800 mb-3">Key Features:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-black-600 flex items-center">
                        <div className="w-2 h-2 bg-black-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-black-100 text-black-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black-800 text-center mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-8 bg-black-400 rounded-full mr-4"></div>
                  <h3 className="text-xl font-bold text-black-800">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill, idx) => (
                    <span key={idx} className="bg-black-50 text-black-700 px-4 py-2 rounded-lg font-medium border border-black-200 hover:bg-black-100 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black-800 mb-8">Get In Touch</h2>
          <p className="text-lg text-black-700 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and innovation. Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <Mail className="w-8 h-8 text-black-600 mx-auto mb-4" />
              <h3 className="font-semibold text-black-800 mb-2">Email</h3>
              <a href="mailto:akshat8036@gmail.com" className="text-black-600 hover:text-black-700">
                akshat8036@gmail.com
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <Phone className="w-8 h-8 text-black-600 mx-auto mb-4" />
              <h3 className="font-semibold text-black-800 mb-2">Phone</h3>
              <a href="tel:+919120692201" className="text-black-600 hover:text-black-700">
                +91-9120692201
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <MapPin className="w-8 h-8 text-black-600 mx-auto mb-4" />
              <h3 className="font-semibold text-black-800 mb-2">Location</h3>
              <p className="text-black-600">Madhya Pradesh, India</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/akshat16206" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Github className="w-8 h-8 text-black-700" />
            </a>
            <a href="https://www.linkedin.com/in/hermits/" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Linkedin className="w-8 h-8 text-black-700" />
            </a>
            <a href="https://x.com/akshat8036" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Twitter className="w-8 h-8 text-black-700" />
            </a>
            <a href="https://www.instagram.com/a_kshat007/" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Instagram className="w-8 h-8 text-black-700" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black-800 text-white-0 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; 2025 Akshat Gupta. All rights reserved.</p>
          <p className="text-black-200">Built with React • Designed with passion</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;