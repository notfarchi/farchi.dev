"use client"

import { useEffect, useCallback } from "react"
import { tsParticles } from "@tsparticles/engine"
import { loadAll } from "@tsparticles/all"

export default function ParticlesBackground() {
  const initParticles = useCallback(async () => {
    await loadAll(tsParticles)

    tsParticles.load({
      id: "tsparticles",
      options: {
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: { value: "#000000" },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: ["#8b5cf6", "#6366f1", "#3b82f6"],
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: { enable: true },
            value: 80,
          },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      },
    })
  }, [])

  useEffect(() => {
    initParticles()
  }, [initParticles])

  return <div id="tsparticles" />
}