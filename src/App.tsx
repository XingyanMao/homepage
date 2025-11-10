import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { ProjectDetail } from './components/ProjectDetail';
import { BlogDetail } from './components/BlogDetail';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  const projects = [
    {
      id: 1,
      title: "Architectural Visualization",
      category: "Design",
      image: "https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjIwOTMzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Modern architectural design with minimalist approach"
    },
    {
      id: 2,
      title: "Interior Spaces",
      category: "Design",
      image: "https://images.unsplash.com/photo-1621362660850-a2554b580b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzaWduJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyMTg4Nzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Minimalist interior design concepts"
    },
    {
      id: 3,
      title: "Creative Studio",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIxMTg5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Creative workspace photography series"
    },
    {
      id: 4,
      title: "Workspace Design",
      category: "Design",
      image: "https://images.unsplash.com/photo-1587522630593-3b9e5f3255f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzayUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIwODM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Clean and functional workspace design"
    }
  ];

  const skills = [
    "UI/UX Design",
    "Adobe Creative Suite",
    "Figma",
    "Sketch",
    "Prototyping",
    "Visual Design",
    "Typography",
    "Branding"
  ];

  const blogPosts = [
    {
      id: 1,
      title: "从长文到爆款：一套专业的内容重构方法论",
      excerpt: "在信息过载的时代，如何将深度内容转化为社交媒体上的高价值传播？这不仅是技巧，更是一套系统化的工程。",
      date: "November 10, 2024",
      image: "https://images.unsplash.com/photo-1761746395536-00d334eba480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9jZXNzJTIwc2tldGNofGVufDF8fHx8MTc2MjE3MzkxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Typography in Modern Design",
      excerpt: "Understanding the power of typography and how it shapes user experience.",
      date: "September 28, 2024",
      image: "https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZGVzaWdufGVufDF8fHx8MTc2MjE5MzkzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "My Creative Process",
      excerpt: "A behind-the-scenes look at how I approach design projects from start to finish.",
      date: "September 10, 2024",
      image: "https://images.unsplash.com/photo-1618255339659-0084b31196b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Nlc3N8ZW58MXx8fHwxNzYyMTg5NzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "6 min read"
    }
  ];

  // Show project detail if a project is selected
  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  // Show blog detail if a blog post is selected
  if (selectedBlogPost) {
    return <BlogDetail post={selectedBlogPost} onBack={() => setSelectedBlogPost(null)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl">Portfolio</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-muted-foreground transition-colors">Home</a>
              <a href="#about" className="hover:text-muted-foreground transition-colors">About</a>
              <a href="#work" className="hover:text-muted-foreground transition-colors">Work</a>
              <a href="#blog" className="hover:text-muted-foreground transition-colors">Blog</a>
              <a href="#contact" className="hover:text-muted-foreground transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a 
                href="#home" 
                className="block hover:text-muted-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block hover:text-muted-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#work" 
                className="block hover:text-muted-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Work
              </a>
              <a 
                href="#blog" 
                className="block hover:text-muted-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </a>
              <a 
                href="#contact" 
                className="block hover:text-muted-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-muted-foreground mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl mb-6">Xingyan Mao</h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Designer & Creative
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              A passionate design student focused on creating meaningful and minimalist 
              experiences through thoughtful design and attention to detail.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <a href="#work">View My Work</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">About Me</h2>
              <p className="text-muted-foreground mb-4">
                I'm a design student with a passion for minimalism and functional aesthetics. 
                My work focuses on creating clean, user-centered experiences that combine 
                beauty with purpose.
              </p>
              <p className="text-muted-foreground mb-6">
                Currently pursuing my degree in Design at the University of Arts, I enjoy 
                exploring the intersection of digital and physical design, always seeking 
                to push boundaries while maintaining simplicity.
              </p>
              
              {/* Skills */}
              <div className="mt-8">
                <h3 className="text-xl mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-background border border-border rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] bg-muted rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1587522630593-3b9e5f3255f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzayUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIwODM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-4">Selected Work</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A collection of my recent projects showcasing my approach to design and creativity.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-none">
                <div className="relative h-80 bg-muted overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{project.category}</div>
                  <h3 className="text-2xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <button 
                    className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Project <ExternalLink size={16} />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-4">Blog</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Thoughts, insights, and reflections on design, creativity, and the creative process.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden border-0 shadow-none bg-background">
                <div className="relative h-64 bg-muted overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <button 
                    className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all"
                    onClick={() => setSelectedBlogPost(post)}
                  >
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision.
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href="mailto:hello@alexchen.design" 
                className="flex items-center gap-2 hover:text-muted-foreground transition-colors"
              >
                <Mail size={20} />
                <span>hello@alexchen.design</span>
              </a>
            </div>

            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:hello@alexchen.design">
                  <Mail size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Alex Chen. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Work
              </a>
              <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
