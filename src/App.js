import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, ExternalLink, Code, Globe, Users, Clock, Target, Lightbulb } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const projects = [
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
    "Programming Languages": ["Python", "C", "C++", "JavaScript", "TypeScript", "SQL", "PostgreSQL", "Solidity", "Rust"],
    "Frameworks & Libraries": ["React", "Flask", "Django", "LangChain", "Tkinter"],
    "Tools & Technologies": ["Docker", "AWS", "Truffle", "Ganache", "Git"],
    "Specialized Skills": ["Blockchain Development", "Machine Learning", "LLM Integration", "Smart Contracts", "Web3"]
  };

  const softSkills = [
    { name: "Collaboration", icon: Users },
    { name: "Problem-solving", icon: Lightbulb },
    { name: "Communication", icon: Globe },
    { name: "Time Management", icon: Clock },
    { name: "Result-oriented", icon: Target },
    { name: "Creativity", icon: Code }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-amber-800">Akshat Gupta</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${activeSection === section ? 'text-amber-700 font-semibold' : 'text-amber-600 hover:text-amber-700'}`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-amber-800 mb-4">
              Akshat <span className="text-amber-600">Gupta</span>
            </h1>
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="text-right">
                <h2 className="text-2xl md:text-3xl text-amber-700 font-light">Blockchain</h2>
                <p className="text-amber-600">Developer & Innovator</p>
              </div>
              <div className="w-32 h-32 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl md:text-3xl text-amber-700 font-light">AI & Web3</h2>
                <p className="text-amber-600">Enthusiast</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-amber-700 mb-8 max-w-3xl mx-auto">
            Computer Science Engineering student passionate about blockchain technology, AI development, and creating innovative decentralized applications that shape the future of technology.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/akshat16206" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6 text-amber-700" />
            </a>
            <a href="https://www.linkedin.com/in/hermits/" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6 text-amber-700" />
            </a>
            <a href="https://x.com/akshat8036" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Twitter className="w-6 h-6 text-amber-700" />
            </a>
            <a href="https://www.instagram.com/a_kshat007/" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Instagram className="w-6 h-6 text-amber-700" />
            </a>
          </div>
          
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-800 text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Education</h3>
                <div className="border-l-4 border-amber-400 pl-6">
                  <h4 className="text-xl font-semibold text-amber-700">Bachelor of Technology - Computer Science Engineering</h4>
                  <p className="text-amber-600">Madhav Institute of Technology & Science</p>
                  <p className="text-amber-500">Madhya Pradesh, India • Sept 2024 - Present</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-amber-800 mb-6">Who I Am</h3>
              <p className="text-amber-700 mb-4 leading-relaxed">
                I'm a passionate Computer Science Engineering student with a deep fascination for blockchain technology and artificial intelligence. My journey in tech is driven by a desire to create innovative solutions that bridge the gap between traditional development and cutting-edge decentralized technologies.
              </p>
              <p className="text-amber-700 mb-6 leading-relaxed">
                From building decentralized applications on Ethereum to developing AI-powered chatbots and cybersecurity tools, I enjoy exploring the intersection of different technologies to create meaningful projects that solve real-world problems.
              </p>
              
              <h4 className="text-xl font-semibold text-amber-800 mb-4">Soft Skills</h4>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-md">
                      <IconComponent className="w-5 h-5 text-amber-600" />
                      <span className="text-amber-700 font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-800 text-center mb-16">Featured Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-amber-800">{project.title}</h3>
                  <ExternalLink className="w-6 h-6 text-amber-600 cursor-pointer hover:text-amber-700" />
                </div>
                
                <p className="text-amber-700 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-amber-800 mb-3">Key Features:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-amber-600 flex items-center">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
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
          <h2 className="text-4xl font-bold text-amber-800 text-center mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-8 bg-amber-400 rounded-full mr-4"></div>
                  <h3 className="text-xl font-bold text-amber-800">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill, idx) => (
                    <span key={idx} className="bg-amber-50 text-amber-700 px-4 py-2 rounded-lg font-medium border border-amber-200 hover:bg-amber-100 transition-colors duration-200">
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
      <section id="contact" className="py-20 px-6 bg-white/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-800 mb-8">Get In Touch</h2>
          <p className="text-lg text-amber-700 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and innovation. Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <Mail className="w-8 h-8 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-amber-800 mb-2">Email</h3>
              <a href="mailto:akshat8036@gmail.com" className="text-amber-600 hover:text-amber-700">
                akshat8036@gmail.com
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <Phone className="w-8 h-8 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-amber-800 mb-2">Phone</h3>
              <a href="tel:+919120692201" className="text-amber-600 hover:text-amber-700">
                +91-9120692201
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-amber-800 mb-2">Location</h3>
              <p className="text-amber-600">Madhya Pradesh, India</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/akshat16206" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Github className="w-8 h-8 text-amber-700" />
            </a>
            <a href="https://www.linkedin.com/in/hermits/" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Linkedin className="w-8 h-8 text-amber-700" />
            </a>
            <a href="https://x.com/akshat8036" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Twitter className="w-8 h-8 text-amber-700" />
            </a>
            <a href="https://www.instagram.com/a_kshat007/" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Instagram className="w-8 h-8 text-amber-700" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; 2024 Akshat Gupta. All rights reserved.</p>
          <p className="text-amber-200">Built with React • Designed with passion</p>
        </div>
      </footer>
    </div>
  );
};
//meow
export default Portfolio;