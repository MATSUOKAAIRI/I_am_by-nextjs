import ProjectBox from './ProjectBox';
import projects from './projects';

interface WorkContentProps {
  boxRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

export default function WorkContent({ boxRefs }: WorkContentProps) {
  return (
    <section
      className="flex flex-col items-start justify-center mb-12 px-4 sm:px-0 mt-8"
      id="work"
    >
      <div className="text-white rounded-3xl p-6 sm:p-10 w-full max-w-5xl bg-zinc-900 border">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-center sm:text-left font-inter">
          Works(制作・開発物)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto p-4 sm:p-10">
          {projects.map((project, i) => (
            <ProjectBox
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
              ref={(el) => {
                if (el) boxRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
