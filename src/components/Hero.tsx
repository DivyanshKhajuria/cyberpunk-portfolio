import { ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
    const scrollToWork = () => {
        const element = document.querySelector('#work');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker" />

            {/* Cyber Grid */}
            <div className="absolute inset-0 cyber-grid-bg opacity-30" />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyber-cyan/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyber-pink/15 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '4s' }} />

            {/* Floating Particles */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 15}s`,
                            animationDuration: `${15 + Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>

            {/* HUD Decorations */}
            <div className="absolute top-20 left-10 opacity-30 hidden lg:block">
                <div className="hud-corner hud-corner-tl" />
                <div className="w-32 h-32 border border-cyber-cyan/30 rounded-lg animate-float" />
                <div className="hud-corner hud-corner-br" />
            </div>
            <div className="absolute bottom-32 right-10 opacity-30 hidden lg:block">
                <div className="hud-corner hud-corner-tl" />
                <div className="w-24 h-24 border border-cyber-purple/30 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
                <div className="hud-corner hud-corner-br" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-fade-in">
                    <Sparkles className="w-4 h-4 text-cyber-cyan" />
                    <span className="text-sm font-space text-gray-300">Available for freelance work</span>
                </div>

                {/* Headline */}
                <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
                    <span className="text-white">Graphic Designer</span>
                    <br />
                    <span className="gradient-text">&amp; Visual Storyteller</span>
                </h1>

                {/* Subheading */}
                <p className="font-inter text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    I design immersive visuals inspired by gaming, illustration, and digital culture.
                    Transforming ideas into captivating digital experiences.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <button onClick={scrollToWork} className="btn-primary flex items-center justify-center gap-2">
                        View Work
                        <ChevronDown className="w-4 h-4" />
                    </button>
                    <button onClick={scrollToContact} className="btn-secondary">
                        Contact Me
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <div className="text-center">
                        <div className="font-orbitron text-3xl md:text-4xl font-bold text-cyber-purple mb-2">50+</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="font-orbitron text-3xl md:text-4xl font-bold text-cyber-cyan mb-2">5+</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="font-orbitron text-3xl md:text-4xl font-bold text-cyber-pink mb-2">30+</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">Happy Clients</div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-cyber-purple" />
            </div>
        </section>
    );
}
