import styles from "./projects.module.css"

const Projects = () => {
  const projects = [
    {
      title: "GestaMED",
      description:
        "Sistema de gerenciamento de uma clínica médica. Implementado em Java, o sistema utiliza conceitos avançados de Programação Orientada à Objetos (POO) para permitir o cadastro de pacientes, médicos e medicamentos, e inclui uma funcionalidade de consultas em tempo real para interação entre pacientes e médicos.",
      technologies: ["Java", "Git", "GitHub", "POO"],
      link: "https://github.com/notfarchi/gestamed-main",
    },
    {
      title: "Fuel Compensator",
      description:
        "Interface que ajuda os usuários a determinarem qual combustível é mais vantajoso (álcool ou gasolina) com base nos preços fornecidos.",
      technologies: ["Java", "Spring Boot", "React", "API RESTful", "PostgreSQL", "Postman"],
      link: "https://github.com/notfarchi/Fuel-Compensator",
    },
    {
      title: "Petshop Finder",
      description:
        "Aplicação web que ajuda a encontrar o melhor petshop para o pet com base na data de serviço, quantidade de cães pequenos e grandes, e os preços praticados nos dias de semana e fins de semana.",
      technologies: ["React", "Node.js", "Express", "API RESTful", "Postman"],
      link: "https://github.com/notfarchi/petshop-finder",
    },
  ]

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-3d ${styles.projectBtn}`}
                >
                  Veja o projeto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects