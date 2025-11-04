export function Project2() {
  return (
    <>
      {/* Project Details */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="mb-2">Role</h3>
          <p className="text-muted-foreground">Interior Designer</p>
        </div>
        <div>
          <h3 className="mb-2">Year</h3>
          <p className="text-muted-foreground">2023</p>
        </div>
        <div>
          <h3 className="mb-2">Tools</h3>
          <p className="text-muted-foreground">SketchUp, V-Ray, Adobe Creative Suite</p>
        </div>
      </div>

      {/* Project Description */}
      <div className="prose prose-neutral max-w-none mb-12">
        <h2>Project Overview</h2>
        <p className="text-muted-foreground">
          This interior design project transformed a cluttered urban apartment into a serene 
          minimalist sanctuary. The challenge was to create functional spaces within a compact 
          footprint while maintaining an airy, uncluttered feel.
        </p>

        <h2>Design Approach</h2>
        <p className="text-muted-foreground">
          I employed a monochromatic color palette with natural wood accents to create warmth 
          and depth. Multi-functional furniture and custom storage solutions were designed to 
          maximize space without compromising on aesthetics.
        </p>

        <h2>Spatial Planning</h2>
        <p className="text-muted-foreground">
          The layout was carefully planned to create visual flow between spaces. Strategic 
          placement of mirrors and glass elements enhances natural light distribution, making 
          the space feel larger and more connected.
        </p>

        <h2>Client Feedback</h2>
        <p className="text-muted-foreground">
          The client expressed that the redesigned space has significantly improved their 
          quality of life, providing both practical functionality and a peaceful retreat 
          from the busy urban environment.
        </p>
      </div>
    </>
  );
}