
import { useEffect, useRef } from "react";

const VoidParticleBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0, isOnBackground: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      // Check if mouse is over an interactive element
      const elementUnderMouse = document.elementFromPoint(e.clientX, e.clientY);
      const isOverInteractiveElement = elementUnderMouse && (
        elementUnderMouse.tagName === 'A' ||
        elementUnderMouse.tagName === 'BUTTON' ||
        elementUnderMouse.closest('a') ||
        elementUnderMouse.closest('button') ||
        elementUnderMouse.closest('[role="button"]') ||
        getComputedStyle(elementUnderMouse).cursor === 'pointer'
      );
      
      mouseRef.current.isOnBackground = !isOverInteractiveElement;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Initialize void particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = 200;
      
      const colors = [
        'rgba(59, 130, 246, 0.8)', // Blue from buttons
        'rgba(96, 165, 250, 0.8)', // Light blue variation
        'rgba(37, 99, 235, 0.8)', // Darker blue
      ];
      
      for (let i = 0; i < particleCount; i++) {
        const initialVx = (Math.random() - 0.5) * 0.8;
        const initialVy = (Math.random() - 0.5) * 0.8;
        
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 900 + 100, // Random initial depth
          vx: initialVx,
          vy: initialVy,
          vz: Math.random() * 1.2 + 0.3,
          originalVx: initialVx,
          originalVy: initialVy,
          baseSize: 1.5, // Smaller particles (3px width)
          opacity: Math.random() * 0.6 + 0.2, // Random initial opacity
          maxOpacity: Math.random() * 0.6 + 0.4,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          fadeDirection: Math.random() > 0.5 ? 1 : -1, // Random initial fade direction
          fadeSpeed: Math.random() * 0.003 + 0.001,
          life: Math.random() * 1000,
        });
      }
    };

    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        // Mouse interaction - only when hovering over background
        if (mouseRef.current.isOnBackground) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const force = (150 - distance) / 150;
            const angle = Math.atan2(dy, dx);
            const repelForce = force * 2;
            
            particle.vx -= Math.cos(angle) * repelForce * 0.02;
            particle.vy -= Math.sin(angle) * repelForce * 0.02;
            
            // Limit velocity
            const maxVel = 2;
            particle.vx = Math.max(-maxVel, Math.min(maxVel, particle.vx));
            particle.vy = Math.max(-maxVel, Math.min(maxVel, particle.vy));
          }
        } else {
          // Gradually return to original movement when not hovering
          particle.vx += (particle.originalVx - particle.vx) * 0.02;
          particle.vy += (particle.originalVy - particle.vy) * 0.02;
        }
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;
        particle.pulse += particle.pulseSpeed;
        particle.life += 1;

        // Fade in/out animation
        particle.opacity += particle.fadeDirection * particle.fadeSpeed;
        
        if (particle.opacity >= particle.maxOpacity) {
          particle.fadeDirection = -1;
        } else if (particle.opacity <= 0) {
          particle.fadeDirection = 1;
          // Reset particle position when it fades out
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.z = Math.random() * 200 + 100;
          // Reset to original velocity
          particle.originalVx = (Math.random() - 0.5) * 0.8;
          particle.originalVy = (Math.random() - 0.5) * 0.8;
        }

        // Reset particles that go too far
        if (particle.z > 1000) {
          particle.z = 100;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.opacity = 0;
          particle.fadeDirection = 1;
        }

        // Wrap around screen edges
        if (particle.x < -20) particle.x = canvas.width + 20;
        if (particle.x > canvas.width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = canvas.height + 20;
        if (particle.y > canvas.height + 20) particle.y = -20;

        // Calculate size based on depth (closer = larger)
        const scale = 300 / particle.z;
        const size = particle.baseSize * scale;
        const glowSize = size * 3; // More glow
        
        // Current opacity with fade
        const currentOpacity = particle.opacity * scale;

        if (currentOpacity > 0.01) {
          // Draw enhanced outer glow
          const outerGradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, glowSize
          );
          outerGradient.addColorStop(0, particle.color.replace(/[\d.]+\)$/g, `${currentOpacity * 0.6})`));
          outerGradient.addColorStop(0.4, particle.color.replace(/[\d.]+\)$/g, `${currentOpacity * 0.3})`));
          outerGradient.addColorStop(1, particle.color.replace(/[\d.]+\)$/g, '0)'));

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
          ctx.fillStyle = outerGradient;
          ctx.fill();

          // Draw main particle - restored visibility
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color.replace(/[\d.]+\)$/g, `${currentOpacity})`);
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      {/* Deep void background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-950 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/50 to-slate-800/30"></div>
      
      {/* Additional subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/15 via-transparent to-slate-950/20"></div>
      
      {/* Particle canvas - moved to top */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10"
      />
    </div>
  );
};

export default VoidParticleBackground;