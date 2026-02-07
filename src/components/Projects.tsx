import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

interface ProjectsProps {
    onProjectClick: (projectId: string) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
    return (
        <section id="work" className="py-24 px-6 relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker" />
            <div className="absolute top-0 left-1/2 w-[600px] h-[400px] bg-cyber-purple/10 rounded-full blur-[150px] -translate-x-1/2" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Featured </span>
                        <span className="gradient-text">Work</span>
                    </h2>
                    <p className="font-inter text-gray-400 max-w-xl mx-auto">
                        Explore my latest projects spanning gaming aesthetics, digital illustration, and immersive brand experiences.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="glass-card rounded-2xl overflow-hidden cursor-pointer group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => onProjectClick(project.id)}
                        >
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-60" />

                                {/* View Project Overlay */}
                                <div className="absolute inset-0 bg-cyber-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="flex items-center gap-2 text-white font-space uppercase tracking-wider text-sm">
                                        View Case Study <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="font-orbitron text-xl font-semibold text-white mb-2 group-hover:text-cyber-purple transition-colors">
                                    {project.title}
                                </h3>
                                <p className="font-inter text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tools */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="px-3 py-1 text-xs font-space uppercase tracking-wider text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
