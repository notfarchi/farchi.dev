import styles from "./experience.module.css"

const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedor Freelancer",
      company: "HeadOffice.ai",
      location: "São Francisco, Califórnia, EUA",
      period: "Abril, 2025 | Presente",
      responsibilities: [
        "Desenvolvo pipelines de dados com Python para processar vídeos com análise visual e transcrição auditiva.",
        "Implemento bibliotecas de object tracking e integro APIs, automatizando extração de dados e geração de relatórios inteligentes.",
        "Contribuo para sistemas de IA escaláveis, focados em entregar insights acionáveis aos clientes a partir de dados multimodais (vídeo + áudio)."
      ],
    },
    {
      title: "Analista de Banco de Dados",
      company: "VR Software",
      location: "Cássia, MG",
      period: "Outubro, 2024 | Presente",
      responsibilities: [
        "Gerencio bancos de dados PostgreSQL em ambientes híbridos (on-premise e cloud), assegurando alta disponibilidade e performance.",
        "Implemento políticas de backup e recuperação, garantindo continuidade de processos críticos.",
        "Automatizo tarefas operacionais com Shell Script e BAT, otimizando o tempo da equipe de suporte.",
        "Conduzo atualizações de ERP com foco em mínimo downtime e estabilidade dos sistemas.",
        "Realizo instalação e manutenção de containers Docker e servidores Linux/Windows, promovendo escalabilidade das aplicações.",
        "Crio e ajusto queries SQL simples e avançadas para análise de dados, geração de relatórios e suporte à tomada de decisões gerenciais."
      ],
    },
    {
      title: "Estágio em Suporte Técnico",
      company: "VR Software",
      location: "Cássia, MG",
      period: "Abril, 2024 | Setembro, 2024",
      responsibilities: [
        "Realizei atendimento remoto e diagnóstico de incidentes, garantindo operação contínua do sistema em clientes do varejo.",
        "Executei comandos SQL para ajustes em produção, contribuindo com agilidade nas correções.",
        "Validei correções em ambiente real, apoiando o ciclo de qualidade da equipe de desenvolvimento."
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
        <h2 className="section-title">Experiência & Educação</h2>

        <div className={styles.timeline}>
          <div className={styles.timelineWork}>
            <h3 className={styles.timelineTitle}>Experiência Profissional</h3>
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
            <h3 className={styles.timelineTitle}>Educação</h3>
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