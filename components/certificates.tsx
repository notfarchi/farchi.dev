import styles from "./certificates.module.css"

const Certificates = () => {
  const certificates = [
    {
      title: "Scrum: The Basics",
      issuer: "LinkedIn",
      date: "Mar, 2025",
      duration: "1h",
      skills: ["SCRUM"],
    },
    {
      title: "Java COMPLETO Programação Orientada à Objetos + Projetos",
      issuer: "Udemy",
      date: "Fev, 2025",
      duration: "54.5h",
      skills: ["Java", "Spring Boot", "Programação Orientada à Objetos (POO)", "UML", "MongoDB"],
    },
    {
      title: "Linux Administration Bootcamp: Go from Beginner to Advanced",
      issuer: "Udemy",
      date: "Fev, 2025",
      duration: "9.5h",
      skills: ["Linux", "DevOps", "Ubuntu"],
    },
    {
      title: "Métodos ágeis de A a Z : o curso completo",
      issuer: "Udemy",
      date: "Fev, 2025",
      duration: "9.5h",
      skills: [
        "SCRUM",
        "Kanban",
        "Lean",
        "Extreme Programming (XP)",
        "Design Sprint Google",
        "Spotify Squads",
        "SMART",
        "Trello",
        "Asana",
      ],
    },
    {
      title: "GitHub Foundations",
      issuer: "GitHub",
      date: "Dez, 2024",
      duration: "",
      skills: [
        "Git",
        "GitHub",
        "GitHub Actions",
        "DevOps",
        "Release Management",
        "Build Pipeline",
        "Continuous Integration",
        "Continuous Delivery",
      ],
    },
    {
      title: "SQL and PostgreSQL: The Complete Developer's Guide",
      issuer: "Udemy",
      date: "Nov, 2024",
      duration: "22h",
      skills: [
        "Advanced SQL",
        "PostgreSQL",
        "Data Modeling",
        "Query Optimization",
        "Data Manipulation",
        "Database Administration",
        "Database Normalization",
      ],
    },
    {
      title: "Introdução a Banco de dados",
      issuer: "Venturus",
      date: "Out, 2024",
      duration: "30h",
      skills: ["MySQL", "SQL", "SGBD", "NoSQL", "UML", "DML", "DCL"],
    },
    {
      title: "Java para Web",
      issuer: "Instituto de Pesquisas Eldorado",
      date: "Set, 2024",
      duration: "24h",
      skills: [
        "Java",
        "Algoritmos de Dados",
        "Programação Orientada à Objetos",
        "Maven",
        "Testes Unitários",
        "RESTful API",
        "Microsserviços",
        "Programação Web",
        "Spring",
        "Swagger",
        "HTTP com Fetch API",
        "PostgreSQL",
        "Git",
        "CRUD",
      ],
    },
    {
      title: "Fundamentos em Testes de Software",
      issuer: "Instituto de Pesquisas Eldorado",
      date: "Set, 2024",
      duration: "24h",
      skills: [
        "Teste de unidade",
        "integração",
        "sistemas",
        "aceitação",
        "regressão",
        "funcionais",
        "não funcionais",
        "caixa-preta",
        "caixa-branca",
      ],
    },
    {
      title: "Práticas de Cloud Services usando Swift com ênfase em Serviços Cognitivos",
      issuer: "Instituto de Pesquisas Eldorado",
      date: "Ago, 2023",
      duration: "100h",
      skills: ["SwiftUI", "Postman", "Git", "Node-RED", "IBM Cloud", "Xcode"],
    },
  ]

  return (
    <section id="certificates" className={styles.certificates}>
      <div className="container">
        <h2 className="section-title">Certificados</h2>
        <div className={styles.certificatesGrid}>
          {certificates.map((cert, index) => (
            <div key={index} className={styles.certificateCard}>
              <div className={styles.certificateHeader}>
                <h3 className={styles.certificateTitle}>{cert.title}</h3>
                <div className={styles.certificateMeta}>
                  <span className={styles.issuer}>{cert.issuer}</span>
                  <span className={styles.date}>{cert.date}</span>
                  {cert.duration && <span className={styles.duration}>{cert.duration}</span>}
                </div>
              </div>
              <div className={styles.skills}>
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates