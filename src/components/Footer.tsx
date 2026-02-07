import { ArrowUp, Heart, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Dribbble, href: '#', label: 'Dribbble' },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 relative border-t border-cyber-purple/20">
            {/* Background */}
            <div className="absolute inset-0 bg-cyber-darker" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="font-orbitron text-2xl font-bold gradient-text mb-2 block">
                            AC<span className="text-cyber-cyan">.</span>
                        </a>
                        <p className="text-sm text-gray-500">
                            © {currentYear} Alex Chen. All rights reserved.
                        </p>
                    </div>

                    {/* Made with love */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        Made with <Heart className="w-4 h-4 text-cyber-pink fill-cyber-pink" /> and lots of coffee
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                className="text-gray-500 hover:text-cyber-purple transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}

                        {/* Back to Top */}
                        <button
                            onClick={scrollToTop}
                            className="ml-4 w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-cyber-purple hover:border-cyber-purple/50 transition-all duration-300"
                            aria-label="Back to top"
                        >
                            <ArrowUp className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
