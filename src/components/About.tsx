import { Gamepad2, Palette, Sparkles } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 px-6 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-darker to-cyber-dark" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyber-cyan/10 rounded-full blur-[150px] translate-x-1/2" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-white">About </span>
                        <span className="gradient-text">Me</span>
                    </h2>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden neon-border">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                                alt="Designer portrait"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 animate-float hidden lg:block">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyber-purple to-cyber-pink flex items-center justify-center">
                                    <Gamepad2 className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-orbitron text-2xl font-bold text-white">5+</div>
                                    <div className="text-sm text-gray-400">Years in Gaming Design</div>
                                </div>
                            </div>
                        </div>

                        {/* HUD Decorations */}
                        <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-cyber-cyan/50" />
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-cyber-purple/50" />
                    </div>

                    {/* Content Column */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
                            <Sparkles className="w-4 h-4 text-cyber-cyan" />
                            <span className="text-sm font-space text-gray-300">Creative Mind, Technical Execution</span>
                        </div>

                        <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white">
                            Crafting digital experiences that <span className="text-cyber-purple">inspire</span> and <span className="text-cyber-cyan">captivate</span>
                        </h3>

                        <p className="font-inter text-gray-400 leading-relaxed">
                            Hey! I'm Alex, a graphic designer with a deep passion for gaming culture and digital aesthetics.
                            My journey began in the world of gaming, where I fell in love with the immersive visuals and
                            atmospheric designs that make games unforgettable.
                        </p>

                        <p className="font-inter text-gray-400 leading-relaxed">
                            Today, I channel that passion into creating bold, innovative designs for brands that want to
                            stand out. Whether it's crafting a cyberpunk-inspired brand identity or designing UI for the
                            next big game, I bring the same level of dedication and creativity to every project.
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            <div className="glass-card rounded-xl p-4">
                                <Palette className="w-8 h-8 text-cyber-purple mb-3" />
                                <h4 className="font-space font-semibold text-white mb-1">Visual Design</h4>
                                <p className="text-sm text-gray-500">Brand identity, illustration, and UI design</p>
                            </div>
                            <div className="glass-card rounded-xl p-4">
                                <Gamepad2 className="w-8 h-8 text-cyber-cyan mb-3" />
                                <h4 className="font-space font-semibold text-white mb-1">Gaming Background</h4>
                                <p className="text-sm text-gray-500">Deep understanding of gaming aesthetics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
