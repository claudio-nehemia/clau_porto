'use client';
import { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Image from 'next/image';

const skills = [ 
    {name: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "Tailwind, Bootstrap CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Next.js",
      "Express.js",
      'FastAPI',
      'Flask',
      'Laravel',
      'Vue JS'
    ]},
    {
      name: "Mobile Development",
      skills: [
        "React Native",
        "Flutter",
        "Java"
      ]
    },
    {
      name: "Database Management",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQLite"
      ]
    },
    {
      name: "Tools",
      skills: [
        "Git",
        "Docker",
      ]
    },
    {
      name: "Programming Languages",
      skills: [
        "Python",
        "PHP",
        "JavaScript",
        "TypeScript",
        "C++"
      ]
    },
    {
      name: "Machine Learning",
      skills: [
        "Python",
        "R",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn"
      ]
    },
]

const social_media = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/claudionehemia_12",
    icon: "instagram",
    color: "hover:text-pink-500"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/claudio-nehemia/",
    icon: "linkedin", 
    color: "hover:text-blue-600"
  },
  {
    name: "GitHub",
    url: "https://github.com/claudio-nehemia",
    icon: "github",
    color: "hover:text-gray-800"
  },
  {
    name: "Email",
    url: "mailto:claudionehemia83@gmail.com",
    icon: "email",
    color: "hover:text-red-500"
  }
];

const achievements = [
  {
    title: "Gold Medal Pekan Inovasi Nasional 2025",
    organization: "Kementerian Riset dan Teknologi",
    date: "2025",
    description: "Awarded gold medal for innovative software development by making PANDU PEKA, a disaster management application with the five member team and advanced machine learning integration.",
    icon: "medal"
  },
  {
    title: "Pendanaan PKM 2024", 
    organization: "Kementerian Pendidikan dan Kebudayaan",
    date: "2024",
    description: "Received funding for the research project on Suarguard, with the four member team, an application with voice recognition and auto detect location",
    icon: "trophy"
  }
];

const experiences = [
  {
    name: "Prosesin ID",
    status: "Internship",
    position: "Fullstack Programmer (Website)",
    duration: "March 2025 - August 2025",
    job_description: "Assisted in the development of web applications using React, Laravel, Vue JS and Next JS"
  },
  {
    name: "Gasgawe",
    status: "Internship",
    duration: "July 2025 - Present",
    position: "Fullstack Programmer (Mobile)",
    job_description: "Assisted in the development of mobile applications using Laravel in Backend and Flutter"
  },
  {
    name: "Freelance",
    status: "Part Time",
    duration: "August 2025 - Present",
    position: "Software Developer",
    job_description: "Developing various software applications (website, mobile) on a freelance basis"
  }
]

const projects = [
  {
    name: "Flight Booking Ticket",
    timeline: 2025,
    description: "A web application for booking flight tickets using Vue JS in Frontend and Laravel in Backend"
  },
  {
    name: "Montana Machine",
    timeline: 2025,
    description: "A web application for managing machine and heavy equipment e-commerce using React in Frontend and Laravel in Backend"
  },
  
  {
    name: "Suarguard",
    timeline: 2025,
    description: "A mobile application focused on sexual harassment prevention and protection. Victims can send emergency signals to dedicated task forces for immediate assistance when facing threats. Developed using Java for the mobile platform."
  },
  {
    name: "Cuan Limbah Apps",
    timeline: 2025,
    description: "A mobile application for waste-to-points exchange, where users can deposit waste at collection centers and receive reward points stored in the app for future use. Developed as a mobile-first solution."
  },
  {
    name: "Juravest",
    timeline: 2025,
    description: "A web platform that connects MSMEs (Micro, Small, and Medium Enterprises) with potential investors. It facilitates funding opportunities, business visibility, and investment matching. Built with React for the frontend and Laravel for the backend."
  },
  {
    name: "Bebas Cetak Indonesia",
    timeline: 2025,
    description: "A web application for managing clothing printing services and clothes e-commerce using Blade in Frontend and Laravel in Backend"
  },
  {
    name: "Simfan",
    timeline: 2025,
    description: "A web application for managing deposit loans, enabling users to borrow or manage their deposit-based finances in a secure and transparent way. Developed using Next.js for modern and scalable web experience."
  },
  {
    name: "Mauk Pintar Website",
    timeline: 2025,
    description: "A web catalog application showcasing recycled products, aiming to promote sustainability and eco-friendly practices. Developed using React for the frontend and Laravel for the backend."
  },
  {
    name: "PANDU PEKA",
    timeline: 2025,
    description: "A disaster management application designed to assist both rescue teams and communities during natural disaster evacuations. The app provides real-time disaster information, evacuation guidance, and integrates machine learning models for prediction. Built with Flutter for the mobile frontend, Flask and FastAPI for the backend and ML logic, and Django for the web-based admin dashboard."
  },
]

