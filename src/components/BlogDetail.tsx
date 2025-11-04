import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { BlogPost1 } from './blog-posts/BlogPost1';
import { BlogPost2 } from './blog-posts/BlogPost2';
import { BlogPost3 } from './blog-posts/BlogPost3';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
}

interface BlogDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export function BlogDetail({ post, onBack }: BlogDetailProps) {
  // 根据博客 ID 渲染对应的博客内容组件
  const renderBlogContent = () => {
    switch (post.id) {
      case 1:
        return <BlogPost1 />;
      case 2:
        return <BlogPost2 />;
      case 3:
        return <BlogPost3 />;
      default:
        return <p>Blog content not found.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-8 -ml-4"
          onClick={onBack}
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Blog
        </Button>

        {/* Blog Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] bg-muted rounded-lg overflow-hidden mb-12">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blog Content */}
        <div className="prose prose-neutral max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            {post.excerpt}
          </p>
          
          {renderBlogContent()}
        </div>

        {/* Call to Action */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground mb-4">
            Enjoyed this article? Feel free to share your thoughts or reach out to discuss design!
          </p>
          <Button asChild>
            <a href="#contact" onClick={onBack}>Get in Touch</a>
          </Button>
        </div>
      </div>
    </div>
  );
}