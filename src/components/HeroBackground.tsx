import { motion } from "framer-motion";

export const HeroBackground = ({ children }: { children: React.ReactNode }) => {

    return (
        // Hero Default - Three animated gradient orbs
        <div className="relative overflow-clip min-h-screen">
            {/* Indigo orb - top right */}
            <motion.div
                className="absolute w-200 h-200 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                    top: '-20%',
                    right: '-10%',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Pink orb - bottom left */}
            <motion.div
                className="absolute w-150 h-150 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)',
                    bottom: '-10%',
                    left: '-5%',
                }}
                animate={{
                    scale: [1, 1.15, 1],
                    x: [0, -20, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Cyan orb - center */}
            <motion.div
                className="absolute w-100 h-100 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)',
                    top: '40%',
                    left: '30%',
                }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />

            {/* Noise texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '100px 100px',
                }} />
            </div>

            {/* Your content goes here */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}