// Advanced Floating geometric shapes with particles
const FloatingShapes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<{left: string, top: string}[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Generate random positions only on client
    const arr = Array.from({ length: 8 }, () => ({
      left: `${Math.random() * 80 + 10}%`, // 10% - 90%
      top: `${Math.random() * 80 + 10}%`,  // 10% - 90%
    }));
    setParticles(arr);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating shapes with mouse interaction */}
      <div 
        className="absolute w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-xl animate-float"
        style={{ 
          top: '20%', 
          left: '10%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>
      <div 
        className="absolute w-24 h-24 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-full blur-lg animate-pulse"
        style={{ 
          top: '40%', 
          right: '20%',
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>
      <div 
        className="absolute w-40 h-40 bg-gradient-to-br from-purple-400/25 to-pink-500/25 rounded-full blur-2xl animate-bounce"
        style={{ 
          bottom: '32%', 
          left: '20%',
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>
      <div 
        className="absolute w-28 h-28 bg-gradient-to-br from-emerald-400/35 to-teal-500/35 rounded-full blur-xl animate-pulse"
        style={{ 
          bottom: '20%', 
          right: '32%',
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>
      <div 
        className="absolute w-16 h-16 bg-gradient-to-br from-yellow-400/40 to-orange-500/40 rounded-full blur-lg animate-spin-slow"
        style={{ 
          top: '50%', 
          left: '50%',
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>

      {/* Floating particles */}
      {particles.map((pos, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-particle"
          style={{
            left: pos.left,
            top: pos.top,
            animationDelay: `${i * 2}s`,
            animationDuration: `${8 + i * 0.5}s`
          }}
        ></div>
      ))}
    </div>
  );
};

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible] as const;
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'social'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
      
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'social', label: 'Connect' }
  ];

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b border-gray-200/50 shadow-lg transition-all duration-500 ${
      scrolled ? 'bg-white/90 py-3' : 'bg-white/80 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className={`font-bold tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300 ${
            scrolled ? 'text-xl' : 'text-2xl'
          }`}>
            Claudio Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`transition-all duration-300 text-sm font-medium px-4 py-2 rounded-full relative overflow-hidden group ${
                  activeSection === id 
                    ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                <span className="relative z-10">{label}</span>
                {activeSection !== id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="pt-4 pb-3 space-y-2">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  activeSection === id 
                    ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const AnimatedCard = ({ children, className = "", delay = 0 }: { 
  children: React.ReactNode, 
  className?: string,
  delay?: number 
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`bg-white/70 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20 transition-all duration-700 hover:shadow-2xl hover:transform hover:scale-105 hover:bg-white/80 group relative overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/10 to-cyan-400/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="text-center mb-8 sm:mb-12">
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}>
        {children}
      </h2>
      <div className={`w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
      }`}></div>
    </div>
  );
};

const ImagePlaceholder = ({ className = "", alt, src = "" }: { className?: string, alt: string, src?: string }) => {
  const [imageError, setImageError] = useState(false);
  
  if (!src || imageError) {
    return (
      <div className={`relative rounded-2xl overflow-hidden group ${className}`}>
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center hover:from-blue-50 hover:to-purple-50 hover:border-blue-300 transition-all duration-500">
          <div className="text-center text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
            <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">📷</div>
            <div className="text-sm font-medium">{alt}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative rounded-2xl overflow-hidden group ${className}`}>
      <Image 
        src={src} 
        alt={alt}
        width={400}
        height={300}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

const SkillBadge = ({ skill, delay = 0 }: { skill: string, delay?: number }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <span 
      ref={ref}
      className={`px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-500 border border-blue-200/50 shadow-sm hover:shadow-md transform hover:scale-110 hover:rotate-1 cursor-default ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {skill}
    </span>
  );
};

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 100);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span>
      {displayText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
      <FloatingShapes />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 relative">
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <div className="relative group">
              <ImagePlaceholder 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 shadow-xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2" 
                alt="Profile Photo" 
                src="/claudio.jpg"
              />
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-slide-up leading-tight">
            <TypewriterText text="Claudio Nehemia" delay={500} />
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
              <TypewriterText text="Panggabean" delay={2000} />
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 animate-slide-up-delay-1 font-medium">
            <TypewriterText text="Software Engineer" delay={3500} />
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-4 sm:mb-6 animate-slide-up-delay-2">
            <div className="px-3 sm:px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full border border-emerald-200 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <p className="text-sm sm:text-base text-gray-700 font-semibold">GPA: 3.90</p>
            </div>
            <div className="px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-200 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <p className="text-sm sm:text-base text-gray-700 font-medium">Mercubuana University</p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-600 animate-slide-up-delay-3 font-medium">Informatics Engineering</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>About Me</SectionTitle>
          <AnimatedCard className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
              <div className="relative group order-2 md:order-1">
                <ImagePlaceholder
                  className="w-full object-contain shadow-lg transform transition-all duration-500 group-hover:scale-105"
                  alt="About Photo"
                  src="/about.png"
                />
              </div>
              <div className="space-y-3 sm:space-y-4 order-1 md:order-2">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Passionate Software Developer
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  I am a dedicated software engineer with a strong background in full-stack development, 
                  mobile applications, and machine learning. With hands-on experience in various technologies 
                  and frameworks, I enjoy creating innovative solutions that make a positive impact.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Currently pursuing my degree in Informatics with a GPA of 3.90, I am passionate about 
                  continuous learning and staying updated with the latest technologies in the software development world.
                </p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Skills & Technologies</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((category, index) => (
              <AnimatedCard key={index} className="h-full hover:shadow-xl" delay={index * 150}>
                <div className="mb-3 sm:mb-4 relative group">
                  <ImagePlaceholder 
                    className="w-full h-20 sm:h-24 md:h-28 shadow-md transform transition-all duration-500 group-hover:scale-105" 
                    alt={`${category.name} Icon`} 
                    src={`/images/skills/${category.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-purple-300 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-800">{category.name}</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge key={skillIndex} skill={skill} delay={skillIndex * 100} />
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-4 sm:space-y-6">
            {experiences.map((exp, index) => (
              <AnimatedCard key={index} className="hover:shadow-xl" delay={index * 200}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 items-center">
                  <div className="md:col-span-1 relative group">
                    <ImagePlaceholder 
                      className="w-full max-h-80 object-contain shadow-md transform transition-all duration-500 group-hover:scale-105" 
                      alt={`${exp.name} Logo`} 
                      src={`/images/companies/${exp.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-200 to-teal-300 rounded-lg blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">{exp.name}</h3>
                      <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-xs font-medium border border-emerald-200 transform hover:scale-105 transition-all duration-300 w-fit">
                        {exp.status}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 mb-1 font-semibold">{exp.position}</p>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 font-medium">{exp.duration}</p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{exp.job_description}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <AnimatedCard key={index} className="h-full hover:shadow-xl group" delay={index * 100}>
                <div className="mb-3 sm:mb-4 relative overflow-hidden rounded-xl">
                  <ImagePlaceholder 
                    className="w-full object-contain shadow-md transform transition-all duration-700 group-hover:scale-110" 
                    alt={`${project.name} Screenshot`} 
                    src={`/images/projects/${project.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800">{project.name}</h3>
                  <span className="px-2 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-xs font-medium border border-cyan-200 transform hover:scale-105 transition-all duration-300 w-fit">
                    {project.timeline}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{project.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      {/* Achievements Section */}
      <section id="achievements" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Achievements</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <AnimatedCard key={index} className="h-full hover:shadow-xl group" delay={index * 200}>
                <div className="mb-3 sm:mb-4 relative overflow-hidden rounded-xl">
                  <ImagePlaceholder
                    className="w-full max-h-80 object-contain shadow-md transform transition-all duration-700 group-hover:scale-110 bg-white p-2 rounded-lg"
                    alt={`${achievement.title} Certificate`}
                    src={`/images/achievements/${achievement.title.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-200 to-orange-300 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 relative group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-lg sm:text-2xl shadow-md transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      {achievement.icon === 'medal' ? '🏅' : '🏆'}
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <h3 className="text-base sm:text-lg font-bold text-gray-800">{achievement.title}</h3>
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 rounded-full text-xs font-medium border border-yellow-200 transform hover:scale-105 transition-all duration-300 w-fit">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-blue-600 font-semibold mb-1 sm:mb-2">{achievement.organization}</p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Connect With Me</SectionTitle>
          <AnimatedCard className="max-w-3xl mx-auto">
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-base sm:text-lg text-gray-700 font-medium">Let's connect and collaborate!</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Feel free to reach out through any of these platforms</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {social_media.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-white/80 backdrop-blur-lg rounded-xl p-3 sm:p-4 shadow-md border border-gray-200/50 transition-all duration-500 hover:shadow-lg hover:scale-105 hover:bg-white/90 ${social.color} transform hover:-translate-y-1`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-center">
                    <div className="mb-2 sm:mb-3 relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-md transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                        {social.icon === 'instagram' && <FaInstagram className="text-lg sm:text-2xl text-pink-500" />}
                        {social.icon === 'linkedin' && <FaLinkedin className="text-lg sm:text-2xl text-blue-600" />}
                        {social.icon === 'github' && <FaGithub className="text-lg sm:text-2xl text-gray-800" />}
                        {social.icon === 'email' && <SiGmail className="text-lg sm:text-2xl text-red-500" />}
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-purple-300 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-800 group-hover:text-current transition-colors duration-300">
                      {social.name}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl"></div>
                </a>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-200/50 bg-white/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-gray-600 font-medium">© 2025 Claudio Nehemia Panggabean. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
