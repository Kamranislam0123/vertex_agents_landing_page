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
    let nodes: Node[] = [];
    let streams: Stream[] = [];
    const nodeCount = 100;
    const connectionDistance = 150;
    const mouseRadius = 200;

    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseX: number;
      baseY: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update(width: number, height: number, mouse: { x: number, y: number, active: boolean }) {
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRadius) {
            const force = (mouseRadius - distance) / mouseRadius;
            const angle = Math.atan2(dy, dx);
            this.vx -= Math.cos(angle) * force * 0.2;
            this.vy -= Math.sin(angle) * force * 0.2;
          }
        }

        this.x += this.vx;
        this.y += this.vy;

        // Friction
        this.vx *= 0.99;
        this.vy *= 0.99;

        // Drift back to base or bound
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 240, 255, 0.4)";
        ctx.fill();
        
        if (Math.random() > 0.995) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = "#00f0ff";
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    class Stream {
      x: number;
      y: number;
      speed: number;
      length: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = -200;
        this.speed = Math.random() * 10 + 5;
        this.length = Math.random() * 200 + 100;
      }

      update(width: number, height: number) {
        this.y += this.speed;
        if (this.y > height) {
          this.y = -this.length;
          this.x = Math.random() * width;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createLinearGradient(0, this.y, 0, this.y + this.length);
        gradient.addColorStop(0, "rgba(0, 240, 255, 0)");
        gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.1)");
        gradient.addColorStop(1, "rgba(0, 240, 255, 0)");
        
        ctx.fillStyle = gradient;
        ctx.fillRect(this.x, this.y, 1, this.length);
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      nodes = [];
      streams = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node(canvas.width, canvas.height));
      }
      for (let i = 0; i < 5; i++) {
        streams.push(new Stream(canvas.width, canvas.height));
      }
    };

    const drawLine = (n1: Node, n2: Node) => {
      const dx = n1.x - n2.x;
      const dy = n1.y - n2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < connectionDistance) {
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        
        let opacity = (1 - distance / connectionDistance) * 0.15;
        
        // Mouse proximity brightening
        if (mouseRef.current.active) {
          const mdx1 = mouseRef.current.x - n1.x;
          const mdy1 = mouseRef.current.y - n1.y;
          const mdist1 = Math.sqrt(mdx1 * mdx1 + mdy1 * mdy1);
          
          if (mdist1 < mouseRadius) {
            opacity *= 2.5;
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
          } else {
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
          }
        } else {
          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
        }

        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      streams.forEach(stream => {
        stream.update(canvas.width, canvas.height);
        stream.draw(ctx);
      });

      nodes.forEach((node) => {
        node.update(canvas.width, canvas.height, mouseRef.current);
        node.draw(ctx);
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          drawLine(nodes[i], nodes[j]);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
      className="fixed inset-0 -z-20 h-full w-full bg-[#03030a]"
    />
  );
}
