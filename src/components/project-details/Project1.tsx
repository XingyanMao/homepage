export function Project1() {
  return (
    <>
      {/* Project Details */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="mb-2">Role</h3>
          <p className="text-muted-foreground">Lead Designer & Architect</p>
        </div>
        <div>
          <h3 className="mb-2">Year</h3>
          <p className="text-muted-foreground">2024</p>
        </div>
        <div>
          <h3 className="mb-2">Tools</h3>
          <p className="text-muted-foreground">Figma, AutoCAD, SketchUp</p>
        </div>
      </div>

      {/* Project Description */}
      <div className="prose prose-neutral max-w-none mb-12">
        <h2>Project Overview</h2>
        <p className="text-muted-foreground">
          This architectural visualization project showcases a modern residential building that 
          embodies minimalist principles while maximizing functionality. The design focuses on 
          clean lines, natural light, and seamless indoor-outdoor transitions.
        </p>

        <h2>Design Process</h2>
        <p className="text-muted-foreground">
          The process began with extensive site analysis and client consultations to understand 
          their vision for a serene living space. I created multiple iterations, each refining 
          the balance between aesthetic appeal and practical living requirements.
        </p>

        <h2>Key Features</h2>
        <p className="text-muted-foreground">
          The design incorporates floor-to-ceiling windows to blur boundaries between interior 
          and exterior spaces, custom-built storage solutions to maintain clean lines, and 
          sustainable materials that age gracefully over time.
        </p>

        <h2>Results</h2>
        <p className="text-muted-foreground">
          The final design received acclaim for its innovative use of space and light. The 
          client reported that the space not only met their functional needs but also created 
          a calming atmosphere that enhances daily living.
        </p>
      </div>
    </>
  );
}