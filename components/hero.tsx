import styles from "./hero.module.css"

type HeroProps = {
  pdfLoaded?: boolean;
}

const Hero = ({ pdfLoaded }: HeroProps) => {
  // Se não for usar pdfLoaded ainda, pode ignorar abaixo
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.name}>João Victor Farchi</h1>
        <h2 className={styles.title}>Software Developer</h2>
        <p className={styles.description}>Criando soluções inovadoras com paixão e precisão</p>
        <div className={styles.buttonContainer}>
          <a href="mailto:jv.farchi@hotmail.com" className="btn-3d">
            Contate-me
          </a>
          <a href="#projects" className={`btn-3d ${styles.secondaryBtn}`}>
            Projetos
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero