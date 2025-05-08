import styles from "./experience.module.css"

const Experience = () => {
  const experiences = [
    {
      title: "Software Freelancer",
      company: "HeadOffice.ai",
      location: "São Francisco, Califórnia, EUA",
      period: "Abril, 2025 | Presente",
      responsibilities: [
        "Prestando serviços sob demanda em um projeto focado no aprimoramento de Chatbot, utilizando Python, Object Tracking e APIs do Google Cloud.",
        "Integração de IA para gerar relatórios detalhados a partir da análise visual e auditiva de vídeos.",
        "Extração de insights valiosos para apoiar a tomada de decisões estratégicas dos clientes."
      ],
    },
    {
      title: "Analista de Banco de Dados",
      company: "VR Software",
      location: "Cássia, MG",
      period: "Outubro, 2024 | Presente",
      responsibilities: [
        "Gerenciamento e manutenção de bancos de dados PostgreSQL em ambientes locais e na nuvem (O3 Cloud, Plataforma SkyOne).",
        "Implementação de sistemas de backup e recuperação de dados, utilizando a Plataforma Datasafer.",
        "Instalação e manutenção de aplicações Docker, ajustes em redes e configurações de servidores Windows, Ubuntu e Rocky Linux.",
        "Atualização e manutenção do ERP, garantindo migração de dados com mínimo downtime.",
        "Criação de queries SQL avançadas para análise de dados e suporte a decisões empresariais."
      ],
    },
    {
      title: "Estágio em Suporte Técnico",
      company: "VR Software",
      location: "Cássia, MG",
      period: "Abril, 2024 | Setembro, 2024",
      responsibilities: [
        "Suporte técnico remoto, solucionando dúvidas e testando funcionalidades do sistema.",
        "Abertura e acompanhamento de chamados, garantindo a disponibilidade e eficiência do sistema.",
        "Utilização de SQL para ajustes em funções do software e otimização de processos.",
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