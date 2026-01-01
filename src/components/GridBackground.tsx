'use client';

import { useEffect, useRef } from 'react';

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouseX = -100;
    let mouseY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    const gridSize = 20;
    let animationId: number;
    let offset = 0;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw base grid
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.1)';
      ctx.lineWidth = 1;

      for (let x = offset % gridSize; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = offset % gridSize; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw interactive pixels near mouse
      const gridMouseX = Math.floor(mouseX / gridSize) * gridSize;
      const gridMouseY = Math.floor(mouseY / gridSize) * gridSize;

      // Radius of effect (in grid cells)
      const radius = 4;

      for (let x = -radius; x <= radius; x++) {
        for (let y = -radius; y <= radius; y++) {
          if (Math.random() > 0.5) continue; // Randomness for glitchy feel

          const cellX = gridMouseX + (x * gridSize);
          const cellY = gridMouseY + (y * gridSize);
          
          // Calculate distance for opacity falloff
          const dist = Math.sqrt(x*x + y*y);
          if (dist > radius) continue;

          const opacity = (1 - dist / radius) * 0.15;
          
          ctx.fillStyle = `rgba(37, 99, 235, ${opacity})`; // secondary color
          ctx.fillRect(cellX, cellY, gridSize, gridSize);
        }
      }

      // Random ambient pixels
      // ctx.fillStyle = 'rgba(6, 182, 212, 0.1)'; // accent color
      // for (let i = 0; i < 3; i++) { // Reduced count
      //   const x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
      //   const y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
      //   ctx.fillRect(x, y, gridSize, gridSize);
      // }

      offset += 0.2; // Slightly faster
      animationId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-50"
      style={{ zIndex: 0 }}
    />
  );
}
