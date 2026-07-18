import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Background() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate static particle coordinates safely on the client to avoid server mismatches
    const generated = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * -20,
    }));
    setParticles(generated);
  }, []);

  return (
    <div id="app-background" className="fixed inset-0 -z-50 overflow-hidden bg-[#070912] transition-colors duration-1000">
      {/* Absolute base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#070912] via-[#090d22] to-[#0f1330]" />

      {/* Aurora Mesh Drifting Blobs */}
      <div className="absolute inset-0 opacity-45 filter blur-[80px] md:blur-[140px] pointer-events-none mix-blend-screen">
        {/* Violet Blob */}
        <motion.div
          animate={{
            x: [0, 80, -50, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[15%] w-[350px] h-[350px] rounded-full bg-[#8b6bff] opacity-50"
        />

        {/* Cyan Blob */}
        <motion.div
          animate={{
            x: [0, -70, 60, 0],
            y: [0, 80, -50, 0],
            scale: [1, 0.85, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#2fe0d8] opacity-40"
        />

        {/* Pink Blob */}
        <motion.div
          animate={{
            x: [0, 60, -80, 0],
            y: [0, 90, -40, 0],
            scale: [1, 1.1, 0.8, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[45%] right-[25%] w-[300px] h-[300px] rounded-full bg-[#ff5fa8] opacity-35"
        />

        {/* Amber Blob */}
        <motion.div
          animate={{
            x: [0, -40, 50, 0],
            y: [0, -80, 70, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[35%] left-[20%] w-[280px] h-[280px] rounded-full bg-[#ffc857] opacity-25"
        />
      </div>

      {/* Floating Particle Field */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Subtle overlay grid lines */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" 
      />
    </div>
  );
}
