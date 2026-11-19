import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    // Respect user's reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle particles
    const particleCount = Math.min(Math.floor(window.innerWidth / 25), 55);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const color = isDark ? '99, 102, 241' : '79, 70, 229'; // Indigo

      // Draw subtle connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * (isDark ? 0.12 : 0.08);
            ctx.strokeStyle = `rgba(${color}, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.alpha * (isDark ? 0.8 : 0.5)})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background glow orbs */}
      <div 
        className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[130px] opacity-25 pointer-events-none transition-colors duration-700 ${
          isDark ? 'bg-indigo-600' : 'bg-indigo-300'
        }`} 
      />
      <div 
        className={`absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full blur-[140px] opacity-20 pointer-events-none transition-colors duration-700 ${
          isDark ? 'bg-cyan-600' : 'bg-cyan-300'
        }`} 
      />
      <div 
        className={`absolute -bottom-40 left-1/4 w-[28rem] h-[28rem] rounded-full blur-[150px] opacity-15 pointer-events-none transition-colors duration-700 ${
          isDark ? 'bg-purple-700' : 'bg-purple-200'
        }`} 
      />

      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
};
