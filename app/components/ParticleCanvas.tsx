"use client";

import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const nodeCount = 30; // Fewer particles
    const nodes: Node[] = [];
    const connectionDistance = 150;

    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      pulse: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.15; // Slowed down
        this.vy = (Math.random() - 0.5) * 0.15; // Slowed down
        this.size = Math.random() * 1.5 + 0.5;
        this.color = Math.random() > 0.5 ? "0, 240, 255" : "139, 92, 246";
        this.pulse = Math.random() * Math.PI * 2;
      }

      update(w: number, h: number, mouse: any) {
        this.pulse += 0.02; // Slow pulse
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const glow = Math.sin(this.pulse) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${0.1 + glow * 0.2})`; // Lower opacity
        ctx.fill();

        // Very faint ring
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${this.color}, ${0.05 * (1 - glow)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    const drawGrid = (w: number, h: number) => {
      ctx.strokeStyle = "rgba(0, 240, 255, 0.05)"; // Slightly more visible grid
      ctx.lineWidth = 1;
      const step = 60;
      
      for (let x = 0; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
    };

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      nodes.length = 0;
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawGrid(canvas.width, canvas.height);

      nodes.forEach(node => {
        node.update(canvas.width, canvas.height, mouseRef.current);
        node.draw(ctx);
      });

      // Draw faint connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < connectionDistance) {
                const opacity = (1 - dist / connectionDistance) * 0.05;
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    init();
    animate();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full pointer-events-none"
    />
  );
}
