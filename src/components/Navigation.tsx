import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className="font-orbitron text-2xl font-bold gradient-text"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    AC<span className="text-cyber-cyan">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(link.href);
                            }}
                            className="font-space text-sm uppercase tracking-wider text-gray-300 hover:text-cyber-purple transition-colors duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyber-purple to-cyber-cyan group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#contact');
                        }}
                        className="btn-primary text-sm"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 glass transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <div className="px-6 py-8 flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(link.href);
                            }}
                            className="font-space text-lg uppercase tracking-wider text-gray-300 hover:text-cyber-purple transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#contact');
                        }}
                        className="btn-primary text-center"
                    >
                        Let's Talk
                    </a>
                </div>
            </div>
        </nav>
    );
}
