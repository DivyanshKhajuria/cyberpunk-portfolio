export interface Project {
    id: string;
    title: string;
    description: string;
    tools: string[];
    image: string;
    caseStudy: {
        concept: string;
        process: string;
        outcome: string;
    };
}

export const projects: Project[] = [
    {
        id: 'neon-dreams',
        title: 'Neon Dreams',
        description: 'A cyberpunk-inspired visual identity for a futuristic gaming brand.',
        tools: ['Photoshop', 'Illustrator', 'After Effects'],
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
        caseStudy: {
            concept: 'Creating an immersive brand identity that captures the essence of cyberpunk culture while maintaining modern aesthetics. The goal was to blend neon aesthetics with clean typography.',
            process: 'Started with extensive mood boarding, exploring various cyberpunk references from games and films. Developed color palettes, typography systems, and iconography that would work across digital and print media.',
            outcome: 'Delivered a comprehensive brand kit including logos, color systems, and marketing materials that increased brand recognition by 150%.'
        }
    },
    {
        id: 'holographic-interface',
        title: 'Holographic Interface',
        description: 'UI/UX design for a next-gen gaming dashboard with holographic elements.',
        tools: ['Figma', 'Blender', 'After Effects'],
        image: 'https://images.unsplash.com/photo-1614729939124-032d1e6c9945?w=800&q=80',
        caseStudy: {
            concept: 'Designing an interface that feels like it belongs in 2077. The challenge was making futuristic elements feel usable and intuitive.',
            process: 'Created 3D elements in Blender, designed UI components in Figma, and animated interactions in After Effects. Multiple user testing rounds ensured usability.',
            outcome: 'The interface was adopted by the client for their flagship product, receiving praise for its innovative design approach.'
        }
    },
    {
        id: 'digital-genesis',
        title: 'Digital Genesis',
        description: 'Digital artwork series exploring the birth of AI consciousness.',
        tools: ['Photoshop', 'Midjourney', 'Cinema 4D'],
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
        caseStudy: {
            concept: 'An artistic exploration of artificial intelligence awakening, visualized through surreal digital landscapes and abstract forms.',
            process: 'Combined AI-generated elements with hand-crafted digital painting techniques. Each piece underwent multiple iterations to achieve the perfect balance of organic and synthetic.',
            outcome: 'The series was featured in three digital art exhibitions and gained significant traction on social media with over 50K impressions.'
        }
    },
    {
        id: 'cyber-sanctuary',
        title: 'Cyber Sanctuary',
        description: 'Environmental design for an immersive VR meditation experience.',
        tools: ['Blender', 'Unreal Engine', 'Substance Painter'],
        image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&q=80',
        caseStudy: {
            concept: 'Creating a virtual space that promotes relaxation while maintaining a futuristic aesthetic. The environment needed to feel both alien and welcoming.',
            process: 'Built detailed 3D environments in Blender, textured in Substance Painter, and optimized for VR in Unreal Engine. Sound design was integrated for full immersion.',
            outcome: 'The VR experience was launched on major platforms, receiving 4.8/5 ratings and featured on VR review sites.'
        }
    },
    {
        id: 'retro-wave',
        title: 'Retro Wave Collection',
        description: 'A poster series celebrating 80s synthwave culture with modern techniques.',
        tools: ['Illustrator', 'Photoshop', 'After Effects'],
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        caseStudy: {
            concept: 'Reviving the nostalgic aesthetics of 80s synthwave while incorporating contemporary design principles and techniques.',
            process: 'Researched authentic 80s design elements, then reinterpreted them with modern tools. Created vector-based artwork that could scale infinitely for various applications.',
            outcome: 'The collection was licensed for merchandise and streaming platform visuals, generating ongoing passive revenue.'
        }
    },
    {
        id: 'quantum-identity',
        title: 'Quantum Identity',
        description: 'Brand identity for a tech startup focusing on quantum computing.',
        tools: ['Illustrator', 'Figma', 'Cinema 4D'],
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
        caseStudy: {
            concept: 'Translating complex quantum computing concepts into accessible visual language that appeals to both technical and non-technical audiences.',
            process: 'Developed abstract visualizations of quantum concepts, created a flexible design system, and produced comprehensive brand guidelines.',
            outcome: 'The startup successfully secured Series A funding, with investors specifically praising the professional brand presentation.'
        }
    }
];

export const skills = [
    { name: 'Adobe Photoshop', icon: 'Palette', level: 95 },
    { name: 'Adobe Illustrator', icon: 'PenTool', level: 90 },
    { name: 'After Effects', icon: 'Film', level: 85 },
    { name: 'Figma', icon: 'Layers', level: 92 },
    { name: 'Blender', icon: 'Box', level: 80 },
    { name: 'Canva', icon: 'Layout', level: 88 },
];
