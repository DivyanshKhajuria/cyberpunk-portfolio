import { useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        // Reset success message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Dribbble, href: '#', label: 'Dribbble' },
    ];

    return (
        <section id="contact" className="py-24 px-6 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-darker to-cyber-darker" />
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[600px] bg-cyber-purple/10 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Let's Build</span>
                        <br />
                        <span className="text-white">Something Cool</span>
                    </h2>
                    <p className="font-inter text-gray-400 max-w-xl mx-auto">
                        Have a project in mind? Let's create something extraordinary together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="glass-card rounded-2xl p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-cyber-purple/20 flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-cyber-purple" />
                                </div>
                                <div>
                                    <h3 className="font-space font-semibold text-white">Email</h3>
                                    <a href="mailto:hello@alexchen.design" className="text-gray-400 hover:text-cyber-purple transition-colors">
                                        hello@alexchen.design
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card rounded-2xl p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-cyber-cyan/20 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-cyber-cyan" />
                                </div>
                                <div>
                                    <h3 className="font-space font-semibold text-white">Location</h3>
                                    <p className="text-gray-400">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-cyber-purple hover:border-cyber-purple/50 hover:shadow-neon-purple transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
                            <div>
                                <label htmlFor="name" className="block font-space text-sm text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block font-space text-sm text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@email.com"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block font-space text-sm text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="w-full resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : isSubmitted ? (
                                    <>
                                        ✓ Message Sent!
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
