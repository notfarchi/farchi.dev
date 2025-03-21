"use client"
import { useState, useEffect } from "react"

export default function ImageDebug() {
  const [imageStatus, setImageStatus] = useState("Verificando...")
  const [imageUrl, setImageUrl] = useState("/personal-image.jpeg")

  useEffect(() => {
    // Verificar se a imagem está acessível
    const checkImage = async () => {
      try {
        const response = await fetch(imageUrl, { method: "HEAD" })
        if (response.ok) {
          setImageStatus(`Imagem encontrada! Status: ${response.status}`)
        } else {
          setImageStatus(`Imagem não encontrada. Status: ${response.status}`)
        }
      } catch (error) {
        setImageStatus(`Erro ao verificar imagem: ${error.message}`)
      }
    }

    checkImage()
  }, [imageUrl])

  const tryAlternativeImage = () => {
    // Tenta com extensão diferente
    if (imageUrl.endsWith(".jpeg")) {
      setImageUrl("/personal-image.jpg")
    } else if (imageUrl.endsWith(".jpg")) {
      setImageUrl("/personal-image.png")
    } else {
      setImageUrl("/personal-image.jpeg")
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "rgba(0,0,0,0.8)",
        padding: "15px",
        borderRadius: "10px",
        zIndex: 1000,
        maxWidth: "300px",
      }}
    >
      <h3>Depuração de Imagem</h3>
      <p>Status: {imageStatus}</p>
      <p>URL atual: {imageUrl}</p>
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={tryAlternativeImage}
          style={{
            padding: "5px 10px",
            background: "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Tentar outra extensão
        </button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <img
          src={imageUrl || "/placeholder.svg"}
          alt="Teste de imagem"
          style={{ maxWidth: "100%", maxHeight: "150px", display: "block", margin: "0 auto" }}
          onError={(e) => {
            e.currentTarget.style.display = "none"
            document.getElementById("error-msg")!.style.display = "block"
          }}
        />
        <p id="error-msg" style={{ display: "none", color: "red" }}>
          Falha ao carregar imagem
        </p>
      </div>
    </div>
  )
}