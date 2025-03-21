"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Float, PerspectiveCamera } from "@react-three/drei"
import { useMobile } from "@/hooks/use-mobile"
import type * as THREE from "three"

function Button3D({
  position,
  text,
  color,
  hoverColor,
  onClick,
}: {
  position: [number, number, number]
  text: string
  color: string
  hoverColor: string
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003
      meshRef.current.rotation.y += 0.003
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
      >
        <mesh ref={meshRef} castShadow>
          <boxGeometry args={[1.5, 0.4, 0.1]} />
          <meshStandardMaterial color={hovered ? hoverColor : color} />
        </mesh>
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter_Bold.json"
        >
          {text}
        </Text>
      </group>
    </Float>
  )
}

function Scene() {
  const isMobile = useMobile()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />

      <Button3D
        position={[-1.8, 0, 0]}
        text="Projects"
        color="#6366f1"
        hoverColor="#8b5cf6"
        onClick={() => scrollToSection("projects")}
      />
      <Button3D
        position={[0, 0, 0]}
        text="Skills"
        color="#8b5cf6"
        hoverColor="#6366f1"
        onClick={() => scrollToSection("skills")}
      />
      <Button3D
        position={[1.8, 0, 0]}
        text="Contact"
        color="#3b82f6"
        hoverColor="#8b5cf6"
        onClick={() => scrollToSection("contact")}
      />
    </>
  )
}

export default function ThreeScene() {
  return (
    <Canvas shadows>
      <Scene />
    </Canvas>
  )
}