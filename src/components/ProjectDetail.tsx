import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Project1 } from './project-details/Project1';
import { Project2 } from './project-details/Project2';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  // 根据项目 ID 渲染对应的项目详情组件
  const renderProjectContent = () => {
    switch (project.id) {
      case 1:
        return <Project1 />;
      case 2:
        return <Project2 />;
      default:
        return <p>Project content not found.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-8 -ml-4"
          onClick={onBack}
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Portfolio
        </Button>

        {/* Project Header */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
          <h1 className="text-4xl md:text-5xl mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </div>

        {/* Project Image */}
        <div className="relative h-[500px] bg-muted rounded-lg overflow-hidden mb-12">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Content */}
        {renderProjectContent()}

        {/* Additional Images */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-80 bg-muted rounded-lg overflow-hidden">
            <ImageWithFallback
              src={project.image}
              alt={`${project.title} detail 1`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-80 bg-muted rounded-lg overflow-hidden">
            <ImageWithFallback
              src={project.image}
              alt={`${project.title} detail 2`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}