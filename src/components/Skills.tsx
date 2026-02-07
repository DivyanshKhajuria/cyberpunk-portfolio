import { Palette, PenTool, Film, Layers, Box, Layout, LucideIcon } from 'lucide-react';

interface Skill {
    name: string;
    icon: LucideIcon;
    level: number;
    bgColor: string;
    borderColor: string;
    textColor: string;
    gradientFrom: string;
}

const skills: Skill[] = [
    {
        name: 'Adobe Photoshop',
        icon: Palette,
        level: 95,
        bgColor: 'bg-purple-500/10',
        borderColor: 'border-purple-500/30 hover:border-purple-500',
        textColor: 'text-purple-500',
        gradientFrom: 'from-purple-500'
    },
    {
        name: 'Adobe Illustrator',
        icon: PenTool,
        level: 90,
        bgColor: 'bg-cyan-400/10',
        borderColor: 'border-cyan-400/30 hover:border-cyan-400',
        textColor: 'text-cyan-400',
        gradientFrom: 'from-cyan-400'
    },
    {
        name: 'After Effects',
        icon: Film,
        level: 85,
        bgColor: 'bg-pink-500/10',
        borderColor: 'border-pink-500/30 hover:border-pink-500',
        textColor: 'text-pink-500',
        gradientFrom: 'from-pink-500'
    },
    {
        name: 'Figma',
        icon: Layers,
        level: 92,
        bgColor: 'bg-purple-500/10',
        borderColor: 'border-purple-500/30 hover:border-purple-500',
        textColor: 'text-purple-500',
        gradientFrom: 'from-purple-500'
    },
    {
        name: 'Blender',
        icon: Box,
        level: 80,
        bgColor: 'bg-cyan-400/10',
        borderColor: 'border-cyan-400/30 hover:border-cyan-400',
        textColor: 'text-cyan-400',
        gradientFrom: 'from-cyan-400'
    },
    {
        name: 'Canva',
        icon: Layout,
        level: 88,
        bgColor: 'bg-pink-500/10',
        borderColor: 'border-pink-500/30 hover:border-pink-500',
        textColor: 'text-pink-500',
        gradientFrom: 'from-pink-500'
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-darker to-cyber-dark" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-pink-500/10 rounded-full blur-[150px]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-white">My </span>
                        <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="font-inter text-gray-400 max-w-xl mx-auto">
                        Tools and technologies I use to bring creative visions to life.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="glass-card rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300"
                        >
                            {/* Icon Circle */}
                            <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${skill.bgColor} border-2 ${skill.borderColor} flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                                <skill.icon className={`w-8 h-8 ${skill.textColor}`} />
                            </div>

                            {/* Skill Name */}
                            <h3 className="font-space font-semibold text-white text-sm mb-3">
                                {skill.name}
                            </h3>

                            {/* Progress Bar */}
                            <div className="h-1.5 bg-cyber-dark/50 rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-gradient-to-r ${skill.gradientFrom} to-transparent rounded-full transition-all duration-1000`}
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                            <span className="text-xs text-gray-500 mt-2 block">{skill.level}%</span>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Tags */}
                <div className="mt-16 text-center">
                    <h3 className="font-space text-lg text-gray-400 mb-6">Also experienced with</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Cinema 4D', 'Premiere Pro', 'InDesign', 'Sketch', 'Procreate', 'Substance Painter', 'Unreal Engine', 'Unity'].map((tool) => (
                            <span
                                key={tool}
                                className="px-4 py-2 glass rounded-full text-sm font-space text-gray-300 border border-purple-500/20 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 cursor-default"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
