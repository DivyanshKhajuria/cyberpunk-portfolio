import { X, ArrowLeft, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';

interface CaseStudyProps {
    project: Project;
    onClose: () => void;
}

export default function CaseStudy({ project, onClose }: CaseStudyProps) {
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-cyber-darker/95 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Content */}
            <div className="relative min-h-screen py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="fixed top-6 right-6 p-3 glass rounded-full hover:bg-cyber-purple/20 transition-colors z-50"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    {/* Back Button */}
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 text-gray-400 hover:text-cyber-purple transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="font-space text-sm uppercase tracking-wider">Back to Projects</span>
                    </button>

                    {/* Main Image */}
                    <div className="relative rounded-2xl overflow-hidden mb-12 neon-border">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-40" />
                    </div>

                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 gradient-text">
                            {project.title}
                        </h1>
                        <p className="font-inter text-xl text-gray-300 mb-6">
                            {project.description}
                        </p>

                        {/* Tools */}
                        <div className="flex flex-wrap gap-3">
                            {project.tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="px-4 py-2 font-space text-sm uppercase tracking-wider text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Neon Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-cyber-purple to-transparent mb-12" />

                    {/* Case Study Content */}
                    <div className="space-y-12">
                        {/* Concept */}
                        <div className="glass-card rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 bg-cyber-purple rounded-full" />
                                <h2 className="font-orbitron text-2xl font-semibold text-white">Concept</h2>
                            </div>
                            <p className="font-inter text-gray-300 leading-relaxed">
                                {project.caseStudy.concept}
                            </p>
                        </div>

                        {/* Process */}
                        <div className="glass-card rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 bg-cyber-cyan rounded-full" />
                                <h2 className="font-orbitron text-2xl font-semibold text-white">Process</h2>
                            </div>
                            <p className="font-inter text-gray-300 leading-relaxed">
                                {project.caseStudy.process}
                            </p>
                        </div>

                        {/* Outcome */}
                        <div className="glass-card rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 bg-cyber-pink rounded-full" />
                                <h2 className="font-orbitron text-2xl font-semibold text-white">Final Outcome</h2>
                            </div>
                            <p className="font-inter text-gray-300 leading-relaxed">
                                {project.caseStudy.outcome}
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 text-center">
                        <button className="btn-primary inline-flex items-center gap-2">
                            View Live Project <ExternalLink className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
