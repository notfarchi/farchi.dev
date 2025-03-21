"use client"
import { useEffect, useRef } from "react"
import type React from "react"

import styles from "./particle-background.module.css"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create particles
    const createParticles = () => {
      particlesRef.current = []
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 10000)

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 3 + 1
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.5})`,
        })
      }
    }

    createParticles()

    // Mouse move event
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }

        // Draw particle
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Connect particles
        connectParticles(particle, index)
      })

      requestAnimationFrame(animate)
    }

    // Connect particles with lines
    const connectParticles = (particle: Particle, index: number) => {
      for (let i = index + 1; i < particlesRef.current.length; i++) {
        const dx = particle.x - particlesRef.current[i].x
        const dy = particle.y - particlesRef.current[i].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 120) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(150, 150, 255, ${1 - distance / 120})`
          ctx.lineWidth = 0.5
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(particlesRef.current[i].x, particlesRef.current[i].y)
          ctx.stroke()
        }
      }

      // Connect to mouse
      const dx = particle.x - mouseRef.current.x
      const dy = particle.y - mouseRef.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 150) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(200, 100, 255, ${1 - distance / 150})`
        ctx.lineWidth = 0.8
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
        ctx.stroke()

        // Add slight attraction to mouse
        particle.x += dx > 0 ? -0.2 : 0.2
        particle.y += dy > 0 ? -0.2 : 0.2
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.particleCanvas} />
}

export default ParticleBackground