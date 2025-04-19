import styles from "./experience.module.css"

const Experience = () => {
  const experiences = [
    {
      title: "Software Freelancer",
      company: "HeadOffice.ai",
      location: "São Francisco, Califórnia, EUA",
      period: "Abril, 2025 | Presente",
      responsibilities: [
        "Prestação de serviços sob demanda.",
      ],
    },
    {
      title: "Analista de Banco de Dados",
      company: "VR Software",
      location: "Cássia, MG",
      period: "Outubro, 2024 | Presente",
      responsibilities: [
        "Criação de querys que satisfaçam as necessidades dos clientes.",
        "Gerenciamento e execução de tarefas de manutenção no Banco de Dados PostgreSQL, resolvendo questões de tráfego e lentidão.",
        "Instalação e atualização da versão do Sistema VR no Servidor de Aplicativos dos clientes.",
        "Configuração e ajuste de Redes.",
      ],
    },
    {
      title: "Estágio em Suporte Técnico",
      company: "VR Software",
      location: "Cássia, MG",
      period: "Abril, 2024 | Setembro, 2024",
      responsibilities: [
        "Ofereço suporte técnico remotamente aos clientes, respondendo dúvidas, testando funcionalidades e abrindo chamados.",
        "Garantir satisfação do cliente através da funcionabilidade do sistema.",
        "Utilizo comandos SQL para encontrar determinadas funções do sistema.",
      ],
    },
  ]

  const education = [
    {
      institution: "Pontifícia Universidade Católica de Minas Gerais",
      degree: "Bacharelado em Sistemas de Informação",
      period: "Fevereiro, 2024 | Presente",
      location: "EAD",
    },
    {
      institution: "Universidade Federal de Uberlândia",
      degree: "Bacharelado em Sistemas de Informação",
      period: "Setembro, 2022 | Janeiro, 2024",
      location: "Uberlândia, MG",
    },
  ]

  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>

        <div className={styles.timeline}>
          <div className={styles.timelineWork}>
            <h3 className={styles.timelineTitle}>Work Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <span className={styles.date}>{exp.period}</span>
                  <h4 className={styles.position}>{exp.title}</h4>
                  <h5 className={styles.company}>
                    {exp.company} | {exp.location}
                  </h5>
                  <ul className={styles.responsibilities}>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.timelineEducation}>
            <h3 className={styles.timelineTitle}>Education</h3>
            {education.map((edu, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <span className={styles.date}>{edu.period}</span>
                  <h4 className={styles.degree}>{edu.degree}</h4>
                  <h5 className={styles.institution}>{edu.institution}</h5>
                  <p className={styles.location}>{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience