"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certificates from "@/components/certificates"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import ImageDebug from "@/components/image-debug"

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [pdfLoaded, setPdfLoaded] = useState<boolean>(false)
  const [showDebug, setShowDebug] = useState<boolean>(false)

  // Atualiza a seção ativa conforme o scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 300

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Verifica se o PDF está acessível
  useEffect(() => {
    const checkPdfExists = async () => {
      try {
        const response = await fetch("/resume.pdf", { method: "HEAD" })
        if (response.ok) {
          console.log("PDF encontrado e acessível!")
          setPdfLoaded(true)
        } else {
          console.error("PDF não encontrado. Status:", response.status)
        }
      } catch (error) {
        console.error("Erro ao verificar PDF:", error)
      }
    }

    checkPdfExists()
  }, [])

  // Pré-carrega o PDF (prefetch)
  useEffect(() => {
    const preloadResume = () => {
      const link = document.createElement("link")
      link.rel = "prefetch"
      link.href = "/resume.pdf"
      link.as = "document"
      document.head.appendChild(link)
    }

    preloadResume()
  }, [])

  // Ativa/desativa debug com Ctrl+Shift+D
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "D") {
        setShowDebug((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <main className="main-container">
      <ParticleBackground />
      <Navbar activeSection={activeSection} />
      <div className="content">
        <Hero />
        <About pdfLoaded={pdfLoaded} />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Footer />
      </div>
      {showDebug && <ImageDebug />}
    </main>
  )
}