"use client"

import styles from "./about.module.css"
import { useState } from "react"

interface AboutProps {
  pdfLoaded?: boolean
}

const About = ({ pdfLoaded = false }: AboutProps) => {
  const [imageError, setImageError] = useState(false)

  const handleDownload = () => {
    console.log("Iniciando download do PDF (About)...")

    // Método 1: Usando window.open
    try {
      window.open("/resume.pdf", "_blank")
      console.log("Método 1 (window.open) executado")
    } catch (error) {
      console.error("Erro no método 1:", error)
    }

    // Método 2: Usando link programático
    try {
      const fileUrl = `${window.location.origin}/resume.pdf`
      console.log("URL do arquivo:", fileUrl)

      const link = document.createElement("a")
      link.href = fileUrl
      link.setAttribute("download", "Joao_Farchi_CV.pdf")
      link.setAttribute("target", "_blank")
      document.body.appendChild(link)

      link.click()

      setTimeout(() => {
        document.body.removeChild(link)
        console.log("Método 2 (link programático) executado")
      }, 100)
    } catch (error) {
      console.error("Erro no método 2:", error)
    }
  }

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={styles.image}>
              {!imageError ? (
                <img
                  src="/personal-image.jpeg"
                  alt="João Farchi"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    console.error("Erro ao carregar imagem")
                    setImageError(true)
                  }}
                />
              ) : (
                // Fallback para uma imagem de placeholder
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(30, 30, 30, 0.7)",
                    color: "white",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  <p>JF</p>
                </div>
              )}
            </div>
          </div>
          <div className={styles.info}>
            <p className={styles.bio}>
              Me chamo João Victor, apelidado também de Farchi, e apaixonado por desenvolvimento de softwares com experiência em soluçoes Backend,
              gerenciamento de Banco de Dados e Suporte Técnico.
              Atualmente cursando Bacharelado em Sistemas de Informação pela Pontifícia Universidade Católica de Minas Gerais.
            </p>
            <p className={styles.bio}>
              Minha jornada em tecnologia me fez adquirir diversas skills, incluindo Java, Spring Boot, PostgreSQL, API RESTfuls e outros frameworks.
              Dedicado a criar soluções eficientes e fáceis de usar e a expandir continuamente meu conhecimento no cenário tecnológico.
            </p>
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.label}>Nome:</span>
                <span className={styles.value}>João Victor Silva Farchi</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Email:</span>
                <span className={styles.value}>jv.farchi@hotmail.com</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Telefone:</span>
                <span className={styles.value}>(35) 9 9853-2121</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Location:</span>
                <span className={styles.value}>Cássia, MG, Brazil</span>
              </div>
            </div>
            <button onClick={handleDownload} className="btn-3d">
              Download Curriculum {!pdfLoaded && "(PDF Loading...)"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About