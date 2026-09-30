import React, { useEffect, useRef, useState } from 'react';
import { OWNER_INFO } from '../data/portfolioData';

const ROTATING_TEXTS = [
  'Web and Apps Development',
  'SEO',
  'Digital Marketing',
  'Social Media Marketing',
  'AI Transformation Service',
  'E-Commerce Development',
  'Google Ads',
  'Meta Ads',
  'Video Editing & Motion',
  'Graphic Designing & Branding'
];

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Dynamic Typewriter Headline Effect
  const [textIndex, setTextIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === ROTATING_TEXTS[textIndex].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 30 : 65);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, textIndex]);

  // High-performance 3D Cyber Data Highway / Matrix Algorithm matching Entire Digital Solution
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight - 116);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Cyber particle nodes moving along 3D perspective rays
    const PARTICLE_COUNT = 90;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: (Math.random() - 0.5) * width * 2,
      y: (Math.random() - 0.5) * height * 2,
      z: Math.random() * 1000 + 50,
      sz: Math.random() * 2 + 1,
      speed: Math.random() * 5 + 3,
      hue: Math.random() > 0.4 ? 200 : 190, // Cyan & electric blue
      length: Math.random() * 20 + 10,
    }));

    // Perspective grid line rays radiating from vanishing point
    const RAY_COUNT = 32;
    const rays = Array.from({ length: RAY_COUNT }, (_, i) => {
      const angle = (i / RAY_COUNT) * Math.PI * 2;
      return { angle, speed: 0.0005 };
    });

    let mouseX = width / 2;
    let mouseY = height * 0.48;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    let offsetZ = 0;

    const render = () => {
      // Deep cyber blue-black space background
      ctx.fillStyle = '#020b1e';
      ctx.fillRect(0, 0, width, height);

      // Subtle radial dark gradient glow
      const radialGlow = ctx.createRadialGradient(
        width / 2, height * 0.45, 10,
        width / 2, height * 0.45, width * 0.75
      );
      radialGlow.addColorStop(0, 'rgba(10, 54, 115, 0.45)');
      radialGlow.addColorStop(0.5, 'rgba(3, 20, 54, 0.7)');
      radialGlow.addColorStop(1, 'rgba(2, 11, 30, 0.98)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      const vanishingX = width / 2 + (mouseX - width / 2) * 0.05;
      const vanishingY = height * 0.46 + (mouseY - height * 0.46) * 0.05;

      // Draw Perspective Grid Radiating Rays
      ctx.lineWidth = 1;
      rays.forEach((ray) => {
        const farDist = Math.max(width, height) * 1.5;
        const endX = vanishingX + Math.cos(ray.angle) * farDist;
        const endY = vanishingY + Math.sin(ray.angle) * farDist;

        const rayGrad = ctx.createLinearGradient(vanishingX, vanishingY, endX, endY);
        rayGrad.addColorStop(0, 'rgba(0, 163, 255, 0.7)');
        rayGrad.addColorStop(0.3, 'rgba(0, 112, 243, 0.35)');
        rayGrad.addColorStop(0.8, 'rgba(0, 70, 180, 0.15)');
        rayGrad.addColorStop(1, 'rgba(0, 30, 90, 0)');

        ctx.strokeStyle = rayGrad;
        ctx.beginPath();
        ctx.moveTo(vanishingX, vanishingY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      });

      // Draw Horizontal Grid Planes (3D Ground & Ceiling Grid Matrix)
      offsetZ = (offsetZ + 1.2) % 60;
      ctx.strokeStyle = 'rgba(0, 174, 255, 0.12)';
      ctx.lineWidth = 0.8;

      for (let z = 20; z < 700; z += 40) {
        const adjustedZ = z - offsetZ;
        if (adjustedZ <= 10) continue;
        const scale = 260 / adjustedZ;
        const yGround = vanishingY + (height * 0.35) * scale;
        const yCeiling = vanishingY - (height * 0.35) * scale;

        if (yGround < height + 50) {
          ctx.beginPath();
          ctx.moveTo(0, yGround);
          ctx.lineTo(width, yGround);
          ctx.stroke();
        }

        if (yCeiling > -50) {
          ctx.beginPath();
          ctx.moveTo(0, yCeiling);
          ctx.lineTo(width, yCeiling);
          ctx.stroke();
        }
      }

      // Draw 3D Light Beams & Data Particle Packets
      particles.forEach((p) => {
        p.z -= p.speed;
        if (p.z <= 20) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * width * 2;
          p.y = (Math.random() - 0.5) * height * 2;
        }

        const k = 280 / p.z;
        const px = vanishingX + p.x * k;
        const py = vanishingY + p.y * k;

        // Tail behind particle to create high-speed warp streak
        const kPrev = 280 / (p.z + p.length);
        const prevX = vanishingX + p.x * kPrev;
        const prevY = vanishingY + p.y * kPrev;

        if (px >= -50 && px <= width + 50 && py >= -50 && py <= height + 50) {
          const alpha = Math.min(1, (1000 - p.z) / 400);

          // Draw neon streak trail
          ctx.beginPath();
          const grad = ctx.createLinearGradient(prevX, prevY, px, py);
          grad.addColorStop(0, `hsla(${p.hue}, 100%, 70%, 0)`);
          grad.addColorStop(1, `hsla(${p.hue}, 100%, 75%, ${alpha * 0.85})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = Math.max(1, p.sz * k);
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(px, py);
          ctx.stroke();

          // Draw Glowing Lead Node
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.beginPath();
          ctx.arc(px, py, Math.max(1.2, p.sz * k * 0.8), 0, Math.PI * 2);
          ctx.fill();

          // Subtle digital square data box around some nodes
          if (p.hue === 190 && p.z < 450) {
            ctx.strokeStyle = `rgba(0, 220, 255, ${alpha * 0.4})`;
            ctx.lineWidth = 0.6;
            const boxSz = 8 * k;
            ctx.strokeRect(px - boxSz / 2, py - boxSz / 2, boxSz, boxSz);
          }
        }
      });

      // Bright Vanishing Point Flare
      const flareGrad = ctx.createRadialGradient(vanishingX, vanishingY, 0, vanishingX, vanishingY, 80);
      flareGrad.addColorStop(0, 'rgba(180, 235, 255, 0.95)');
      flareGrad.addColorStop(0.2, 'rgba(0, 160, 255, 0.6)');
      flareGrad.addColorStop(0.6, 'rgba(0, 110, 255, 0.2)');
      flareGrad.addColorStop(1, 'rgba(0, 50, 180, 0)');
      ctx.fillStyle = flareGrad;
      ctx.beginPath();
      ctx.arc(vanishingX, vanishingY, 80, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      id="hero-section" 
      className="relative w-full h-[calc(100vh-116px)] min-h-[480px] max-h-[820px] overflow-hidden bg-[#020b1e] flex items-center justify-center select-none"
    >
      {/* Underlying Cyber Matrix Image & Layer for Visual Depth */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-screen opacity-40 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80')`,
          filter: 'hue-rotate(185deg) saturate(1.8) contrast(1.2)'
        }}
      />

      {/* Interactive HTML5 Cyber Network / Data Highway Canvas Algorithm */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-auto z-[2] mix-blend-screen block"
      />

      {/* Vignette Overlay for Crisp Contrast & Optimal Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020b1e] via-transparent to-[#020b1e]/75 pointer-events-none z-[3]" />
      <div className="absolute inset-0 bg-[#020b1e]/30 pointer-events-none z-[3]" />

      {/* Centered Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-auto">
        {/* Main Headline */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-white tracking-normal leading-[1.1] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
          style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
        >
          Stop Guessing. Start Growing.
        </h1>

        {/* Dynamic Typewriter Subtitle */}
        <div 
          className="text-base sm:text-xl md:text-2xl lg:text-[28px] font-normal sm:font-medium text-white/95 mt-5 sm:mt-7 tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] flex flex-wrap items-center justify-center gap-1.5 sm:gap-2"
        >
          <span>Digital Marketing That Delivers Real ROI,</span>
          <span className="text-[#38bdf8] font-bold">
            {ROTATING_TEXTS[textIndex].substring(0, subIndex)}
          </span>
          <span 
            className={`inline-block font-normal text-[#38bdf8] ml-0.5 transition-opacity ${blink ? 'opacity-100' : 'opacity-0'}`}
          >
            |
          </span>
        </div>
      </div>
    </section>
  );
};

