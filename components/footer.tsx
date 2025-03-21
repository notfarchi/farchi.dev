"use client"

import styles from "./footer.module.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <span className={styles.logo}>farchi.dev</span>
            <p className={styles.tagline}>Criando soluções inovadoras com paixão e precisão</p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linksColumn}>
              <h3>Navegação</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="#experience">Experiência</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
              </ul>
            </div>

            <div className={styles.linksColumn}>
              <h3>Mais</h3>
              <ul>
                <li>
                  <a href="#projects">Projetos</a>
                </li>
                <li>
                  <a href="#certificates">Certificados</a>
                </li>
              </ul>
            </div>

            <div className={styles.linksColumn}>
              <h3>Contatos</h3>
              <ul>
                <li>
                  <a href="https://github.com/notfarchi" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/joaovictorfarchi" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:jv.farchi@hotmail.com">Email</a>
                </li>
                <li>
                  <a href="https://linktr.ee/notfarchi" target="_blank" rel="noopener noreferrer">
                    Linktree
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; {currentYear} João Victor Silva Farchi. Todos os direitos reservados.</p>
          <button className={styles.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Volte pra cima ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer